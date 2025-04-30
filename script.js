// script.js - Handles Auth0, Multi-Language Flow (Age -> Info -> Lang -> Instr -> Test -> Result)
// Uses separate JS files for language content (Instructions, Questions, Plans, Results UI)

document.addEventListener('DOMContentLoaded', () => {
    console.log("App starting: Multi-Language Flow with Auth0");

    // -------- Auth0 Configuration --------
    const AUTH0_DOMAIN = 'dev-porju76gtxgri6qz.us.auth0.com'; // From AuthO/script.js
    const AUTH0_CLIENT_ID = 'feHX8RCWfs23HFS5CP8IzjjDOeysOSwu'; // From AuthO/script.js
    const AUTH0_REDIRECT_URI = window.location.origin + window.location.pathname;
    const AUTH0_LOGOUT_REDIRECT_URI = AUTH0_REDIRECT_URI;
    // Note: Branding scope/namespace might not be used if admin panel isn't implemented here
    // const AUTH0_AUDIENCE = `https://${AUTH0_DOMAIN}/api/v2/`;
    // const AUTH0_SCOPE = 'openid profile email read:branding';
    // const BRANDING_NAMESPACE = 'https://preschool.psychometricaproplus.com/';

    let auth0Client = null;
    let auth0User = null;
    // let clientBranding = {}; // Keep if branding footer is desired

    // -------- State Variables --------
    let currentFlowStep = 'login'; // age, info, language, instructions, test, results
    let selectedAgeGroup = '';
    let selectedLanguage = 'English'; // Default language
    let parentChildData = {}; // To store data from info step
    let currentQuestionIndex = 0;
    let userAnswers = {}; // Stores answers { questionIndex: answerValue }
    const TOTAL_QUESTIONS = 36; // Based on AuthO - Copy files

    // Language Content Holders
    let currentInstructions = window.instructionsEnglish; //
    let currentQuestions = window.questionsMarathi; // Defaulting to English content
    let currentPlanPool = window.planEnglish; //
    let currentResultsConfig = window.resultsEnglish; //

    // -------- UI Element References --------
    const loadingEl = document.getElementById('loading-message');
    const containerEl = document.querySelector('.container');
    const loginSection = document.getElementById('login-section');
    const loginBtn = document.getElementById('login-btn');
    const welcomeSection = document.getElementById('welcome-section');
    const ageGroupSection = document.getElementById('age-group-selection');
    const ageSelect = document.getElementById('age-group');
    const ageNextBtn = document.getElementById('age-group-next-btn');
    const logoutBtnAge = document.getElementById('logout-btn-age');
    const infoSection = document.getElementById('info-section');
    const infoTitle = document.getElementById('info-title');
    const infoStepEl = document.getElementById('info-step');
    const infoBackBtn = document.getElementById('info-back-btn');
    const infoNextBtn = document.getElementById('info-next-btn');
    const langSection = document.getElementById('language-selection');
    const langEnBtn = document.getElementById('lang-en-btn');
    const langMrBtn = document.getElementById('lang-mr-btn');
    const langHiBtn = document.getElementById('lang-hi-btn');
    const langBackBtn = document.getElementById('lang-back-btn');
    const instrSection = document.getElementById('instructions-section');
    const instrTitle = document.getElementById('instructions-title');
    const instrContent = document.getElementById('instructions-content');
    const instrBackBtn = document.getElementById('instr-back-btn');
    const instrStartBtn = document.getElementById('instr-start-btn');
    const testSection = document.getElementById('test-section');
    const testTitle = document.getElementById('test-title');
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    const questionsEl = document.getElementById('questions');
    const backBtn = document.getElementById('back-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    const resultsSection = document.getElementById('results-section');
    const resultsTitle = document.getElementById('results-title');
    const resultDetailsDisplay = document.getElementById('result-details-display');
    const resultContent = document.getElementById('result-content');
    const contactMessageText = document.getElementById('contact-message-text');
    const resultsWhatsappBtn = document.getElementById('results-whatsapp-btn');
    const resultsEmailBtn = document.getElementById('results-email-btn');
    const resultsCopyBtn = document.getElementById('results-copy-btn');
    const resultsRetakeBtn = document.getElementById('results-retake-btn');
    const logoutBtnResults = document.getElementById('logout-btn-results');

    // Parent/Child Info Fields Configuration (Multi-lingual labels)
    const infoFieldsConfig = [
        { id: 'child-name', label: { English: "Child's Name", Marathi: 'मुलाचे नाव', Hindi: 'बच्चे का नाम' }, type: 'text', required: true },
        { id: 'parent-name', label: { English: "Parent's Name", Marathi: 'पालकांचे नाव', Hindi: 'माता-पिता का नाम' }, type: 'text', required: true },
        { id: 'mobile', label: { English: 'Mobile (Parent)', Marathi: 'मोबाइल (पालक)', Hindi: 'मोबाइल (अभिभावक)' }, type: 'tel', pattern: "\\d{10}", required: true, maxLength: 10 },
        { id: 'email', label: { English: 'Email (Parent)', Marathi: 'ईमेल (पालक)', Hindi: 'ईमेल (अभिभावक)' }, type: 'email', required: false }
        // Age group is captured separately
    ];
    let currentInfoStepIndex = 0;


    // -------- Utility Functions --------

    function showAlert(type, message, duration = 5000) {
        console.log(`ALERT (${type}): ${message}`);
        const existingAlert = document.querySelector('.alert-dynamic');
        if (existingAlert) existingAlert.remove();

        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} alert-dynamic`; // Use styles.css classes
        alertDiv.setAttribute('role', 'alert');
        let iconClass = 'fa-info-circle'; // Default icon
        if (type === 'success') iconClass = 'fa-check-circle';
        if (type === 'error') iconClass = 'fa-times-circle';
        if (type === 'warning') iconClass = 'fa-exclamation-triangle';

        alertDiv.innerHTML = `<i class="fas ${iconClass}"></i> ${message}`;

        // Prepend to container or body
        if (containerEl) {
             // Insert after header if possible
             const header = containerEl.querySelector('header');
             if(header) {
                 header.insertAdjacentElement('afterend', alertDiv);
             } else {
                 containerEl.insertBefore(alertDiv, containerEl.firstChild);
             }
        } else {
            document.body.insertBefore(alertDiv, document.body.firstChild);
        }


        setTimeout(() => {
            alertDiv.style.opacity = '0';
            setTimeout(() => alertDiv.remove(), 500); // Remove after fade out
        }, duration);
    }

    function showFlowSection(sectionId) {
        console.log(`Navigating to section: ${sectionId}`);
        currentFlowStep = sectionId.replace('-section', ''); // Update flow state
        if (containerEl && containerEl.style.display === 'none') {
            containerEl.style.display = 'block';
        }
        if (loadingEl) loadingEl.style.display = 'none';

        // Hide all flow sections
        ageGroupSection.classList.add('hidden');
        infoSection.classList.add('hidden');
        langSection.classList.add('hidden');
        instrSection.classList.add('hidden');
        testSection.classList.add('hidden');
        resultsSection.classList.add('hidden');
        loginSection.classList.add('hidden');
        welcomeSection.classList.add('hidden');

        // Show the target section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.remove('hidden');
            // Handle welcome animation if applicable
            if (sectionId === 'welcome-section') {
                targetSection.classList.remove('welcome-fade-out');
                targetSection.classList.add('welcome-fade-in');
            }
        } else {
            console.error(`Section with ID ${sectionId} not found!`);
            loginSection.classList.remove('hidden'); // Fallback to login
        }
    }

    function updateBrandingFooter() {
        // Simple branding footer example - adapt if using Auth0 branding
        let footer = document.querySelector('.branding-footer');
        if (!footer) {
            footer = document.createElement('footer');
            footer.className = 'branding-footer';
            containerEl?.appendChild(footer);
        }
        // Use default text or pull from clientBranding if available
        // const name = clientBranding?.name || 'Psychometria ProPlus';
        // const address = clientBranding?.address || 'Pimpri-Chinchwad, MH';
        // const phone = clientBranding?.phone || 'Contact Support';
        const name = 'Psychometria ProPlus'; // Default
        const address = 'Nagpur, MH'; // Default
        const phone = 'Contact Support'; // Default
        footer.innerHTML = `<p><span><i class="fas fa-building"></i> ${name}</span> | <span><i class="fas fa-map-marker-alt"></i> ${address}</span> | <span><i class="fas fa-phone"></i> ${phone}</span></p>`;
    }

     function showWelcomeMessage(userName) {
        if (welcomeSection) {
             welcomeSection.innerHTML = `<h2>Welcome, ${userName}!</h2><p><i class="fas fa-spinner fa-spin"></i> Preparing your assessment...</p>`;
             welcomeSection.classList.remove('welcome-fade-out', 'hidden');
             welcomeSection.classList.add('welcome-fade-in');
             // Transition away from welcome after a short delay
             setTimeout(() => {
                 welcomeSection.classList.remove('welcome-fade-in');
                 welcomeSection.classList.add('welcome-fade-out');
                 setTimeout(() => {
                      // Start the actual flow
                      resetSurveyState(); // Ensure clean state
                      showFlowSection('age-group-selection');
                 }, 500); // Wait for fade out
             }, 2000); // Show welcome for 2 seconds
        } else {
            // If welcome section doesn't exist, just start the flow
             resetSurveyState();
             showFlowSection('age-group-selection');
        }
    }

    function resetSurveyState() {
        console.log("Resetting survey state.");
        selectedAgeGroup = '';
        selectedLanguage = 'English'; // Reset to default
        parentChildData = {};
        currentInfoStepIndex = 0;
        currentQuestionIndex = 0;
        userAnswers = {};
        if (ageSelect) ageSelect.value = '';
        // Reset language-specific content to default (English)
        currentInstructions = window.instructionsEnglish; //
        currentQuestions = window.questionsMarathi; // English questions
        currentPlanPool = window.planEnglish; //
        currentResultsConfig = window.resultsEnglish; //
        updateProgress(0); // Reset progress bar
    }

    // -------- Auth0 Functions --------

    async function configureAuth0Client() {
        try {
            console.log("Configuring Auth0 client...");
            auth0Client = await auth0.createAuth0Client({
                domain: AUTH0_DOMAIN,
                clientId: AUTH0_CLIENT_ID,
                authorizationParams: { redirect_uri: AUTH0_REDIRECT_URI }, // Simplified scope
                cacheLocation: 'localstorage'
            });
            console.log("Auth0 client configured.");
        } catch (err) {
            console.error("Error configuring Auth0 client:", err);
            loadingEl.innerHTML = `<p style="color: red;">Error initializing authentication. Please refresh.</p>`;
            containerEl.style.display = 'none';
            loadingEl.style.display = 'flex';
            throw err; // Stop further execution
        }
    }

    async function handleAuthLogin() {
        if (!auth0Client) {
            console.error("Auth0 client not ready for login.");
            showAlert('error', 'Authentication service not ready. Please wait or refresh.');
            return;
        }
        try {
            console.log("Redirecting to Auth0 for login...");
            loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Redirecting...';
            loginBtn.disabled = true;
            await auth0Client.loginWithRedirect();
            // Browser redirects here
        } catch (err) {
            console.error("Auth0 login error:", err);
            showAlert('error', `Login failed: ${err.message || 'Unknown error'}`);
            loginBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Login / Sign Up';
            loginBtn.disabled = false;
        }
    }

    function handleAuthLogout() {
        if (!auth0Client) {
            console.error("Auth0 client not ready for logout."); return;
        }
        console.log("Logging out...");
        // Optional: Clear local data on logout? Add confirmation if needed.
        // localStorage.removeItem('some_key');
        try {
            auth0Client.logout({
                logoutParams: { returnTo: AUTH0_LOGOUT_REDIRECT_URI }
            });
        } catch (err) {
             console.error("Auth0 logout error:", err);
             showAlert('error', `Logout failed: ${err.message || 'Unknown error'}`);
        }
    }

    async function checkAuthStatus() {
        let isAuthenticated = false;
        try {
            isAuthenticated = await auth0Client.isAuthenticated();
            console.log("User Authenticated:", isAuthenticated);

            if (isAuthenticated) {
                auth0User = await auth0Client.getUser();
                console.log("Logged in User:", auth0User);
                // clientBranding = auth0User[BRANDING_NAMESPACE] || {}; // Uncomment if using branding
                updateBrandingFooter();
                containerEl.style.display = 'block';
                loadingEl.style.display = 'none';
                // Decide where to start the flow if logged in
                 // Check if resuming an incomplete flow? For now, always start fresh.
                 showWelcomeMessage(auth0User?.name || auth0User?.nickname || auth0User?.email || 'User');
            } else {
                console.log("User not authenticated. Showing login.");
                containerEl.style.display = 'block'; // Show container for login button
                loadingEl.style.display = 'none';
                showFlowSection('login-section');
            }
        } catch (err) {
            console.error("Error checking authentication status:", err);
            // Show login as fallback
            containerEl.style.display = 'block';
            loadingEl.style.display = 'none';
            showFlowSection('login-section');
        }
    }

    async function handleAuthRedirectCallback() {
        console.log("Handling Auth0 redirect callback...");
        try {
            const result = await auth0Client.handleRedirectCallback();
            console.log("Auth0 callback result:", result);
            // Remove query params from URL
            window.history.replaceState({}, document.title, window.location.pathname);
            return true; // Indicate successful callback handling
        } catch (err) {
            console.error("Error handling Auth0 redirect callback:", err);
            showAlert('error', `Login callback failed: ${err.message}. Please try logging in again.`);
            return false; // Indicate failure
        }
    }

    // -------- Parent/Child Info Stepper Functions --------

    function renderInfoStep() {
        if (currentInfoStepIndex < 0 || currentInfoStepIndex >= infoFieldsConfig.length) {
            console.error("Invalid info step index:", currentInfoStepIndex);
            return; // Should not happen
        }

        const fieldConfig = infoFieldsConfig[currentInfoStepIndex];
        const langLabel = fieldConfig.label[selectedLanguage] || fieldConfig.label['English']; // Fallback to English label
        const isLastStep = currentInfoStepIndex === infoFieldsConfig.length - 1;

        infoTitle.textContent = `Information Step ${currentInfoStepIndex + 1} of ${infoFieldsConfig.length}`;

        // Build form group HTML
        let inputHtml = `<div class="form-group">
            <label for="${fieldConfig.id}">${langLabel}${fieldConfig.required ? '<span style="color:red;">*</span>' : ''}</label>
            <input type="${fieldConfig.type}" id="${fieldConfig.id}" class="form-control"
                   placeholder="Enter ${langLabel}"
                   ${fieldConfig.required ? 'required' : ''}
                   ${fieldConfig.pattern ? `pattern="${fieldConfig.pattern}"` : ''}
                   ${fieldConfig.maxLength ? `maxlength="${fieldConfig.maxLength}"` : ''}
                   value="${parentChildData[fieldConfig.id] || ''}"
                   aria-label="${langLabel}">`;

        // Add hints if needed
        if (fieldConfig.pattern === "\\d{10}") {
            inputHtml += `<small style="display: block; color: var(--clr-text-secondary); font-size: var(--fs-sm); margin-top: var(--space-xs);">(10 digits required)</small>`;
        }
         if (fieldConfig.type === 'email' && !fieldConfig.required) {
             inputHtml += `<small style="display: block; color: var(--clr-text-secondary); font-size: var(--fs-sm); margin-top: var(--space-xs);">(Optional)</small>`;
         }

         inputHtml += `</div>`;
         infoStepEl.innerHTML = inputHtml;


        // Update button visibility/text
        infoBackBtn.disabled = currentInfoStepIndex === 0;
        infoNextBtn.innerHTML = isLastStep
            ? '<i class="fas fa-arrow-right"></i> Proceed'
            : '<i class="fas fa-arrow-right"></i> Next';

        // Focus the input field
         const inputElement = document.getElementById(fieldConfig.id);
         if (inputElement) {
             inputElement.focus();
             // Add Enter key listener
             inputElement.onkeypress = (e) => {
                 if (e.key === 'Enter') {
                     e.preventDefault();
                     handleInfoNext();
                 }
             };
         }
    }

    function handleInfoBack() {
        if (currentInfoStepIndex > 0) {
            currentInfoStepIndex--;
            renderInfoStep();
        } else {
            // Go back to Age Group selection
            showFlowSection('age-group-selection');
        }
    }

    function handleInfoNext() {
        const fieldConfig = infoFieldsConfig[currentInfoStepIndex];
        const inputElement = document.getElementById(fieldConfig.id);
        const value = inputElement ? inputElement.value.trim() : '';

        // Validation
        if (fieldConfig.required && !value) {
            showAlert('warning', `Please enter ${fieldConfig.label[selectedLanguage] || fieldConfig.label['English']}.`);
            inputElement?.focus();
            return;
        }
        if (fieldConfig.pattern) {
            const regex = new RegExp(`^${fieldConfig.pattern}$`);
            if (value && !regex.test(value)) {
                showAlert('warning', `Invalid format for ${fieldConfig.label[selectedLanguage] || fieldConfig.label['English']}.`);
                 inputElement?.focus();
                return;
            }
        }
         if (fieldConfig.type === 'email' && value && !/\S+@\S+\.\S+/.test(value)) {
             showAlert('warning', 'Invalid email format.');
             inputElement?.focus();
             return;
         }

        // Store data
        parentChildData[fieldConfig.id] = value;
        console.log(`Stored info: ${fieldConfig.id} = ${value}`);

        // Move to next step or next flow section
        currentInfoStepIndex++;
        if (currentInfoStepIndex < infoFieldsConfig.length) {
            renderInfoStep();
        } else {
            console.log("Info collection complete:", parentChildData);
            // Add age group to the data
            parentChildData['ageGroup'] = selectedAgeGroup;
             // Persist collected data (optional, consider privacy)
             // saveInfo(); // You might want a more robust way to handle this
            showFlowSection('language-selection');
        }
    }

    // -------- Language Selection Logic --------
function setLanguage(languageName) {
    console.log(`Setting language to: ${languageName}`);
    // ... (keep the existing switch statement here) ...

    // Add these lines for debugging:
    console.log('--- Debugging Language Content ---');
    console.log('Expected Instructions:', 'window.instructions' + languageName, !!window['instructions' + languageName]);
    // Correctly handle the question file name swap for EN/MR
    let expectedQuestionsVar = 'window.questions' + languageName;
    if (languageName === 'English') expectedQuestionsVar = 'window.questionsMarathi';
    else if (languageName === 'Marathi') expectedQuestionsVar = 'window.questionsEnglish';
    console.log('Expected Questions:', expectedQuestionsVar, !!window[expectedQuestionsVar.replace('window.','')]);

    console.log('Expected Plan Pool:', 'window.plan' + languageName, !!window['plan' + languageName]);
    console.log('Expected Results Config:', 'window.results' + languageName, !!window['results' + languageName]);
    console.log('--- End Debugging ---');

    // The existing check:
    if (!currentInstructions || !currentQuestions || !currentPlanPool || !currentResultsConfig) {
        showAlert('error', `Content for ${languageName} could not be loaded. Please check the language files.`);
        setLanguage('English'); // Revert to English as a fallback
        return;
    }

    // ... (rest of the function) ...
}

        // Proceed to Instructions
        instrTitle.textContent = selectedLanguage === 'Marathi' ? 'सूचना' : (selectedLanguage === 'Hindi' ? 'निर्देश' : 'Instructions');
        instrContent.innerHTML = currentInstructions || '<p>Instructions not available.</p>';
        showFlowSection('instructions-section');
    }

    // -------- Survey Functions --------

    function updateProgress(current) {
        const percentage = TOTAL_QUESTIONS > 0 ? (current / TOTAL_QUESTIONS) * 100 : 0;
        progressFill.style.width = `${percentage}%`;
        progressText.textContent = `Question ${current} of ${TOTAL_QUESTIONS}`; // Simple progress text
        // Update buttons based on index
        backBtn.disabled = current === 0;
        nextBtn.classList.toggle('hidden', current === TOTAL_QUESTIONS - 1);
        submitBtn.classList.toggle('hidden', current !== TOTAL_QUESTIONS - 1);
    }

    function renderQuestion() {
        if (currentQuestionIndex < 0 || currentQuestionIndex >= currentQuestions.length) {
            console.error("Invalid question index:", currentQuestionIndex);
            // Handle end of survey or error
            return;
        }

        const questionData = currentQuestions[currentQuestionIndex];
        testTitle.textContent = selectedLanguage === 'Marathi' ? `प्रश्न ${currentQuestionIndex + 1}` : (selectedLanguage === 'Hindi' ? `प्रश्न ${currentQuestionIndex + 1}` : `Question ${currentQuestionIndex + 1}`);

        let optionsHtml = `<p class="question-text">${questionData.text}</p><div class="options">`;
        questionData.options.forEach((option, index) => {
            const optionId = `q${currentQuestionIndex}_opt${index}`;
            // Check if this option was previously selected
            const isChecked = userAnswers[currentQuestionIndex] === option;
            optionsHtml += `
                <label for="${optionId}" class="option-label">
                    <input type="radio" id="${optionId}" name="question${currentQuestionIndex}" value="${option}" ${isChecked ? 'checked' : ''}>
                    <span>${option}</span>
                </label>`;
        });
        optionsHtml += `</div>`;

        questionsEl.innerHTML = `<div class="question" data-qindex="${currentQuestionIndex}">${optionsHtml}</div>`;

        // Add event listeners to new radio buttons
        questionsEl.querySelectorAll(`input[type="radio"]`).forEach(radio => {
            radio.addEventListener('change', handleAnswerSelection);
        });

        updateProgress(currentQuestionIndex);
    }

    function handleAnswerSelection(event) {
         if (event.target.checked) {
             const selectedValue = event.target.value;
             userAnswers[currentQuestionIndex] = selectedValue;
             console.log(`Q${currentQuestionIndex + 1} Answered: ${selectedValue}`);
             // Optional: Automatically move to next question after selection
             // setTimeout(handleNextQuestion, 300); // Short delay
         }
    }

    function handlePreviousQuestion() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            renderQuestion();
        }
    }

    function handleNextQuestion() {
        // Check if current question has been answered
        if (userAnswers[currentQuestionIndex] === undefined || userAnswers[currentQuestionIndex] === null) {
             showAlert('warning', 'Please select an answer before proceeding.');
             // Highlight the question options
             const currentQuestionElement = questionsEl.querySelector(`.question[data-qindex="${currentQuestionIndex}"]`);
             if (currentQuestionElement) {
                 currentQuestionElement.style.outline = '2px solid var(--clr-danger)';
                 setTimeout(() => {
                     currentQuestionElement.style.outline = 'none';
                 }, 1500);
             }
             return; // Stop moving next
        }

        if (currentQuestionIndex < TOTAL_QUESTIONS - 1) {
            currentQuestionIndex++;
            renderQuestion();
        }
        // If it's the last question, the submit button is already visible.
    }

    function handleSubmitSurvey() {
        // Final check: ensure last question is answered
        if (userAnswers[currentQuestionIndex] === undefined || userAnswers[currentQuestionIndex] === null) {
             showAlert('warning', 'Please select an answer for the final question.');
             return;
        }

        // Check if all questions are answered (optional, but good practice)
        const answeredCount = Object.keys(userAnswers).length;
        if (answeredCount < TOTAL_QUESTIONS) {
            if (!confirm(`You have answered ${answeredCount}/${TOTAL_QUESTIONS} questions. Submit anyway?`)) {
                return;
            }
        }

        console.log("Submitting survey...");
        console.log("Final Answers:", userAnswers);
        console.log("Parent/Child Info:", parentChildData);

        // --- Calculate Scores ---
        const categoryScores = {};
        const categoryCounts = {}; // To calculate average later if needed

        currentQuestions.forEach((q, index) => {
            const category = q.category;
            if (!category) {
                console.warn(`Question ${index + 1} is missing a category.`);
                return; // Skip question if category is missing
            }

            const answer = userAnswers[index]; // Answer string like "1: Not at all..."
            if (answer) {
                const scoreValue = parseInt(answer.split(':')[0], 10); // Extract the number
                if (!isNaN(scoreValue) && scoreValue >= 1 && scoreValue <= 5) {
                    categoryScores[category] = (categoryScores[category] || 0) + scoreValue;
                    categoryCounts[category] = (categoryCounts[category] || 0) + 1;
                } else {
                    console.warn(`Could not parse score from answer for Q${index + 1}: "${answer}"`);
                }
            } else {
                 console.warn(`No answer found for Q${index + 1}`);
                 // Decide how to handle missing answers (e.g., score as 0, or use average)
                 // For simplicity, we'll just not add to the score here.
                 categoryScores[category] = (categoryScores[category] || 0); // Ensure category exists even if no score added
                 categoryCounts[category] = (categoryCounts[category] || 0);
            }
        });

        console.log("Calculated Category Scores:", categoryScores);
        console.log("Category Question Counts:", categoryCounts);


        // --- Generate Recommendations ---
        // Using the simplified logic from AuthO - Copy/script.js
        const recommendations = generateRecommendations(categoryScores, currentPlanPool);

        // --- Display Results ---
        displayResultsPage(categoryScores, recommendations);
    }

    // -------- Recommendation Generation --------
    function generateRecommendations(scores, planPool) {
        console.log("Generating recommendations based on scores:", scores);
        const outputRecs = [];
        const scoreThresholds = { low: 8*0.75, high: 12*0.75 }; // Rough thresholds for 3/4 Qs per category (adjust based on actual counts!)

        // Define categories expected based on English questions file (which has correct categories)
        const expectedCategories = [
             "Intensity", "Activity Level", "Regularity", "Quality of Mood",
             "Emotional Sensitivity (Self)", "Emotional Sensitivity (Others)",
             "Sensory Sensitivity", "Adaptability", "Approach/Withdrawal", "Distractibility"
         ];


        expectedCategories.forEach(category => {
            const score = scores[category];
             if (score === undefined) {
                  console.warn(`No score found for category: ${category}`);
                  return; // Skip if no score calculated
             }
             // Determine band - This needs refinement based on actual question count per category
             // Simple example: Assume 4 questions -> Max 20. low=8, high=13
             // Assume 3 questions -> Max 15. low=6, high=10
             // Using a placeholder logic here - needs proper scaling based on categoryCounts
             let band = 'developing'; // Default
             // Placeholder logic: needs refinement
             if (score <= 8) band = 'support';
             else if (score >= 13) band = 'enrich';

             const recsForBand = planPool[category]?.[band] || [];
             if (recsForBand.length > 0) {
                 // Take first 1 or 2 recommendations for this band
                 outputRecs.push(...recsForBand.slice(0, 1)); // Take just one for simplicity
             }
             console.log(`Category: ${category}, Score: ${score}, Band: ${band}, Recs Added: ${recsForBand.slice(0, 1).length}`);
        });

        // Add default recommendations if too few specific ones were found
        const minRecs = 5;
        if (outputRecs.length < minRecs && planPool.default) {
            const needed = minRecs - outputRecs.length;
            outputRecs.push(...planPool.default.slice(0, needed));
             console.log(`Added ${needed} default recommendations.`);
        }

        console.log("Final Recommendations:", outputRecs);
        return outputRecs.length > 0 ? outputRecs : ["No specific recommendations generated."]; // Fallback message
    }

    // -------- Results Display --------
    function displayResultsPage(scores, recommendations) {
        resultsTitle.textContent = currentResultsConfig.title || "Results";
        contactMessageText.innerHTML = `<i class="fas fa-info-circle"></i> ${currentResultsConfig.contactMessage || 'Contact us.'}`;

        // Display basic info
        resultDetailsDisplay.innerHTML = `
            <div class="result-details">
                <p><strong><i class="fas fa-user"></i> Name:</strong> ${parentChildData['child-name'] || 'N/A'}</p>
                <p><strong><i class="fas fa-users"></i> Parent:</strong> ${parentChildData['parent-name'] || 'N/A'}</p>
                <p><strong><i class="fas fa-mobile-alt"></i> Mobile:</strong> ${parentChildData['mobile'] || 'N/A'}</p>
                 <p><strong><i class="fas fa-calendar-alt"></i> Age Group:</strong> ${parentChildData['ageGroup'] || 'N/A'}</p>
                 <p><strong><i class="fas fa-language"></i> Language:</strong> ${selectedLanguage}</p>
            </div>`;


        // Display Recommendations
        let recommendationsHtml = `<h3>Recommendations / सूचना / सुझाव</h3>`;
        if (recommendations && recommendations.length > 0 && recommendations[0] !== "No specific recommendations generated.") {
            recommendationsHtml += `<ul class="recommendations-list active">`; // Keep list expanded initially
            recommendations.forEach(rec => {
                recommendationsHtml += `<li><i class="fas fa-lightbulb"></i> ${rec}</li>`;
            });
            recommendationsHtml += `</ul>`;
        } else {
            recommendationsHtml += `<p style="margin-top: var(--space-md); color: var(--clr-text-secondary);">No specific recommendations available based on the scores.</p>`;
        }
        resultContent.innerHTML = recommendationsHtml;

        // Update result action button text (if needed from config)
        resultsWhatsappBtn.innerHTML = `<i class="fab fa-whatsapp"></i> ${currentResultsConfig.buttons?.whatsapp || 'Share'}`;
        resultsEmailBtn.innerHTML = `<i class="fas fa-envelope"></i> ${currentResultsConfig.buttons?.email || 'Email'}`;
        resultsCopyBtn.innerHTML = `<i class="fas fa-copy"></i> ${currentResultsConfig.buttons?.copy || 'Copy'}`;
        logoutBtnResults.innerHTML = `<i class="fas fa-sign-out-alt"></i> ${currentResultsConfig.buttons?.logout || 'Logout'}`;


        // Show results section
        showFlowSection('results-section');
    }

     // --- Result Sharing Functions (Simplified) ---
     function formatResultTextForSharing(scores, recommendations) {
         let text = `*Preschool Assessment Summary*\n`;
         text += `Child: ${parentChildData['child-name'] || 'N/A'}\n`;
         text += `Age Group: ${parentChildData['ageGroup'] || 'N/A'}\n`;
         text += `Language: ${selectedLanguage}\n`;
         text += `Date: ${new Date().toLocaleDateString()}\n\n`;

         text += `*Recommendations:*\n`;
         if (recommendations && recommendations.length > 0) {
             recommendations.forEach((rec, index) => { text += `${index + 1}. ${rec}\n`; });
         } else {
             text += `- None specific.\n`;
         }

          // Optional: Add simplified scores if needed
          // text += `\n*Category Indicators (Simplified):*\n`;
          // Object.keys(scores).forEach(cat => {
          //     text += `- ${cat}: ${scores[cat]}\n`; // Just show raw score for now
          // });

         text += `\n---\nShared from Preschool Assessment`;
         return text;
     }

     function shareResultsViaWhatsApp() {
         const scores = {}; // Recalculate or retrieve scores if needed
         currentQuestions.forEach((q, index) => { /* ... score calculation ... */
              const answer = userAnswers[index];
              if(answer) {
                  const scoreValue = parseInt(answer.split(':')[0], 10);
                  if (!isNaN(scoreValue)) {
                      scores[q.category] = (scores[q.category] || 0) + scoreValue;
                  }
              }
          });
         const recommendations = generateRecommendations(scores, currentPlanPool);
         const textToShare = formatResultTextForSharing(scores, recommendations);
         const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(textToShare)}`;
         window.open(whatsappUrl, '_blank');
     }

      function emailResults() {
           const scores = {}; currentQuestions.forEach((q, index) => { const answer = userAnswers[index]; if(answer) { const scoreValue = parseInt(answer.split(':')[0], 10); if (!isNaN(scoreValue)) scores[q.category] = (scores[q.category] || 0) + scoreValue; } });
           const recommendations = generateRecommendations(scores, currentPlanPool);
           const subject = `Preschool Assessment Results: ${parentChildData['child-name'] || 'Child'}`;
           const body = formatResultTextForSharing(scores, recommendations);
           const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

           if (mailtoLink.length > 2000) { // Check for potential length issues
               showAlert('warning', 'Results too long for direct email link. Please use the Copy button.');
               copyResultsToClipboard();
           } else {
               window.location.href = mailtoLink;
           }
       }

       function copyResultsToClipboard() {
           const scores = {}; currentQuestions.forEach((q, index) => { const answer = userAnswers[index]; if(answer) { const scoreValue = parseInt(answer.split(':')[0], 10); if (!isNaN(scoreValue)) scores[q.category] = (scores[q.category] || 0) + scoreValue; } });
           const recommendations = generateRecommendations(scores, currentPlanPool);
           const textToCopy = formatResultTextForSharing(scores, recommendations);

           navigator.clipboard.writeText(textToCopy)
               .then(() => {
                   showAlert('success', 'Results copied to clipboard!');
               })
               .catch(err => {
                   console.error('Failed to copy results: ', err);
                   showAlert('error', 'Could not copy results. Please try again.');
               });
       }


    // -------- Event Listeners --------
    function setupEventListeners() {
        loginBtn?.addEventListener('click', handleAuthLogin);
        logoutBtnAge?.addEventListener('click', handleAuthLogout);
        logoutBtnResults?.addEventListener('click', handleAuthLogout);

        ageNextBtn?.addEventListener('click', () => {
             if (!ageSelect.value) {
                 showAlert('warning', 'Please select an age group.');
                 ageSelect.focus();
                 return;
             }
             selectedAgeGroup = ageSelect.value;
             console.log("Age group selected:", selectedAgeGroup);
             // Start info collection
             currentInfoStepIndex = 0; // Reset index
             parentChildData = {}; // Clear previous data for this step
             renderInfoStep(); // Render the first info field
             showFlowSection('info-section');
        });

        infoBackBtn?.addEventListener('click', handleInfoBack);
        infoNextBtn?.addEventListener('click', handleInfoNext);

        langEnBtn?.addEventListener('click', () => setLanguage('English'));
        langMrBtn?.addEventListener('click', () => setLanguage('Marathi'));
        langHiBtn?.addEventListener('click', () => setLanguage('Hindi'));
        langBackBtn?.addEventListener('click', () => {
             // Go back to Info section - show last info step for editing? Or first?
             // Let's go back to the *last* editable info step
             currentInfoStepIndex = infoFieldsConfig.length - 1;
             renderInfoStep();
             showFlowSection('info-section');
        });

        instrBackBtn?.addEventListener('click', () => showFlowSection('language-selection'));
        instrStartBtn?.addEventListener('click', () => {
             currentQuestionIndex = 0;
             userAnswers = {}; // Clear previous answers
             renderQuestion();
             showFlowSection('test-section');
        });

        backBtn?.addEventListener('click', handlePreviousQuestion);
        nextBtn?.addEventListener('click', handleNextQuestion);
        submitBtn?.addEventListener('click', handleSubmitSurvey);

        resultsWhatsappBtn?.addEventListener('click', shareResultsViaWhatsApp);
        resultsEmailBtn?.addEventListener('click', emailResults);
        resultsCopyBtn?.addEventListener('click', copyResultsToClipboard);
        resultsRetakeBtn?.addEventListener('click', () => {
            // Go back to start of flow
            resetSurveyState();
            showFlowSection('age-group-selection');
        });

        console.log("Event listeners attached.");
    }


    // -------- Initialization --------
    async function initializeApp() {
        console.log("Initializing App...");
        containerEl.style.display = 'none'; // Hide main content initially
        loadingEl.style.display = 'flex'; // Show loading indicator

        try {
            await configureAuth0Client();

            const query = window.location.search;
            let redirected = false;
            if (query.includes("code=") && query.includes("state=")) {
                redirected = await handleAuthRedirectCallback();
            }

            // If redirected successfully OR already authenticated, check status
            // Otherwise (callback failed or no code/state), check status anyway (might be logged in already)
            await checkAuthStatus(); // Shows login or welcome/app start

            setupEventListeners();
            updateBrandingFooter(); // Add footer

        } catch (err) {
            console.error("Initialization failed:", err);
            // Error message already shown by configureAuth0Client or checkAuthStatus
        }
    }

    // Start the application
    initializeApp();

}); // End DOMContentLoaded

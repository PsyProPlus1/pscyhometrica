// script.js - Frontend with Auth0 Integration & Dynamic Branding
// v3.1 - Immediate Auth0 Redirect

document.addEventListener('DOMContentLoaded', () => {
    console.log("SCRIPT START: DOMContentLoaded event fired. v3.1 - Immediate Auth0 Redirect");

    // --- Configuration ---
    const RESULTS_STORAGE_KEY = 'preschool_assessment_results';
    const PARENT_CHILD_INFO_STORAGE_KEY = 'preschool_parent_child_info';
    const NUM_QUESTIONS = 40;
    // Auth0 Configuration
    const AUTH0_DOMAIN = 'dev-porju76gtxgri6qz.us.auth0.com';
    const AUTH0_CLIENT_ID = 'feHX8RCWfs23HFS5CP8IzjjDOeysOSwu';
    const AUTH0_REDIRECT_URI = 'https://preschool.psychometricaproplus.com/';
    const AUTH0_LOGOUT_REDIRECT_URI = 'https://preschool.psychometricaproplus.com/';
    const AUTH0_AUDIENCE = `https://${AUTH0_DOMAIN}/api/v2/`;
    const AUTH0_SCOPE = 'openid profile email read:branding';
    const BRANDING_METADATA_NAMESPACE = 'https://preschool.psychometricaproplus.com/';

    // --- State Variables ---
    let selectedAgeGroup = '';
    let selectedLanguage = '';
    let parentChildData = {};
    let allResults = [];
    let allParentChildInfo = [];
    let currentQuestionIndex = 0;
    let userAnswers = {};
    let currentInfoStep = 0;
    let clientBranding = {};
    let currentResultRecord = null;
    let auth0Client = null;
    let auth0User = null;

    // --- UI Elements Cache (Optional but good practice) ---
    const loadingMessageEl = document.getElementById('loading-message');
    const containerEl = document.querySelector('.container');
    const loginBtnEl = document.getElementById('login-btn');
    // Add other frequently accessed elements if needed

    /* ... (infoFields, instructions remain the same) ... */
    const infoFields = [
        { id: 'child-name', labelEn: "Child's Name", labelMr: 'मुलाचे नाव', type: 'text', required: true },
        { id: 'parent-name', labelEn: "Parent's Name", labelMr: 'पालकांचे नाव', type: 'text', required: true },
        { id: 'mobile', labelEn: 'Mobile (Parent)', labelMr: 'मोबाइल (पालक)', type: 'tel', pattern: "\\d{10}", required: true, maxLength: 10 },
        { id: 'email', labelEn: 'Email (Parent)', labelMr: 'ईमेल (पालक)', type: 'email', required: false },
        { id: 'age-group-display', labelEn: 'Selected Age Group', labelMr: ' निवडलेला वयोगट', type: 'text', readonly: true }, // Readonly, populated later
    ];
    const infoStepsCount = infoFields.filter(f => !f.readonly).length;
    const instructions_en = `<h4>Parent Survey: Assessing Preschool Personality (Ages 3-6)</h4><p>This survey helps understand your child's natural temperament. Please answer based on your child's typical behavior over the last few months.</p><h4>Instructions</h4><ul><li>Read each statement carefully.</li><li>Select the option that best describes your child.</li><li>There are no right or wrong answers.</li><li>${NUM_QUESTIONS} questions, takes about 10-15 minutes.</li><li>Your responses will help generate a summary and suggestions.</li><li>Rating Scale:<ul><li>1: Not at all like my child</li><li>2: A little like my child</li><li>3: Somewhat like my child</li><li>4: Quite a bit like my child</li><li>5: Very much like my child</li></ul></li></ul>`;
    const instructions_mr = `<h4>पालक सर्वेक्षण: प्रीस्कूल व्यक्तिमत्व मूल्यांकन (वय ३-६)</h4><p>हे सर्वेक्षण तुमच्या मुलाचा नैसर्गिक स्वभाव समजून घेण्यास मदत करते. कृपया गेल्या काही महिन्यांतील तुमच्या मुलाच्या नेहमीच्या वर्तनावर आधारित उत्तरे द्या.</p><h4>सूचना</h4><ul><li>प्रत्येक विधान काळजीपूर्वक वाचा.</li><li>तुमच्या मुलाचे सर्वोत्तम वर्णन करणारा पर्याय निवडा.</li><li>येथे कोणतेही बरोबर किंवा चूक उत्तर नाही.</li><li>${NUM_QUESTIONS} प्रश्न, सुमारे १०-१५ मिनिटे लागतील.</li><li>तुमचे प्रतिसाद सारांश आणि सूचना तयार करण्यात मदत करतील.</li><li>रेटिंग स्केल:<ul><li>१: माझ्या मुलासारखे अजिबात नाही</li><li>२: माझ्या मुलासारखे थोडेसे</li><li>३: माझ्या मुलासारखे काहीसे</li><li>४: माझ्या मुलासारखे बरेचसे</li><li>५: माझ्या मुलासारखे खूप जास्त</li></ul></li></ul>`;


    // ========================================================================
    // Utility Functions
    // ========================================================================
    /* ... (showAlert, loadResults, saveResults, loadParentChildInfo, saveParentChildInfo, showSection, resetSurveyState remain the same) ... */
     function showAlert(type, message, duration = 6000) {
        console.log(`ALERT (${type}): ${message}`);
        const existing = document.querySelector('.alert-dynamic');
        if (existing) existing.remove();
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} alert-dynamic`;
        alertDiv.setAttribute('role', 'alert');
        let icon = 'fa-info-circle';
        if (type === 'success') icon = 'fa-check-circle';
        if (type === 'error') icon = 'fa-times-circle';
        if (type === 'warning') icon = 'fa-exclamation-triangle';
        alertDiv.innerHTML = `<i class="fas ${icon}"></i> ${message}`;
        const cont = document.querySelector('.container');
        const head = cont?.querySelector('header');
        if (head) head.insertAdjacentElement('afterend', alertDiv);
        else if (cont) cont.insertBefore(alertDiv, cont.firstChild);
        else document.body.insertBefore(alertDiv, document.body.firstChild);
        setTimeout(() => {
            if (alertDiv) {
                alertDiv.style.opacity='0';
                setTimeout(() => alertDiv.remove(), 500);
            }
        }, duration);
    }
    function loadResults() { try { const d = localStorage.getItem(RESULTS_STORAGE_KEY); allResults = d ? JSON.parse(d) : []; console.log(`Loaded ${allResults.length} results.`); if (!Array.isArray(allResults)) { console.warn("Stored results not an array, resetting."); allResults = []; saveResults(); } } catch (e) { console.error('Error loading results:', e); showAlert('error', 'Failed to load saved results.'); allResults = []; } }
    function saveResults() { try { localStorage.setItem(RESULTS_STORAGE_KEY, JSON.stringify(allResults)); console.log(`Saved ${allResults.length} results.`); } catch (e) { console.error('Error saving results:', e); showAlert('error', 'Failed to save assessment results.'); } }
    function loadParentChildInfo() { try { const d = localStorage.getItem(PARENT_CHILD_INFO_STORAGE_KEY); allParentChildInfo = d ? JSON.parse(d) : []; console.log(`Loaded ${allParentChildInfo.length} parent/child info.`); if (!Array.isArray(allParentChildInfo)) { console.warn("Stored info not an array, resetting."); allParentChildInfo = []; saveParentChildInfo(); } } catch (e) { console.error('Error loading parent/child info:', e); showAlert('error', 'Failed to load saved info.'); allParentChildInfo = []; } }
    function saveParentChildInfo() { try { localStorage.setItem(PARENT_CHILD_INFO_STORAGE_KEY, JSON.stringify(allParentChildInfo)); console.log(`Saved ${allParentChildInfo.length} parent/child info.`); } catch (e) { console.error('Error saving parent/child info:', e); showAlert('error', 'Failed to save parent/child information.'); } }
    function showSection(sectionId) {
        console.log(`Navigating to section: ${sectionId}`);
        // Ensure container is visible before showing a specific section inside it
        if (containerEl && containerEl.style.display === 'none') {
            containerEl.style.display = 'block';
        }
        if (loadingMessageEl) { // Hide loading message when showing a section
            loadingMessageEl.style.display = 'none';
        }

        document.querySelectorAll('.container > section').forEach(s => {
            const isTargetSection = s.id === sectionId;
            s.classList.toggle('hidden', !isTargetSection);
            if (s.id === 'welcome-section') {
                if (isTargetSection) { s.classList.remove('welcome-fade-out'); s.classList.add('welcome-fade-in'); }
                else if (!s.classList.contains('hidden')) { s.classList.remove('welcome-fade-in'); s.classList.add('welcome-fade-out'); setTimeout(() => s.classList.add('hidden'), 500); }
            }
        });
    }
    function resetSurveyState() { console.log("Resetting survey state variables."); currentInfoStep = 0; currentQuestionIndex = 0; userAnswers = {}; parentChildData = {}; selectedAgeGroup = ''; selectedLanguage = ''; currentResultRecord = null; const age_group_el = document.getElementById('age-group'); if (age_group_el) age_group_el.value = ''; const info_step_el = document.getElementById('info-step'); if (info_step_el) info_step_el.innerHTML = ''; const questions_el = document.getElementById('questions'); if (questions_el) questions_el.innerHTML = ''; updateProgressAndButtons(0, NUM_QUESTIONS); }

    // Updated UI Reset - hides container, shows loading
    function resetUIState() {
        console.log('Resetting UI for logged-out state...');
        auth0User = null;
        clientBranding = {};
        // Hide all app sections within the container
        document.querySelectorAll('.container > section').forEach(s => s.classList.add('hidden'));
        // Hide the main container itself
        if (containerEl) containerEl.style.display = 'none';
        // Show the loading message (which will be replaced by login prompt if needed)
        if (loadingMessageEl) loadingMessageEl.style.display = 'flex';

        // Clear dynamic content areas
        const result_content_el = document.getElementById('result-content'); if (result_content_el) result_content_el.innerHTML = '';
        document.getElementById('plan-content')?.classList.add('hidden');
        const plan_text_el = document.getElementById('plan-text'); if (plan_text_el) plan_text_el.textContent = '';
        const student_info_table_tbody_el = document.querySelector('#student-info-table tbody'); if (student_info_table_tbody_el) student_info_table_tbody_el.innerHTML = '';
        const results_table_tbody_el = document.querySelector('#results-table tbody'); if (results_table_tbody_el) results_table_tbody_el.innerHTML = '';
        const planStudentName = document.getElementById('plan-student-name'); if (planStudentName) planStudentName.value = '';
        const planAgeGroup = document.getElementById('plan-age-group'); if (planAgeGroup) planAgeGroup.value = '';
        const planUniqueCode = document.getElementById('plan-unique-code'); if (planUniqueCode) planUniqueCode.value = '';
        const infoChildName = document.getElementById('info-child-name'); if (infoChildName) infoChildName.value = '';
        const infoParentName = document.getElementById('info-parent-name'); if (infoParentName) infoParentName.value = '';
        const infoMobile = document.getElementById('info-mobile'); if (infoMobile) infoMobile.value = '';
        const infoEmail = document.getElementById('info-email'); if (infoEmail) infoEmail.value = '';
        const infoAgeGroupAdmin = document.getElementById('info-age-group-admin'); if (infoAgeGroupAdmin) infoAgeGroupAdmin.value = '';

        resetSurveyState();
        updateBrandingThroughout(); // Update footer etc.
        updateLoginButtonState(false); // Ensure login button is ready if needed
        console.log('UI reset for logout complete.');
    }

    // ========================================================================
    // Auth0 Authentication & Branding Functions
    // ========================================================================

    async function configureAuth0Client() {
        try {
            console.log("Configuring Auth0 client...");
            auth0Client = await auth0.createAuth0Client({
                domain: AUTH0_DOMAIN,
                clientId: AUTH0_CLIENT_ID,
                authorizationParams: { redirect_uri: AUTH0_REDIRECT_URI, audience: AUTH0_AUDIENCE, scope: AUTH0_SCOPE },
                cacheLocation: 'localstorage'
            });
            console.log("Auth0 client configured successfully.");
        } catch (err) {
            console.error("Error configuring Auth0 client:", err);
            if (loadingMessageEl) loadingMessageEl.innerHTML = `<p style="color: red;">Error initializing authentication. Please refresh.</p>`;
            showAlert('error', 'Authentication service failed to initialize. Please try refreshing the page.');
            throw err; // Re-throw error to stop initialization
        }
    }

    async function login() {
        if (!auth0Client) { console.error("Auth0 client not initialized."); showAlert('error', 'Authentication service not ready.'); return; }
        try {
            console.log("Redirecting to Auth0 for login...");
            if (loginBtnEl) { loginBtnEl.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Redirecting...'; loginBtnEl.disabled = true; }
            await auth0Client.loginWithRedirect();
            // Redirect happens here, code below might not execute immediately
        } catch (err) {
            console.error("Auth0 login error:", err);
            showAlert('error', `Login failed: ${err.message || 'Unknown error'}`);
            if (loginBtnEl) { loginBtnEl.innerHTML = '<i class="fas fa-sign-in-alt"></i> Login / Sign Up'; loginBtnEl.disabled = false; } // Reset button on error
        }
    }

    function logout() {
        if (!auth0Client) { console.error("Auth0 client not initialized."); return; }
        console.log("Logging out via Auth0...");
        try {
            // Clear local results before redirecting to logout
            // Optionally ask for confirmation before clearing
            // if (confirm("Also clear locally stored results upon logout?")) {
            //     localStorage.removeItem(RESULTS_STORAGE_KEY);
            //     localStorage.removeItem(PARENT_CHILD_INFO_STORAGE_KEY);
            //     console.log("Cleared local storage.");
            // }
            auth0Client.logout({
                logoutParams: { returnTo: AUTH0_LOGOUT_REDIRECT_URI }
            });
        } catch (err) {
            console.error("Auth0 logout error:", err);
            showAlert('error', `Logout failed: ${err.message || 'Unknown error'}`);
        }
    }

    // *** MODIFIED: Handles redirect, checks auth, THEN decides flow ***
    async function handlePageLoad() {
        let isAuthenticated = false;
        try {
            if (!auth0Client) {
                await configureAuth0Client(); // Ensure client is configured first
            }

            const query = window.location.search;
            if (query.includes("code=") && query.includes("state=")) {
                console.log("Handling Auth0 redirect callback...");
                await auth0Client.handleRedirectCallback();
                console.log("Auth0 redirect callback handled.");
                window.history.replaceState({}, document.title, window.location.pathname);
                isAuthenticated = true; // Successfully handled callback means authenticated
            } else {
                // Check if already authenticated (e.g., existing session)
                isAuthenticated = await auth0Client.isAuthenticated();
                console.log("Checked existing session. Is Authenticated:", isAuthenticated);
            }

            if (isAuthenticated) {
                // User is logged in (either via redirect or existing session)
                await updateUIBasedOnAuthState(); // Fetch user, branding, show welcome/app
            } else {
                // User is NOT authenticated and NOT returning from redirect
                console.log("User not authenticated. Redirecting to login.");
                // *** CHANGE: Redirect immediately if not authenticated ***
                await login(); // Trigger the login flow
            }

        } catch (err) {
            console.error("Error during page load authentication check:", err);
            showAlert('error', `Authentication check failed: ${err.message}. Trying login.`);
            // Fallback: attempt login if authentication check fails critically
            try {
                await login();
            } catch (loginErr) {
                 console.error("Fallback login attempt failed:", loginErr);
                 if (loadingMessageEl) loadingMessageEl.innerHTML = `<p style="color: red;">Authentication failed. Please try refreshing or contact support.</p>`;
            }
        }
    }


    // Fetches user data, updates UI for LOGGED-IN state
    async function updateUIBasedOnAuthState() {
        if (!auth0Client) return; // Should already be configured

        try {
            // Assuming we already know user is authenticated from handlePageLoad
            auth0User = await auth0Client.getUser();
            console.log("Authenticated User:", auth0User);
            clientBranding = getClientBranding(auth0User);
            console.log("Fetched Client Branding:", clientBranding);

            updateBrandingThroughout();
            updateLoginButtonState(true); // Show logout buttons

            // Hide loading message and show the main app container
            if (loadingMessageEl) loadingMessageEl.style.display = 'none';
            if (containerEl) containerEl.style.display = 'block';

            const role = auth0User[`${BRANDING_METADATA_NAMESPACE}role`] || 'user';
            console.log("Determined Role:", role);

            // Check if a specific section is already active (e.g., from browser history)
             const currentSection = document.querySelector('.container > section:not(.hidden)');
             if (currentSection && currentSection.id !== 'login-section') {
                 console.log(`User already on section ${currentSection.id}, skipping welcome screen.`);
                 // Ensure the correct logout buttons are visible for the current section
                 updateLoginButtonState(true);
             } else {
                 // Show welcome screen, then navigate
                 showWelcomeScreen(clientBranding.name || auth0User?.name || role);
                 setTimeout(() => {
                     if (role === 'admin') {
                         showAdminDashboard();
                     } else {
                         showAgeGroupSelection();
                     }
                 }, 2500);
             }

        } catch (err) {
            console.error("Error fetching user data or updating UI:", err);
            showAlert('error', 'Failed to load user profile or update application state.');
            // Attempt logout or show error state
            logout(); // Or show a persistent error message
        }
    }

    // Updates login/logout button visibility
    function updateLoginButtonState(isLoggedIn) {
        const loginSection = document.getElementById('login-section');
        // Hide/Show login section based on logged-in status
        if (loginSection) loginSection.classList.toggle('hidden', isLoggedIn);
        // Ensure the login button inside the section is correctly configured if shown
        if (loginBtnEl && !isLoggedIn) {
            loginBtnEl.innerHTML = '<i class="fas fa-sign-in-alt"></i> Login / Sign Up';
            loginBtnEl.disabled = false;
        }
        // Toggle visibility of ALL logout buttons
        document.querySelectorAll('#age-group-logout-btn, #results-logout-btn, #admin-logout-btn').forEach(btn => {
            if (btn) btn.classList.toggle('hidden', !isLoggedIn);
        });
    }

    /* ... (getClientBranding, updateBrandingThroughout, showWelcomeScreen remain the same) ... */
     function getClientBranding(user) { if (!user) return {}; const name = user[`${BRANDING_METADATA_NAMESPACE}branding_name`]; const address = user[`${BRANDING_METADATA_NAMESPACE}branding_address`]; const phone = user[`${BRANDING_METADATA_NAMESPACE}branding_phone`]; return { name: name || user.name || 'Preschool ProPlus', address: address || 'Pimpri-Chinchwad, MH', phone: phone || 'Contact Support' }; }
     function updateBrandingThroughout() { const h = document.querySelector('header h1'); if (h) h.textContent = "Preschool Personality Assessment"; let f = document.querySelector('.branding-footer'); if (!f) { f = document.createElement('footer'); f.className = 'branding-footer'; containerEl?.appendChild(f); } if (f) { f.innerHTML = `<p><span><i class="fas fa-building"></i> ${clientBranding?.name || '?'}</span> | <span><i class="fas fa-map-marker-alt"></i> ${clientBranding?.address || '?'}</span> | <span><i class="fas fa-phone"></i> ${clientBranding?.phone || '?'}</span></p>`; } }
     function showWelcomeScreen(name) { let ws = document.getElementById('welcome-section'); if (!ws) { ws = document.createElement('section'); ws.id = 'welcome-section'; ws.className = 'hidden welcome-fade-in'; document.querySelector('.container > header')?.insertAdjacentElement('afterend', ws); } if (ws) { ws.innerHTML = `<h2>Welcome, ${name}! / आपले स्वागत आहे, ${name}!</h2><p><i class="fas fa-spinner fa-spin"></i> Loading your dashboard... / तुमचा डॅशबोर्ड लोड करत आहे...</p>`; showSection('welcome-section'); } else { console.error("Failed to create or find the welcome section element."); } }

    // ========================================================================
    // Survey Flow Logic Functions (No changes needed here for redirect logic)
    // ========================================================================
    /* ... (showAgeGroupSelection, validateAndProceedToLanguage, showLanguageSelection, startSurvey, loadInfoStep, nextInfoStep, previousInfoStep, navigateToInstructions, showSurvey, loadQuestion, updateProgressAndButtons, nextQuestion, previousQuestion, submitSurvey, displayResults, getMarathiCategoryTitle, handleToggleRecommendations, goBack remain the same as previous version with Auth0 integration) ... */
    function showAgeGroupSelection() { showSection('age-group-selection'); const sel=document.getElementById('age-group'); if(sel) sel.value = ''; selectedAgeGroup = ''; parentChildData = {}; currentResultRecord = null; }
    function validateAndProceedToLanguage() { const sel = document.getElementById('age-group'); if(!sel?.value) { showAlert('warning', 'Please select an age group. / कृपया वयोगट निवडा.'); sel?.focus(); return; } selectedAgeGroup = sel.value; parentChildData['ageGroup'] = selectedAgeGroup; console.log(`Selected Age Group: ${selectedAgeGroup}`); showLanguageSelection(); }
    function showLanguageSelection() { console.log("Showing language selection."); showSection('language-selection'); }
    function startSurvey(language) { selectedLanguage = language; parentChildData['language'] = selectedLanguage; if (auth0User) { parentChildData['email'] = auth0User.email || ''; } console.log(`Selected Language: ${selectedLanguage}`); currentInfoStep = 0; loadInfoStep(currentInfoStep); showSection('info-section'); }
    function loadInfoStep(stepIndex) { const div = document.getElementById('info-step'); const tit = document.getElementById('info-title'); const nxt = document.getElementById('info-next-btn'); const bak = document.getElementById('info-back-btn'); if (!div || !tit || !nxt || !bak) { console.error("Info section elements missing!"); showAlert('error', 'Form loading error.'); return; } const fields = infoFields.filter(f => !f.readonly); if (stepIndex < 0 || stepIndex >= fields.length) { console.error(`Invalid info step index: ${stepIndex}`); return; } const fld = fields[stepIndex]; const combinedLabel = `${fld.labelEn} / ${fld.labelMr}`; const combinedTitle = `Info / माहिती (${stepIndex + 1}/${fields.length})`; const placeholderText = "Enter / येथे प्रविष्ट करा"; const phoneHint = '<small>(10 digits / १० अंक)</small>'; const emailHint = '<small>(Optional / वैकल्पिक)</small>'; const nextButtonText = (stepIndex === fields.length - 1) ? 'Proceed / पुढे जा' : 'Next / पुढे'; const backButtonText = '<i class="fas fa-arrow-left"></i> Back / मागे'; tit.textContent = combinedTitle; div.innerHTML = `<div class="form-group"><label for="${fld.id}">${combinedLabel}${fld.required ? '<span style="color:red;">*</span>' : ''}</label><input type="${fld.type}" id="${fld.id}" class="form-control" placeholder="${placeholderText}" ${fld.required ? 'required' : ''} ${fld.pattern ? `pattern="${fld.pattern}"` : ''} ${fld.maxLength ? `maxlength="${fld.maxLength}"` : ''} aria-label="${combinedLabel}" value="${parentChildData[fld.id] || ''}">${fld.pattern == "\\d{10}" ? phoneHint : ''}${fld.type == "email" && !fld.required ? emailHint : ''}</div>`; bak.disabled = (stepIndex === 0); bak.innerHTML = backButtonText; nxt.innerHTML = `<i class="fas fa-arrow-right"></i> ${nextButtonText}`; const inp = document.getElementById(fld.id); if (inp) { inp.focus(); inp.onkeypress = (e) => { if (e.key === 'Enter') { e.preventDefault(); nextInfoStep(); } }; } }
    function nextInfoStep() { const fields = infoFields.filter(f => !f.readonly); if (currentInfoStep >= fields.length) return; const fld = fields[currentInfoStep]; const inp = document.getElementById(fld.id); if (!inp) { console.error(`Input element not found: ${fld.id}`); showAlert('error', 'Form error.'); return; } const val = inp.value.trim(); const requiredMsg = `Please enter ${fld.labelEn} / कृपया ${fld.labelMr} प्रविष्ट करा.`; const invalidFormatMsg = `Invalid format for ${fld.labelEn} / ${fld.labelMr} साठी अवैध स्वरूप.`; const invalidEmailMsg = 'Invalid email format / अवैध ईमेल स्वरूप.'; if (fld.required && !val) { showAlert('warning', requiredMsg); inp.focus(); return; } if (fld.pattern) { const rgx = new RegExp(`^${fld.pattern}$`); if (val && !rgx.test(val)) { showAlert('warning', invalidFormatMsg); inp.focus(); return; } } if (fld.type === 'email' && val && !/\S+@\S+\.\S+/.test(val)) { showAlert('warning', invalidEmailMsg); inp.focus(); return; } parentChildData[fld.id] = val; console.log(`Stored info: ${fld.id} = ${val}`); currentInfoStep++; if (currentInfoStep < fields.length) { loadInfoStep(currentInfoStep); } else { console.log("Info collection complete:", parentChildData); parentChildData['age-group-display'] = selectedAgeGroup; navigateToInstructions(); } }
    function previousInfoStep() { if (currentInfoStep > 0) { currentInfoStep--; loadInfoStep(currentInfoStep); } else { goBack('info-section'); } }
    function navigateToInstructions() { const iC = document.getElementById('instructions-content'); const iT = document.getElementById('instructions-title'); const btn = document.getElementById('instr-start-btn'); const backBtn = document.getElementById('instr-back-btn'); if (!iC || !iT || !btn || !backBtn) { console.error("Instruction elements missing!"); showAlert('error', "Instructions display error."); return; } iT.textContent = "Instructions / सूचना"; iC.innerHTML = `<div class="instructions-lang-section"><h4>English Instructions</h4>${instructions_en}</div><hr><div class="instructions-lang-section"><h4>मराठी सूचना</h4>${instructions_mr}</div>`; btn.innerHTML = '<i class="fas fa-play"></i> Start Survey / सर्वेक्षण सुरू करा'; backBtn.innerHTML = '<i class="fas fa-arrow-left"></i> Back / मागे'; showSection('instructions-section'); }
    function showSurvey() { console.log("Starting survey..."); if (!window.questionsPreschool?.[selectedLanguage]) { showAlert('error', 'Questions not available.'); showSection('language-selection'); return; } currentQuestionIndex = 0; userAnswers = {}; loadQuestion(currentQuestionIndex); updateProgressAndButtons(currentQuestionIndex, NUM_QUESTIONS); showSection('test-section'); }
    function loadQuestion(index) { const qDiv = document.getElementById('questions'); const tTit = document.getElementById('test-title'); if (!qDiv || !tTit) { console.error("Test elements missing!"); showAlert('error', 'Question display error.'); return; } const quests_en = window.questionsPreschool?.english; const quests_mr = window.questionsPreschool?.marathi; if (!quests_en || !quests_mr || index < 0 || index >= quests_en.length || index >= quests_mr.length) { console.error(`Invalid question index: ${index} or missing sets.`); showAlert('error', `Error loading Q${index + 1}.`); return; } const q_en = quests_en[index]; const q_mr = quests_mr[index]; tTit.textContent = `Question ${index + 1} / प्रश्न ${index + 1}`; let optsHtml = `<div class="options">`; if (q_en.options.length === q_mr.options.length) { q_en.options.forEach((opt_en, i) => { const opt_mr = q_mr.options[i]; const valueToStore = opt_en; const id = `q${index}_option${i}`; const isChecked = userAnswers[String(index)] === valueToStore; optsHtml += `<label for="${id}" class="option-label"><input type="radio" id="${id}" name="question${index}" value="${valueToStore}" ${isChecked ? 'checked' : ''}><span class="option-text-bilingual"><span class="lang-en">${opt_en}</span><span class="lang-mr">${opt_mr}</span></span></label>`; }); } else { console.error(`Option count mismatch Q${index + 1}.`); optsHtml += `<p style="color: red;">Option display error.</p>`; } optsHtml += '</div>'; qDiv.innerHTML = `<div class="question" data-question-index="${index}"><p class="question-text-bilingual"><span class="lang-en">${q_en.text}</span><span class="lang-mr">${q_mr.text}</span></p>${optsHtml}</div>`; qDiv.querySelectorAll(`input[name="question${index}"]`).forEach(radio => { radio.addEventListener('change', (e) => { if (e.target.checked) { userAnswers[String(index)] = e.target.value; console.log(`Answered Q${index + 1}: ${e.target.value}`); updateProgressAndButtons(index, quests_en.length); } }); }); updateProgressAndButtons(index, quests_en.length); }
    function updateProgressAndButtons(currentIndex, totalQuestions) { const pFill = document.getElementById('progress-fill'); const pText = document.getElementById('progress-text'); const bBtn = document.getElementById('back-btn'); const nBtn = document.getElementById('next-btn'); const sBtn = document.getElementById('submit-btn'); if (!pFill || !pText || !bBtn || !nBtn || !sBtn) { console.warn("Progress/nav elements missing."); return; } const answeredCount = Object.keys(userAnswers).length; const progressPercent = totalQuestions > 0 ? (answeredCount / totalQuestions) * 100 : 0; pFill.style.width = `${progressPercent}%`; pText.textContent = `Answered ${answeredCount}/${totalQuestions} / उत्तरे दिली ${answeredCount}/${totalQuestions}`; bBtn.disabled = (currentIndex === 0); bBtn.innerHTML = '<i class="fas fa-arrow-left"></i> Back / मागे'; nBtn.classList.toggle('hidden', currentIndex === totalQuestions - 1); sBtn.classList.toggle('hidden', currentIndex !== totalQuestions - 1); nBtn.innerHTML = '<i class="fas fa-arrow-right"></i> Next / पुढे'; sBtn.innerHTML = '<i class="fas fa-check"></i> Submit / सबमिट करा'; }
    function nextQuestion() { const quests = window.questionsPreschool?.[selectedLanguage]; if (!quests) return; if (userAnswers[String(currentQuestionIndex)] === undefined) { showAlert('warning', 'Please select an answer. / कृपया उत्तर निवडा.'); const qEl = document.querySelector(`.question[data-question-index="${currentQuestionIndex}"]`); if (qEl) { qEl.style.outline = '2px solid red'; setTimeout(() => { qEl.style.outline = 'none'; }, 1500); } return; } if (currentQuestionIndex < quests.length - 1) { currentQuestionIndex++; loadQuestion(currentQuestionIndex); } else { console.log("End of questions."); updateProgressAndButtons(currentQuestionIndex, quests.length); } }
    function previousQuestion() { if (currentQuestionIndex > 0) { currentQuestionIndex--; loadQuestion(currentQuestionIndex); } }
    function submitSurvey() { const quests = window.questionsPreschool?.[selectedLanguage]; if (!quests) { showAlert('error', "Cannot submit: Questions data missing."); return; } const answeredCount = Object.keys(userAnswers).length; const incompleteConfirmMsg = `You have answered ${answeredCount}/${quests.length} questions. Submit anyway?\nतुम्ही ${quests.length} पैकी ${answeredCount} प्रश्नांची उत्तरे दिली आहेत. तरीही सबमिट करायचे?`; if (answeredCount < quests.length && !confirm(incompleteConfirmMsg)) { return; } console.log(answeredCount < quests.length ? "Submitting incomplete survey." : "Submitting complete survey."); console.log("Final Answers:", userAnswers); console.log("Parent/Child Info:", parentChildData); if (typeof window.calculatePreschoolResults !== 'function') { showAlert('error', 'Result calculation function missing.'); return; } try { const resultData = window.calculatePreschoolResults(selectedAgeGroup, selectedLanguage, userAnswers); console.log("Calculated Results:", resultData); const timestamp = new Date().toISOString(); const submitterId = auth0User ? (auth0User.sub || auth0User.email || 'auth0_user') : 'anonymous'; const role = auth0User ? (auth0User[`${BRANDING_METADATA_NAMESPACE}role`] || 'user') : 'unknown'; const submitterDisplay = `${submitterId} (${role})`; const fullResultRecord = { ...parentChildData, resultDate: resultData.date, resultSummary: resultData.summary, detailedResult: resultData.detailedResult, submittedBy: submitterDisplay, submissionTimestamp: timestamp }; currentResultRecord = fullResultRecord; allResults.push(fullResultRecord); saveResults(); const infoRecordForTable = { childName: parentChildData['child-name'] || 'N/A', parentName: parentChildData['parent-name'] || 'N/A', mobile: parentChildData['mobile'] || 'N/A', email: parentChildData['email'] || 'N/A', ageGroup: parentChildData['ageGroup'] || 'N/A', submittedBy: submitterDisplay, submissionTimestamp: timestamp }; allParentChildInfo.push(infoRecordForTable); saveParentChildInfo(); displayResults(fullResultRecord); showSection('results-section'); } catch (e) { console.error("Error submitting survey:", e); showAlert('error', `Error processing results: ${e.message || 'Unknown error'}`); } }
    function displayResults(record) { const resCont = document.getElementById('result-content'); const resTitle = document.getElementById('results-title'); if (!resCont || !resTitle) { console.error("Result elements missing!"); return; } if (!record || !record.detailedResult) { console.error("Invalid result record:", record); resCont.innerHTML = "<p>Error displaying results.</p>"; resTitle.textContent = "Error / त्रुटी"; return; } const dets = record.detailedResult; const scrs = dets.scores || {}; const code = dets.uniqueCode || 'N/A'; const analysis = dets.analysis || 'Analysis unavailable.'; const recs = dets.recommendations || []; const lang = record.language || 'english'; const ageGrp = record.ageGroup || 'N/A'; resTitle.textContent = lang === 'mr' ? "निकाल" : "Results"; let scoresHtml = `<div class="preschool-scores"><h4>${lang === 'mr' ? 'गुण' : 'Scores'} (4-20)</h4><div class="result-details">`; const categories = ["Intensity", "Activity Level", "Regularity", "Quality of Mood", "Emotional Sensitivity (Self)", "Emotional Sensitivity (Others)", "Sensory Sensitivity", "Adaptability", "Approach/Withdrawal", "Distractibility"]; categories.forEach(cat => { const scoreValue = scrs[cat]; const scoreDisplay = (scoreValue === null || scoreValue === undefined) ? 'N/A' : scoreValue; const categoryTitle = lang === 'mr' ? getMarathiCategoryTitle(cat) : cat; scoresHtml += `<p><strong>${categoryTitle}:</strong> ${scoreDisplay}</p>`; }); scoresHtml += '</div></div>'; const detailsHtml = `<div class="result-details"><p><strong><i class="fas fa-user"></i> ${lang === 'mr' ? 'नाव' : 'Name'}:</strong> ${record['child-name'] || 'N/A'}</p><p><strong><i class="fas fa-users"></i> ${lang === 'mr' ? 'पालक' : 'Parent'}:</strong> ${record['parent-name'] || 'N/A'}</p><p><strong><i class="fas fa-calendar-alt"></i> ${lang === 'mr' ? 'गट' : 'Group'}:</strong> ${ageGrp}</p><p><strong><i class="fas fa-calendar-check"></i> ${lang === 'mr' ? 'तारीख' : 'Date'}:</strong> ${record.resultDate || 'N/A'}</p><p><strong><i class="fas fa-info-circle"></i> ${lang === 'mr' ? 'सारांश' : 'Summary'}:</strong> ${record.resultSummary || 'N/A'}</p><p class="unique-code"><strong><i class="fas fa-key"></i> ${lang === 'mr' ? 'कोड' : 'Code'}:</strong> <strong>${code}</strong></p></div>${scoresHtml}<h4>${lang === 'mr' ? 'विश्लेषण' : 'Analysis'}</h4><p>${analysis}</p>`; let recsHtml = `<div class="recommendations-container"><div class="recommendations-toggle" id="recommendations-toggle" tabindex="0" role="button" aria-expanded="false" aria-controls="recommendations-list"><i class="fas fa-chevron-down"></i> ${lang === 'mr' ? 'शिफारसी' : 'Recommendations'} <i class="fas fa-chevron-down"></i></div><ul class="recommendations-list" id="recommendations-list">`; if (recs.length > 0) { recs.forEach(r => { recsHtml += `<li><i class="fas fa-lightbulb"></i> ${r}</li>`; }); } else { recsHtml += `<li>${lang === 'mr' ? 'शिफारसी नाहीत.' : 'No recommendations.'}</li>`; } recsHtml += `</ul></div>`; resCont.innerHTML = detailsHtml + recsHtml; const toggleButton = document.getElementById('recommendations-toggle'); if (toggleButton) { toggleButton.addEventListener('click', handleToggleRecommendations); toggleButton.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleToggleRecommendations.call(toggleButton); } }); } else { console.warn("Rec toggle button not found."); } }
    function getMarathiCategoryTitle(englishTitle) { const titles = { "Intensity": "तीव्रता", "Activity Level": "क्रियाशीलता पातळी", "Regularity": "नियमितता", "Quality of Mood": "मूडची गुणवत्ता", "Emotional Sensitivity (Self)": "भावनिक संवेदनशीलता (स्व)", "Emotional Sensitivity (Others)": "भावनिक संवेदनशीलता (इतर)", "Sensory Sensitivity": "संवेदना संवेदनशीलता", "Adaptability": "अनुकूलता", "Approach/Withdrawal": "दृष्टिकोन/माघार", "Distractibility": "विचलितता" }; return titles[englishTitle] || englishTitle; }
    function handleToggleRecommendations() { const list = document.getElementById('recommendations-list'); const icons = this.querySelectorAll('i'); if (list && icons.length >= 2) { const isExpanded = list.classList.toggle('active'); this.setAttribute('aria-expanded', isExpanded); icons.forEach(i => i.classList.toggle('fa-chevron-down', !isExpanded)); icons.forEach(i => i.classList.toggle('fa-chevron-up', isExpanded)); } else { console.warn("Could not find rec list/icons."); } }
    function goBack(currentSectionId) { console.log(`Back from: ${currentSectionId}`); const discardConfirmMsg = "Discard progress and return?\nप्रगती रद्द करून परत जायचे?"; const newAssessmentConfirmMsg = "Start new assessment?\nनवीन मूल्यांकन सुरू करायचे?"; const logoutConfirmMsg = "Logout?\nलॉग आउट करायचे?"; switch (currentSectionId) { case 'language-selection': showAgeGroupSelection(); break; case 'info-section': showLanguageSelection(); break; case 'instructions-section': const infoFieldsEditable = infoFields.filter(f => !f.readonly); currentInfoStep = infoFieldsEditable.length - 1; loadInfoStep(currentInfoStep); showSection('info-section'); break; case 'test-section': if (confirm(discardConfirmMsg)) { navigateToInstructions(); userAnswers = {}; currentQuestionIndex = 0; } break; case 'results-section': if (confirm(newAssessmentConfirmMsg)) { showAgeGroupSelection(); resetSurveyState(); } break; case 'admin-section': if (confirm(logoutConfirmMsg)) { logout(); } break; case 'age-group-selection': if (confirm(logoutConfirmMsg)) { logout(); } break; default: if (auth0User && confirm(logoutConfirmMsg)) { logout(); } break; } }

    // ========================================================================
    // Sharing and Exporting Functions
    // ========================================================================
    /* ... (formatResultText, shareOnWhatsApp, copyFullResult, emailResult remain the same) ... */
    function formatResultText(record, isAdminContext = false) { if (!record?.detailedResult) return "Result data unavailable."; const d = record.detailedResult; const lang = record.language || 'en'; const name = record['child-name'] || 'N/A'; const age = record.ageGroup || 'N/A'; const date = record.resultDate || 'N/A'; const code = d.uniqueCode || 'N/A'; const analysis = d.analysis || (lang === 'mr' ? 'विश्लेषण उपलब्ध नाही.' : 'Analysis unavailable.'); const scores = d.scores || {}; const recommendations = d.recommendations || []; const branding = clientBranding || {}; let text = `*${lang === 'mr' ? 'सारांश' : 'Summary'}*\n----------\n${lang === 'mr' ? 'नाव' : 'Name'}: ${name}\n${lang === 'mr' ? 'गट' : 'Group'}: ${age}\n${lang === 'mr' ? 'तारीख' : 'Date'}: ${date}\n${lang === 'mr' ? 'कोड' : 'Code'}: *${code}*\n\n*${lang === 'mr' ? 'विश्लेषण' : 'Analysis'}:*\n${analysis}\n\n`; if (Object.keys(scores).length > 0) { text += `*${lang === 'mr' ? 'गुण' : 'Scores'} (4-20):*\n`; Object.keys(scores).forEach(cat => { const catTitle = lang === 'mr' ? getMarathiCategoryTitle(cat) : cat; text += `- ${catTitle}: ${scores[cat] ?? 'N/A'}\n`; }); text += "\n"; } if (recommendations.length > 0) { text += `*${lang === 'mr' ? 'शिफारसी' : 'Recommendations'}:*\n`; recommendations.forEach(rec => { text += `- ${rec}\n`; }); } else { text += `*${lang === 'mr' ? 'शिफारसी' : 'Recommendations'}:*\n- ${lang === 'mr' ? 'काहीही नाही' : 'None'}\n`; } text += `\n----------\n${lang === 'mr' ? 'द्वारे' : 'By'}: ${branding.name || 'Preschool ProPlus'}`; if (branding.address) text += `\n${lang === 'mr' ? 'पत्ता' : 'Address'}: ${branding.address}`; if (branding.phone) text += `\n${lang === 'mr' ? 'संपर्क' : 'Contact'}: ${branding.phone}`; return text; }
    function shareOnWhatsApp(isAdminContext = false) { const recordToShare = isAdminContext ? (allResults.length > 0 ? allResults[allResults.length - 1] : null) : currentResultRecord; if (!recordToShare) { showAlert('warning', 'Result not available.'); return; } const textToSend = formatResultText(recordToShare, isAdminContext); const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(textToSend)}`; window.open(whatsappUrl, '_blank'); }
    function copyFullResult() { console.log("Copying result..."); const userRole = auth0User ? (auth0User[`${BRANDING_METADATA_NAMESPACE}role`] || 'user') : 'unknown'; const isAdminContext = (userRole === 'admin'); const recordToCopy = isAdminContext ? (allResults.length > 0 ? allResults[allResults.length - 1] : null) : currentResultRecord; if (recordToCopy) { const textToCopy = formatResultText(recordToCopy, isAdminContext); navigator.clipboard.writeText(textToCopy).then(() => { showAlert('success', 'Result copied!'); }).catch(err => { console.error('Copy failed:', err); showAlert('error', 'Could not copy.'); }); } else { showAlert('warning', 'Result not available.'); } }
    function emailResult(isAdminContext = false) { const recordToEmail = isAdminContext ? (allResults.length > 0 ? allResults[allResults.length - 1] : null) : currentResultRecord; if (!recordToEmail) { showAlert('warning', 'Result not available.'); return; } const childName = recordToEmail['child-name'] || 'Child'; const subject = `Preschool Result: ${childName}`; const body = formatResultText(recordToEmail, isAdminContext); const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`; if (mailtoLink.length > 2000) { showAlert('warning', 'Result too long for email link. Use copy.'); copyFullResult(); } else { window.location.href = mailtoLink; } }

    // ========================================================================
    // Admin Section Logic
    // ========================================================================
    /* ... (showAdminDashboard, populateInfoTable, populateResultsTable, clearReports, escapeCsvField, convertArrayOfObjectsToCSV, downloadCSV, exportAllResultsToCSV, exportStudentInfoToCSV, submitParentChildInfo, clearStudentInfo, generatePreschoolDevelopmentPlan, sharePlanOnWhatsApp, emailPlan, copyPlan remain the same) ... */
    function showAdminDashboard() { console.log("Navigating to Admin Dashboard."); const role = auth0User ? (auth0User[`${BRANDING_METADATA_NAMESPACE}role`] || 'user') : 'unknown'; if (role !== 'admin') { showAlert('error', 'Access Denied.'); showAgeGroupSelection(); return; } showSection('admin-section'); populateInfoTable(); populateResultsTable(); document.getElementById('backup-alert-top')?.classList.remove('hidden'); document.getElementById('backup-alert-bottom')?.classList.remove('hidden'); document.getElementById('backup-alert-results')?.classList.remove('hidden'); }
    function populateInfoTable() { const tbody = document.querySelector('#student-info-table tbody'); if (!tbody) { console.error("Info table body not found."); return; } tbody.innerHTML = ''; if (!allParentChildInfo || allParentChildInfo.length === 0) { tbody.innerHTML = '<tr><td colspan="6">No info stored.</td></tr>'; return; } allParentChildInfo.forEach(info => { const row = tbody.insertRow(); row.innerHTML = `<td>${info.childName || 'N/A'}</td><td>${info.parentName || 'N/A'}</td><td>${info.mobile || 'N/A'}</td><td>${info.email || 'N/A'}</td><td>${info.ageGroup || 'N/A'}</td><td>${info.submittedBy || 'N/A'}</td>`; }); }
    function populateResultsTable() { const tbody = document.querySelector('#results-table tbody'); if (!tbody) { console.error("Results table body not found."); return; } tbody.innerHTML = ''; if (!allResults || allResults.length === 0) { tbody.innerHTML = '<tr><td colspan="6">No results stored.</td></tr>'; return; } [...allResults].reverse().forEach(res => { const row = tbody.insertRow(); row.innerHTML = `<td>${res['child-name'] || 'N/A'}</td><td>${res.ageGroup || 'N/A'}</td><td>${res.resultDate || 'N/A'}</td><td>${res.detailedResult?.uniqueCode || 'N/A'}</td><td>${res.resultSummary || 'N/A'}</td><td>${res.submittedBy || 'N/A'}</td>`; }); }
    function clearReports() { if (confirm("WARNING: Delete ALL results permanently?")) { if (confirm("FINAL CONFIRMATION: Delete ALL results?")) { console.log("Clearing all results..."); allResults = []; currentResultRecord = null; saveResults(); populateResultsTable(); showAlert('success', 'All results deleted.'); } else { showAlert('info', 'Clear cancelled.'); } } else { showAlert('info', 'Clear cancelled.'); } }
    function escapeCsvField(field) { if (field == null) return '""'; const stringField = String(field); if (stringField.includes(',') || stringField.includes('\n') || stringField.includes('"') || /^[=+\-@]/ .test(stringField)) { return `"${stringField.replace(/"/g, '""')}"`; } return stringField; }
    function convertArrayOfObjectsToCSV(data, headersMap) { if (!data || data.length === 0) return ''; const headerValues = Object.values(headersMap); const headerKeys = Object.keys(headersMap); const headerRow = headerValues.map(escapeCsvField).join(','); const dataRows = data.map(row => { if (typeof row !== 'object' || !row) return ''; return headerKeys.map(key => { let value = row; try { key.split('.').forEach(prop => { value = (value && typeof value === 'object') ? value[prop] : undefined; }); } catch (e) { value = undefined; } return escapeCsvField(value); }).join(','); }); return "\uFEFF" + [headerRow, ...dataRows].join('\n'); }
    function downloadCSV(csvContent, filename) { if (!csvContent) { showAlert('warning', 'No data to download.'); return; } const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' }); const link = document.createElement('a'); if (link.download !== undefined) { const url = URL.createObjectURL(blob); link.href = url; link.download = filename; link.style.visibility = 'hidden'; document.body.appendChild(link); link.click(); document.body.removeChild(link); URL.revokeObjectURL(url); console.log(`CSV download: ${filename}`); } else { showAlert('error', 'CSV download not supported.'); } }
    function exportAllResultsToCSV() { console.log("Exporting results CSV..."); loadResults(); if (!allResults || allResults.length === 0) { showAlert('warning', 'No results to export.'); return; } const headers = { 'submissionTimestamp': 'Submission Timestamp', 'resultDate': 'Result Date', 'child-name': 'Child Name', 'parent-name': 'Parent Name', 'mobile': 'Mobile', 'email': 'Email', 'ageGroup': 'Age Group', 'language': 'Language', 'detailedResult.uniqueCode': 'Unique Code', 'detailedResult.analysis': 'Analysis Summary', 'detailedResult.scores.Intensity': 'Score: Intensity', 'detailedResult.scores.Activity Level': 'Score: Activity Level', 'detailedResult.scores.Regularity': 'Score: Regularity', 'detailedResult.scores.Quality of Mood': 'Score: Quality of Mood', 'detailedResult.scores.Emotional Sensitivity (Self)': 'Score: Emotional Sensitivity (Self)', 'detailedResult.scores.Emotional Sensitivity (Others)': 'Score: Emotional Sensitivity (Others)', 'detailedResult.scores.Sensory Sensitivity': 'Score: Sensory Sensitivity', 'detailedResult.scores.Adaptability': 'Score: Adaptability', 'detailedResult.scores.Approach/Withdrawal': 'Score: Approach/Withdrawal', 'detailedResult.scores.Distractibility': 'Score: Distractibility', 'submittedBy': 'Submitted By (User Info)' }; try { const csvData = convertArrayOfObjectsToCSV(allResults, headers); const timestamp = new Date().toISOString().slice(0, 16).replace(/[:T]/g, '-'); downloadCSV(csvData, `preschool_assessment_results_${timestamp}.csv`); } catch (e) { console.error("Results CSV export error:", e); showAlert('error', `Export failed: ${e.message || 'Unknown'}`); } }
    function exportStudentInfoToCSV() { console.log("Exporting info CSV..."); loadParentChildInfo(); if (!allParentChildInfo || allParentChildInfo.length === 0) { showAlert('warning', 'No info to export.'); return; } const headers = { 'submissionTimestamp': 'Record Timestamp', 'childName': 'Child Name', 'parentName': 'Parent Name', 'mobile': 'Mobile', 'email': 'Email', 'ageGroup': 'Age Group', 'submittedBy': 'Added By (User Info)' }; try { const csvData = convertArrayOfObjectsToCSV(allParentChildInfo, headers); const timestamp = new Date().toISOString().slice(0, 16).replace(/[:T]/g, '-'); downloadCSV(csvData, `parent_child_info_${timestamp}.csv`); } catch (e) { console.error("Info CSV export error:", e); showAlert('error', `Export failed: ${e.message || 'Unknown'}`); } }
    function submitParentChildInfo() { const childNameInput = document.getElementById('info-child-name'); const parentNameInput = document.getElementById('info-parent-name'); const mobileInput = document.getElementById('info-mobile'); const emailInput = document.getElementById('info-email'); const ageGroupSelect = document.getElementById('info-age-group-admin'); if (!childNameInput?.value || !parentNameInput?.value || !mobileInput?.value || !ageGroupSelect?.value) { showAlert('warning', 'Required fields missing.'); return; } if (!/^\d{10}$/.test(mobileInput.value)) { showAlert('warning', 'Invalid Mobile (10 digits).'); mobileInput?.focus(); return; } if (emailInput.value && !/\S+@\S+\.\S+/.test(emailInput.value)) { showAlert('warning', 'Invalid Email.'); emailInput?.focus(); return; } const submitterId = auth0User ? (auth0User.sub || auth0User.email || 'auth0_admin') : 'unknown_admin'; const role = auth0User ? (auth0User[`${BRANDING_METADATA_NAMESPACE}role`] || 'admin') : 'admin'; const submitterDisplay = `${submitterId} (${role})`; const newInfoRecord = { childName: childNameInput.value.trim(), parentName: parentNameInput.value.trim(), mobile: mobileInput.value.trim(), email: emailInput.value.trim() || 'N/A', ageGroup: ageGroupSelect.value, submittedBy: submitterDisplay, submissionTimestamp: new Date().toISOString() }; const existingRecordIndex = allParentChildInfo.findIndex(info => info.mobile === newInfoRecord.mobile); if (existingRecordIndex > -1) { if (confirm(`Record exists for mobile ${newInfoRecord.mobile}. Overwrite?`)) { allParentChildInfo[existingRecordIndex] = newInfoRecord; console.log("Updated info record."); } else { showAlert('info', 'Update cancelled.'); return; } } else { allParentChildInfo.push(newInfoRecord); console.log("Added new info record."); } saveParentChildInfo(); populateInfoTable(); showAlert('success', 'Info saved.'); if (childNameInput) childNameInput.value = ''; if (parentNameInput) parentNameInput.value = ''; if (mobileInput) mobileInput.value = ''; if (emailInput) emailInput.value = ''; if (ageGroupSelect) ageGroupSelect.value = ''; }
    function clearStudentInfo() { if (confirm("WARNING: Delete ALL info permanently?")) { if (confirm("FINAL CONFIRMATION: Delete ALL info?")) { console.log("Clearing all info..."); allParentChildInfo = []; saveParentChildInfo(); populateInfoTable(); showAlert('success', 'All info deleted.'); } else { showAlert('info', 'Clear cancelled.'); } } else { showAlert('info', 'Clear cancelled.'); } }
    function generatePreschoolDevelopmentPlan() { console.log("Generating plan..."); const studentNameInput = document.getElementById('plan-student-name'); const ageGroupSelect = document.getElementById('plan-age-group'); const uniqueCodeInput = document.getElementById('plan-unique-code'); const planContentDiv = document.getElementById('plan-content'); const planTextDiv = document.getElementById('plan-text'); const planLanguageSelect = document.getElementById('plan-language-select'); const selectedPlanLanguage = planLanguageSelect ? planLanguageSelect.value : 'english'; const studentName = studentNameInput?.value.trim(); const ageGroup = ageGroupSelect?.value; const uniqueCode = uniqueCodeInput?.value.trim(); if (!studentName || !ageGroup || !uniqueCode) { showAlert('warning', 'Name, Age Group, and Code required.'); return; } if (!/^[0-5]{10}$/.test(uniqueCode)) { showAlert('warning', 'Invalid Code (10 digits 0-5).'); uniqueCodeInput?.focus(); return; } const categories = ["Intensity", "Activity Level", "Regularity", "Quality of Mood", "Emotional Sensitivity (Self)", "Emotional Sensitivity (Others)", "Sensory Sensitivity", "Adaptability", "Approach/Withdrawal", "Distractibility"]; const categoryScoresApprox = {}; const codeDigits = uniqueCode.split(''); const digitToScoreMap = { '0': 6, '1': 6, '2': 8, '3': 10, '4': 13, '5': 15 }; if (codeDigits.length !== categories.length) { showAlert('error', `Code length mismatch.`); return; } categories.forEach((cat, i) => { categoryScoresApprox[cat] = digitToScoreMap[codeDigits[i]] ?? 10; }); console.log("Approx scores from code:", categoryScoresApprox); if (typeof window.buildDevelopmentPlan !== 'function') { showAlert('error', 'Plan function missing.'); return; } try { const brandingInfo = clientBranding || {}; console.log("Passing branding to plan:", brandingInfo); const planTextContent = window.buildDevelopmentPlan({ studentName: studentName, ageGroup: ageGroup, categoryScores: categoryScoresApprox, branding: brandingInfo, language: selectedPlanLanguage }); if (planTextDiv && planContentDiv) { console.log("Setting plan text..."); planTextDiv.textContent = planTextContent; planContentDiv.classList.remove('hidden'); planContentDiv.style.display = 'block'; console.log("Plan visible."); showAlert('success', 'Plan generated.'); planContentDiv.scrollIntoView({ behavior: 'smooth', block: 'start' }); } else { console.error("Plan display elements missing!"); showAlert('error', "Failed to display plan."); } } catch (error) { console.error("Error generating plan:", error); showAlert('error', `Plan generation failed: ${error.message || 'Unknown'}`); if (planContentDiv) planContentDiv.classList.add('hidden'); } }
    function sharePlanOnWhatsApp() { const planTextDiv = document.getElementById('plan-text'); if (planTextDiv?.textContent) { const formattedText = `*Preschool Development Plan*\n------------------------\n${planTextDiv.textContent}`; const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(formattedText)}`; window.open(whatsappUrl, '_blank'); } else { showAlert('warning', 'No plan generated.'); } }
    function emailPlan() { const planTextDiv = document.getElementById('plan-text'); const studentNameInput = document.getElementById('plan-student-name'); const studentName = studentNameInput?.value.trim() || 'Child'; if (planTextDiv?.textContent) { const planText = planTextDiv.textContent; const subject = `Preschool Plan: ${studentName}`; const body = planText; const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`; if (mailtoLink.length > 2000) { showAlert('warning', 'Plan too long for email. Use copy.'); copyPlan(); } else { window.location.href = mailtoLink; } } else { showAlert('warning', 'No plan generated.'); } }
    function copyPlan() { const planTextDiv = document.getElementById('plan-text'); if (planTextDiv?.textContent) { navigator.clipboard.writeText(planTextDiv.textContent).then(() => { showAlert('success', 'Plan copied!'); }).catch(err => { console.error('Copy failed:', err); showAlert('error', 'Could not copy.'); }); } else { showAlert('warning', 'No plan generated.'); } }

    // ========================================================================
    // Initialization & Event Listener Setup
    // ========================================================================

    // *** MODIFIED: Initialize App triggers Auth0 flow ***
    async function initializeApp() {
        console.log(`Initializing app (v3.1 - Immediate Redirect)...`);
        // Show loading message immediately
        if (loadingMessageEl) loadingMessageEl.style.display = 'flex';
        if (containerEl) containerEl.style.display = 'none'; // Hide app container

        try {
            loadResults();
            loadParentChildInfo();
            // Configure Auth0 and handle page load (which includes auth check & redirect/UI update)
            await handlePageLoad(); // This now contains the core logic flow
        } catch (e) {
            console.error("Initialization failed:", e);
            // Error handled within handlePageLoad or configureAuth0Client
            // Ensure loading message shows error if needed
             if (loadingMessageEl && !loadingMessageEl.textContent.includes('Error')) {
                 loadingMessageEl.innerHTML = `<p style="color: red;">Application failed to load. Please refresh.</p>`;
             }
        }

        // Attach event listeners (safe to do even if redirect happens)
        console.log("Setting up event listeners...");
        try {
            loginBtnEl?.addEventListener('click', login); // Login button in the hidden login section
            // Logout buttons
            document.getElementById('age-group-logout-btn')?.addEventListener('click', logout);
            document.getElementById('results-logout-btn')?.addEventListener('click', logout);
            document.getElementById('admin-logout-btn')?.addEventListener('click', logout);
            // Other listeners...
            document.getElementById('age-group-next-btn')?.addEventListener('click', validateAndProceedToLanguage);
            document.getElementById('lang-en-btn')?.addEventListener('click', () => startSurvey('english'));
            document.getElementById('lang-mr-btn')?.addEventListener('click', () => startSurvey('marathi'));
            document.getElementById('lang-back-btn')?.addEventListener('click', () => goBack('language-selection'));
            document.getElementById('info-back-btn')?.addEventListener('click', previousInfoStep);
            document.getElementById('info-next-btn')?.addEventListener('click', nextInfoStep);
            document.getElementById('instr-back-btn')?.addEventListener('click', () => goBack('instructions-section'));
            document.getElementById('instr-start-btn')?.addEventListener('click', showSurvey);
            document.getElementById('back-btn')?.addEventListener('click', previousQuestion);
            document.getElementById('next-btn')?.addEventListener('click', nextQuestion);
            document.getElementById('submit-btn')?.addEventListener('click', submitSurvey);
            document.getElementById('results-copy-btn')?.addEventListener('click', copyFullResult);
            document.getElementById('results-whatsapp-btn')?.addEventListener('click', () => shareOnWhatsApp(false));
            document.getElementById('results-email-btn')?.addEventListener('click', () => emailResult(false));
            document.getElementById('admin-export-results-top-btn')?.addEventListener('click', exportAllResultsToCSV);
            document.getElementById('admin-export-info-top-btn')?.addEventListener('click', exportStudentInfoToCSV);
            document.getElementById('admin-export-all-results-btn')?.addEventListener('click', exportAllResultsToCSV);
            document.getElementById('admin-clear-results-btn')?.addEventListener('click', clearReports);
            document.getElementById('admin-whatsapp-last-btn')?.addEventListener('click', () => shareOnWhatsApp(true));
            document.getElementById('admin-email-last-btn')?.addEventListener('click', () => emailResult(true));
            document.getElementById('admin-generate-plan-btn')?.addEventListener('click', generatePreschoolDevelopmentPlan);
            document.getElementById('admin-copy-plan-btn')?.addEventListener('click', copyPlan);
            document.getElementById('admin-whatsapp-plan-btn')?.addEventListener('click', sharePlanOnWhatsApp);
            document.getElementById('admin-email-plan-btn')?.addEventListener('click', emailPlan);
            document.getElementById('admin-save-info-btn')?.addEventListener('click', submitParentChildInfo);
            document.getElementById('admin-export-info-btn')?.addEventListener('click', exportStudentInfoToCSV);
            document.getElementById('admin-clear-info-btn')?.addEventListener('click', clearStudentInfo);
            document.getElementById('admin-export-results-btn')?.addEventListener('click', exportAllResultsToCSV);
            document.getElementById('admin-clear-results-main-btn')?.addEventListener('click', clearReports);

            console.log("Event listeners attached.");
        } catch (error) {
            console.error("Error attaching listeners:", error);
            showAlert('error', 'Failed to initialize page controls.');
        }
    }

    // --- Start Application ---
    initializeApp();

}); // End DOMContentLoaded listener

// results.js - Handles calculation, recommendations for Preschool Assessment v3.3
// FIX: Corrected userAnswers object access (use string index).
// NOTE: Recommendation logic and ALL content are still placeholders.

// *** Recommendation Data (PLACEHOLDERS - Needs Completion, Added more items) ***
const recommendationsPreschool_en = {
    'default': [ /* ... (Placeholder content as in previous version) ... */
        "Encourage pretend play (e.g., playing house, doctor) to boost imagination.",
        "Read colourful storybooks daily and ask simple questions about the story.",
        "Provide puzzles (4-10 pieces) and building blocks to enhance problem-solving.",
        "Sing action songs and nursery rhymes together.",
        "Offer opportunities for outdoor play: running, jumping, climbing on safe equipment.",
        "Practice sharing toys during playtime with siblings or friends.",
        "Talk about different feelings (happy, sad, angry) using simple words.",
        "Give simple choices, like choosing between two snacks or activities.",
        "Engage your child in simple craft activities like coloring or play-dough.",
        "Set clear and consistent rules and routines." // 10 items
    ],
    'support_sensitivity': [ /* ... (Placeholder content as in previous version) ... */
        "Provide a quiet space for your child to retreat to when overwhelmed.",
        "Introduce new foods or textures gradually and without pressure.",
        "Use dimmer lighting if bright lights are bothersome.",
        "Choose clothing with comfortable textures; remove tags if needed.",
        "Prepare your child for potentially loud environments or allow noise-reducing headphones.",
        "Acknowledge their sensitivity without judgment ('I see that sound bothers you').",
        "Offer deep pressure activities like hugs or weighted lap pads if calming." // 7 items
    ],
     'support_adaptability': [ /* ... (Placeholder content as in previous version) ... */
        "Provide verbal warnings before transitions (e.g., '5 more minutes until clean-up').",
        "Use visual schedules (pictures or lists) to show the day's activities.",
        "Introduce new situations, people, or foods gradually.",
        "Offer comfort objects (like a favorite toy) during changes.",
        "Keep routines as consistent as possible, especially bedtime and mealtime.",
        "Praise flexibility when your child handles change well, even small ones.",
        "Role-play upcoming changes or new situations beforehand." // 7 items
    ],
    'enrich_activity': [ /* ... (Placeholder content as in previous version) ... */
        "Ensure plenty of safe space and time for running, jumping, and large motor play daily.",
        "Incorporate movement breaks during quiet activities.",
        "Enroll in age-appropriate sports or movement classes (tumbling, dance).",
        "Channel energy into helpful tasks like carrying groceries or tidying toys.",
        "Engage in active games like obstacle courses or scavenger hunts.",
        "Visit playgrounds with diverse equipment regularly." // 6 items
    ],
};

const recommendationsPreschool_mr = {
     'default': [ /* ... (Placeholder MARATHI content as in previous version) ... */
        "कल्पनाशक्ती वाढवण्यासाठी काल्पनिक खेळांना (उदा. घर-घर, डॉक्टर) प्रोत्साहन द्या.",
        "रोज रंगीत गोष्टींची पुस्तके वाचा आणि गोष्टीबद्दल सोपे प्रश्न विचारा.",
        "समस्या सोडवण्यासाठी कोडी (४-१० तुकडे) आणि बिल्डिंग ब्लॉक्स द्या.",
        "एकत्र कृतीयुक्त गाणी आणि बडबडगीते म्हणा.",
        "घराबाहेर खेळण्याची संधी द्या: धावणे, उडी मारणे, सुरक्षित उपकरणांवर चढणे.",
        "भावंडांसोबत किंवा मित्रांसोबत खेळताना खेळणी शेअर करण्याचा सराव करा.",
        "वेगवेगळ्या भावनांबद्दल (आनंदी, दुःखी, रागावलेला) सोप्या शब्दांत बोला.",
        "दोन स्नॅक्स किंवा क्रियाकलापांमधून निवडण्यासारखे सोपे पर्याय द्या.",
        "तुमच्या मुलाला रंगकाम किंवा प्ले-डोह सारख्या सोप्या हस्तकला कामात गुंतवा.",
        "स्पष्ट आणि सुसंगत नियम आणि दिनचर्या सेट करा." // 10 items
    ],
     'support_sensitivity': [ /* ... (Placeholder MARATHI content as in previous version) ... */
        "त्रासल्यावर शांत होण्यासाठी तुमच्या मुलाला एक शांत जागा द्या.",
        "नवीन पदार्थ किंवा पोत हळूहळू आणि दबावाशिवाय सादर करा.",
        "तेजस्वी दिव्यांचा त्रास होत असल्यास मंद प्रकाश वापरा.",
        "आरामदायक पोत असलेले कपडे निवडा; गरज भासल्यास टॅग काढा.",
        "संभाव्य गोंगाटाच्या वातावरणासाठी तुमच्या मुलाला तयार करा किंवा आवाज कमी करणारे हेडफोन वापरू द्या.",
        "न्याय न करता त्यांच्या संवेदनशीलतेची कबुली द्या ('मला दिसते की आवाजाने तुला त्रास होतो').",
        "शांत करणारे मिठी किंवा वजनदार लॅप पॅडसारखे खोल दाब देणारे क्रियाकलाप ऑफर करा." // 7 items
    ],
     'support_adaptability': [ /* ... (Placeholder MARATHI content as in previous version) ... */
         "बदलांपूर्वी तोंडी सूचना द्या (उदा. 'आवरायला अजून ५ मिनिटे').",
        "दिवसाचे क्रियाकलाप दर्शविण्यासाठी व्हिज्युअल वेळापत्रक (चित्रे किंवा याद्या) वापरा.",
        "नवीन परिस्थिती, लोक किंवा पदार्थ हळूहळू सादर करा.",
        "बदलांदरम्यान आवडत्या खेळण्यासारख्या आरामदायक वस्तू द्या.",
        "विशेषतः झोपण्याच्या आणि जेवणाच्या वेळी दिनचर्या शक्य तितकी सुसंगत ठेवा.",
        "जेव्हा तुमचे मूल बदल चांगल्या प्रकारे हाताळते, तेव्हा लवचिकतेची प्रशंसा करा.",
        "येणार्‍या बदलांची किंवा नवीन परिस्थितींची भूमिका-नाटके करा." // 7 items
     ],
      'enrich_activity': [ /* ... (Placeholder MARATHI content as in previous version) ... */
        "दररोज धावण्यासाठी, उडी मारण्यासाठी आणि मोठ्या स्नायूंच्या खेळासाठी भरपूर सुरक्षित जागा आणि वेळ सुनिश्चित करा.",
        "शांत क्रियाकलापांदरम्यान हालचालींचे ब्रेक समाविष्ट करा.",
        "वयोमानानुसार योग्य खेळ किंवा हालचालींच्या वर्गात (टंबलिंग, नृत्य) नाव नोंदवा.",
        "किराणा सामान आणणे किंवा खेळणी आवरणे यासारख्या उपयुक्त कामांमध्ये ऊर्जा वापरा.",
        "अडथळ्यांची शर्यत किंवा स्कॅव्हेंजर हंटसारख्या सक्रिय खेळांमध्ये व्यस्त रहा.",
        "नियमितपणे विविध उपकरणांसह खेळाच्या मैदानांना भेट द्या." // 6 items
    ],
};

/**
 * Selects appropriate recommendations based on scores and language.
 * @param {object} categoryScores - Object with category names as keys and total scores (4-20 range expected) as values.
 * @param {string} uniqueCode - The generated unique code.
 * @param {string} selectedLanguage - 'english' or 'marathi'.
 * @returns {string[]} An array of recommendation strings.
 */
function getPreschoolRecommendations(categoryScores, uniqueCode, selectedLanguage) {
    console.log("DEBUG: Getting recommendations for scores:", categoryScores, "Lang:", selectedLanguage);
    const recs = selectedLanguage === 'marathi' ? recommendationsPreschool_mr : recommendationsPreschool_en;
    const defaultRecs = recs['default'] || []; // Fallback

    // *** PLACEHOLDER LOGIC - Replace with expert-defined rules ***
    let chosenRecs = [];
    if (typeof categoryScores !== 'object' || categoryScores === null) {
        console.error("DEBUG: Invalid categoryScores passed to getPreschoolRecommendations");
        return ["Error: Could not determine recommendations due to invalid score data."];
    }
    if ((categoryScores['Sensory Sensitivity'] ?? 0) >= 16 && recs['support_sensitivity']?.length > 0) {
        console.log("DEBUG: Applying 'support_sensitivity' recommendations.");
        chosenRecs = [...recs['support_sensitivity']];
    } else if ((categoryScores['Adaptability'] ?? 0) <= 8 && recs['support_adaptability']?.length > 0) {
         console.log("DEBUG: Applying 'support_adaptability' recommendations.");
         chosenRecs = [...recs['support_adaptability']];
    } else if ((categoryScores['Activity Level'] ?? 0) >= 16 && recs['enrich_activity']?.length > 0) {
         console.log("DEBUG: Applying 'enrich_activity' recommendations.");
         chosenRecs = [...recs['enrich_activity']];
    }
    if (chosenRecs.length === 0) {
        console.log("DEBUG: Applying 'default' recommendations.");
        chosenRecs = [...defaultRecs];
    }
    if (chosenRecs.length === 0) {
        console.warn("DEBUG: No recommendations found, providing absolute fallback.");
        return selectedLanguage === 'marathi'
            ? ["सामान्य सूचना: खेळायला आणि वाचायला प्रोत्साहन द्या."]
            : ["General recommendations: Encourage play and reading."];
    }
    console.log(`DEBUG: Returning ${chosenRecs.length} recommendations.`);
    return chosenRecs;
}


/**
 * Calculates preschool assessment results based on user answers.
 * @param {string} selectedAgeGroup - The selected age group (e.g., "Nursery").
 * @param {string} selectedLanguage - 'english' or 'marathi'.
 * @param {object} userAnswers - Object mapping question index (string '0'-'39') to the selected answer string.
 * @returns {object} An object containing date, summary, and detailedResult (scores, code, analysis, recommendations).
 */
function calculatePreschoolResults(selectedAgeGroup, selectedLanguage, userAnswers) {
    const date = new Date().toLocaleDateString('en-GB').replace(/\//g, '-'); // DD-MM-YYYY
    let detailedResult;
    let summary = selectedLanguage === 'marathi' ? "प्रीस्कूल व्यक्तिमत्व मूल्यांकन सारांश" : "Preschool Personality Assessment Summary";
    console.log("Calculating results for:", selectedAgeGroup, selectedLanguage, "with answers:", userAnswers);

    const categories = [
        "Intensity", "Activity Level", "Regularity", "Quality of Mood",
        "Emotional Sensitivity (Self)", "Emotional Sensitivity (Others)",
        "Sensory Sensitivity", "Adaptability", "Approach/Withdrawal", "Distractibility"
    ];

    try {
        const questions = window.questionsPreschool?.[selectedLanguage];
        if (!questions || !Array.isArray(questions) || questions.length !== 40) {
            console.error("Preschool questions data is missing, invalid, or incomplete (Expected 40 questions). Check questions.js");
            throw new Error("Preschool questions data is missing or incomplete.");
        }

        let categoryScores = {};
        categories.forEach(cat => categoryScores[cat] = 0);

        let answeredQuestionsCount = 0;
        let calculationWarnings = [];

        const devanagariToArabic = (numStr) => {
            const map = { '०': 0, '१': 1, '२': 2, '३': 3, '४': 4, '५': 5, '६': 6, '७': 7, '८': 8, '९': 9 };
            const arabicStr = String(numStr || '').replace(/[०-९]/g, digit => map[digit]);
            const num = parseInt(arabicStr, 10);
            return isNaN(num) ? NaN : num;
        };

        questions.forEach((q, i) => {
            // ** FIX: Use String(i) to access userAnswers **
            const questionIndexStr = String(i);
            const answerString = userAnswers[questionIndexStr]; // Get answer using string index
            const category = q.category;

            if (!category || !categories.includes(category)) {
                const warnMsg = `Q${i+1}: Invalid or missing category ('${category}') in questions.js for index ${i}. Skipping.`;
                console.warn(warnMsg);
                calculationWarnings.push(warnMsg);
                return; // Skip to the next question
            }

            if (answerString !== null && answerString !== undefined && answerString !== '') {
                 answeredQuestionsCount++;
                 let score = NaN;
                 let potentialScoreStr = null;

                 const parts = String(answerString).split(':');
                 if (parts.length > 0) {
                     potentialScoreStr = parts[0].trim();
                 }

                 if (potentialScoreStr !== null) {
                     if (selectedLanguage === 'marathi') {
                         score = devanagariToArabic(potentialScoreStr);
                     } else {
                         score = parseInt(potentialScoreStr, 10);
                     }
                 }

                 if (!isNaN(score) && score >= 1 && score <= 5) {
                     // ** Accumulate score correctly **
                     categoryScores[category] += score;
                     // console.log(`Q${i+1} (${category}): Added score ${score}. New total: ${categoryScores[category]}`);
                 } else {
                     const warnMsg = `Q${i+1} (${category}): Failed to parse valid score (1-5) from answer: "${answerString}". Found "${potentialScoreStr}", Parsed as ${score}. Score treated as 0.`;
                     console.warn(warnMsg);
                     calculationWarnings.push(warnMsg);
                 }
            } else {
                  if (userAnswers.hasOwnProperty(questionIndexStr)) {
                      const warnMsg = `Q${i+1} (${category}): Missing or empty answer for index ${i}. Score treated as 0.`;
                      console.warn(warnMsg);
                      calculationWarnings.push(warnMsg);
                  }
            }
        }); // End forEach question

        if (answeredQuestionsCount !== questions.length) {
             const warnMsg = `Warning: Processed ${answeredQuestionsCount} answers, but expected ${questions.length}.`;
             console.warn(warnMsg);
             calculationWarnings.push(warnMsg);
             summary += (selectedLanguage === 'marathi' ? " (अपूर्ण उत्तरे?)" : " (Incomplete Answers?)");
        }
         if (calculationWarnings.length > 0) {
             summary += (selectedLanguage === 'marathi' ? " (गणनेत इशारे)" : " (Calculation Warnings)");
             console.warn("Calculation Warnings Encountered:", calculationWarnings);
         }

        console.log("Final Calculated Category Scores:", categoryScores); // Log final scores before further processing

        // --- Unique Code Generation ---
        let uniqueCode = "";
        categories.forEach(cat => {
            const totalCategoryScore = categoryScores[cat] ?? 0;
            const avgCategoryScore = totalCategoryScore === 0 ? 0 : Math.round(totalCategoryScore / 4.0);
            const codeDigit = Math.max(0, Math.min(5, avgCategoryScore));
            uniqueCode += codeDigit;
        });
        if (uniqueCode.length !== categories.length) {
            console.error(`Unique code generation failed. Expected ${categories.length} digits, got ${uniqueCode.length}. Padding.`);
            uniqueCode = "0".repeat(categories.length);
        }
        console.log("Generated Unique Code:", uniqueCode);
        // --- End Unique Code Generation ---

        // --- Analysis Generation ---
        let totalScoreSum = 0;
        Object.values(categoryScores).forEach(score => totalScoreSum += (score || 0));
        const overallAverage = answeredQuestionsCount > 0 ? (totalScoreSum / answeredQuestionsCount) : 0;
        let analysis = "";
        const avgRounded = overallAverage.toFixed(1);

        if (selectedLanguage === 'marathi') {
            analysis = `एकूण सरासरी गुण ${avgRounded}/5 आहे (उत्तरांच्या आधारावर). तपशीलवार श्रेणी गुण व्यक्तिमत्त्वाचे विविध पैलू दर्शवतात. विशिष्ट शिफारसींसाठी श्रेणी गुणांचे विश्लेषण करा.`;
            if ((categoryScores['Activity Level'] ?? 0) >= 16) analysis += " उच्च क्रियाशीलता पातळी नोंदवली.";
            if ((categoryScores['Adaptability'] ?? 0) <= 8) analysis += " बदलांशी जुळवून घेण्यासाठी समर्थनाची आवश्यकता असू शकते.";
            if (calculationWarnings.length > 0) analysis += " कृपया गणनेतील इशारे लक्षात घ्या.";
        } else {
            analysis = `Overall average score is ${avgRounded}/5 (based on answers provided). Detailed category scores highlight various personality aspects. Analyze category scores for specific recommendations.`;
            if ((categoryScores['Activity Level'] ?? 0) >= 16) analysis += " High activity level noted.";
            if ((categoryScores['Adaptability'] ?? 0) <= 8) analysis += " May need support adjusting to changes.";
            if (calculationWarnings.length > 0) analysis += " Please note calculation warnings.";
        }
        console.log("Generated Analysis:", analysis);
        // --- End Analysis Generation ---

        // --- Get Recommendations ---
        const recommendations = getPreschoolRecommendations(categoryScores, uniqueCode, selectedLanguage);
        // --- End Get Recommendations ---

        detailedResult = {
            scores: categoryScores,
            uniqueCode: uniqueCode,
            analysis: analysis,
            recommendations: recommendations
        };

    } catch (error) {
        console.error("Error during calculatePreschoolResults:", error);
        summary = selectedLanguage === 'marathi' ? "निकाल गणनेत त्रुटी" : "Error calculating results";
        detailedResult = {
            scores: {},
            uniqueCode: 'ERROR',
            analysis: `${summary}: ${error.message || 'Unknown error'}`,
            recommendations: selectedLanguage === 'marathi'
                ? ["त्रुटीमुळे शिफारसी तयार करता आल्या नाहीत."]
                : ["Could not generate recommendations due to an error."]
        };
    }

    return {
        date: date,
        summary: summary,
        detailedResult: detailedResult
     };
}

// Expose the main calculation function to the global scope for script.js
window.calculatePreschoolResults = calculatePreschoolResults;

console.log("results.js v3.3 loaded (Preschool Assessment - Fixed score calculation).");
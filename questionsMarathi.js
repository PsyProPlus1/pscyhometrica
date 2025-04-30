// questions.js - Updated with Refined Questions (v3)
// Supports English, Marathi (Placeholder), Hindi (Placeholder)

// NOTE: Hindi and Marathi text below are PLACEHOLDERS.
//       Replace with actual translations for all questions and options.
// NOTE: Category counts are now uneven (3 or 4 Qs).
//       Scoring logic in results.js needs adjustment (e.g., scaling).

const questionsPreschool = {
    english: [
        // 1. Emotional Intensity (3 Qs)
        {
            text: "1. When my child is happy or excited, they show it with a lot of energy (for example, laughing loudly or jumping up and down).",
            options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"],
            category: "Intensity"
        },
        {
            text: "2. When my child is angry or upset, their reaction is very strong and intense.",
            options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"],
            category: "Intensity"
        },
        {
            text: "3. My child cannot hide their feelings – their emotions are obvious to everyone around.",
            options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"],
            category: "Intensity"
        },

        // 2. Activity Level (4 Qs)
        {
            text: "4. My child is always on the go and hardly ever sits still.",
            options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"],
            category: "Activity Level"
        },
        {
            text: "5. My child never seems to run out of energy.",
            options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"],
            category: "Activity Level"
        },
        {
            text: "6. Even during quiet activities (like listening to a story), my child has a hard time staying still.",
            options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"],
            category: "Activity Level"
        },
        {
            text: "7. My child prefers active play and running around to quiet play.",
            options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"],
            category: "Activity Level"
        },

        // 3. Daily Routines and Regularity (3 Qs)
        {
            text: "8. My child wakes up and goes to bed at about the same times each day.",
            options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"],
            category: "Regularity"
        },
        {
            text: "9. My child gets hungry at regular times each day.",
            options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"],
            category: "Regularity"
        },
        {
            text: "10. My child easily follows a regular daily routine (mealtimes, bedtime, etc.).",
            options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"],
            category: "Regularity"
        },

        // 4. General Mood (4 Qs)
        {
            text: "11. My child is generally cheerful and in a good mood.",
            options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"],
            category: "Quality of Mood"
        },
        {
            text: "12. My child smiles and laughs a lot.",
            options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"],
            category: "Quality of Mood"
        },
        {
            text: "13. My child is easy to please and content most of the time.",
            options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"],
            category: "Quality of Mood"
        },
        {
            text: "14. Even when my child gets upset, they cheer up again quickly.",
            options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"],
            category: "Quality of Mood"
        },

        // 5. Sensitivity to Own Emotions (4 Qs)
        {
            text: "15. My child is very aware of their own feelings (they usually know when they feel happy, sad, angry, etc.).",
            options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"],
            category: "Emotional Sensitivity (Self)"
        },
        {
            text: "16. My child is easily moved to tears or laughter.",
            options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"],
            category: "Emotional Sensitivity (Self)"
        },
        {
            text: "17. My child’s feelings get hurt easily (for example, they might cry if someone scolds them).",
            options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"],
            category: "Emotional Sensitivity (Self)"
        },
        {
            text: "18. My child talks about their feelings openly.",
            options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"],
            category: "Emotional Sensitivity (Self)"
        },

        // 6. Sensitivity to Others’ Emotions (Empathy) (4 Qs)
        {
            text: "19. My child notices when someone else is upset or hurt.",
            options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"],
            category: "Emotional Sensitivity (Others)"
        },
        {
            text: "20. My child tries to comfort people who are sad or upset.",
            options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"],
            category: "Emotional Sensitivity (Others)"
        },
        {
            text: "21. My child often looks concerned or sad when someone else is crying.",
            options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"],
            category: "Emotional Sensitivity (Others)"
        },
        {
            text: "22. My child is gentle and caring with younger children or pets.",
            options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"],
            category: "Emotional Sensitivity (Others)"
        },

        // 7. Sensory Sensitivity (4 Qs)
        {
            text: "23. My child is very sensitive to loud noises.",
            options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"],
            category: "Sensory Sensitivity"
        },
        {
            text: "24. My child is bothered by certain textures of food or clothing.",
            options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"],
            category: "Sensory Sensitivity"
        },
        {
            text: "25. Bright lights or strong smells easily upset my child.",
            options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"],
            category: "Sensory Sensitivity"
        },
        {
            text: "26. My child has a low tolerance for pain or discomfort (even a small bump or scrape can upset them a lot).",
            options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"],
            category: "Sensory Sensitivity"
        },

        // 8. Adaptability (Handling Change) (3 Qs)
        {
            text: "27. My child adjusts easily to changes in routine or schedule.",
            options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"],
            category: "Adaptability"
        },
        {
            text: "28. My child handles unexpected events or surprises well.",
            options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"],
            category: "Adaptability"
        },
        {
            text: "29. My child transitions easily from one activity to another (for example, stopping play to get ready for bed).",
            options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"],
            category: "Adaptability"
        },

        // 9. Approach to New Experiences (4 Qs)
        {
            text: "30. My child is eager to try new activities and experiences.",
            options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"],
            category: "Approach/Withdrawal"
        },
        {
            text: "31. My child is outgoing and makes friends easily.",
            options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"],
            category: "Approach/Withdrawal"
        },
        {
            text: "32. My child is comfortable in new places or unfamiliar situations.",
            options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"],
            category: "Approach/Withdrawal"
        },
        {
            text: "33. My child is very curious and likes to explore new things.",
            options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"],
            category: "Approach/Withdrawal"
        },

        // 10. Attention Span and Distractibility (3 Qs)
        {
            text: "34. My child is easily distracted by noises or other things happening around them.",
            options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"],
            category: "Distractibility"
        },
        {
            text: "35. My child has a hard time staying focused on one activity.",
            options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"],
            category: "Distractibility"
        },
        {
            text: "36. My child often switches quickly from one activity to another.",
            options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"],
            category: "Distractibility"
        }
    ],
    marathi: [ // --- MARATHI PLACEHOLDERS ---
        // 1. Emotional Intensity (3 Qs)
        {
            text: "[MR] १. जेव्हा माझे मूल आनंदी किंवा उत्साहित असते...",
            options: ["[MR] १: माझ्या मुलासारखे अजिबात नाही", "[MR] २: ...", "[MR] ३: ...", "[MR] ४: ...", "[MR] ५: ..."],
            category: "Intensity"
        },
        {
            text: "[MR] २. जेव्हा माझे मूल रागावलेले किंवा नाराज असते...",
            options: ["[MR] १: माझ्या मुलासारखे अजिबात नाही", "[MR] २: ...", "[MR] ३: ...", "[MR] ४: ...", "[MR] ५: ..."],
            category: "Intensity"
        },
        {
            text: "[MR] ३. माझे मूल आपल्या भावना लपवू शकत नाही...",
            options: ["[MR] १: माझ्या मुलासारखे अजिबात नाही", "[MR] २: ...", "[MR] ३: ...", "[MR] ४: ...", "[MR] ५: ..."],
            category: "Intensity"
        },
        // 2. Activity Level (4 Qs)
        {
            text: "[MR] ४. माझे मूल नेहमी धावपळीत असते...",
            options: ["[MR] १: माझ्या मुलासारखे अजिबात नाही", "[MR] २: ...", "[MR] ३: ...", "[MR] ४: ...", "[MR] ५: ..."],
            category: "Activity Level"
        },
        {
            text: "[MR] ५. माझ्या मुलामध्ये कधीच ऊर्जा कमी होत नाही असे वाटते.",
            options: ["[MR] १: माझ्या मुलासारखे अजिबात नाही", "[MR] २: ...", "[MR] ३: ...", "[MR] ४: ...", "[MR] ५: ..."],
            category: "Activity Level"
        },
        {
            text: "[MR] ६. शांत क्रियाकलापांदरम्यानही (उदा. गोष्ट ऐकताना)...",
            options: ["[MR] १: माझ्या मुलासारखे अजिबात नाही", "[MR] २: ...", "[MR] ३: ...", "[MR] ४: ...", "[MR] ५: ..."],
            category: "Activity Level"
        },
        {
            text: "[MR] ७. माझे मूल शांत खेळापेक्षा सक्रिय खेळ आणि धावपळ करण्यास प्राधान्य देते.",
            options: ["[MR] १: माझ्या मुलासारखे अजिबात नाही", "[MR] २: ...", "[MR] ३: ...", "[MR] ४: ...", "[MR] ५: ..."],
            category: "Activity Level"
        },
        // ... MARATHI PLACEHOLDERS FOR QUESTIONS 8-36 ...
        // 3. Regularity (3 Qs)
        { text: "[MR] ८. ...", options: ["[MR] १: ..."], category: "Regularity" },
        { text: "[MR] ९. ...", options: ["[MR] १: ..."], category: "Regularity" },
        { text: "[MR] १०. ...", options: ["[MR] १: ..."], category: "Regularity" },
        // 4. Quality of Mood (4 Qs)
        { text: "[MR] ११. ...", options: ["[MR] १: ..."], category: "Quality of Mood" },
        { text: "[MR] १२. ...", options: ["[MR] १: ..."], category: "Quality of Mood" },
        { text: "[MR] १३. ...", options: ["[MR] १: ..."], category: "Quality of Mood" },
        { text: "[MR] १४. ...", options: ["[MR] १: ..."], category: "Quality of Mood" },
        // 5. Emotional Sensitivity (Self) (4 Qs)
        { text: "[MR] १५. ...", options: ["[MR] १: ..."], category: "Emotional Sensitivity (Self)" },
        { text: "[MR] १६. ...", options: ["[MR] १: ..."], category: "Emotional Sensitivity (Self)" },
        { text: "[MR] १७. ...", options: ["[MR] १: ..."], category: "Emotional Sensitivity (Self)" },
        { text: "[MR] १८. ...", options: ["[MR] १: ..."], category: "Emotional Sensitivity (Self)" },
        // 6. Emotional Sensitivity (Others) (4 Qs)
        { text: "[MR] १९. ...", options: ["[MR] १: ..."], category: "Emotional Sensitivity (Others)" },
        { text: "[MR] २०. ...", options: ["[MR] १: ..."], category: "Emotional Sensitivity (Others)" },
        { text: "[MR] २१. ...", options: ["[MR] १: ..."], category: "Emotional Sensitivity (Others)" },
        { text: "[MR] २२. ...", options: ["[MR] १: ..."], category: "Emotional Sensitivity (Others)" },
        // 7. Sensory Sensitivity (4 Qs)
        { text: "[MR] २३. ...", options: ["[MR] १: ..."], category: "Sensory Sensitivity" },
        { text: "[MR] २४. ...", options: ["[MR] १: ..."], category: "Sensory Sensitivity" },
        { text: "[MR] २५. ...", options: ["[MR] १: ..."], category: "Sensory Sensitivity" },
        { text: "[MR] २६. ...", options: ["[MR] १: ..."], category: "Sensory Sensitivity" },
        // 8. Adaptability (3 Qs)
        { text: "[MR] २७. ...", options: ["[MR] १: ..."], category: "Adaptability" },
        { text: "[MR] २८. ...", options: ["[MR] १: ..."], category: "Adaptability" },
        { text: "[MR] २९. ...", options: ["[MR] १: ..."], category: "Adaptability" },
        // 9. Approach/Withdrawal (4 Qs)
        { text: "[MR] ३०. ...", options: ["[MR] १: ..."], category: "Approach/Withdrawal" },
        { text: "[MR] ३१. ...", options: ["[MR] १: ..."], category: "Approach/Withdrawal" },
        { text: "[MR] ३२. ...", options: ["[MR] १: ..."], category: "Approach/Withdrawal" },
        { text: "[MR] ३३. ...", options: ["[MR] १: ..."], category: "Approach/Withdrawal" },
        // 10. Distractibility (3 Qs)
        { text: "[MR] ३४. ...", options: ["[MR] १: ..."], category: "Distractibility" },
        { text: "[MR] ३५. ...", options: ["[MR] १: ..."], category: "Distractibility" },
        { text: "[MR] ३६. ...", options: ["[MR] १: ..."], category: "Distractibility" }
    ],
    hindi: [ // --- HINDI PLACEHOLDERS ---
        // 1. Emotional Intensity (3 Qs)
        {
            text: "[HI] १. जब मेरा बच्चा खुश या उत्साहित होता है...",
            options: ["[HI] १: मेरे बच्चे जैसा बिल्कुल नहीं", "[HI] २: ...", "[HI] ३: ...", "[HI] ४: ...", "[HI] ५: ..."],
            category: "Intensity"
        },
        {
            text: "[HI] २. जब मेरा बच्चा गुस्सा या परेशान होता है...",
            options: ["[HI] १: मेरे बच्चे जैसा बिल्कुल नहीं", "[HI] २: ...", "[HI] ३: ...", "[HI] ४: ...", "[HI] ५: ..."],
            category: "Intensity"
        },
        {
            text: "[HI] ३. मेरा बच्चा अपनी भावनाओं को छुपा नहीं सकता...",
            options: ["[HI] १: मेरे बच्चे जैसा बिल्कुल नहीं", "[HI] २: ...", "[HI] ३: ...", "[HI] ४: ...", "[HI] ५: ..."],
            category: "Intensity"
        },
        // 2. Activity Level (4 Qs)
        {
            text: "[HI] ४. मेरा बच्चा हमेशा चलता-फिरता रहता है...",
            options: ["[HI] १: मेरे बच्चे जैसा बिल्कुल नहीं", "[HI] २: ...", "[HI] ३: ...", "[HI] ४: ...", "[HI] ५: ..."],
            category: "Activity Level"
        },
        {
            text: "[HI] ५. मेरे बच्चे की ऊर्जा कभी खत्म नहीं होती लगती।",
            options: ["[HI] १: मेरे बच्चे जैसा बिल्कुल नहीं", "[HI] २: ...", "[HI] ३: ...", "[HI] ४: ...", "[HI] ५: ..."],
            category: "Activity Level"
        },
        {
            text: "[HI] ६. शांत गतिविधियों के दौरान भी (जैसे कहानी सुनना)...",
            options: ["[HI] १: मेरे बच्चे जैसा बिल्कुल नहीं", "[HI] २: ...", "[HI] ३: ...", "[HI] ४: ...", "[HI] ५: ..."],
            category: "Activity Level"
        },
        {
            text: "[HI] ७. मेरा बच्चा शांत खेल की बजाय सक्रिय खेल और दौड़ना पसंद करता है।",
            options: ["[HI] १: मेरे बच्चे जैसा बिल्कुल नहीं", "[HI] २: ...", "[HI] ३: ...", "[HI] ४: ...", "[HI] ५: ..."],
            category: "Activity Level"
        },
        // ... HINDI PLACEHOLDERS FOR QUESTIONS 8-36 ...
        // 3. Regularity (3 Qs)
        { text: "[HI] ८. ...", options: ["[HI] १: ..."], category: "Regularity" },
        { text: "[HI] ९. ...", options: ["[HI] १: ..."], category: "Regularity" },
        { text: "[HI] १०. ...", options: ["[HI] १: ..."], category: "Regularity" },
        // 4. Quality of Mood (4 Qs)
        { text: "[HI] ११. ...", options: ["[HI] १: ..."], category: "Quality of Mood" },
        { text: "[HI] १२. ...", options: ["[HI] १: ..."], category: "Quality of Mood" },
        { text: "[HI] १३. ...", options: ["[HI] १: ..."], category: "Quality of Mood" },
        { text: "[HI] १४. ...", options: ["[HI] १: ..."], category: "Quality of Mood" },
        // 5. Emotional Sensitivity (Self) (4 Qs)
        { text: "[HI] १५. ...", options: ["[HI] १: ..."], category: "Emotional Sensitivity (Self)" },
        { text: "[HI] १६. ...", options: ["[HI] १: ..."], category: "Emotional Sensitivity (Self)" },
        { text: "[HI] १७. ...", options: ["[HI] १: ..."], category: "Emotional Sensitivity (Self)" },
        { text: "[HI] १८. ...", options: ["[HI] १: ..."], category: "Emotional Sensitivity (Self)" },
        // 6. Emotional Sensitivity (Others) (4 Qs)
        { text: "[HI] १९. ...", options: ["[HI] १: ..."], category: "Emotional Sensitivity (Others)" },
        { text: "[HI] २०. ...", options: ["[HI] १: ..."], category: "Emotional Sensitivity (Others)" },
        { text: "[HI] २१. ...", options: ["[HI] १: ..."], category: "Emotional Sensitivity (Others)" },
        { text: "[HI] २२. ...", options: ["[HI] १: ..."], category: "Emotional Sensitivity (Others)" },
        // 7. Sensory Sensitivity (4 Qs)
        { text: "[HI] २३. ...", options: ["[HI] १: ..."], category: "Sensory Sensitivity" },
        { text: "[HI] २४. ...", options: ["[HI] १: ..."], category: "Sensory Sensitivity" },
        { text: "[HI] २५. ...", options: ["[HI] १: ..."], category: "Sensory Sensitivity" },
        { text: "[HI] २६. ...", options: ["[HI] १: ..."], category: "Sensory Sensitivity" },
        // 8. Adaptability (3 Qs)
        { text: "[HI] २७. ...", options: ["[HI] १: ..."], category: "Adaptability" },
        { text: "[HI] २८. ...", options: ["[HI] १: ..."], category: "Adaptability" },
        { text: "[HI] २९. ...", options: ["[HI] १: ..."], category: "Adaptability" },
        // 9. Approach/Withdrawal (4 Qs)
        { text: "[HI] ३०. ...", options: ["[HI] १: ..."], category: "Approach/Withdrawal" },
        { text: "[HI] ३१. ...", options: ["[HI] १: ..."], category: "Approach/Withdrawal" },
        { text: "[HI] ३२. ...", options: ["[HI] १: ..."], category: "Approach/Withdrawal" },
        { text: "[HI] ३३. ...", options: ["[HI] १: ..."], category: "Approach/Withdrawal" },
        // 10. Distractibility (3 Qs)
        { text: "[HI] ३४. ...", options: ["[HI] १: ..."], category: "Distractibility" },
        { text: "[HI] ३५. ...", options: ["[HI] १: ..."], category: "Distractibility" },
        { text: "[HI] ३६. ...", options: ["[HI] १: ..."], category: "Distractibility" }
    ]
};

// Expose the new questions object globally
window.questionsPreschool = questionsPreschool;

// Optional: Log the new structure for verification
console.log("questions.js loaded with updated structure (36 questions total).");
console.log("English Questions Count:", window.questionsPreschool.english.length);
console.log("Marathi Placeholders Count:", window.questionsPreschool.marathi.length);
console.log("Hindi Placeholders Count:", window.questionsPreschool.hindi.length);


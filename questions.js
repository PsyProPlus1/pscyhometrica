// questions.js

// Questions based on the user-provided Parent Survey for Assessing Personality (Ages 3-6)
// Categories: Intensity, Activity Level, Regularity, Quality of Mood,
// Emotional Sensitivity (Self), Emotional Sensitivity (Others),
// Sensory Sensitivity, Adaptability, Approach/Withdrawal, Distractibility
const questionsPreschool = {
    english: [
        // Category: Intensity
        { text: "1. My child expresses emotions very intensely, such as crying loudly or laughing uproariously.", options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"], category: "Intensity" },
        { text: "2. When my child is happy, it is very obvious to everyone.", options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"], category: "Intensity" },
        { text: "3. My child’s reactions to disappointment are often exaggerated.", options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"], category: "Intensity" },
        { text: "4. My child tends to be very expressive with their feelings.", options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"], category: "Intensity" },

        // Category: Activity Level
        { text: "5. My child is always on the go, rarely sits still.", options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"], category: "Activity Level" },
        { text: "6. My child has a lot of energy and is very active.", options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"], category: "Activity Level" },
        { text: "7. It is hard for my child to sit quietly for any length of time.", options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"], category: "Activity Level" },
        { text: "8. My child moves around a lot, even during quiet activities.", options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"], category: "Activity Level" },

        // Category: Regularity
        { text: "9. My child has a very predictable schedule for eating and sleeping.", options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"], category: "Regularity" },
        { text: "10. My child wakes up and goes to sleep at about the same time every day.", options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"], category: "Regularity" },
        { text: "11. My child’s bowel movements are regular and predictable.", options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"], category: "Regularity" },
        { text: "12. My child adapts well to routines and schedules.", options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"], category: "Regularity" },

        // Category: Quality of Mood
        { text: "13. My child is generally in a good mood.", options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"], category: "Quality of Mood" },
        { text: "14. My child smiles and laughs often.", options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"], category: "Quality of Mood" },
        { text: "15. My child is easy to please and content most of the time.", options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"], category: "Quality of Mood" },
        { text: "16. My child has a positive outlook on life.", options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"], category: "Quality of Mood" },

        // Category: Emotional Sensitivity (Self)
        { text: "17. My child is very aware of their own feelings.", options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"], category: "Emotional Sensitivity (Self)" },
        { text: "18. My child expresses their emotions freely.", options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"], category: "Emotional Sensitivity (Self)" },
        { text: "19. My child is easily moved to tears or laughter.", options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"], category: "Emotional Sensitivity (Self)" },
        { text: "20. My child has strong emotional reactions to events.", options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"], category: "Emotional Sensitivity (Self)" },

        // Category: Emotional Sensitivity (Others)
        { text: "21. My child notices when others are upset and tries to comfort them.", options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"], category: "Emotional Sensitivity (Others)" },
        { text: "22. My child is very empathetic and feels what others are feeling.", options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"], category: "Emotional Sensitivity (Others)" },
        { text: "23. My child is quick to respond to the emotions of others.", options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"], category: "Emotional Sensitivity (Others)" },
        { text: "24. My child is sensitive to the needs and feelings of those around them.", options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"], category: "Emotional Sensitivity (Others)" },

        // Category: Sensory Sensitivity
        { text: "25. My child is very sensitive to loud noises.", options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"], category: "Sensory Sensitivity" },
        { text: "26. My child dislikes certain textures of food or clothing.", options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"], category: "Sensory Sensitivity" },
        { text: "27. My child is bothered by bright lights or strong smells.", options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"], category: "Sensory Sensitivity" },
        { text: "28. My child has a low tolerance for pain or discomfort.", options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"], category: "Sensory Sensitivity" },

        // Category: Adaptability
        { text: "29. My child adjusts easily to changes in routine.", options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"], category: "Adaptability" },
        { text: "30. My child is flexible and goes with the flow.", options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"], category: "Adaptability" },
        { text: "31. When plans change, my child handles it well.", options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"], category: "Adaptability" },
        { text: "32. My child is open to trying new things without much fuss.", options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"], category: "Adaptability" },

        // Category: Approach/Withdrawal
        { text: "33. My child is eager to try new activities.", options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"], category: "Approach/Withdrawal" },
        { text: "34. My child is outgoing and makes friends easily.", options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"], category: "Approach/Withdrawal" },
        { text: "35. My child is comfortable in new situations.", options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"], category: "Approach/Withdrawal" },
        { text: "36. My child shows curiosity and interest in new things.", options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"], category: "Approach/Withdrawal" },

        // Category: Distractibility
        { text: "37. My child is easily distracted by noises or movements around them.", options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"], category: "Distractibility" },
        { text: "38. It is hard for my child to focus on a task when there are other things happening.", options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"], category: "Distractibility" },
        { text: "39. My child often switches from one activity to another quickly.", options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"], category: "Distractibility" },
        { text: "40. My child has trouble staying on task when there are distractions.", options: ["1: Not at all like my child", "2: A little like my child", "3: Somewhat like my child", "4: Quite a bit like my child", "5: Very much like my child"], category: "Distractibility" }
    ],
    marathi: [
        // *** PLACEHOLDER MARATHI TRANSLATIONS - PLEASE VERIFY/REPLACE ***
        // Category: Intensity (तीव्रता)
        { text: "१. माझे मूल भावना खूप तीव्रतेने व्यक्त करते, जसे की मोठ्याने रडणे किंवा खूप हसणे.", options: ["१: माझ्या मुलासारखे अजिबात नाही", "२: माझ्या मुलासारखे थोडेसे", "३: माझ्या मुलासारखे काहीसे", "४: माझ्या मुलासारखे बरेचसे", "५: माझ्या मुलासारखे खूप जास्त"], category: "Intensity" },
        { text: "२. माझे मूल आनंदी असते, तेव्हा ते सर्वांना स्पष्टपणे कळते.", options: ["१: माझ्या मुलासारखे अजिबात नाही", "२: माझ्या मुलासारखे थोडेसे", "३: माझ्या मुलासारखे काहीसे", "४: माझ्या मुलासारखे बरेचसे", "५: माझ्या मुलासारखे खूप जास्त"], category: "Intensity" },
        { text: "३. निराशेवर माझ्या मुलाच्या प्रतिक्रिया अनेकदा अतिशयोक्तीपूर्ण असतात.", options: ["१: माझ्या मुलासारखे अजिबात नाही", "२: माझ्या मुलासारखे थोडेसे", "३: माझ्या मुलासारखे काहीसे", "४: माझ्या मुलासारखे बरेचसे", "५: माझ्या मुलासारखे खूप जास्त"], category: "Intensity" },
        { text: "४. माझे मूल आपल्या भावना व्यक्त करण्यास खूप तत्पर असते.", options: ["१: माझ्या मुलासारखे अजिबात नाही", "२: माझ्या मुलासारखे थोडेसे", "३: माझ्या मुलासारखे काहीसे", "४: माझ्या मुलासारखे बरेचसे", "५: माझ्या मुलासारखे खूप जास्त"], category: "Intensity" },

        // Category: Activity Level (क्रियाशीलता पातळी)
        { text: "५. माझे मूल नेहमी धावपळीत असते, क्वचितच शांत बसते.", options: ["१: माझ्या मुलासारखे अजिबात नाही", "२: माझ्या मुलासारखे थोडेसे", "३: माझ्या मुलासारखे काहीसे", "४: माझ्या मुलासारखे बरेचसे", "५: माझ्या मुलासारखे खूप जास्त"], category: "Activity Level" },
        { text: "६. माझ्या मुलामध्ये खूप ऊर्जा आहे आणि ते खूप सक्रिय आहे.", options: ["१: माझ्या मुलासारखे अजिबात नाही", "२: माझ्या मुलासारखे थोडेसे", "३: माझ्या मुलासारखे काहीसे", "४: माझ्या मुलासारखे बरेचसे", "५: माझ्या मुलासारखे खूप जास्त"], category: "Activity Level" },
        { text: "७. माझ्या मुलाला कोणत्याही वेळी शांत बसणे कठीण जाते.", options: ["१: माझ्या मुलासारखे अजिबात नाही", "२: माझ्या मुलासारखे थोडेसे", "३: माझ्या मुलासारखे काहीसे", "४: माझ्या मुलासारखे बरेचसे", "५: माझ्या मुलासारखे खूप जास्त"], category: "Activity Level" },
        { text: "८. माझे मूल शांत क्रियाकलापांदरम्यानही खूप हालचाल करते.", options: ["१: माझ्या मुलासारखे अजिबात नाही", "२: माझ्या मुलासारखे थोडेसे", "३: माझ्या मुलासारखे काहीसे", "४: माझ्या मुलासारखे बरेचसे", "५: माझ्या मुलासारखे खूप जास्त"], category: "Activity Level" },

        // Category: Regularity (नियमितता)
        { text: "९. माझ्या मुलाचे खाण्यापिण्याचे आणि झोपण्याचे वेळापत्रक खूप नियमित आहे.", options: ["१: माझ्या मुलासारखे अजिबात नाही", "२: माझ्या मुलासारखे थोडेसे", "३: माझ्या मुलासारखे काहीसे", "४: माझ्या मुलासारखे बरेचसे", "५: माझ्या मुलासारखे खूप जास्त"], category: "Regularity" },
        { text: "१०. माझे मूल दररोज साधारणपणे एकाच वेळी उठते आणि झोपते.", options: ["१: माझ्या मुलासारखे अजिबात नाही", "२: माझ्या मुलासारखे थोडेसे", "३: माझ्या मुलासारखे काहीसे", "४: माझ्या मुलासारखे बरेचसे", "५: माझ्या मुलासारखे खूप जास्त"], category: "Regularity" },
        { text: "११. माझ्या मुलाची शौचाची सवय नियमित आणि अंदाजित आहे.", options: ["१: माझ्या मुलासारखे अजिबात नाही", "२: माझ्या मुलासारखे थोडेसे", "३: माझ्या मुलासारखे काहीसे", "४: माझ्या मुलासारखे बरेचसे", "५: माझ्या मुलासारखे खूप जास्त"], category: "Regularity" },
        { text: "१२. माझे मूल दिनचर्या आणि वेळापत्रकाशी चांगले जुळवून घेते.", options: ["१: माझ्या मुलासारखे अजिबात नाही", "२: माझ्या मुलासारखे थोडेसे", "३: माझ्या मुलासारखे काहीसे", "४: माझ्या मुलासारखे बरेचसे", "५: माझ्या मुलासारखे खूप जास्त"], category: "Regularity" },

        // Category: Quality of Mood (मूडची गुणवत्ता)
        { text: "१३. माझे मूल सहसा चांगल्या मूडमध्ये असते.", options: ["१: माझ्या मुलासारखे अजिबात नाही", "२: माझ्या मुलासारखे थोडेसे", "३: माझ्या मुलासारखे काहीसे", "४: माझ्या मुलासारखे बरेचसे", "५: माझ्या मुलासारखे खूप जास्त"], category: "Quality of Mood" },
        { text: "१४. माझे मूल अनेकदा हसते.", options: ["१: माझ्या मुलासारखे अजिबात नाही", "२: माझ्या मुलासारखे थोडेसे", "३: माझ्या मुलासारखे काहीसे", "४: माझ्या मुलासारखे बरेचसे", "५: माझ्या मुलासारखे खूप जास्त"], category: "Quality of Mood" },
        { text: "१५. माझ्या मुलाला खुश करणे सोपे आहे आणि ते बहुतेक वेळा समाधानी असते.", options: ["१: माझ्या मुलासारखे अजिबात नाही", "२: माझ्या मुलासारखे थोडेसे", "३: माझ्या मुलासारखे काहीसे", "४: माझ्या मुलासारखे बरेचसे", "५: माझ्या मुलासारखे खूप जास्त"], category: "Quality of Mood" },
        { text: "१६. माझ्या मुलाचा जीवनाकडे पाहण्याचा दृष्टिकोन सकारात्मक आहे.", options: ["१: माझ्या मुलासारखे अजिबात नाही", "२: माझ्या मुलासारखे थोडेसे", "३: माझ्या मुलासारखे काहीसे", "४: माझ्या मुलासारखे बरेचसे", "५: माझ्या मुलासारखे खूप जास्त"], category: "Quality of Mood" },

        // Category: Emotional Sensitivity (Self) (भावनिक संवेदनशीलता - स्वतःची)
        { text: "१७. माझे मूल स्वतःच्या भावनांबद्दल खूप जागरूक आहे.", options: ["१: माझ्या मुलासारखे अजिबात नाही", "२: माझ्या मुलासारखे थोडेसे", "३: माझ्या मुलासारखे काहीसे", "४: माझ्या मुलासारखे बरेचसे", "५: माझ्या मुलासारखे खूप जास्त"], category: "Emotional Sensitivity (Self)" },
        { text: "१८. माझे मूल आपल्या भावना मुक्तपणे व्यक्त करते.", options: ["१: माझ्या मुलासारखे अजिबात नाही", "२: माझ्या मुलासारखे थोडेसे", "३: माझ्या मुलासारखे काहीसे", "४: माझ्या मुलासारखे बरेचसे", "५: माझ्या मुलासारखे खूप जास्त"], category: "Emotional Sensitivity (Self)" },
        { text: "१९. माझे मूल सहजपणे रडते किंवा हसते.", options: ["१: माझ्या मुलासारखे अजिबात नाही", "२: माझ्या मुलासारखे थोडेसे", "३: माझ्या मुलासारखे काहीसे", "४: माझ्या मुलासारखे बरेचसे", "५: माझ्या मुलासारखे खूप जास्त"], category: "Emotional Sensitivity (Self)" },
        { text: "२०. घटनांवर माझ्या मुलाच्या भावनिक प्रतिक्रिया तीव्र असतात.", options: ["१: माझ्या मुलासारखे अजिबात नाही", "२: माझ्या मुलासारखे थोडेसे", "३: माझ्या मुलासारखे काहीसे", "४: माझ्या मुलासारखे बरेचसे", "५: माझ्या मुलासारखे खूप जास्त"], category: "Emotional Sensitivity (Self)" },

        // Category: Emotional Sensitivity (Others) (भावनिक संवेदनशीलता - इतरांची)
        { text: "२१. इतर लोक नाराज असताना माझे मूल ते लक्षात घेते आणि त्यांना धीर देण्याचा प्रयत्न करते.", options: ["१: माझ्या मुलासारखे अजिबात नाही", "२: माझ्या मुलासारखे थोडेसे", "३: माझ्या मुलासारखे काहीसे", "४: माझ्या मुलासारखे बरेचसे", "५: माझ्या मुलासारखे खूप जास्त"], category: "Emotional Sensitivity (Others)" },
        { text: "२२. माझे मूल खूप सहानुभूतीशील आहे आणि इतरांना काय वाटते ते अनुभवते.", options: ["१: माझ्या मुलासारखे अजिबात नाही", "२: माझ्या मुलासारखे थोडेसे", "३: माझ्या मुलासारखे काहीसे", "४: माझ्या मुलासारखे बरेचसे", "५: माझ्या मुलासारखे खूप जास्त"], category: "Emotional Sensitivity (Others)" },
        { text: "२३. माझे मूल इतरांच्या भावनांना पटकन प्रतिसाद देते.", options: ["१: माझ्या मुलासारखे अजिबात नाही", "२: माझ्या मुलासारखे थोडेसे", "३: माझ्या मुलासारखे काहीसे", "४: माझ्या मुलासारखे बरेचसे", "५: माझ्या मुलासारखे खूप जास्त"], category: "Emotional Sensitivity (Others)" },
        { text: "२४. माझे मूल त्यांच्या सभोवतालच्या लोकांच्या गरजा आणि भावनांप्रति संवेदनशील आहे.", options: ["१: माझ्या मुलासारखे अजिबात नाही", "२: माझ्या मुलासारखे थोडेसे", "३: माझ्या मुलासारखे काहीसे", "४: माझ्या मुलासारखे बरेचसे", "५: माझ्या मुलासारखे खूप जास्त"], category: "Emotional Sensitivity (Others)" },

        // Category: Sensory Sensitivity (संवेदना संवेदनशीलता)
        { text: "२५. माझे मूल मोठ्या आवाजाबद्दल खूप संवेदनशील आहे.", options: ["१: माझ्या मुलासारखे अजिबात नाही", "२: माझ्या मुलासारखे थोडेसे", "३: माझ्या मुलासारखे काहीसे", "४: माझ्या मुलासारखे बरेचसे", "५: माझ्या मुलासारखे खूप जास्त"], category: "Sensory Sensitivity" },
        { text: "२६. माझ्या मुलाला अन्न किंवा कपड्यांचे काही विशिष्ट पोत आवडत नाहीत.", options: ["१: माझ्या मुलासारखे अजिबात नाही", "२: माझ्या मुलासारखे थोडेसे", "३: माझ्या मुलासारखे काहीसे", "४: माझ्या मुलासारखे बरेचसे", "५: माझ्या मुलासारखे खूप जास्त"], category: "Sensory Sensitivity" },
        { text: "२७. माझ्या मुलाला तेजस्वी प्रकाश किंवा तीव्र वासाचा त्रास होतो.", options: ["१: माझ्या मुलासारखे अजिबात नाही", "२: माझ्या मुलासारखे थोडेसे", "३: माझ्या मुलासारखे काहीसे", "४: माझ्या मुलासारखे बरेचसे", "५: माझ्या मुलासारखे खूप जास्त"], category: "Sensory Sensitivity" },
        { text: "२८. माझ्या मुलाची वेदना किंवा अस्वस्थता सहन करण्याची क्षमता कमी आहे.", options: ["१: माझ्या मुलासारखे अजिबात नाही", "२: माझ्या मुलासारखे थोडेसे", "३: माझ्या मुलासारखे काहीसे", "४: माझ्या मुलासारखे बरेचसे", "५: माझ्या मुलासारखे खूप जास्त"], category: "Sensory Sensitivity" },

        // Category: Adaptability (अनुकूलता)
        { text: "२९. माझे मूल दिनचर्येतील बदलांशी सहज जुळवून घेते.", options: ["१: माझ्या मुलासारखे अजिबात नाही", "२: माझ्या मुलासारखे थोडेसे", "३: माझ्या मुलासारखे काहीसे", "४: माझ्या मुलासारखे बरेचसे", "५: माझ्या मुलासारखे खूप जास्त"], category: "Adaptability" },
        { text: "३०. माझे मूल लवचिक आहे आणि प्रवाहाबरोबर जाते.", options: ["१: माझ्या मुलासारखे अजिबात नाही", "२: माझ्या मुलासारखे थोडेसे", "३: माझ्या मुलासारखे काहीसे", "४: माझ्या मुलासारखे बरेचसे", "५: माझ्या मुलासारखे खूप जास्त"], category: "Adaptability" },
        { text: "३१. योजना बदलल्यास, माझे मूल ते चांगले हाताळते.", options: ["१: माझ्या मुलासारखे अजिबात नाही", "२: माझ्या मुलासारखे थोडेसे", "३: माझ्या मुलासारखे काहीसे", "४: माझ्या मुलासारखे बरेचसे", "५: माझ्या मुलासारखे खूप जास्त"], category: "Adaptability" },
        { text: "३२. माझे मूल फार त्रास न करता नवीन गोष्टी आजमावण्यास तयार असते.", options: ["१: माझ्या मुलासारखे अजिबात नाही", "२: माझ्या मुलासारखे थोडेसे", "३: माझ्या मुलासारखे काहीसे", "४: माझ्या मुलासारखे बरेचसे", "५: माझ्या मुलासारखे खूप जास्त"], category: "Adaptability" },

        // Category: Approach/Withdrawal (दृष्टिकोन/माघार)
        { text: "३३. माझे मूल नवीन क्रियाकलाप करण्यास उत्सुक असते.", options: ["१: माझ्या मुलासारखे अजिबात नाही", "२: माझ्या मुलासारखे थोडेसे", "३: माझ्या मुलासारखे काहीसे", "४: माझ्या मुलासारखे बरेचसे", "५: माझ्या मुलासारखे खूप जास्त"], category: "Approach/Withdrawal" },
        { text: "३४. माझे मूल मनमिळाऊ आहे आणि सहज मित्र बनवते.", options: ["१: माझ्या मुलासारखे अजिबात नाही", "२: माझ्या मुलासारखे थोडेसे", "३: माझ्या मुलासारखे काहीसे", "४: माझ्या मुलासारखे बरेचसे", "५: माझ्या मुलासारखे खूप जास्त"], category: "Approach/Withdrawal" },
        { text: "३५. माझे मूल नवीन परिस्थितीत आरामदायक असते.", options: ["१: माझ्या मुलासारखे अजिबात नाही", "२: माझ्या मुलासारखे थोडेसे", "३: माझ्या मुलासारखे काहीसे", "४: माझ्या मुलासारखे बरेचसे", "५: माझ्या मुलासारखे खूप जास्त"], category: "Approach/Withdrawal" },
        { text: "३६. माझे मूल नवीन गोष्टींमध्ये कुतूहल आणि आवड दाखवते.", options: ["१: माझ्या मुलासारखे अजिबात नाही", "२: माझ्या मुलासारखे थोडेसे", "३: माझ्या मुलासारखे काहीसे", "४: माझ्या मुलासारखे बरेचसे", "५: माझ्या मुलासारखे खूप जास्त"], category: "Approach/Withdrawal" },

        // Category: Distractibility (विचलितता)
        { text: "३७. माझे मूल आजूबाजूच्या आवाजाने किंवा हालचालीने सहज विचलित होते.", options: ["१: माझ्या मुलासारखे अजिबात नाही", "२: माझ्या मुलासारखे थोडेसे", "३: माझ्या मुलासारखे काहीसे", "४: माझ्या मुलासारखे बरेचसे", "५: माझ्या मुलासारखे खूप जास्त"], category: "Distractibility" },
        { text: "३८. इतर गोष्टी घडत असताना माझ्या मुलाला एखाद्या कामावर लक्ष केंद्रित करणे कठीण जाते.", options: ["१: माझ्या मुलासारखे अजिबात नाही", "२: माझ्या मुलासारखे थोडेसे", "३: माझ्या मुलासारखे काहीसे", "४: माझ्या मुलासारखे बरेचसे", "५: माझ्या मुलासारखे खूप जास्त"], category: "Distractibility" },
        { text: "३९. माझे मूल अनेकदा एका क्रियाकलापातून दुसऱ्या क्रियाकलापात पटकन बदलते.", options: ["१: माझ्या मुलासारखे अजिबात नाही", "२: माझ्या मुलासारखे थोडेसे", "३: माझ्या मुलासारखे काहीसे", "४: माझ्या मुलासारखे बरेचसे", "५: माझ्या मुलासारखे खूप जास्त"], category: "Distractibility" },
        { text: "४०. माझ्या मुलाला कामावर टिकून राहणे कठीण जाते.", options: ["१: माझ्या मुलासारखे अजिबात नाही", "२: माझ्या मुलासारखे थोडेसे", "३: माझ्या मुलासारखे काहीसे", "४: माझ्या मुलासारखे बरेचसे", "५: माझ्या मुलासारखे खूप जास्त"], category: "Distractibility" }
    ]
};

// Expose the new questions object globally
window.questionsPreschool = questionsPreschool;

// Comment out or remove original question sets if this file is solely for preschool
// window.questions5to8 = {};
// window.questions9to10 = {};
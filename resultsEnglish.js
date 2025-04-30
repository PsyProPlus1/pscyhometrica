// resultsEnglish.js

const resultsEnglish = {
  // UI Text
  title: "Survey Results",
  contactMessage:
    "For detailed discussion and counseling regarding your child's development plan, please contact us. Share your result with admin now for further processing.",
  buttons: {
    whatsapp: "Share on WhatsApp",
    email: "Email Result",
    copy: "Copy Result",
    logout: "Logout"
  },

  // Recommendation Pools
  recommendations: {
    default: [
      "Encourage pretend play (e.g., playing house, doctor) to boost imagination.",
      "Read colourful storybooks daily and ask simple questions about the story.",
      "Provide puzzles (4-10 pieces) and building blocks to enhance problem-solving.",
      "Sing action songs and nursery rhymes together.",
      "Offer opportunities for outdoor play: running, jumping, climbing on safe equipment.",
      "Practice sharing toys during playtime with siblings or friends.",
      "Talk about different feelings (happy, sad, angry) using simple words.",
      "Give simple choices, like choosing between two snacks or activities.",
      "Engage your child in simple craft activities like coloring or play-dough.",
      "Set clear and consistent rules and routines."
    ],
    support_sensitivity: [
      "Provide a quiet space for your child to retreat to when overwhelmed.",
      "Introduce new foods or textures gradually and without pressure.",
      "Use dimmer lighting if bright lights are bothersome.",
      "Choose clothing with comfortable textures; remove tags if needed.",
      "Prepare your child for potentially loud environments or allow noise-reducing headphones.",
      "Acknowledge their sensitivity without judgment ('I see that sound bothers you').",
      "Offer deep pressure activities like hugs or weighted lap pads if calming."
    ],
    support_adaptability: [
      "Provide verbal warnings before transitions (e.g., '5 more minutes until clean-up').",
      "Use visual schedules (pictures or lists) to show the day's activities.",
      "Introduce new situations, people, or foods gradually.",
      "Offer comfort objects (like a favorite toy) during changes.",
      "Keep routines as consistent as possible, especially bedtime and mealtime.",
      "Praise flexibility when your child handles change well, even small ones.",
      "Role-play upcoming changes or new situations beforehand."
    ],
    enrich_activity: [
      "Ensure plenty of safe space and time for running, jumping, and large motor play daily.",
      "Incorporate movement breaks during quiet activities.",
      "Enroll in age-appropriate sports or movement classes (tumbling, dance).",
      "Channel energy into helpful tasks like carrying groceries or tidying toys.",
      "Engage in active games like obstacle courses or scavenger hunts.",
      "Visit playgrounds with diverse equipment regularly."
    ]
  }
};

// Expose to global
window.resultsEnglish = resultsEnglish;

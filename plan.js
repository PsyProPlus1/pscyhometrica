// plan.js – Bilingual (English + Marathi) Development-Plan Generator v3.2
// v3.2 (29 Apr 2025) - Ensures branding object passed from script.js is used.
// NOTE: English and Marathi suggestion POOLS BELOW ARE PLACEHOLDERS and need to be populated with actual expert advice.
// -----------------------------------------------------------------------------
// • Always outputs English and Marathi suggestions together.
// • Requires branding object passed as parameter.
// -----------------------------------------------------------------------------

// Helper to deep clone suggestion pools if needed (currently not strictly necessary as read-only)
function clone(o){ try { return JSON.parse(JSON.stringify(o)); } catch (e) { console.error("Clone failed:", e); return {}; } }

/* ===========================================================================
   1️⃣  ENGLISH SUGGESTION POOL (PLACEHOLDERS - NEEDS COMPLETION)
   =========================================================================== */
const suggestionPool_en = {
  Intensity: {
    support: [ "Maintain a calm environment with soft lights and low noise.", "Teach your child to name feelings using simple emotion cards.", "Demonstrate moderate reactions so your child can model you." ],
    developing: [ "Praise your child when they manage big feelings constructively.", "Use storybooks to discuss how characters feel in different situations.", "Practice belly\u2011breathing together during exciting moments." ],
    enrich: [ "Offer drama, dance, or storytelling sessions to channel expressiveness.", "Encourage drawing or music to share emotions creatively.", "Let the child lead group songs or mini\u2011plays." ]
  },
  "Activity Level": {
    support: [ "Schedule regular outdoor play time to release energy safely.", "Break long tasks into short movement\u2011rich segments.", "Use simple yoga or stretching before quiet work." ],
    developing: [ "Alternate active and quiet games throughout the day.", "Offer household chores that involve movement, like carrying toys.", "Play \u201cfreeze\u201d games to practice stopping and starting." ],
    enrich: [ "Enroll the child in age\u2011appropriate sports or dance classes.", "Create indoor obstacle courses on rainy days.", "Introduce bike or scooter time with proper safety gear." ]
  },
  Regularity: {
    support: [ "Establish consistent bedtime and wake\u2011up routines, even on weekends.", "Use picture schedules to signal meal and nap times.", "Give five\u2011minute warnings before transitions." ],
    developing: [ "Keep a visible calendar to mark special events.", "Offer simple choices within routine, like selecting pajamas.", "Praise your child for following the routine independently." ],
    enrich: [ "Let the child help plan grocery lists based on weekly menus.", "Encourage them to set a family reminder alarm.", "Give them responsibility for watering plants every other day." ]
  },
  "Quality of Mood": {
    support: [ "Use warm praise to highlight positive moments.", "Provide a calm space with favourite toys when the child is upset.", "Label and validate feelings before redirecting behaviour." ],
    developing: [ "Play a daily gratitude game each evening.", "Read cheerful books and discuss what made the characters happy.", "Model optimistic self\u2011talk aloud." ],
    enrich: [ "Encourage your child to cheer up friends with kind notes.", "Assign them as a \u2018smile ambassador\u2019 to greet visitors.", "Play cooperative board games that foster good spirit." ]
  },
  "Emotional Sensitivity (Self)": {
    support: [ "Use a feelings thermometer chart to help the child recognise intensity.", "Encourage drawing emotions when words are hard.", "Practice simple mindfulness, like feeling the heartbeat." ],
    developing: [ "Role\u2011play situations to rehearse responses to strong feelings.", "Let the child use a mirror to observe facial expressions.", "Celebrate whenever they express feelings in words." ],
    enrich: [ "Introduce basic journaling or a sticker diary to track moods.", "Teach breathing techniques the child can use independently.", "Let them guide peers in a \u2018feelings circle\u2019 activity." ]
  },
  "Emotional Sensitivity (Others)": {
    support: [ "Point out others\u2019 expressions and ask what they might feel.", "Read picture books that highlight empathy situations.", "Praise gentle actions toward siblings or pets." ],
    developing: [ "Play \u2018guess the feeling\u2019 charades with the family.", "Encourage helping tasks such as passing a tissue to someone sad.", "Discuss TV scenes: \u201cHow did that make the character feel?\u201d" ],
    enrich: [ "Arrange playdates where your child mentors younger kids.", "Involve the child in simple kindness acts like donating toys.", "Encourage writing a thank\u2011you card each week." ]
  },
  "Sensory Sensitivity": {
    support: [ "Create a quiet corner with dim light and soft textures.", "Introduce new foods slowly, one taste at a time.", "Offer noise\u2011reducing headphones in loud environments." ],
    developing: [ "Experiment with textured play\u2011dough or kinetic sand.", "Use story time with varying voice volumes to build tolerance.", "Practice gradual exposure to bright lights using sunglasses." ],
    enrich: [ "Visit \u201ctouch and feel\u201d museum sections together.", "Enroll in art classes that explore different materials.", "Encourage simple cooking activities to explore new smells." ]
  },
  Adaptability: {
    support: [ "Prepare visual timers before transitions to new activities.", "Keep a comfort object available during unfamiliar situations.", "Rehearse changes using brief role\u2011play sessions." ],
    developing: [ "Play \u2018what if\u2019 games to imagine alternative outcomes.", "Praise flexibility whenever plans must shift.", "Let the child choose between two new options to increase control." ],
    enrich: [ "Involve the child in planning family outings or trips.", "Introduce hobby workshops so they can try new skills.", "Rotate toys weekly to encourage acceptance of novelty." ]
  },
  "Approach/Withdrawal": {
    support: [ "Start with small, familiar group activities to build confidence.", "Arrive at events early so the child can acclimate before crowds gather.", "Stay nearby as a secure base during new experiences." ],
    developing: [ "Practice greeting new people with a smile and wave.", "Use puppets or dolls to act out meeting a friend.", "Tour new places virtually before visiting them." ],
    enrich: [ "Encourage your child to host a playdate at home.", "Enroll them in clubs that promote leadership, like story circle leader.", "Allow the child to ask questions to shopkeepers or librarians." ]
  },
  Distractibility: {
    support: [ "Minimise background noise during focused tasks.", "Use a simple sand timer to set short focus intervals.", "Provide a tidy, uncluttered workspace." ],
    developing: [ "Teach \u2018brain breaks\u2019 between activities to refresh attention.", "Play memory matching games to strengthen concentration.", "Gradually extend focus time by a minute each day." ],
    enrich: [ "Introduce step\u2011by\u2011step craft kits that need sustained attention.", "Encourage following simple recipes together.", "Play musical instrument patterns for the child to copy." ]
  }
};

/* ===========================================================================
   2️⃣  MARATHI POOL – (PLACEHOLDERS - NEEDS TRANSLATION & COMPLETION)
   =========================================================================== */
// Start with English copy structure, then override with Marathi placeholders/translations
const suggestionPool_mr = {
  Intensity: {
    support: [ "\u0936\u093e\u0902\u0924 \u0935\u093e\u0924\u093e\u0935\u0930\u0923 \u0920\u0947\u0935\u093e; \u092e\u0902\u0926 \u092a\u094d\u0930\u0915\u093e\u0936 \u0906\u0923\u093f \u0915\u092e\u0940 \u0906\u0935\u093e\u091c \u0935\u093e\u092a\u0930\u093e.", "\u0938\u0930\u0932 \u092d\u093e\u0935\u0928\u093e \u0915\u093e\u0930\u094d\u0921 \u0926\u093e\u0916\u0935\u0942\u0928 \u092d\u093e\u0935\u0928\u093e\u0902\u091a\u0940 \u0928\u093e\u0935\u0947 \u0936\u093f\u0915\u0935\u093e.", "\u0938\u094d\u0935\u0924\u0903 \u092e\u0927\u094d\u092f\u092e \u092a\u094d\u0930\u0924\u093f\u0915\u094d\u0930\u093f\u092f\u093e \u0926\u093e\u0916\u0935\u093e \u091c\u0947\u0923\u0947\u0915\u0930\u0942\u0928 \u092e\u0942\u0932 \u0905\u0928\u0941\u0915\u0930\u0923 \u0915\u0930\u0947\u0932." ],
    developing: [ "\u092e\u094b\u0920\u094d\u092f\u093e \u092d\u093e\u0935\u0928\u093e\u0902\u0928\u093e \u092f\u094b\u0917\u094d\u092f\u0930\u0940\u0924\u094d\u092f\u093e \u0939\u093e\u0924\u093e\u0933\u0932\u094d\u092f\u093e\u0935\u0930 \u0924\u093e\u0924\u094d\u0915\u093e\u0933 \u0915\u094c\u0924\u0941\u0915 \u0915\u0930\u093e.", "\u0915\u0925\u093e\u0902\u092e\u0927\u0940\u0932 \u092a\u093e\u0924\u094d\u0930\u093e\u0902\u091a\u094d\u092f\u093e \u092d\u093e\u0935\u0928\u093e \u090f\u0915\u0924\u094d\u0930 \u091a\u0930\u094d\u091a\u093e \u0915\u0930\u093e.", "\u0909\u0924\u094d\u0938\u093e\u0939\u0940 \u0915\u094d\u0937\u0923\u0940 \u092a\u094b\u091f\u093e\u0924\u0942\u0928 \u0916\u094b\u0932 \u0936\u094d\u0935\u093e\u0938 \u0918\u0947\u0923\u094d\u092f\u093e\u091a\u093e \u0938\u0930\u093e\u0935 \u0915\u0930\u093e." ],
    enrich: [ "\u0928\u093e\u091f\u094d\u092f, \u0928\u0943\u0924\u094d\u092f \u0915\u093f\u0902\u0935\u093e \u0917\u094b\u0937\u094d\u091f \u0938\u093e\u0902\u0917\u0923\u094d\u092f\u093e\u091a\u094d\u092f\u093e \u0938\u0902\u0927\u0940 \u0926\u094d\u092f\u093e.", "\u0915\u0932\u093e \u0915\u093f\u0902\u0935\u093e \u0938\u0902\u0917\u0940\u0924\u093e\u0926\u094d\u0935\u093e\u0930\u0947 \u092d\u093e\u0935\u0928\u093e \u0938\u0930\u094d\u091c\u0928\u0936\u0940\u0932 \u0930\u0940\u0924\u0940\u0928\u0947 \u0935\u094d\u092f\u0915\u094d\u0924 \u0915\u0930\u0942 \u0926\u094d\u092f\u093e.", "\u0917\u091f \u0917\u093e\u0923\u0940 \u0915\u093f\u0902\u0935\u093e \u0932\u0939\u093e\u0928 \u0928\u093e\u091f\u093f\u0915\u093e\u0902\u091a\u0947 \u0928\u0947\u0924\u0943\u0924\u094d\u0935 \u0915\u0930\u0923\u094d\u092f\u093e\u091a\u0940 \u0938\u0902\u0927\u0940 \u0926\u094d\u092f\u093e." ]
  },
  "Activity Level": {
    support: [ "\u0926\u0930\u0930\u094b\u091c \u0938\u0941\u0930\u0915\u094d\u0937\u093f\u0924 \u092e\u0948\u0926\u093e\u0928\u0940 \u0916\u0947\u0933\u093e\u091a\u0940 \u0935\u0947\u0933 \u0920\u0930\u0935\u093e.", "\u092e\u094b\u0920\u094d\u092f\u093e \u0915\u093e\u092e\u093e\u0902\u0928\u093e \u091b\u094b\u091f\u094d\u092f\u093e \u0939\u093e\u0932\u091a\u093e\u0932\u0940\u2011\u0938\u092e\u0943\u0926\u094d\u0927 \u091f\u092a\u094d\u092a\u094d\u092f\u093e\u0902\u0924 \u0935\u093f\u092d\u093e\u091c\u093f\u0924 \u0915\u0930\u093e.", "\u0936\u093e\u0902\u0924 \u0915\u093e\u092e\u093e\u092a\u0942\u0930\u094d\u0935\u0940 \u0938\u094b\u092a\u0947 \u092f\u094b\u0917 \u0915\u093f\u0902\u0935\u093e \u0938\u094d\u091f\u094d\u0930\u0947\u091a\u093f\u0902\u0917 \u0915\u0930\u093e." ],
    developing: [ "\u0926\u093f\u0935\u0938\u092d\u0930 \u0938\u0915\u094d\u0930\u093f\u092f \u0935 \u0936\u093e\u0902\u0924 \u0916\u0947\u0933 \u0906\u0932\u091f\u0942\u0928\u2011\u092a\u093e\u0932\u091f\u0942\u0928 \u0920\u0947\u0935\u093e.", "\u0916\u0947\u0933\u0923\u0940 \u0909\u091a\u0932\u0923\u0947 \u0907. \u0939\u093e\u0932\u091a\u093e\u0932\u0940\u091a\u0940 \u0918\u0930\u0915\u093e\u092e\u0947 \u0926\u094d\u092f\u093e.", "\u2018\u092b\u094d\u0930\u0940\u091d\u2019 \u0916\u0947\u0933 \u0916\u0947\u0933\u0942\u0928 \u0925\u093e\u0902\u092c\u0923\u0947\u2011\u0938\u0941\u0930\u0942 \u0915\u0930\u0923\u0947 \u0938\u0930\u093e\u0935 \u0915\u0930\u093e." ],
    enrich: [ "\u0935\u092f\u092f\u094b\u0917\u094d\u092f \u0915\u094d\u0930\u0940\u0921\u093e \u0915\u093f\u0902\u0935\u093e \u0928\u0943\u0924\u094d\u092f \u0935\u0930\u094d\u0917\u093e\u0924 \u0928\u093e\u0935 \u0928\u094b\u0902\u0926\u0935\u093e.", "\u092a\u093e\u0935\u0938\u093e\u0933\u094d\u092f\u093e\u0924 \u0918\u0930\u093e\u0924 \u0905\u0921\u0925\u0933\u093e \u0936\u0930\u094d\u092f\u0924 \u0924\u092f\u093e\u0930 \u0915\u0930\u093e.", "\u092f\u094b\u0917\u094d\u092f \u0938\u0902\u0930\u0915\u094d\u0937\u0915 \u0938\u093e\u0927\u0928\u093e\u0902\u0938\u0939 \u0938\u093e\u092f\u0915\u0932 \u0915\u093f\u0902\u0935\u093e \u0938\u094d\u0915\u0942\u091f\u0930 \u091a\u093e\u0932\u0935\u0942 \u0926\u094d\u092f\u093e." ]
  },
  Regularity: {
    support: [ "\u0938\u092a\u094d\u0924\u093e\u0939\u0905\u0916\u0947\u0930\u0940\u0938\u0939\u0940 \u0938\u094d\u0925\u093f\u0930 \u091d\u094b\u092a \u0935 \u0909\u0920\u093e\u092f\u091a\u0940 \u0935\u0947\u0933 \u0920\u0947\u0935\u093e.", "\u092d\u094b\u091c\u0928 \u0935 \u091d\u094b\u092a\u0947\u0938\u093e\u0920\u0940 \u091a\u093f\u0924\u094d\u0930 \u0935\u0947\u0933\u093e\u092a\u0924\u094d\u0930\u0915 \u0935\u093e\u092a\u0930\u093e.", "\u092c\u0926\u0932\u093e\u092a\u0942\u0930\u094d\u0935\u0940 \u092a\u093e\u091a \u092e\u093f\u0928\u093f\u091f\u093e\u0902\u091a\u0940 \u0938\u0942\u091a\u0928\u093e \u0926\u094d\u092f\u093e." ],
    developing: [ "\u0935\u093f\u0936\u0947\u0937 \u0926\u093f\u0935\u0938\u092d\u0930 \u0915\u0945\u0932\u0947\u0902\u0921\u0930 \u0926\u0943\u0936\u094d\u092f\u092e\u093e\u0928 \u0920\u0947\u0935\u093e.", "\u0926\u093f\u0928\u091a\u0930\u094d\u092f\u0947\u0924 \u0938\u094b\u092a\u0947 \u092a\u0930\u094d\u092f\u093e\u092f \u0926\u094d\u092f\u093e, \u0909\u0926\u093e. \u092a\u093e\u092f\u091c\u093e\u092e\u093e \u0928\u093f\u0935\u0921.", "\u0938\u094d\u0935\u0924\u0903\u0939\u0942\u0928 \u0928\u093f\u092f\u092e \u092a\u093e\u0933\u0932\u094d\u092f\u093e\u0935\u0930 \u0936\u093e\u092c\u093e\u0938\u0915\u0940 \u0926\u094d\u092f\u093e." ],
    enrich: [ "\u0906\u0920\u0935\u0921\u094d\u092f\u093e\u091a\u094d\u092f\u093e \u092e\u0947\u0928\u0942\u0938\u093e\u0920\u0940 \u0915\u093f\u0930\u093e\u0923\u093e \u092f\u093e\u0926\u0940 \u092e\u0941\u0932\u093e\u0938\u094b\u092c\u0924 \u0924\u092f\u093e\u0930 \u0915\u0930\u093e.", "\u0915\u0941\u091f\u0941\u0902\u092c\u093e\u0938\u093e\u0920\u0940 \u0938\u094d\u092e\u0930\u0923 \u0905\u0932\u093e\u0930\u094d\u092e \u0932\u093e\u0935\u0923\u094d\u092f\u093e\u0938 \u0938\u093e\u0902\u0917\u093e.", "\u092a\u094d\u0930\u0924\u094d\u092f\u0947\u0915 \u0926\u0941\u0938\u0931\u094d\u092f\u093e \u0926\u093f\u0935\u0936\u0940 \u091d\u093e\u0921\u093e\u0902\u0928\u093e \u092a\u093e\u0923\u0940 \u0926\u0947\u0923\u094d\u092f\u093e\u091a\u0940 \u091c\u092c\u093e\u092c\u0926\u093e\u0930\u0940 \u0926\u094d\u092f\u093e." ]
  },
  "Quality of Mood": {
    support: [ "\u0927\u0928\u094d\u092f\u0935\u093e\u0926 \u0935 \u092a\u094d\u0930\u0936\u0902\u0938\u0947\u0928\u0947 \u0938\u0915\u093e\u0930\u093e\u0924\u094d\u092e\u0915 \u0915\u094d\u0937\u0923 \u0909\u091c\u0933\u0935\u093e.", "\u0909\u0926\u093e\u0938 \u0905\u0938\u0924\u093e\u0928\u093e \u092a\u094d\u0930\u093f\u092f \u0916\u0947\u0933\u0923\u094d\u092f\u093e\u0902\u0938\u0939 \u0936\u093e\u0902\u0924 \u0915\u094b\u092a\u0930\u093e \u0926\u094d\u092f\u093e.", "\u0935\u0930\u094d\u0924\u0928 \u092c\u0926\u0932\u0923\u094d\u092f\u093e\u0906\u0927\u0940 \u092d\u093e\u0935\u0928\u093e\u0902\u0928\u093e \u0928\u093e\u0935 \u0926\u0947\u090a\u0928 \u092e\u093e\u0928\u094d\u092f\u0924\u093e \u0926\u094d\u092f\u093e." ],
    developing: [ "\u0926\u0930\u0930\u094b\u091c \u0938\u0902\u0927\u0940 \u0936\u094b\u0927\u0942\u0928 \u0915\u0943\u0924\u091c\u094d\u091e\u0924\u093e \u0917\u0947\u092e \u0916\u0947\u0933\u093e.", "\u0906\u0928\u0902\u0926\u0940 \u092a\u0941\u0938\u094d\u0924\u0915 \u0935\u093e\u091a\u093e \u0935 \u092a\u093e\u0924\u094d\u0930\u093e\u0902\u0928\u093e \u0906\u0928\u0902\u0926\u0940 \u0915\u0930\u0923\u093e\u0931\u094d\u092f\u093e \u0917\u094b\u0937\u094d\u091f\u0940\u0902\u091a\u0940 \u091a\u0930\u094d\u091a\u093e \u0915\u0930\u093e.", "\u0938\u094d\u0935\u0924\u0903 \u0938\u0915\u093e\u0930\u093e\u0924\u094d\u092e\u0915 \u0906\u0924\u094d\u092e\u2011\u0938\u0902\u0935\u093e\u0926 \u092e\u094b\u0920\u094d\u092f\u093e\u0928\u0947 \u092c\u094b\u0932\u0942\u0928 \u0926\u093e\u0916\u0935\u093e." ],
    enrich: [ "\u092e\u0941\u0932\u093e\u0932\u093e \u092e\u093f\u0924\u094d\u0930\u093e\u0902\u0928\u093e \u0906\u0928\u0902\u0926\u0940 \u0915\u0930\u0923\u093e\u0931\u094d\u092f\u093e \u091a\u093f\u0920\u094d\u0920\u094d\u092f\u093e \u0932\u093f\u0939\u093e\u092f\u0932\u093e \u0938\u093e\u0902\u0917\u093e.", "\u2018\u0938\u094d\u092e\u093e\u0907\u0932 \u0905\u0945\u092e\u094d\u092c\u0947\u0938\u093f\u0921\u0930\u2019 \u092e\u094d\u0939\u0923\u0942\u0928 \u092a\u093e\u0939\u0941\u0923\u094d\u092f\u093e\u0902\u091a\u0947 \u0938\u094d\u0935\u093e\u0917\u0924 \u0915\u0930\u0942 \u0926\u094d\u092f\u093e.", "\u0938\u0939\u0915\u093e\u0930\u094d\u092f\u093e\u091a\u0940 \u0935\u0943\u0924\u094d\u0924\u0940 \u0935\u093e\u0922\u0935\u0923\u093e\u0930\u0947 \u092c\u094b\u0930\u094d\u0921 \u0917\u0947\u092e \u0916\u0947\u0933\u093e." ]
  },
  "Emotional Sensitivity (Self)": {
    support: [ "\u092d\u093e\u0935\u0928\u093e\u0902\u091a\u0940 \u0924\u0940\u0935\u094d\u0930\u0924\u093e \u0926\u0930\u094d\u0936\u0935\u0923\u093e\u0930\u093e \u2018\u092b\u0940\u0932\u093f\u0902\u0917 \u0925\u0930\u094d\u092e\u094b\u092e\u0940\u091f\u0930\u2019 \u091a\u093e\u0930\u094d\u091f \u0924\u092f\u093e\u0930 \u0915\u0930\u093e.", "\u0936\u092c\u094d\u0926 \u0905\u092a\u0941\u0930\u0947 \u0905\u0938\u0924\u0940\u0932 \u0924\u0947\u0935\u094d\u0939\u093e \u092d\u093e\u0935\u0928\u093e \u0930\u0947\u0916\u093e\u091f\u093e\u092f\u0932\u093e \u092a\u094d\u0930\u094b\u0924\u094d\u0938\u093e\u0939\u0928 \u0926\u094d\u092f\u093e.", "\u0939\u0943\u0926\u092f\u093e\u091a\u0947 \u0920\u094b\u0915\u0947 \u0910\u0915\u0923\u094d\u092f\u093e\u0938\u093e\u0930\u0916\u0940 \u0938\u093e\u0927\u0940 \u092e\u093e\u0907\u0902\u0921\u092b\u0941\u0932\u0928\u0947\u0938 \u0915\u0930\u093e." ],
    developing: [ "\u092d\u0942\u092e\u093f\u0915\u093e\u2011\u0928\u093e\u091f\u094d\u092f\u093e\u0924\u0942\u0928 \u0915\u0920\u0940\u0923 \u092d\u093e\u0935\u0928\u093e\u0902\u0928\u093e \u092a\u094d\u0930\u0924\u093f\u0915\u094d\u0930\u093f\u092f\u093e \u0926\u0947\u0923\u094d\u092f\u093e\u091a\u093e \u0938\u0930\u093e\u0935 \u0915\u0930\u093e.", "\u0906\u0930\u0938\u093e \u0935\u093e\u092a\u0930\u0942\u0928 \u091a\u0947\u0939\u0931\u094d\u092f\u093e\u0935\u0930\u0940\u0932 \u092d\u093e\u0935 \u0928\u094d\u092f\u093e\u0939\u093e\u0933\u0923\u094d\u092f\u093e\u0938 \u0938\u093e\u0902\u0917\u093e.", "\u092d\u093e\u0935\u0928\u093e \u0936\u092c\u094d\u0926\u093e\u0902\u0924 \u0935\u094d\u092f\u0915\u094d\u0924 \u0915\u0947\u0932\u094d\u092f\u093e\u0935\u0930 \u0938\u093e\u091c\u0930\u0947 \u0915\u0930\u093e." ],
    enrich: [ "\u092e\u0942\u0921 \u091f\u093f\u092a\u0923\u094d\u092f\u093e\u0938\u093e\u0920\u0940 \u0938\u094d\u091f\u093f\u0915\u0930 \u0921\u093e\u092f\u0930\u0940 \u0915\u093f\u0902\u0935\u093e \u091b\u094b\u091f\u093e \u091c\u0930\u094d\u0928\u0932 \u0938\u0941\u0930\u0942 \u0915\u0930\u093e.", "\u0938\u094d\u0935\u0924\u0903\u091a \u0935\u093e\u092a\u0930\u0924\u093e \u092f\u0947\u0924\u0940\u0932 \u0905\u0936\u093e \u0936\u094d\u0935\u0938\u0928 \u0924\u0902\u0924\u094d\u0930 \u0936\u093f\u0915\u0935\u093e.", "\u2018\u092b\u0940\u0932\u093f\u0902\u0917 \u0938\u0930\u094d\u0915\u0932\u2019 \u0915\u094d\u0930\u093f\u092f\u0947\u0924 \u092e\u093f\u0924\u094d\u0930\u093e\u0902\u0928\u093e \u092e\u093e\u0930\u094d\u0917\u0926\u0930\u094d\u0936\u0928 \u0915\u0930\u0942 \u0926\u094d\u092f\u093e." ]
  },
  "Emotional Sensitivity (Others)": {
    support: [ "\u0907\u0924\u0930\u093e\u0902\u091a\u0947 \u091a\u0947\u0939\u0930\u0947 \u0926\u093e\u0916\u0935\u0942\u0928 \u2018\u0924\u0947 \u0915\u0938\u0947 \u0935\u093e\u091f\u0924 \u0905\u0938\u0947\u0932?\u2019 \u0905\u0938\u093e \u092a\u094d\u0930\u0936\u094d\u0928 \u0935\u093f\u091a\u093e\u0930\u093e.", "\u0938\u0939\u093e\u0928\u0941\u092d\u0942\u0924\u0940 \u0926\u093e\u0916\u0935\u0923\u093e\u0931\u094d\u092f\u093e \u091a\u093f\u0924\u094d\u0930\u092a\u0941\u0938\u094d\u0924\u0915\u093e\u0902\u091a\u0947 \u0935\u093e\u091a\u0928 \u0915\u0930\u093e.", "\u092d\u093e\u0935\u0902\u0921\u0947 \u0935\u093e \u092a\u093e\u0933\u0940\u0935 \u092a\u094d\u0930\u093e\u0923\u094d\u092f\u093e\u0902\u0936\u0940 \u0938\u094c\u092e\u094d\u092f \u0935\u093e\u0917\u0932\u094d\u092f\u093e\u0935\u0930 \u0915\u094c\u0924\u0941\u0915 \u0915\u0930\u093e." ],
    developing: [ "\u0915\u0941\u091f\u0941\u0902\u092c\u093e\u0938\u094b\u092c\u0924 \u2018\u092b\u0940\u0932\u093f\u0902\u0917 \u091a\u0947\u0930\u0947\u0921\u0938\u2019 \u0917\u0947\u092e \u0916\u0947\u0933\u093e.", "\u0926\u0941\u0916\u0940 \u0935\u094d\u092f\u0915\u094d\u0924\u0940\u0938 \u091f\u093f\u0936\u0942 \u0926\u0947\u0923\u0947 \u092f\u093e\u0902\u0938\u093e\u0930\u0916\u094d\u092f\u093e \u092e\u0926\u0924 \u0915\u093e\u0930\u094d\u092f\u093e\u0924 \u092a\u094d\u0930\u094b\u0924\u094d\u0938\u093e\u0939\u0928 \u0926\u094d\u092f\u093e.", "\u091f\u0940\u0935\u094d\u0939\u0940 \u0926\u0943\u0936\u094d\u092f\u093e\u0902\u0935\u0930 \u091a\u0930\u094d\u091a\u093e \u0915\u0930\u093e: \u201c\u0924\u094d\u092f\u093e \u092a\u093e\u0924\u094d\u0930\u093e\u0932\u093e \u0915\u0938\u0947 \u0935\u093e\u091f\u0932\u0947 \u0905\u0938\u0947\u0932?\u201d" ],
    enrich: [ "\u0932\u0939\u093e\u0928 \u092e\u0941\u0932\u093e\u0902\u0928\u093e \u092e\u093e\u0930\u094d\u0917\u0926\u0930\u094d\u0936\u0928 \u0915\u0930\u0923\u093e\u0931\u094d\u092f\u093e \u092d\u0947\u091f\u0940 \u0906\u092f\u094b\u091c\u093f\u0924 \u0915\u0930\u093e.", "\u0916\u0947\u0933\u0923\u0940 \u0926\u093e\u0928 \u0915\u0930\u0923\u094d\u092f\u093e\u0938\u093e\u0930\u0916\u094d\u092f\u093e \u0926\u092f\u093e\u0933\u0942\u092a\u0923\u093e \u0909\u092a\u0915\u094d\u0930\u092e\u093e\u0924 \u0938\u0939\u092d\u093e\u0917\u0940 \u0915\u0930\u093e.", "\u0926\u0930 \u0906\u0920\u0935\u0921\u094d\u092f\u093e\u0932\u093e \u0906\u092d\u093e\u0930\u092a\u0924\u094d\u0930 \u0932\u093f\u0939\u093f\u0923\u094d\u092f\u093e\u0938 \u092a\u094d\u0930\u0947\u0930\u093f\u0924 \u0915\u0930\u093e." ]
  },
  "Sensory Sensitivity": {
    support: [ "\u092e\u0902\u0926 \u092a\u094d\u0930\u0915\u093e\u0936, \u092e\u090a \u0935\u0938\u094d\u0924\u094d\u0930\u093e\u0902\u0938\u0939 \u0936\u093e\u0902\u0924 \u0915\u094b\u092a\u0930\u093e \u0924\u092f\u093e\u0930 \u0915\u0930\u093e.", "\u0928\u0935\u0940\u0928 \u0905\u0928\u094d\u0928 \u0939\u0933\u0942\u0939\u0933\u0942, \u090f\u0915 \u091a\u0935 \u0915\u0930\u0942\u0928 \u092a\u0939\u093e.", "\u0917\u094b\u0902\u0917\u093e\u091f\u093e\u091a\u094d\u092f\u093e \u0920\u093f\u0915\u093e\u0923\u0940 \u0906\u0935\u093e\u091c \u0915\u092e\u0940 \u0915\u0930\u0923\u093e\u0930\u0947 \u0939\u0947\u0921\u092b\u094b\u0928 \u0935\u093e\u092a\u0930\u0942 \u0926\u094d\u092f\u093e." ],
    developing: [ "\u091f\u0947\u0915\u094d\u0938\u091a\u0930 \u092a\u094d\u0932\u0947\u0921\u094b\u0939 \u0915\u093f\u0902\u0935\u093e \u0915\u093e\u0907\u0928\u0947\u091f\u093f\u0915 \u0938\u0901\u0921\u0938\u0939 \u0916\u0947\u0933 \u0915\u0930\u0942\u0928 \u092a\u0939\u093e.", "\u0915\u0925\u093e\u0915\u0925\u0928\u093e\u0924 \u0906\u0935\u093e\u091c\u093e\u091a\u0940 \u092a\u093e\u0924\u0933\u0940 \u0939\u0933\u0942\u0939\u0933\u0942 \u092c\u0926\u0932\u0942\u0928 \u0938\u0939\u0928\u0936\u0940\u0932\u0924\u093e \u0935\u093e\u0922\u0935\u093e.", "\u0917\u0949\u0917\u0932 \u0935\u093e\u092a\u0930\u0942\u0928 \u0909\u091c\u0947\u0921\u093e\u0936\u0940 \u0939\u0933\u0942\u0939\u0933\u0942 \u092a\u0930\u093f\u091a\u092f \u0915\u0930\u093e." ],
    enrich: [ "\u2018\u091f\u091a \u0905\u0901\u0921 \u092b\u0940\u0932\u2019 \u0938\u0902\u0917\u094d\u0930\u0939\u093e\u0932\u092f \u0935\u093f\u092d\u093e\u0917\u093e\u0902\u0928\u093e \u092d\u0947\u091f \u0926\u094d\u092f\u093e.", "\u0935\u093f\u0935\u093f\u0927 \u0938\u093e\u0939\u093f\u0924\u094d\u092f \u0935\u093e\u092a\u0930\u0923\u093e\u0930\u0947 \u0915\u0932\u093e \u0935\u0930\u094d\u0917 \u091c\u0949\u0907\u0928 \u0915\u0930\u093e.", "\u0928\u0935\u0940\u0928 \u0935\u093e\u0938 \u0905\u0928\u0941\u092d\u0935\u0923\u094d\u092f\u093e\u0938\u093e\u0920\u0940 \u0938\u094b\u092a\u0947 \u0938\u094d\u0935\u092f\u0902\u092a\u093e\u0915 \u0915\u094d\u0930\u093f\u092f\u093e \u0915\u0930\u093e." ]
  },
  Adaptability: {
    support: [ "\u0928\u0935\u0940\u0928 \u0909\u092a\u0915\u094d\u0930\u092e\u093e\u092a\u0942\u0930\u094d\u0935\u0940 \u0926\u0943\u0936\u094d\u092f \u091f\u093e\u092f\u092e\u0930 \u0926\u093e\u0916\u0935\u093e.", "\u0905\u092a\u0930\u093f\u091a\u093f\u0924 \u0935\u0947\u0933\u0940 \u0906\u0935\u0921\u0924\u0940 \u0935\u0938\u094d\u0924\u0941 \u0938\u094b\u092c\u0924 \u0920\u0947\u0935\u093e.", "\u092c\u0926\u0932\u093e\u091a\u0940 \u091b\u094b\u091f\u0940 \u0928\u093e\u091f\u093f\u0915\u093e \u0915\u0930\u0942\u0928 \u092a\u0942\u0930\u094d\u0935\u0924\u092f\u093e\u0930\u0940 \u0915\u0930\u093e." ],
    developing: [ "\u2018\u0915\u093e\u092f \u091d\u093e\u0932\u0947 \u0905\u0938\u0924\u0947 \u091c\u0930...\u2019 \u0905\u0938\u0947 \u0915\u0932\u094d\u092a\u0915 \u092a\u094d\u0930\u0936\u094d\u0928 \u0935\u093f\u091a\u093e\u0930\u093e.", "\u092f\u094b\u091c\u0928\u093e \u092c\u0926\u0932\u0932\u094d\u092f\u093e\u0935\u0930 \u0932\u0935\u091a\u093f\u0915\u0924\u0947\u091a\u0940 \u0938\u094d\u0924\u0941\u0924\u0940 \u0915\u0930\u093e.", "\u0928\u0935\u0940\u0928 \u0926\u094b\u0928 \u092a\u0930\u094d\u092f\u093e\u092f\u093e\u0902\u092a\u0948\u0915\u0940 \u0928\u093f\u0935\u0921\u0942 \u0926\u094d\u092f\u093e." ],
    enrich: [ "\u0915\u0941\u091f\u0941\u0902\u092c \u0938\u0939\u0932\u0940\u091a\u0947 \u0928\u093f\u092f\u094b\u091c\u0928 \u0915\u0930\u0924\u093e\u0928\u093e \u092e\u0941\u0932\u093e\u091a\u093e \u0938\u0939\u092d\u093e\u0917 \u0918\u094d\u092f\u093e.", "\u0939\u0949\u092c\u0940 \u0915\u093e\u0930\u094d\u092f\u0936\u093e\u0933\u093e\u0902\u092e\u0927\u094d\u092f\u0947 \u0928\u0935\u0940\u0928 \u0915\u094c\u0936\u0932\u094d\u092f\u0947 \u0936\u093f\u0915\u093e\u092f\u0932\u093e \u0938\u093e\u0902\u0917\u093e.", "\u092a\u094d\u0930\u0924\u094d\u092f\u0947\u0915 \u0906\u0920\u0935\u0921\u094d\u092f\u093e\u0924 \u0916\u0947\u0933\u0923\u0940 \u092c\u0926\u0932\u0942\u0928 \u0928\u0935\u0947\u092a\u0923\u093e \u0938\u094d\u0935\u0940\u0915\u093e\u0930\u093e\u092f\u0932\u093e \u0936\u093f\u0915\u0935\u093e." ]
  },
  "Approach/Withdrawal": {
    support: [ "\u092a\u0939\u093f\u0932\u094d\u092f\u093e\u0902\u0926\u093e \u091b\u094b\u091f\u0947, \u0913\u0933\u0916\u0940\u091a\u0947 \u0917\u091f \u0909\u092a\u0915\u094d\u0930\u092e \u0928\u093f\u0935\u0921\u093e.", "\u0917\u0930\u094d\u0926\u0940 \u0935\u093e\u0922\u0923\u094d\u092f\u093e\u092a\u0942\u0930\u094d\u0935\u0940 \u0932\u0935\u0915\u0930 \u0915\u093e\u0930\u094d\u092f\u0915\u094d\u0930\u092e\u0938\u094d\u0925\u0933\u0940 \u092a\u094b\u0939\u094b\u091a\u093e.", "\u0928\u0935\u094d\u092f\u093e \u0905\u0928\u0941\u092d\u0935\u093e\u0924 \u092a\u093e\u0932\u0915 \u091c\u0935\u0933 \u0930\u093e\u0939\u0942\u0928 \u0938\u0941\u0930\u0915\u094d\u0937\u093f\u0924\u0924\u093e \u0926\u094d\u092f\u093e." ],
    developing: [ "\u0939\u0938\u0942\u0928 \u0939\u093e\u0924 \u0939\u0932\u0935\u0924 \u0928\u0935\u0940\u0928 \u0932\u094b\u0915\u093e\u0902\u0928\u093e \u0905\u092d\u093f\u0935\u093e\u0926\u0928 \u0938\u0930\u093e\u0935 \u0915\u0930\u093e.", "\u092a\u092a\u0947\u091f\u094d\u0938\u0926\u094d\u0935\u093e\u0930\u0947 \u0928\u0935\u0940\u0928 \u092e\u093f\u0924\u094d\u0930 \u092d\u0947\u091f\u0923\u094d\u092f\u093e\u091a\u0947 \u0928\u093e\u091f\u0915 \u0915\u0930\u093e.", "\u091c\u093e\u0923\u094d\u092f\u093e\u092a\u0942\u0930\u094d\u0935\u0940 \u0935\u094d\u0939\u0930\u094d\u091a\u094d\u092f\u0941\u0905\u0932 \u091f\u0942\u0930 \u0915\u0930\u0942\u0928 \u091c\u093e\u0917\u0947\u0936\u0940 \u092a\u0930\u093f\u091a\u092f \u0915\u0930\u0942\u0928 \u0926\u094d\u092f\u093e." ],
    enrich: [ "\u092e\u0941\u0932\u093e\u0932\u093e \u0918\u0930\u0940 \u092a\u094d\u0932\u0947\u0921\u0947\u091f \u0906\u092f\u094b\u091c\u093f\u0924 \u0915\u0930\u0923\u094d\u092f\u093e\u0938 \u0938\u093e\u0902\u0917\u093e.", "\u0915\u0925\u093e\u0935\u093e\u091a\u0928 \u0935\u0930\u094d\u0924\u0941\u0933\u093e\u0924\u0940\u0932 \u0928\u0947\u0924\u093e \u0939\u094b\u0923\u094d\u092f\u093e\u0938\u093e\u0930\u0916\u094d\u092f\u093e \u0915\u094d\u0932\u092c\u092e\u0927\u094d\u092f\u0947 \u0918\u094d\u092f\u093e.", "\u0926\u0941\u0915\u093e\u0928\u0926\u093e\u0930\u093e\u0902\u0928\u093e \u0935\u093e \u0917\u094d\u0930\u0902\u0925\u092a\u093e\u0932\u093e\u0902\u0928\u093e \u092a\u094d\u0930\u0936\u094d\u0928 \u0935\u093f\u091a\u093e\u0930\u0923\u094d\u092f\u093e\u0938 \u092a\u094d\u0930\u094b\u0924\u094d\u0938\u093e\u0939\u0928 \u0926\u094d\u092f\u093e." ]
  },
  Distractibility: {
    support: [ "\u0915\u093e\u092e\u093e\u0935\u0947\u0933\u0940 \u092a\u093e\u0930\u094d\u0936\u094d\u0935 \u0906\u0935\u093e\u091c \u0915\u092e\u0940\u0924 \u0915\u092e\u0940 \u0920\u0947\u0935\u093e.", "\u0932\u0939\u093e\u0928 \u0932\u0915\u094d\u0937 \u0915\u0947\u0902\u0926\u094d\u0930\u093f\u0924 \u0915\u093e\u0932\u093e\u0935\u0927\u0940\u0938\u093e\u0920\u0940 \u0935\u093e\u0933\u0942\u091a\u0940 \u091f\u093e\u092f\u092e\u0930 \u0935\u093e\u092a\u0930\u093e.", "\u0915\u094d\u0932\u091f\u0930 \u0928\u0938\u0932\u0947\u0932\u0940 \u0938\u094d\u0935\u091a\u094d\u091b \u091c\u093e\u0917\u093e \u0926\u094d\u092f\u093e." ],
    developing: [ "\u0915\u094d\u0930\u093f\u092f\u093e\u0915\u0932\u093e\u092a\u093e\u0902\u092e\u0927\u094d\u092f\u0947 \u2018\u092c\u094d\u0930\u0947\u0928 \u092c\u094d\u0930\u0947\u0915\u2019\u091a\u0940 \u0938\u0935\u092f \u0932\u093e\u0935\u093e.", "\u0938\u094d\u092e\u0930\u0923\u0936\u0915\u094d\u0924\u0940 \u0935\u093e\u0922\u0935\u0923\u093e\u0930\u0947 \u092a\u0947\u0905\u0930\u093f\u0902\u0917 \u0917\u0947\u092e \u0916\u0947\u0933\u093e.", "\u0926\u0930\u0930\u094b\u091c \u0932\u0915\u094d\u0937 \u0915\u0947\u0902\u0926\u094d\u0930\u093f\u0924 \u0935\u0947\u0933 \u090f\u0915 \u092e\u093f\u0928\u093f\u091f\u093e\u0928\u0947 \u0935\u093e\u0922\u0935\u093e." ],
    enrich: [ "\u090f\u0915\u093e\u0917\u094d\u0930\u0924\u093e \u092e\u093e\u0917\u0923\u093e\u0930\u0947 \u091a\u0930\u0923\u092c\u0926\u094d\u0927 \u0915\u094d\u0930\u093e\u092b\u094d\u091f \u0915\u093f\u091f \u0935\u093e\u092a\u0930\u093e.", "\u0938\u094b\u092a\u094d\u092f\u093e \u0930\u0947\u0938\u093f\u092a\u0940 \u090f\u0915\u0924\u094d\u0930 \u0915\u0930\u0942\u0928 \u092b\u0949\u0932\u094b \u0915\u0930\u093e.", "\u0935\u093e\u0926\u094d\u092f\u093e\u091a\u0940 \u0932\u092f \u0915\u0949\u092a\u0940 \u0915\u0930\u0923\u094d\u092f\u093e\u091a\u093e \u0916\u0947\u0933 \u0915\u0930\u093e." ]
  }
};

/* ===========================================================================
   3️⃣  SCORE MAP & PLAN GENERATOR
   =========================================================================== */
// Define score thresholds (adjust if scoring range changes)
// These thresholds determine if a score falls into 'support', 'developing', or 'enrich' band.
// Assumes a total score range of 4-20 per category (4 questions, 1-5 points each).
const thresholds = { low: 8, high: 13 };

/**
 * Determines the development band based on a category's total score.
 * @param {number|null|undefined} score - The total score for a category (e.g., 4-20).
 * @returns {string} The band: 'support', 'developing', or 'enrich'. Defaults to 'developing' if score is invalid.
 */
function bandFor(score) {
    // Handle cases where score might be missing or not a number
    if (score === null || score === undefined || isNaN(score)) {
        console.warn("bandFor: Received invalid score, defaulting to 'developing'. Score:", score);
        return "developing";
    }
    // Determine band based on thresholds
    return score <= thresholds.low ? "support" : score >= thresholds.high ? "enrich" : "developing";
}

/**
 * Builds a bilingual development plan including branding.
 * @param {object} options - Configuration object.
 * @param {string} options.studentName - Name of the child.
 * @param {string} options.ageGroup - Age group (e.g., "Nursery").
 * @param {object} options.categoryScores - Scores object { CategoryName: score (expected 4-20), ... }.
 * @param {object} [options.branding={}] - Branding object { name, address, phone }. Defaults to empty object.
 * @param {string} [options.language='english'] - Preferred language ('english' or 'marathi'), currently only affects titles slightly, plan is bilingual.
 * @returns {string} Formatted bilingual plan text. Returns error message on failure.
 */
function buildDevelopmentPlan({ studentName, ageGroup, categoryScores, branding = {}, language = 'english' }) {
    console.log("Building development plan with data:", { studentName, ageGroup, categoryScores, branding, language });
    try {
        // Use passed branding directly, provide defaults only if properties are missing
        const displayBranding = {
            name: branding?.name || 'PsychometriaProPlus Institute', // Default institute name
            address: branding?.address || 'Pimpri-Chinchwad, MH, India', // Default address
            phone: branding?.phone || 'Contact Support' // Default phone
        };
        console.log("DEBUG Plan Gen - Using Branding:", displayBranding); // Log the branding being used

        // Basic Plan Header (Always bilingual)
        const hdr = [
            "==== Preschooler Development Plan / प्रीस्कूलर विकास योजना ====",
            `Student / विद्यार्थी: ${studentName || 'N/A'}`,
            `Age Group / वयोगट: ${ageGroup || 'N/A'}`,
            `Date Generated / तयार करण्याची तारीख: ${new Date().toLocaleDateString('en-GB').replace(/\//g, '-')}`, // DD-MM-YYYY format
            "========================================================="
        ];

        const lines = [...hdr, "", "--- Suggestions based on Assessment / मूल्यांकनावर आधारित सूचना ---"];

        // Category Titles (English keys mapped to English/Marathi titles)
        // Ensure these keys EXACTLY match the keys in categoryScores and suggestionPools
        const categoryTitles = {
            "Intensity": { en: "Intensity", mr: "तीव्रता" },
            "Activity Level": { en: "Activity Level", mr: "क्रियाशीलता पातळी" },
            "Regularity": { en: "Regularity", mr: "नियमितता" },
            "Quality of Mood": { en: "Quality of Mood", mr: "मूडची गुणवत्ता" },
            "Emotional Sensitivity (Self)": { en: "Emotional Sensitivity (Self)", mr: "भावनिक संवेदनशीलता (स्वतःची)" },
            "Emotional Sensitivity (Others)": { en: "Emotional Sensitivity (Others)", mr: "भावनिक संवेदनशीलता (इतरांची)" },
            "Sensory Sensitivity": { en: "Sensory Sensitivity", mr: "संवेदना संवेदनशीलता" },
            "Adaptability": { en: "Adaptability", mr: "अनुकूलता" },
            "Approach/Withdrawal": { en: "Approach/Withdrawal", mr: "दृष्टिकोन/माघार" },
            "Distractibility": { en: "Distractibility", mr: "विचलितता" }
        };

        // Titles for the score bands
        const bandTitles = {
            support: { en: "Support Needed", mr: "आधार आवश्यक" },
            developing: { en: "Developing Appropriately", mr: "योग्यरित्या विकसनशील" },
            enrich: { en: "Area of Strength / Enrichment", mr: "सामर्थ्याचे क्षेत्र / समृद्धी" }
        };

        // Validate categoryScores input
        if (typeof categoryScores !== 'object' || categoryScores === null || Object.keys(categoryScores).length === 0) {
            console.error("buildDevelopmentPlan: Invalid or empty categoryScores received.");
            lines.push("\nERROR: Cannot generate suggestions. Score data is missing or invalid.");
            lines.push("त्रुटी: सूचना तयार करू शकत नाही. गुणांचा डेटा गहाळ किंवा अवैध आहे.");
            categoryScores = {}; // Set to empty object to prevent errors in the loop below
        }

        // Add bilingual suggestions for each category defined in categoryTitles
        Object.keys(categoryTitles).forEach(catEng => { // Iterate through known categories
            const score = categoryScores[catEng]; // Get score (might be undefined if category missing in results)
            const band = bandFor(score); // Determine band ('support', 'developing', 'enrich')

            // Get both English and Marathi suggestion lists for the category and determined band
            // Use empty array as fallback if category or band doesn't exist in pools
            const list_en = suggestionPool_en[catEng]?.[band] || [];
            const list_mr = suggestionPool_mr[catEng]?.[band] || [];

            // Get titles for the category and band
            const catTitleInfo = categoryTitles[catEng]; // Get {en: '...', mr: '...'} for category
            const bandTitleInfo = bandTitles[band]; // Get {en: '...', mr: '...'} for band

            // Add section header with category name, score, and band
            const scoreDisplay = (score === null || score === undefined || isNaN(score)) ? "N/A" : score; // Display N/A if score invalid
            lines.push(`\n== ${catTitleInfo.en} / ${catTitleInfo.mr} ==`);
            lines.push(`   Score / गुण: ${scoreDisplay} (Band / श्रेणी: ${bandTitleInfo.en} / ${bandTitleInfo.mr})`);

            // Add bilingual suggestions (show up to 10 or max available pairs)
            const maxSuggestions = Math.min(list_en.length, list_mr.length); // Ensure we have pairs
            const suggestionsToShow = Math.min(maxSuggestions, 10); // Limit to 10 suggestions

            if (suggestionsToShow === 0) {
                lines.push("   * (No specific suggestions available for this band / या श्रेणीसाठी विशिष्ट सूचना उपलब्ध नाहीत)");
            } else {
                lines.push("   -- Suggestions / सूचना --");
                for (let i = 0; i < suggestionsToShow; i++) {
                    // Get suggestions, providing fallback text if one is missing
                    const suggestionEn = list_en[i] || '(English suggestion missing)';
                    const suggestionMr = list_mr[i] || '(मराठी सूचना गहाळ आहे)';
                    lines.push(`   ${i + 1}. ${suggestionEn}`); // Add English line
                    lines.push(`      मराठी: ${suggestionMr}`); // Add corresponding Marathi line (indented for clarity)
                }
            }
        }); // End loop through categories

        // Add Branding Footer using the displayBranding object
        lines.push("\n-----------------------------------------");
        lines.push("--- Provided By / द्वारे प्रदान ---");
        lines.push(`${displayBranding.name}`); // Use the name from the branding object
        lines.push(`${displayBranding.address}`); // Use the address from the branding object
        lines.push(`Contact / संपर्क: ${displayBranding.phone}`); // Use the phone from the branding object
        lines.push("--- End of Plan / योजनेचा शेवट ---"); // End marker

        return lines.join("\n"); // Join all lines into a single string with newlines

    } catch (error) {
        // Catch any unexpected errors during plan generation
        console.error("Error building development plan:", error);
        // Return a user-friendly bilingual error message
        return `==== ERROR / त्रुटी ====\nFailed to generate development plan due to an internal error.\nअंतर्गत त्रुटीमुळे विकास योजना तयार करण्यात अयशस्वी.\nDetails: ${error.message || 'Unknown error'}`;
    }
}


// Expose the buildDevelopmentPlan function globally so script.js can call it
window.buildDevelopmentPlan = buildDevelopmentPlan;

console.log("plan.js v3.2 loaded (Bilingual buildDevelopmentPlan function with branding).");

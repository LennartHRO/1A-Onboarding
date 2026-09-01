/* =============================================================
   ENGLISCHE FASSUNG

   Hier stehen ausschliesslich Texte. Alles Technische - Bildkoordinaten,
   welche Antwort richtig ist, Toleranz, Zugangslink, Musik - wird aus
   config.js uebernommen und muss hier nicht wiederholt werden.

   Wichtig: Die Reihenfolge muss zu config.js passen. Der erste Abschnitt
   hier uebersetzt den ersten Abschnitt dort, die erste Frage die erste
   Frage und so weiter. Kommt in config.js eine Regel dazu, gehoert sie
   hier an dieselbe Stelle.
   ============================================================= */

const CONFIG_EN = {

  seitentitel: "House Rules",
  untertitel: "Welcome to the floor!",

  texte: {
    sprachName: "English",
    intro: "Before you join the WhatsApp group, please do the following:",
    schritt1: "Read the house rules",
    schritt2: "Answer a few questions",
    schritt3: "Get the group link 🎉",
    dauer: "Takes about 5 minutes.",
    start: "Let's go",

    regelnTitel: "House rules",
    regelnSub: "Take your time and read through everything – questions follow.",
    scrollHinweis: "Scroll to the end of the rules",
    weiterZumTest: "Continue",
    zurueck: "Back",
    bildLupe: "Tap to enlarge",

    frageZaehler: "Question {n} of {gesamt}",
    regelnAnsehen: "Look at the rules again",
    mehrfachHinweis: "More than one answer is correct.",
    karteHinweis: "Tap the spot on the map. Roughly right is good enough.",
    karteFrage: "Where is the bin for {name}?",
    pruefen: "Check answer",
    weiter: "Next",
    ergebnis: "See result",
    richtig: "Correct!",
    falsch: "Not quite.",

    failTitel: "Almost!",
    failText: "No worries – have another look at the rules and try again right after.",
    failScore: "{richtig} out of {gesamt} questions correct.",
    nochmalLesen: "Read the rules again",
    nochmalTesten: "Try again now",

    doneTitel: "You made it!",
    zugangTitel: "Your access to the group",
    zugangTipp: "Tip: say a quick hello in the group with your name and room number.",
    zugangButton: "Join the WhatsApp group",
    nachlesen: "Look up the rules again",
    fuss: "House rules"
  },

  abschlussText: "You now know the house rules. Welcome to the floor!",

  abschlussHinweis: {
    titel: "Got ideas? Bring them on!",
    text: "These rules are not set in stone. We are always open to improvements and good ideas – and we all sit down together at the start of the semester anyway. Just bring your suggestions along."
  },

  abschnitte: [
    {
      titel: "The basics",
      einleitung: "Sixteen of us live on this floor. To make that work, there are a few agreements and three duties that rotate among us.",
      regeln: [
        { titel: "Be kind and respectful",
          text: "We treat each other in a friendly and respectful way. That is the basis for everything else – including the moments when something does not go smoothly." },
        { titel: "Three duties per period",
          text: "Everyone takes on the kitchen duty, the bin duty and the living room duty once per period. All three can also be done in the same week." },
        { titel: "Sign yourself up",
          text: "At the start of each period you add your own name to the list on the kitchen wall. The current list is full – the new one goes up in October and we will announce it in the group." },
        { titel: "Applies to everyone",
          text: "Every resident of the floor community has to take on the duties in the weekly rotation – holiday guests included." },
        { titel: "Signed off by a flatmate",
          text: "Whether a duty was done properly is signed off by a flatmate. Anyone doing a poor job will be publicly called out, shamed and scolded!" },
        { titel: "Join Splitwise",
          text: "We record all shared expenses in Splitwise, so you need to join. The link will follow in the group shortly." }
      ]
    },

    {
      titel: "Always true in the kitchen",
      einleitung: "No matter whose duty week it is – this applies to everyone, every day.",
      regeln: [
        { titel: "Wash up right away and leave surfaces clean",
          text: "Wash your dishes immediately after cooking and eating. Nothing gets left out to dry – not even briefly, and not until later. And that is not all: before you leave the kitchen, every surface you used is clean again." },
        { titel: "What that includes",
          text: "Wipe the dining table, the counters and the stove after using them – every time, not just when something spilled." },
        { titel: "Leave the sink clean",
          text: "The sink is left clean – with no food scraps in the drain." },
        { titel: "Kitchen towels go on the hooks",
          text: "Damp kitchen towels need to dry – on the hooks provided for them. Never draped over the back of a chair." },
        { titel: "Washing-up liquid is in the basement",
          text: "You will find washing-up liquid in the basement. It is concentrated and has to be diluted with water before use." },
        { titel: "This should always be in stock",
          text: "Kitchen roll, compostable bin bags, sponges, cloths and baking paper should always be available. If any of it is running low, say so in the group in good time." }
      ]
    },

    {
      titel: "Bathroom and toilet",
      regeln: [
        { titel: "Left for the girls, right for the boys",
          text: "The left toilet is for the girls, the right one for the boys. If that split does not fit you, take the one that does." },
        { titel: "The golden rule",
          text: "If one of the two toilets is occupied, the other one must not be used – even when it is free. So you wait, or you use the toilet in the hallway." },
        { titel: "No peeing standing up",
          text: "Sit down. Always." }
      ]
    },

    {
      titel: "Bin duty",
      einleitung: "The most important of the three duties – if it is skipped, the whole floor notices.",
      regeln: [
        { titel: "Empty them early, every week",
          text: "Plastic, paper, organic and glass waste. Aluminium goes into the same bin as plastic." },
        { titel: "The Monday rule",
          text: "On Monday all containers have to be emptied again – no matter how full they are – and handed over empty to the next bin duty. Sunday is a day of rest, by the way: the rubbish stays put, or some neighbours get rather allergic." },
        { titel: "The large residual waste bin is not your job",
          text: "The large residual waste bin is emptied by the cleaning staff. That is explicitly not part of the bin duty. In theory they come every day – in practice it often looks different." },
        { titel: "Where the bins are",
          text: "Glass as well as plastic & aluminium are north-east of the crossing. Organic, paper and residual waste are to the south-west. The recycling van comes to Hiltenspergerstrasse on Thursday mornings.",
          bildAlt: "Map showing where the bins are around the Clemensstrasse / Hiltenspergerstrasse crossing" }
      ]
    },

    {
      titel: "Kitchen duty",
      regeln: [
        { titel: "Keeping an eye on kitchen order",
          text: "The kitchen duty makes sure everyone follows the kitchen rules. When someone breaks them, you point it out to them or raise it in the group. It is NOT your job to clean up after your flatmates – you keep an overview and only wash up yourself in an emergency." },
        { titel: "Do not take reminders personally",
          text: "Reminders from the kitchen duty may be worded directly and should not be taken personally. Without someone clearly tasked with calling out rule-breaking, such a reminder quickly feels like a personal attack." },
        { titel: "Ownerless items and surfaces",
          text: "In rare cases items left lying around or unwashed dishes cannot be traced to anyone. Then the kitchen duty clears them away. The same goes for dirty surfaces: if no one can be found, tables, counters and walls are put back in order." },
        { titel: "Descale the kettle",
          text: "The kettle is descaled regularly with a suitable cleaning product. If the product is running low, say so in good time." },
        { titel: "Clean the kitchen appliances",
          text: "On the outside and where needed on the inside: toaster, air fryer, bread slicer, microwave (inside and out) and oven (inside and out)." },
        { titel: "Sort the cutlery",
          text: "Cutlery is sorted neatly into the containers provided. Anything in the wrong place gets corrected." },
        { titel: "The cupboard under the sink",
          text: "The cupboard under the sink is kept tidy and clean." },
        { titel: "Kitchen towels – we are still looking for someone",
          text: "Changing and washing the kitchen towels is no longer part of the kitchen duty. We are looking for someone to take this on permanently and be fully exempt from all three duties in return. Interested? Get in touch in the group." }
      ]
    },

    {
      titel: "Living room duty",
      regeln: [
        { titel: "Tidying up",
          text: "The living room is kept in a tidy state. If things are lying around, point it out to whoever left them – or, when in doubt, deal with it yourself." },
        { titel: "Tidy the crockery shelf",
          text: "The shelf behind the door is sorted the way the labels say. Plates and cups of the same shape go in the same place." },
        { titel: "Vacuum the floor",
          text: "The floor is vacuumed once a week." },
        { titel: "Wipe the table",
          text: "The dining table is kept clean. If nobody can be found for a mess, the living room duty cleans it." },
        { titel: "Blankets and cushions",
          text: "Blankets and cushions go into the cupboard or are folded neatly onto the sofa." },
        { titel: "Water the plants",
          text: "All plants in the living room get watered once, if needed." },
        { titel: "Check the vacuum bag",
          text: "Check whether the vacuum cleaner bag has reached its maximum fill level and change it in time. There always has to be a spare in stock – you get new ones free of charge from the administration, no need to buy them." }
      ]
    }
  ],

  /* Die Reihenfolge der Optionen muss der in config.js entsprechen -
     welche Antwort richtig ist, steht dort. */
  fragen: [
    {
      frage: "Which duties does every resident take on per period?",
      optionen: [
        "Kitchen duty, bin duty and living room duty, once each",
        "Only the kitchen duty",
        "One of the three duties, whichever you pick",
        "All three, but only if you stay longer than one semester"
      ],
      erklaerung: "Everyone takes on all three duties once per period. They can all be done in the same week. This applies to everyone on the floor, holiday guests included."
    },
    {
      frage: "How do you get your duty weeks?",
      optionen: [
        "I add myself to the list in the kitchen at the start of the period",
        "The weeks are assigned in the WhatsApp group",
        "Whoever moves in gets the next free week automatically",
        "You ask the caretaker"
      ],
      erklaerung: "At the start of each period everyone signs themselves up on the list in the kitchen. We announce in the group when the new list goes up."
    },
    {
      frage: "You have cooked and eaten. What do you do before leaving the kitchen?",
      optionen: [
        "Wash up right away and leave every surface I used clean",
        "Wash up right away – the surfaces are the kitchen duty's job",
        "Leave the dishes out to dry and put them away later",
        "Leave everything, I will be cooking again later anyway"
      ],
      erklaerung: "Both belong together: wash up immediately, leave nothing out to dry – and leave the dining table, the counters and the stove clean. The sink stays free of scraps in the drain."
    },
    {
      frage: "You are on kitchen duty and see a flatmate's dirty dishes. What is your job?",
      optionen: [
        "Point it out to them or raise it in the group",
        "Wash them up – that is what the kitchen duty is for",
        "Put the dishes in their room",
        "Nothing – kitchen duty only cleans at the end of the week"
      ],
      erklaerung: "It is explicitly NOT the kitchen duty's job to clean up after flatmates. You keep an overview, call out breaches – and only wash up yourself in an emergency."
    },
    {
      frage: "What applies to the bin duty on Monday?",
      optionen: [
        "All containers are emptied – however full – and handed over empty to the next bin duty",
        "Only the containers that are more than half full",
        "Monday is a day of rest, emptying happens on Tuesday",
        "The new bin duty decides for themselves what is needed"
      ],
      erklaerung: "On Monday all containers are emptied again, no matter how full they are, and handed over empty to the next bin duty. Fun fact: Sunday is a day of rest – some neighbours really do get allergic about it. ;)"
    },
    {
      frage: "Taking out the rubbish: where does aluminium go?",
      optionen: [
        "Into the same bin as plastic",
        "Into the organic waste",
        "Into a separate container in the basement"
      ],
      erklaerung: "Aluminium goes into the same bin as plastic. Emptied weekly are plastic, paper, organic and glass waste – the large residual bin is handled by the cleaning staff."
    },
    {
      frage: "Which of these should always be in stock here?",
      optionen: [
        "Kitchen roll",
        "Baking paper",
        "Sponges",
        "Milk",
        "Coffee"
      ],
      erklaerung: "Always in stock should be: kitchen roll, compostable bin bags, sponges, cloths and baking paper. Food such as milk or coffee is everyone's own business."
    },
    {
      frage: "Someone is using one of the two toilets. What do you do?",
      optionen: [
        "Wait, or use the toilet in the hallway",
        "Use the other one, it is free after all",
        "Use the other one as long as it is the one for my gender",
        "Knock and ask how long it will take"
      ],
      erklaerung: "The golden rule: if one of the two toilets is occupied, the other one stays free. So you wait – or use the toilet in the hallway. Otherwise: left for the girls, right for the boys. And you sit down to pee."
    },
    {
      frage: "The kitchen towel is damp. Where does it go?",
      optionen: [
        "Onto the hooks provided, to dry",
        "Over the back of a chair",
        "Over the back of the sofa in the living room",
        "Folded up on the counter"
      ],
      erklaerung: "Kitchen towels need to dry – but only on the hooks provided. Never over the back of a chair."
    }
  ],

  /* Nur die Bezeichnungen. Koordinaten und Toleranz stehen in config.js. */
  karte: {
    bildAlt: "Blank map of the Clemensstrasse / Hiltenspergerstrasse crossing",
    tonnen: [
      { name: "glass",
        hinweis: "The glass container is north-east of the crossing, top right – directly above plastic & aluminium." },
      { name: "plastic & aluminium",
        hinweis: "Plastic & aluminium are north-east of the crossing, top right – directly below the glass container. Aluminium goes into the same bin as plastic." },
      { name: "organic waste",
        hinweis: "The brown organic bin is furthest west, at the left edge of the map – a little apart from paper and residual waste." },
      { name: "paper",
        hinweis: "The blue paper bin is south-west of the crossing, bottom left – between the organic and the residual waste bin." },
      { name: "residual waste",
        hinweis: "The black residual waste bin is south-west of the crossing, bottom left – right next to the blue paper bin." }
    ]
  }
};

const starterSkills = [
  {
    id: "juggle-three-objects",
    name: "Juggle three objects",
    capabilities: ["Coordination", "Reaction", "Focus"],
    featured: true,
    custom: false
  },
  {
    id: "paper-aeroplane",
    name: "Make a paper aeroplane that flies well",
    capabilities: ["Dexterity", "Reasoning"],
    featured: true,
    custom: false
  },
  {
    id: "magic-trick",
    name: "Do a magic trick with an everyday object",
    capabilities: ["Dexterity", "Control", "Communication"],
    featured: true,
    custom: false
  },
  {
    id: "origami-figure",
    name: "Fold an origami figure",
    capabilities: ["Dexterity", "Focus"],
    featured: true,
    custom: false
  },
  {
    id: "cats-cradle",
    name: "Make a cat’s cradle",
    capabilities: ["Dexterity", "Coordination", "Memory"],
    featured: false,
    custom: false
  },
  {
    id: "shadow-puppets",
    name: "Make three hand shadow puppets",
    capabilities: ["Dexterity", "Creativity", "Control"],
    featured: false,
    custom: false
  },
  {
    id: "spin-pen",
    name: "Spin a pen around your fingers",
    capabilities: ["Dexterity", "Coordination", "Control"],
    featured: false,
    custom: false
  },
  {
    id: "rubiks-cube",
    name: "Solve a Rubik’s Cube",
    capabilities: ["Reasoning", "Memory", "Focus"],
    featured: true,
    custom: false
  },
  {
    id: "hand-clapping-game",
    name: "Play a hand-clapping game",
    capabilities: ["Coordination", "Memory", "Connection"],
    featured: false,
    custom: false
  },
  {
    id: "sew-simple-repair",
    name: "Sew a simple repair by hand",
    capabilities: ["Dexterity", "Control", "Focus"],
    featured: true,
    custom: false
  },
  {
    id: "useful-knots",
    name: "Tie three useful knots",
    capabilities: ["Dexterity", "Memory"],
    featured: true,
    custom: false
  },
  {
    id: "moonwalk",
    name: "Moonwalk",
    capabilities: ["Coordination", "Balance", "Control"],
    featured: true,
    custom: false
  },
  {
    id: "beatbox-basic-rhythm",
    name: "Beatbox a basic rhythm",
    capabilities: ["Coordination", "Control", "Creativity"],
    featured: true,
    custom: false
  },
  {
    id: "morse-code",
    name: "Send and decode a Morse code message",
    capabilities: ["Memory", "Communication", "Focus"],
    featured: true,
    custom: false
  },
  {
    id: "water-glass-tune",
    name: "Play a tune using glasses or bottles of water",
    capabilities: ["Control", "Creativity", "Focus"],
    featured: false,
    custom: false
  },
  {
    id: "braid-hair",
    name: "Braid hair",
    capabilities: ["Dexterity", "Coordination", "Control"],
    featured: true,
    custom: false
  },
  {
    id: "bird-call-hands",
    name: "Make a bird call with your hands",
    capabilities: ["Control", "Coordination"],
    featured: false,
    custom: false
  },
  {
    id: "write-other-hand",
    name: "Write with your other hand",
    capabilities: ["Dexterity", "Control", "Focus"],
    featured: false,
    custom: false
  },
  {
    id: "coin-knuckles",
    name: "Roll a coin across your knuckles",
    capabilities: ["Dexterity", "Coordination", "Control"],
    featured: false,
    custom: false
  },
  {
    id: "tongue-twister",
    name: "Say a tongue twister really fast",
    capabilities: ["Language", "Control"],
    featured: false,
    custom: false
  },
  {
    id: "finger-counting-culture",
    name: "Count to 10 on your fingers another culture’s way",
    capabilities: ["Memory", "Coordination"],
    featured: false,
    custom: false
  },
  {
    id: "phonetic-alphabet",
    name: "Spell words with the phonetic alphabet",
    capabilities: ["Memory", "Language", "Communication"],
    featured: false,
    custom: false
  },
  {
    id: "find-north",
    name: "Find north without a compass or phone",
    capabilities: ["Navigation", "Reasoning"],
    featured: true,
    custom: false
  },
  {
    id: "sunset-hand",
    name: "Estimate how long until sunset using your hand",
    capabilities: ["Reasoning", "Navigation"],
    featured: false,
    custom: false
  },
  {
    id: "constellations",
    name: "Recognise five constellations",
    capabilities: ["Memory", "Navigation"],
    featured: true,
    custom: false
  },
  {
    id: "local-trees",
    name: "Recognise five local trees by their leaves",
    capabilities: ["Memory", "Focus"],
    featured: true,
    custom: false
  },
  {
    id: "local-sign-language",
    name: "Fingerspell your name in your local sign language",
    capabilities: ["Language", "Dexterity", "Communication"],
    featured: true,
    custom: false
  },
  {
    id: "local-birds-calls",
    name: "Recognise five local birds by their calls",
    capabilities: ["Memory", "Focus"],
    featured: false,
    custom: false
  },
  {
    id: "five-language-phrases",
    name: "Say a useful phrase in five languages",
    capabilities: ["Language", "Memory", "Communication"],
    featured: true,
    custom: false
  },
  {
    id: "body-measuring-tool",
    name: "Use your body to measure things",
    capabilities: ["Reasoning", "Adaptability"],
    featured: true,
    custom: false
  },
  {
    id: "remember-20-things",
    name: "Remember 20 things after hearing them once",
    capabilities: ["Memory", "Focus"],
    featured: false,
    custom: false
  },
  {
    id: "message-no-speaking-writing",
    name: "Communicate without speaking or writing",
    capabilities: ["Communication", "Creativity", "Adaptability"],
    featured: false,
    custom: false
  },
  {
    id: "day-of-week-date",
    name: "Work out the day of the week for almost any date",
    capabilities: ["Reasoning", "Memory"],
    featured: false,
    custom: false
  },
  {
    id: "pig-latin",
    name: "Speak Pig Latin",
    capabilities: ["Language", "Memory"],
    featured: true,
    custom: false
  },
  {
    id: "finger-binary",
    name: "Count in binary on your fingers",
    capabilities: ["Reasoning", "Memory", "Dexterity"],
    featured: false,
    custom: false
  },
  {
    id: "alphabet-backwards",
    name: "Say the alphabet backwards without stopping",
    capabilities: ["Memory", "Language", "Focus"],
    featured: false,
    custom: false
  },
  {
    id: "roman-numerals",
    name: "Decode Roman numerals",
    capabilities: ["Reasoning", "Memory", "Language"],
    featured: false,
    custom: false
  },
  {
    id: "mental-multiplication",
    name: "Multiply two-digit numbers in your head",
    capabilities: ["Reasoning", "Memory", "Focus"],
    featured: false,
    custom: false
  },
  {
    id: "talk-without-moving-lips",
    name: "Talk without moving your lips",
    capabilities: ["Control", "Communication"],
    featured: false,
    custom: false
  },
  {
    id: "world-map-memory",
    name: "Draw a world map from memory",
    capabilities: ["Memory", "Reasoning", "Creativity"],
    featured: false,
    custom: false
  },
  {
    id: "speak-backwards",
    name: "Speak backwards so it sounds normal when reversed",
    capabilities: ["Language", "Memory", "Control"],
    featured: false,
    custom: false
  },
  {
    id: "gonggi",
    name: "Play Gonggi with five stones",
    capabilities: ["Dexterity", "Coordination", "Reaction"],
    featured: true,
    custom: false
  },
  {
    id: "shoelaces-one-hand",
    name: "Tie your shoelaces with one hand",
    capabilities: ["Dexterity", "Control", "Adaptability"],
    featured: false,
    custom: false
  },
  {
    id: "two-rhythms",
    name: "Keep two different rhythms at once",
    capabilities: ["Coordination", "Focus", "Control"],
    featured: false,
    custom: false
  },
  {
    id: "play-ampe",
    name: "Play Ampe",
    capabilities: ["Coordination", "Reaction", "Connection"],
    featured: true,
    custom: false
  },
  {
    id: "play-spoons",
    name: "Play the spoons",
    capabilities: ["Coordination", "Control", "Creativity"],
    featured: true,
    custom: false
  },
  {
    id: "finger-whistle",
    name: "Whistle loudly with your fingers",
    capabilities: ["Control", "Dexterity"],
    featured: true,
    custom: false
  },
  {
    id: "grow-plant-seed",
    name: "Grow a plant from a seed",
    capabilities: ["Focus", "Adaptability"],
    featured: true,
    custom: false
  },
  {
    id: "cook-meal-scratch",
    name: "Cook a meal from scratch",
    capabilities: ["Reasoning", "Adaptability", "Control"],
    featured: true,
    custom: false
  },
  {
    id: "dance-routine",
    name: "Perform a whole dance routine",
    capabilities: ["Coordination", "Memory", "Stamina"],
    featured: true,
    custom: false
  }
];

const capabilities = [
  "Strength",
  "Stamina",
  "Balance",
  "Flexibility",
  "Mobility",
  "Coordination",
  "Dexterity",
  "Control",
  "Reaction",
  "Memory",
  "Focus",
  "Reasoning",
  "Creativity",
  "Adaptability",
  "Communication",
  "Navigation",
  "Connection",
  "Language"
];

const customStatusOptions = [
  {
    value: "can",
    label: "I can do this"
  },
  {
    value: "learning",
    label: "Learning"
  },
  {
    value: "want",
    label: "Want to try"
  }
];
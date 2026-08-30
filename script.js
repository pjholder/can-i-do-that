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
    capabilities: ["Dexterity", "Reasoning", "Noticing"],
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
    capabilities: ["Dexterity", "Focus", "Noticing"],
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
    capabilities: ["Dexterity", "Focus", "Control"],
    featured: true,
    custom: false
  },
  {
    id: "useful-knots",
    name: "Tie three useful knots",
    capabilities: ["Dexterity", "Memory", "Reasoning"],
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
    capabilities: ["Noticing", "Control", "Creativity"],
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
    capabilities: ["Control", "Coordination", "Noticing"],
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
    capabilities: ["Language", "Control", "Memory"],
    featured: false,
    custom: false
  },
  {
    id: "finger-counting-culture",
    name: "Count to 10 on your fingers another culture’s way",
    capabilities: ["Memory", "Coordination", "Noticing"],
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
    capabilities: ["Navigation", "Reasoning", "Noticing"],
    featured: true,
    custom: false
  },
  {
    id: "sunset-hand",
    name: "Estimate how long until sunset using your hand",
    capabilities: ["Noticing", "Reasoning", "Navigation"],
    featured: false,
    custom: false
  },
  {
    id: "constellations",
    name: "Recognise five constellations",
    capabilities: ["Noticing", "Memory", "Navigation"],
    featured: true,
    custom: false
  },
  {
    id: "local-trees",
    name: "Recognise five local trees by their leaves",
    capabilities: ["Noticing", "Memory", "Adaptability"],
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
    capabilities: ["Noticing", "Memory", "Focus"],
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
    capabilities: ["Reasoning", "Noticing", "Adaptability"],
    featured: true,
    custom: false
  },
  {
    id: "remember-20-things",
    name: "Remember 20 things after hearing them once",
    capabilities: ["Memory", "Focus", "Reasoning"],
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
    capabilities: ["Reasoning", "Memory", "Focus"],
    featured: false,
    custom: false
  },
  {
    id: "pig-latin",
    name: "Speak Pig Latin",
    capabilities: ["Language", "Memory", "Control"],
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
    capabilities: ["Control", "Communication", "Focus"],
    featured: false,
    custom: false
  },
  {
    id: "world-map-memory",
    name: "Draw a world map from memory",
    capabilities: ["Memory", "Noticing", "Creativity"],
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
    capabilities: ["Control", "Dexterity", "Focus"],
    featured: true,
    custom: false
  },
  {
    id: "grow-plant-seed",
    name: "Grow a plant from a seed",
    capabilities: ["Noticing", "Adaptability", "Focus"],
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
  "Noticing",
  "Adaptability",
  "Communication",
  "Regulation",
  "Navigation",
  "Connection",
  "Language"
];


const page = document.body.dataset.page;

const PAGE_SIZE = 50;

let visibleCount = PAGE_SIZE;
let activeCapability = null;
let searchTerm = "";

let activeStatus =
  new URLSearchParams(location.search).get("status");

let currentSuggestion = null;
let storySkillId = null;
let editingCustomSkillId = null;


/* =========================
   SAFE TEXT
========================= */

function escapeHTML(text) {

  const div = document.createElement("div");

  div.textContent = text ?? "";

  return div.innerHTML;
}


/* =========================
   LOCAL STORAGE HELPERS
========================= */

function getJSON(key, fallback) {

  try {

    const value =
      JSON.parse(localStorage.getItem(key));

    return value ?? fallback;

  } catch {

    return fallback;
  }

}


function getCustomSkills() {

  return getJSON("customSkills", []).map(skill => ({
    ...skill,
    custom: true
  }));

}


function saveCustomSkills(skills) {

  localStorage.setItem(
    "customSkills",
    JSON.stringify(skills)
  );

}


function getHiddenSkills() {

  return getJSON(
    "hiddenSkills",
    []
  );

}


function saveHiddenSkills(ids) {

  localStorage.setItem(
    "hiddenSkills",
    JSON.stringify(ids)
  );

}


/* =========================
   SKILL LISTS
========================= */

function getVisibleOfficialSkills() {

  const hidden =
    getHiddenSkills();

  return starterSkills.filter(
    skill => !hidden.includes(skill.id)
  );

}


function getAllVisibleSkills() {

  return [
    ...getVisibleOfficialSkills(),
    ...getCustomSkills()
  ];

}


/* =========================
   STATUS
========================= */

function getStatus(id) {

  return localStorage.getItem(
    "status-" + id
  );

}


function setStatus(id, status) {

  if (getStatus(id) === status) {

    localStorage.removeItem(
      "status-" + id
    );

  } else {

    localStorage.setItem(
      "status-" + id,
      status
    );

  }

}


/* =========================
   STORIES
========================= */

function getStory(id) {

  return getJSON(
    "story-" + id,
    null
  );

}


function saveStory(id, story) {

  localStorage.setItem(
    "story-" + id,
    JSON.stringify(story)
  );

}


function deleteStory(id) {

  localStorage.removeItem(
    "story-" + id
  );

}


/* =========================
   HOME COUNTS
========================= */

function updateCounts() {

  const counts = {
    can: 0,
    learning: 0,
    want: 0
  };


  getAllVisibleSkills().forEach(skill => {

    const status =
      getStatus(skill.id);

    if (
      status &&
      status in counts
    ) {

      counts[status]++;

    }

  });


  const map = {
    can: "canCount",
    learning: "learningCount",
    want: "wantCount"
  };


  Object.entries(map).forEach(
    ([key, id]) => {

      const element =
        document.getElementById(id);

      if (element) {

        element.textContent =
          counts[key];

      }

    }
  );

}


/* =========================
   STATUS LABEL
========================= */

function statusLabel(status) {

  if (status === "can") {
    return "I can do this";
  }

  if (status === "learning") {
    return "Learning";
  }

  return "Want to try";
}


/* =========================
   CREATE SKILL CARD
========================= */

function createSkillCard(skill) {

  const card =
    document.createElement("article");

  card.className =
    "skill-card";


  const capsText =
    skill.capabilities?.length
      ? skill.capabilities
          .join(" · ")
          .toUpperCase()
      : "YOUR SKILL";


  card.innerHTML = `

    <div class="skill-main">

      <p class="capabilities">

        ${escapeHTML(capsText)}

        ${
          skill.custom
            ? '<span class="custom-label">YOURS</span>'
            : ""
        }

      </p>


      <h3>
        ${escapeHTML(skill.name)}
      </h3>


      <div class="status-buttons">

        <button
          type="button"
          data-status="can"
        >
          I can do this
        </button>

        <button
          type="button"
          data-status="learning"
        >
          Learning
        </button>

        <button
          type="button"
          data-status="want"
        >
          Want to try
        </button>

      </div>

    </div>


    <button
      class="skill-toggle"
      type="button"
      aria-expanded="false"
      aria-label="Open options for ${escapeHTML(skill.name)}"
    >
      ›
    </button>


    <div
      class="skill-details hidden"
    ></div>

  `;


  const buttons =
    [...card.querySelectorAll(
      "[data-status]"
    )];


  const details =
    card.querySelector(
      ".skill-details"
    );


  const toggle =
    card.querySelector(
      ".skill-toggle"
    );


  /* PAINT STATUS */

  function paintStatus() {

    const current =
      getStatus(skill.id);


    buttons.forEach(button => {

      button.classList.toggle(
        "selected",
        button.dataset.status === current
      );

    });

  }


  /* DETAILS */

  function renderDetails() {

    const status =
      getStatus(skill.id);

    const story =
      getStory(skill.id);

    const storyAllowed =
      status === "can";


    let storyHTML = "";


    if (storyAllowed) {

      if (story) {

        const bits = [
          story.when,
          story.who,
          story.where
        ]
          .filter(Boolean)
          .map(escapeHTML);


        storyHTML = `

          <div class="story-section">

            <p class="story-heading">
              YOUR STORY
            </p>


            <div class="story-display">

              ${
                bits.length
                  ? `
                    <p class="story-details">
                      ${bits.join(" · ")}
                    </p>
                  `
                  : ""
              }


              ${
                story.memory
                  ? `
                    <p class="story-memory">
                      ${escapeHTML(
                        story.memory
                      )}
                    </p>
                  `
                  : ""
              }

            </div>


            <button
              class="skill-action edit-story"
              type="button"
            >
              View / edit story →
            </button>

          </div>

        `;

      } else {

        storyHTML = `

          <div class="story-section">

            <p class="story-heading">
              YOUR STORY
            </p>

            <button
              class="skill-action add-story"
              type="button"
            >
              Add your story →
            </button>

          </div>

        `;

      }

    }


    const customActions =
      skill.custom
        ? `

          <button
            class="skill-action edit-custom"
            type="button"
          >
            Edit skill
          </button>

          <button
            class="skill-action danger delete-skill"
            type="button"
          >
            Delete this skill
          </button>

        `
        : `

          <button
            class="skill-action hide-skill"
            type="button"
          >
            Hide this skill
          </button>

        `;


    details.innerHTML = `

      ${storyHTML}

      <div class="skill-secondary-actions">

        ${customActions}

      </div>

    `;


    details
      .querySelector(".add-story")
      ?.addEventListener(
        "click",
        () => openStoryDialog(skill)
      );


    details
      .querySelector(".edit-story")
      ?.addEventListener(
        "click",
        () => openStoryDialog(skill)
      );


    details
      .querySelector(".edit-custom")
      ?.addEventListener(
        "click",
        () => openCustomSkillDialog(skill)
      );


    details
      .querySelector(".delete-skill")
      ?.addEventListener(
        "click",
        () => deleteCustomSkill(skill)
      );


    details
      .querySelector(".hide-skill")
      ?.addEventListener(
        "click",
        () => hideOfficialSkill(skill)
      );

  }


  /* STATUS BUTTON CLICKS */

  buttons.forEach(button => {

    button.addEventListener(
      "click",
      () => {

        setStatus(
          skill.id,
          button.dataset.status
        );


        paintStatus();

        updateCounts();


        if (
          !details.classList.contains(
            "hidden"
          )
        ) {

          renderDetails();

        }


        if (
          page === "skills" &&
          activeStatus
        ) {

          renderSkillsPage();

        }

      }
    );

  });


  /* ARROW */

  toggle.addEventListener(
    "click",
    () => {

      const opening =
        details.classList.contains(
          "hidden"
        );


      if (opening) {

        renderDetails();

      }


      details.classList.toggle(
        "hidden"
      );


      card.classList.toggle(
        "details-open",
        opening
      );


      toggle.setAttribute(
        "aria-expanded",
        String(opening)
      );

    }
  );


  paintStatus();

  return card;
}


/* =========================
   HOME PAGE
========================= */

function renderHome() {

  const container =
    document.getElementById(
      "homeSkillsContainer"
    );


  if (!container) {
    return;
  }


  container.innerHTML = "";


  starterSkills
    .filter(
      skill => skill.featured
    )
    .slice(0, 25)
    .forEach(skill => {

      container.appendChild(
        createSkillCard(skill)
      );

    });


  const link =
    document.getElementById(
      "exploreAllSkills"
    );


  if (link) {

    link.textContent =
      `Explore all ${starterSkills.length} skills →`;

  }

}


/* =========================
   CAPABILITY FILTERS
========================= */

function createCapabilityFilters() {

  const wrap =
    document.getElementById(
      "capabilityFilters"
    );


  if (!wrap) {
    return;
  }


  wrap.innerHTML = "";


  [
    "All",
    ...capabilities
  ].forEach(capability => {

    const button =
      document.createElement(
        "button"
      );


    button.type =
      "button";


    button.className =
      "filter-button";


    button.textContent =
      capability;


    const value =
      capability === "All"
        ? null
        : capability;


    button.classList.toggle(
      "active",
      activeCapability === value
    );


    button.addEventListener(
      "click",
      () => {

        activeCapability =
          value;


        visibleCount =
          PAGE_SIZE;


        createCapabilityFilters();

        renderSkillsPage();

      }
    );


    wrap.appendChild(
      button
    );

  });

}


/* =========================
   FILTER SKILLS
========================= */

function filteredSkills() {

  let list =
    getAllVisibleSkills();


  /* PERSONAL STATUS VIEW */

  if (
    activeStatus &&
    [
      "can",
      "learning",
      "want"
    ].includes(activeStatus)
  ) {

    list =
      list.filter(
        skill =>
          getStatus(skill.id) ===
          activeStatus
      );

  }


  /* CAPABILITY */

  if (activeCapability) {

    list =
      list.filter(skill =>

        (
          skill.capabilities ||
          []
        ).includes(
          activeCapability
        )

      );

  }


  /* SEARCH */

  if (searchTerm) {

    list =
      list.filter(skill => {

        const haystack =
          `
            ${skill.name}
            ${
              (
                skill.capabilities ||
                []
              ).join(" ")
            }
          `.toLowerCase();


        return haystack.includes(
          searchTerm
        );

      });

  }


  return list;
}


/* =========================
   RENDER ALL SKILLS
========================= */

function renderSkillsPage() {

  const container =
    document.getElementById(
      "skillsContainer"
    );


  if (!container) {
    return;
  }


  const all =
    filteredSkills();


  const visible =
    all.slice(
      0,
      visibleCount
    );


  container.innerHTML = "";


  visible.forEach(skill => {

    container.appendChild(
      createSkillCard(skill)
    );

  });


  if (!all.length) {

    container.innerHTML =
      "<p>Nothing matches that yet.</p>";

  }


  /* RESULT COUNT */

  const count =
    document.getElementById(
      "resultsCount"
    );


  if (count) {

    count.textContent =
      `${all.length} skill${
        all.length === 1
          ? ""
          : "s"
      }`;

  }


  /* SHOW MORE */

  const showMore =
    document.getElementById(
      "showMoreButton"
    );


  if (showMore) {

    showMore.classList.toggle(
      "hidden",
      visible.length >= all.length
    );

  }


  /* PERSONAL STATUS VIEW */

  const personal =
    document.getElementById(
      "activePersonalView"
    );


  if (personal) {

    if (
      activeStatus &&
      [
        "can",
        "learning",
        "want"
      ].includes(activeStatus)
    ) {

      personal.classList.remove(
        "hidden"
      );


      personal.innerHTML = `

        Showing
        <strong>
          ${statusLabel(activeStatus)}
        </strong>.

        <a href="./skills.html">
          Show all skills
        </a>

      `;

    } else {

      personal.classList.add(
        "hidden"
      );

    }

  }


  updateHiddenButton();
}


/* =========================
   RANDOM SKILL
========================= */

function getPossibleSuggestions() {

  return getAllVisibleSkills()
    .filter(skill =>

      !skill.custom &&
      getStatus(skill.id) === null

    );

}


function showRandomSuggestion() {

  const result =
    document.getElementById(
      "suggestionResult"
    );


  const message =
    document.getElementById(
      "noSuggestionMessage"
    );


  const possible =
    getPossibleSuggestions();


  if (!possible.length) {

    currentSuggestion =
      null;


    result?.classList.add(
      "hidden"
    );


    message?.classList.remove(
      "hidden"
    );


    return;
  }


  let options =
    possible;


  if (
    currentSuggestion &&
    possible.length > 1
  ) {

    options =
      possible.filter(
        skill =>
          skill.id !==
          currentSuggestion.id
      );

  }


  currentSuggestion =
    options[
      Math.floor(
        Math.random() *
        options.length
      )
    ];


  document.getElementById(
    "suggestionName"
  ).textContent =
    currentSuggestion.name;


  document.getElementById(
    "suggestionCapabilities"
  ).textContent =
    currentSuggestion
      .capabilities
      .join(" · ");


  document.getElementById(
    "suggestionWantButton"
  ).textContent =
    "Want to try";


  result.classList.remove(
    "hidden"
  );


  message.classList.add(
    "hidden"
  );

}


/* =========================
   RANDOM DIALOG
========================= */

function setupTryDialog() {

  const dialog =
    document.getElementById(
      "tryDialog"
    );


  document
    .querySelectorAll(
      "[data-open-try]"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => dialog.showModal()
      );

    });


  document.getElementById(
    "randomPickButton"
  )?.addEventListener(
    "click",
    showRandomSuggestion
  );


  document.getElementById(
    "anotherSuggestionButton"
  )?.addEventListener(
    "click",
    showRandomSuggestion
  );


  document.getElementById(
    "suggestionWantButton"
  )?.addEventListener(
    "click",
    () => {

      if (!currentSuggestion) {
        return;
      }


      localStorage.setItem(
        "status-" +
        currentSuggestion.id,
        "want"
      );


      document.getElementById(
        "suggestionWantButton"
      ).textContent =
        "Added ✓";


      updateCounts();


      if (page === "skills") {

        renderSkillsPage();

      }

    }
  );

}


/* =========================
   STORY DIALOG
========================= */

function openStoryDialog(skill) {

  const dialog =
    document.getElementById(
      "storyDialog"
    );


  storySkillId =
    skill.id;


  document.getElementById(
    "storyDialogTitle"
  ).textContent =
    skill.name;


  const story =
    getStory(skill.id) || {};


  document.getElementById(
    "storyWhen"
  ).value =
    story.when || "";


  document.getElementById(
    "storyWho"
  ).value =
    story.who || "";


  document.getElementById(
    "storyWhere"
  ).value =
    story.where || "";


  document.getElementById(
    "storyMemory"
  ).value =
    story.memory || "";


  document.getElementById(
    "deleteStoryButton"
  ).classList.toggle(
    "hidden",
    !getStory(skill.id)
  );


  dialog.showModal();
}


/* =========================
   STORY SAVE / DELETE
========================= */

function setupStoryDialog() {

  document.getElementById(
    "storyForm"
  )?.addEventListener(
    "submit",
    event => {

      event.preventDefault();


      if (!storySkillId) {
        return;
      }


      saveStory(
        storySkillId,
        {

          when:
            document.getElementById(
              "storyWhen"
            ).value.trim(),

          who:
            document.getElementById(
              "storyWho"
            ).value.trim(),

          where:
            document.getElementById(
              "storyWhere"
            ).value.trim(),

          memory:
            document.getElementById(
              "storyMemory"
            ).value.trim()

        }
      );


      document.getElementById(
        "storyDialog"
      ).close();


      if (page === "skills") {

        renderSkillsPage();

      } else {

        renderHome();

      }

    }
  );


  document.getElementById(
    "deleteStoryButton"
  )?.addEventListener(
    "click",
    () => {

      if (!storySkillId) {
        return;
      }


      if (
        !confirm(
          "Delete this story?\n\nThis can't be undone."
        )
      ) {
        return;
      }


      deleteStory(
        storySkillId
      );


      document.getElementById(
        "storyDialog"
      ).close();


      if (page === "skills") {

        renderSkillsPage();

      } else {

        renderHome();

      }

    }
  );

}


/* =========================
   CUSTOM SKILL CAPABILITIES
========================= */

function fillCapabilitySelect() {

  const select =
    document.getElementById(
      "newSkillCapability"
    );


  if (
    !select ||
    select.options.length > 1
  ) {
    return;
  }


  capabilities.forEach(
    capability => {

      const option =
        document.createElement(
          "option"
        );


      option.value =
        capability;


      option.textContent =
        capability;


      select.appendChild(
        option
      );

    }
  );

}


/* =========================
   OPEN CUSTOM SKILL DIALOG
========================= */

function openCustomSkillDialog(
  skill = null
) {

  fillCapabilitySelect();


  editingCustomSkillId =
    skill?.id || null;


  document.getElementById(
    "customSkillDialogTitle"
  ).textContent =
    skill
      ? "Edit your skill"
      : "Add your own skill";


  document.getElementById(
    "newSkillName"
  ).value =
    skill?.name || "";


  document.getElementById(
    "newSkillCapability"
  ).value =
    skill?.capabilities?.[0] ||
    "";


  document.getElementById(
    "saveNewSkillButton"
  ).textContent =
    skill
      ? "Save changes"
      : "Add skill";


  document.getElementById(
    "addSkillMessage"
  ).textContent =
    "";


  document.getElementById(
    "addSkillDialog"
  ).showModal();

}


/* =========================
   SAVE CUSTOM SKILL
========================= */

function saveCustomSkill() {

  const name =
    document.getElementById(
      "newSkillName"
    ).value.trim();


  const capability =
    document.getElementById(
      "newSkillCapability"
    ).value;


  const message =
    document.getElementById(
      "addSkillMessage"
    );


  if (!name) {

    message.textContent =
      "Give your skill a name.";

    return;

  }


  let custom =
    getCustomSkills();


  if (editingCustomSkillId) {

    custom =
      custom.map(skill =>

        skill.id ===
        editingCustomSkillId

          ? {
              ...skill,
              name,
              capabilities:
                capability
                  ? [capability]
                  : []
            }

          : skill

      );

  } else {

    custom.push({

      id:
        "custom-" +
        Date.now(),

      name,

      capabilities:
        capability
          ? [capability]
          : [],

      custom: true

    });

  }


  saveCustomSkills(
    custom
  );


  document.getElementById(
    "addSkillDialog"
  ).close();


  editingCustomSkillId =
    null;


  updateCounts();


  if (page === "skills") {

    renderSkillsPage();

  }

}


/* =========================
   DELETE CUSTOM SKILL
========================= */

function deleteCustomSkill(skill) {

  if (
    !confirm(
      `Delete "${skill.name}"?\n\nIts status and story will also be deleted.`
    )
  ) {
    return;
  }


  saveCustomSkills(

    getCustomSkills().filter(
      item =>
        item.id !== skill.id
    )

  );


  localStorage.removeItem(
    "status-" + skill.id
  );


  localStorage.removeItem(
    "story-" + skill.id
  );


  updateCounts();

  renderSkillsPage();

}


/* =========================
   HIDE OFFICIAL SKILL
========================= */

function hideOfficialSkill(skill) {

  if (
    !confirm(
      `Hide "${skill.name}"?\n\nYou can restore it later.`
    )
  ) {
    return;
  }


  const hidden =
    getHiddenSkills();


  if (
    !hidden.includes(skill.id)
  ) {

    hidden.push(
      skill.id
    );

  }


  saveHiddenSkills(
    hidden
  );


  updateCounts();


  if (page === "skills") {

    renderSkillsPage();

  } else {

    renderHome();

  }

}


/* =========================
   HIDDEN SKILLS LIST
========================= */

function renderHiddenSkills() {

  const container =
    document.getElementById(
      "hiddenSkillsContainer"
    );


  if (!container) {
    return;
  }


  const hidden =
    starterSkills.filter(
      skill =>
        getHiddenSkills()
          .includes(skill.id)
    );


  container.innerHTML =
    hidden.length
      ? ""
      : "<p>No hidden skills.</p>";


  hidden.forEach(skill => {

    const row =
      document.createElement(
        "div"
      );


    row.className =
      "hidden-skill-row";


    row.innerHTML = `

      <div>

        <strong>
          ${escapeHTML(skill.name)}
        </strong>

        <span>
          ${escapeHTML(
            skill.capabilities.join(
              " · "
            )
          )}
        </span>

      </div>


      <button type="button">
        Restore
      </button>

    `;


    row.querySelector(
      "button"
    ).addEventListener(
      "click",
      () => {

        saveHiddenSkills(

          getHiddenSkills()
            .filter(
              id =>
                id !== skill.id
            )

        );


        renderHiddenSkills();

        updateHiddenButton();


        if (
          page === "skills"
        ) {

          renderSkillsPage();

        }

      }
    );


    container.appendChild(
      row
    );

  });

}


/* =========================
   HIDDEN SKILLS BUTTON
========================= */

function updateHiddenButton() {

  const button =
    document.getElementById(
      "restoreHiddenButton"
    );


  if (!button) {
    return;
  }


  const count =
    getHiddenSkills().length;


  button.classList.toggle(
    "hidden",
    count === 0
  );


  button.textContent =
    `Hidden skills (${count})`;

}


/* =========================
   BACKUP
========================= */

function collectBackup() {

  const data = {

    version: 1,

    createdAt:
      new Date().toISOString(),

    customSkills:
      getCustomSkills(),

    hiddenSkills:
      getHiddenSkills(),

    statuses: {},

    stories: {}

  };


  [
    ...starterSkills,
    ...getCustomSkills()
  ].forEach(skill => {

    const status =
      getStatus(skill.id);


    const story =
      getStory(skill.id);


    if (status) {

      data.statuses[
        skill.id
      ] = status;

    }


    if (story) {

      data.stories[
        skill.id
      ] = story;

    }

  });


  return data;
}


/* =========================
   DOWNLOAD BACKUP
========================= */

function backupData() {

  const blob =
    new Blob(
      [
        JSON.stringify(
          collectBackup(),
          null,
          2
        )
      ],
      {
        type:
          "application/json"
      }
    );


  const url =
    URL.createObjectURL(
      blob
    );


  const link =
    document.createElement(
      "a"
    );


  link.href =
    url;


  link.download =
    "can-i-do-that-backup.json";


  link.click();


  URL.revokeObjectURL(
    url
  );

}


/* =========================
   RESTORE BACKUP
========================= */

function restoreData(file) {

  const reader =
    new FileReader();


  reader.onload =
    () => {

      try {

        const data =
          JSON.parse(
            reader.result
          );


        if (
          !data ||
          data.version !== 1
        ) {

          throw new Error(
            "Unsupported backup"
          );

        }


        if (
          !confirm(
            "Restore your backup?\n\nThis will replace the skills, statuses and stories currently saved on this device."
          )
        ) {

          return;

        }


        Object.keys(
          localStorage
        ).forEach(key => {

          if (
            key.startsWith(
              "status-"
            ) ||
            key.startsWith(
              "story-"
            ) ||
            key ===
              "customSkills" ||
            key ===
              "hiddenSkills"
          ) {

            localStorage.removeItem(
              key
            );

          }

        });


        saveCustomSkills(

          Array.isArray(
            data.customSkills
          )
            ? data.customSkills
            : []

        );


        saveHiddenSkills(

          Array.isArray(
            data.hiddenSkills
          )
            ? data.hiddenSkills
            : []

        );


        Object.entries(
          data.statuses || {}
        ).forEach(
          ([id, status]) => {

            localStorage.setItem(
              "status-" + id,
              status
            );

          }
        );


        Object.entries(
          data.stories || {}
        ).forEach(
          ([id, story]) => {

            localStorage.setItem(
              "story-" + id,
              JSON.stringify(
                story
              )
            );

          }
        );


        location.reload();

      } catch {

        alert(
          "That backup file could not be restored."
        );

      }

    };


  reader.readAsText(
    file
  );

}


/* =========================
   BACKUP / RESTORE BUTTONS
========================= */

function setupBackupRestore() {

  document
    .querySelectorAll(
      "[data-backup]"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        backupData
      );

    });


  document
    .querySelectorAll(
      "[data-restore]"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          button
            .parentElement
            .querySelector(
              "[data-restore-input]"
            )
            .click();

        }
      );

    });


  document
    .querySelectorAll(
      "[data-restore-input]"
    )
    .forEach(input => {

      input.addEventListener(
        "change",
        () => {

          const file =
            input.files?.[0];


          if (file) {

            restoreData(
              file
            );

          }


          input.value =
            "";

        }
      );

    });

}


/* =========================
   CLOSE DIALOG BUTTONS
========================= */

function setupDialogClosers() {

  document
    .querySelectorAll(
      "[data-close-dialog]"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          document.getElementById(
            button.dataset.closeDialog
          ).close();

        }
      );

    });

}


/* =========================
   SKILLS PAGE SETUP
========================= */

function setupSkillsPage() {

  if (
    page !== "skills"
  ) {
    return;
  }


  createCapabilityFilters();


  /* SEARCH */

  document.getElementById(
    "searchInput"
  )?.addEventListener(
    "input",
    event => {

      searchTerm =
        event.target.value
          .trim()
          .toLowerCase();


      visibleCount =
        PAGE_SIZE;


      document.getElementById(
        "clearSearchButton"
      ).classList.toggle(
        "hidden",
        !searchTerm
      );


      renderSkillsPage();

    }
  );


  /* CLEAR SEARCH */

  document.getElementById(
    "clearSearchButton"
  )?.addEventListener(
    "click",
    () => {

      searchTerm =
        "";


      const input =
        document.getElementById(
          "searchInput"
        );


      input.value =
        "";


      document.getElementById(
        "clearSearchButton"
      ).classList.add(
        "hidden"
      );


      visibleCount =
        PAGE_SIZE;


      renderSkillsPage();

      input.focus();

    }
  );


  /* SHOW MORE */

  document.getElementById(
    "showMoreButton"
  )?.addEventListener(
    "click",
    () => {

      visibleCount +=
        PAGE_SIZE;


      renderSkillsPage();

    }
  );


  /* ADD OWN SKILL */

  document.getElementById(
    "openAddSkillButton"
  )?.addEventListener(
    "click",
    () =>
      openCustomSkillDialog()
  );


  document.getElementById(
    "saveNewSkillButton"
  )?.addEventListener(
    "click",
    saveCustomSkill
  );


  /* HIDDEN SKILLS */

  document.getElementById(
    "restoreHiddenButton"
  )?.addEventListener(
    "click",
    () => {

      renderHiddenSkills();


      document.getElementById(
        "hiddenSkillsDialog"
      ).showModal();

    }
  );


  renderSkillsPage();

}


/* =========================
   START EVERYTHING
========================= */

setupDialogClosers();

setupTryDialog();

setupStoryDialog();

setupBackupRestore();

updateCounts();

renderHome();

setupSkillsPage();
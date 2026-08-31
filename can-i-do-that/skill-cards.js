/* =========================
   CREATE SKILL CARD
========================= */

function createSkillCard(
  skill
) {
  const card =
    document.createElement(
      "article"
    );


  card.className =
    "skill-card";


  const capsText =
    skill.capabilities
      ?.length
      ? skill.capabilities
          .join(" · ")
          .toUpperCase()
      : "";


  card.innerHTML = `

    <div class="skill-main">

      <p class="capabilities">

        ${escapeHTML(
          capsText
        )}

        ${
          skill.custom
            ? '<span class="custom-label">YOURS</span>'
            : ""
        }

      </p>

      <h3>
        ${escapeHTML(
          skill.name
        )}
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
      aria-label="Open options for ${escapeHTML(
        skill.name
      )}"
    >
      ›
    </button>

    <div
      class="skill-details hidden"
    ></div>

  `;


  const buttons = [
    ...card.querySelectorAll(
      "[data-status]"
    )
  ];


  const details =
    card.querySelector(
      ".skill-details"
    );


  const toggle =
    card.querySelector(
      ".skill-toggle"
    );


  function paintStatus() {
    const current =
      getStatus(
        skill.id
      );


    buttons.forEach(
      button => {
        button.classList.toggle(
          "selected",
          button.dataset.status ===
            current
        );
      }
    );
  }


  function renderDetails() {
    const status =
      getStatus(
        skill.id
      );


    const story =
      getStory(
        skill.id
      );


    const storyAllowed =
      status === "can";


    details.classList.toggle(
      "compact-details",
      !storyAllowed
    );


    let storyHTML =
      "";


    if (storyAllowed) {
      if (story) {
        const bits = [
          story.when,
          story.who,
          story.where
        ]
          .filter(Boolean)
          .map(
            escapeHTML
          );


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
                      ${bits.join(
                        " · "
                      )}
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
      .querySelector(
        ".add-story"
      )
      ?.addEventListener(
        "click",
        () =>
          openStoryDialog(
            skill
          )
      );


    details
      .querySelector(
        ".edit-story"
      )
      ?.addEventListener(
        "click",
        () =>
          openStoryDialog(
            skill
          )
      );


    details
      .querySelector(
        ".edit-custom"
      )
      ?.addEventListener(
        "click",
        () =>
          openCustomSkillDialog(
            skill
          )
      );


    details
      .querySelector(
        ".delete-skill"
      )
      ?.addEventListener(
        "click",
        () =>
          deleteCustomSkill(
            skill
          )
      );


    details
      .querySelector(
        ".hide-skill"
      )
      ?.addEventListener(
        "click",
        () =>
          hideOfficialSkill(
            skill
          )
      );
  }


  buttons.forEach(
    button => {
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
            page ===
              "skills" &&
            activeStatus
          ) {
            renderSkillsPage();
          }
        }
      );
    }
  );


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
        String(
          opening
        )
      );
    }
  );


  paintStatus();


  return card;
}


/* =========================
   HOME
========================= */

function renderHome() {
  const container =
    document.getElementById(
      "homeSkillsContainer"
    );


  if (!container) {
    return;
  }


  container.innerHTML =
    "";


  getVisibleOfficialSkills()
    .filter(
      skill =>
        skill.featured
    )
    .slice(
      0,
      25
    )
    .forEach(
      skill => {
        container.appendChild(
          createSkillCard(
            skill
          )
        );
      }
    );


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
   STORY
========================= */

function openStoryDialog(
  skill
) {
  const dialog =
    document.getElementById(
      "storyDialog"
    );


  if (!dialog) {
    return;
  }


  storySkillId =
    skill.id;


  document.getElementById(
    "storyDialogTitle"
  ).textContent =
    skill.name;


  const story =
    getStory(
      skill.id
    ) || {};


  document.getElementById(
    "storyWhen"
  ).value =
    story.when ||
    "";


  document.getElementById(
    "storyWho"
  ).value =
    story.who ||
    "";


  document.getElementById(
    "storyWhere"
  ).value =
    story.where ||
    "";


  document.getElementById(
    "storyMemory"
  ).value =
    story.memory ||
    "";


  document.getElementById(
    "deleteStoryButton"
  ).classList.toggle(
    "hidden",
    !getStory(
      skill.id
    )
  );


  dialog.showModal();
}


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


      if (
        page === "skills"
      ) {
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
      if (
        !storySkillId
      ) {
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


      if (
        page === "skills"
      ) {
        renderSkillsPage();
      } else {
        renderHome();
      }
    }
  );
}


/* =========================
   HIDE OFFICIAL SKILL
========================= */

function hideOfficialSkill(
  skill
) {
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
    !hidden.includes(
      skill.id
    )
  ) {
    hidden.push(
      skill.id
    );
  }


  saveHiddenSkills(
    hidden
  );


  updateCounts();


  if (
    page === "skills"
  ) {
    renderSkillsPage();
  } else {
    renderHome();
  }
}


/* =========================
   HIDDEN SKILLS
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
          .includes(
            skill.id
          )
    );


  container.innerHTML =
    hidden.length
      ? ""
      : "<p>No hidden skills.</p>";


  hidden.forEach(
    skill => {
      const row =
        document.createElement(
          "div"
        );


      row.className =
        "hidden-skill-row";


      row.innerHTML = `

        <div>

          <strong>
            ${escapeHTML(
              skill.name
            )}
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


      row
        .querySelector(
          "button"
        )
        .addEventListener(
          "click",
          () => {
            saveHiddenSkills(
              getHiddenSkills()
                .filter(
                  id =>
                    id !==
                    skill.id
                )
            );


            renderHiddenSkills();

            updateHiddenButton();


            if (
              page === "skills"
            ) {
              renderSkillsPage();
            } else {
              renderHome();
            }
          }
        );


      container.appendChild(
        row
      );
    }
  );
}


function updateHiddenButton() {
  const button =
    document.getElementById(
      "restoreHiddenButton"
    );


  if (!button) {
    return;
  }


  const count =
    getHiddenSkills()
      .length;


  button.classList.toggle(
    "hidden",
    count === 0
  );


  button.textContent =
    `Hidden skills (${count})`;
}
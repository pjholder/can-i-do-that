/* =========================
   STATUS SUMMARY
========================= */

function getSummaryStatus(
  card
) {
  const href =
    card.getAttribute(
      "href"
    );

  if (!href) {
    return null;
  }


  const url =
    new URL(
      href,
      window.location.href
    );


  return url.searchParams.get(
    "status"
  );
}


function updateStatusURL() {
  if (
    page !== "skills"
  ) {
    return;
  }


  const url =
    new URL(
      window.location.href
    );


  if (activeStatus) {
    url.searchParams.set(
      "status",
      activeStatus
    );
  } else {
    url.searchParams.delete(
      "status"
    );
  }


  history.replaceState(
    {},
    "",
    url
  );
}


function highlightActiveStatusSummary() {
  if (
    page !== "skills"
  ) {
    return;
  }


  document
    .querySelectorAll(
      ".summary-card"
    )
    .forEach(card => {
      const cardStatus =
        getSummaryStatus(
          card
        );


      card.classList.toggle(
        "active",
        cardStatus ===
          activeStatus
      );
    });
}


function setupStatusSummaryFilters() {
  if (
    page !== "skills"
  ) {
    return;
  }


  document
    .querySelectorAll(
      ".summary-card"
    )
    .forEach(card => {
      card.addEventListener(
        "click",
        event => {
          event.preventDefault();


          const clickedStatus =
            getSummaryStatus(
              card
            );


          if (
            ![
              "can",
              "learning",
              "want"
            ].includes(
              clickedStatus
            )
          ) {
            return;
          }


          if (
            activeStatus ===
            clickedStatus
          ) {
            activeStatus =
              null;
          } else {
            activeStatus =
              clickedStatus;
          }


          visibleCount =
            PAGE_SIZE;


          updateStatusURL();

          highlightActiveStatusSummary();

          renderSkillsPage();
        }
      );
    });
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


  wrap.innerHTML =
    "";


  capabilities.forEach(
    capability => {
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


      button.classList.toggle(
        "active",
        activeCapability ===
          capability
      );


      button.addEventListener(
        "click",
        () => {
          if (
            activeCapability ===
            capability
          ) {
            activeCapability =
              null;
          } else {
            activeCapability =
              capability;
          }


          visibleCount =
            PAGE_SIZE;


          createCapabilityFilters();

          renderSkillsPage();
        }
      );


      wrap.appendChild(
        button
      );
    }
  );
}


/* =========================
   FILTER SKILLS
========================= */

function filteredSkills() {
  let list =
    getAllVisibleSkills();


  if (activeStatus) {
    list =
      list.filter(
        skill =>
          getStatus(
            skill.id
          ) ===
          activeStatus
      );
  }


  if (activeCapability) {
    list =
      list.filter(
        skill =>
          (
            skill.capabilities ||
            []
          ).includes(
            activeCapability
          )
      );
  }


  if (searchTerm) {
    list =
      list.filter(
        skill => {
          const haystack =
            `
              ${skill.name}
              ${
                (
                  skill.capabilities ||
                  []
                ).join(
                  " "
                )
              }
            `.toLowerCase();


          return haystack.includes(
            searchTerm
          );
        }
      );
  }


  return list;
}


/* =========================
   RENDER SKILLS PAGE
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


  container.innerHTML =
    "";


  visible.forEach(
    skill => {
      container.appendChild(
        createSkillCard(
          skill
        )
      );
    }
  );


  if (!all.length) {
    container.innerHTML =
      "<p>Nothing matches that yet.</p>";
  }


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


  const showMore =
    document.getElementById(
      "showMoreButton"
    );


  if (showMore) {
    showMore.classList.toggle(
      "hidden",
      visible.length >=
        all.length
    );
  }


  const personal =
    document.getElementById(
      "activePersonalView"
    );


  if (personal) {
    personal.classList.add(
      "hidden"
    );

    personal.innerHTML =
      "";
  }


  updateHiddenButton();

  highlightActiveStatusSummary();
}


/* =========================
   CUSTOM STATUS PICKER
========================= */

function renderCustomStatusPicker() {
  const wrap =
    document.getElementById(
      "newSkillStatus"
    );


  if (!wrap) {
    return;
  }


  wrap.innerHTML =
    "";


  customStatusOptions.forEach(
    option => {
      const button =
        document.createElement(
          "button"
        );


      button.type =
        "button";


      button.className =
        "custom-status-button";


      button.textContent =
        option.label;


      const selected =
        selectedCustomStatus ===
        option.value;


      button.classList.toggle(
        "selected",
        selected
      );


      button.setAttribute(
        "aria-pressed",
        String(
          selected
        )
      );


      button.addEventListener(
        "click",
        () => {
          selectedCustomStatus =
            option.value;


          const message =
            document.getElementById(
              "addSkillMessage"
            );


          if (message) {
            message.textContent =
              "";
          }


          renderCustomStatusPicker();
        }
      );


      wrap.appendChild(
        button
      );
    }
  );
}


/* =========================
   CUSTOM CAPABILITY PICKER
========================= */

function renderCustomCapabilityPicker() {
  const wrap =
    document.getElementById(
      "newSkillCapabilities"
    );


  if (!wrap) {
    return;
  }


  wrap.innerHTML =
    "";


  const limitReached =
    selectedCustomCapabilities
      .length >= 3;


  capabilities.forEach(
    capability => {
      const button =
        document.createElement(
          "button"
        );


      button.type =
        "button";


      button.className =
        "custom-capability-button";


      button.textContent =
        capability;


      const selected =
        selectedCustomCapabilities
          .includes(
            capability
          );


      button.classList.toggle(
        "selected",
        selected
      );


      button.classList.toggle(
        "limit-reached",
        limitReached &&
          !selected
      );


      button.setAttribute(
        "aria-pressed",
        String(
          selected
        )
      );


      button.addEventListener(
        "click",
        () => {
          const alreadySelected =
            selectedCustomCapabilities
              .includes(
                capability
              );


          if (
            alreadySelected
          ) {
            selectedCustomCapabilities =
              selectedCustomCapabilities
                .filter(
                  item =>
                    item !==
                    capability
                );
          } else {
            if (
              selectedCustomCapabilities
                .length >= 3
            ) {
              return;
            }


            selectedCustomCapabilities.push(
              capability
            );
          }


          const message =
            document.getElementById(
              "addSkillMessage"
            );


          if (message) {
            message.textContent =
              "";
          }


          renderCustomCapabilityPicker();
        }
      );


      wrap.appendChild(
        button
      );
    }
  );
}


/* =========================
   OPEN CUSTOM SKILL
========================= */

function openCustomSkillDialog(
  skill = null
) {
  editingCustomSkillId =
    skill?.id ||
    null;


  selectedCustomCapabilities =
    Array.isArray(
      skill?.capabilities
    )
      ? skill.capabilities
          .filter(
            capability =>
              capabilities.includes(
                capability
              )
          )
          .slice(
            0,
            3
          )
      : [];


  selectedCustomStatus =
    skill
      ? getStatus(
          skill.id
        )
      : null;


  document.getElementById(
    "customSkillDialogTitle"
  ).textContent =
    skill
      ? "Edit your skill"
      : "Add your own skill";


  document.getElementById(
    "newSkillName"
  ).value =
    skill?.name ||
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


  renderCustomStatusPicker();

  renderCustomCapabilityPicker();


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


  const message =
    document.getElementById(
      "addSkillMessage"
    );


  if (!name) {
    message.textContent =
      "Give your skill a name.";

    return;
  }


  if (
    !selectedCustomStatus
  ) {
    message.textContent =
      "Choose where you are with this skill.";

    return;
  }


  let custom =
    getCustomSkills();


  if (
    editingCustomSkillId
  ) {
    custom =
      custom.map(
        skill =>
          skill.id ===
          editingCustomSkillId
            ? {
                ...skill,
                name,
                capabilities: [
                  ...selectedCustomCapabilities
                ]
              }
            : skill
      );


    localStorage.setItem(
      "status-" +
        editingCustomSkillId,
      selectedCustomStatus
    );
  } else {
    const newSkill = {
      id:
        "custom-" +
        Date.now(),

      name,

      capabilities: [
        ...selectedCustomCapabilities
      ],

      custom: true
    };


    custom.push(
      newSkill
    );


    localStorage.setItem(
      "status-" +
        newSkill.id,
      selectedCustomStatus
    );
  }


  saveCustomSkills(
    custom
  );


  document.getElementById(
    "addSkillDialog"
  ).close();


  editingCustomSkillId =
    null;


  selectedCustomCapabilities =
    [];


  selectedCustomStatus =
    null;


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
   DELETE CUSTOM SKILL
========================= */

function deleteCustomSkill(
  skill
) {
  if (
    !confirm(
      `Delete "${skill.name}"?\n\nIts status and story will also be deleted.`
    )
  ) {
    return;
  }


  saveCustomSkills(
    getCustomSkills()
      .filter(
        item =>
          item.id !==
          skill.id
      )
  );


  localStorage.removeItem(
    "status-" +
      skill.id
  );


  localStorage.removeItem(
    "story-" +
      skill.id
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
   SKILLS PAGE
========================= */

function setupSkillsPage() {
  if (
    page !== "skills"
  ) {
    return;
  }


  createCapabilityFilters();

  setupStatusSummaryFilters();


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
      )?.classList.toggle(
        "hidden",
        !searchTerm
      );


      renderSkillsPage();
    }
  );


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


      if (input) {
        input.value =
          "";
      }


      document.getElementById(
        "clearSearchButton"
      )?.classList.add(
        "hidden"
      );


      visibleCount =
        PAGE_SIZE;


      renderSkillsPage();


      input?.focus();
    }
  );


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


  document.getElementById(
    "restoreHiddenButton"
  )?.addEventListener(
    "click",
    () => {
      renderHiddenSkills();


      document.getElementById(
        "hiddenSkillsDialog"
      )?.showModal();
    }
  );


  renderSkillsPage();

  highlightActiveStatusSummary();
}
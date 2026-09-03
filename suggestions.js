/* =========================
   RANDOM SKILL
========================= */

function getPossibleSuggestions() {
  return getAllVisibleSkills()
    .filter(
      skill => {
        const status =
          getStatus(
            skill.id
          );


        return (
          status === null ||
          status === "want"
        );
      }
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


  const suggestionName =
    document.getElementById(
      "suggestionName"
    );


  if (suggestionName) {
    suggestionName.textContent =
      currentSuggestion.name;
  }


  const suggestionCapabilities =
    document.getElementById(
      "suggestionCapabilities"
    );


  if (
    suggestionCapabilities
  ) {
    suggestionCapabilities.textContent =
      currentSuggestion
        .capabilities
        ?.length
        ? currentSuggestion
            .capabilities
            .join(" · ")
        : "";
  }


  const alreadyWant =
    getStatus(
      currentSuggestion.id
    ) === "want";


  const suggestionWantButton =
    document.getElementById(
      "suggestionWantButton"
    );


  if (
    suggestionWantButton
  ) {
    suggestionWantButton.textContent =
      alreadyWant
        ? "Want to try ✓"
        : "Want to try";
  }


  result?.classList.remove(
    "hidden"
  );


  message?.classList.add(
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


  if (!dialog) {
    return;
  }


  document
    .querySelectorAll(
      "[data-open-try]"
    )
    .forEach(
      button => {
        button.addEventListener(
          "click",
          () => {
            showRandomSuggestion();

            dialog.showModal();
          }
        );
      }
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
      if (
        !currentSuggestion
      ) {
        return;
      }


      localStorage.setItem(
        "status-" +
          currentSuggestion.id,
        "want"
      );


      const button =
        document.getElementById(
          "suggestionWantButton"
        );


      if (button) {
        button.textContent =
          "Want to try ✓";
      }


      updateCounts();


      if (
        page === "skills"
      ) {
        renderSkillsPage();
      }
    }
  );
}


/* =========================
   ABOUT RANDOM CHALLENGE
========================= */

function getAboutChallengeSkills() {
  return getAllVisibleSkills()
    .filter(
      skill => {
        const status =
          getStatus(
            skill.id
          );


        return (
          status === null ||
          status === "want"
        );
      }
    );
}


function showAboutChallenge() {
  const result =
    document.getElementById(
      "aboutChallengeResult"
    );


  const empty =
    document.getElementById(
      "aboutChallengeEmpty"
    );


  if (
    !result ||
    !empty
  ) {
    return;
  }


  const possible =
    getAboutChallengeSkills();


  if (!possible.length) {
    currentAboutChallenge =
      null;


    result.classList.add(
      "hidden"
    );


    empty.classList.remove(
      "hidden"
    );


    return;
  }


  let options =
    possible;


  if (
    currentAboutChallenge &&
    possible.length > 1
  ) {
    options =
      possible.filter(
        skill =>
          skill.id !==
          currentAboutChallenge.id
      );
  }


  currentAboutChallenge =
    options[
      Math.floor(
        Math.random() *
        options.length
      )
    ];


  const name =
    document.getElementById(
      "aboutChallengeName"
    );


  const capabilityText =
    document.getElementById(
      "aboutChallengeCapabilities"
    );


  const wantButton =
    document.getElementById(
      "aboutChallengeWantButton"
    );


  if (name) {
    name.textContent =
      currentAboutChallenge.name;
  }


  if (capabilityText) {
    capabilityText.textContent =
      currentAboutChallenge
        .capabilities
        ?.length
        ? currentAboutChallenge
            .capabilities
            .join(" · ")
        : "";
  }


  const alreadyWant =
    getStatus(
      currentAboutChallenge.id
    ) === "want";


  if (wantButton) {
    wantButton.textContent =
      alreadyWant
        ? "Want to try ✓"
        : "Want to try";
  }


  result.classList.remove(
    "hidden"
  );


  empty.classList.add(
    "hidden"
  );
}


/* =========================
   ABOUT DIALOG SETUP
========================= */

function setupAboutChallenge() {
  if (
    page !== "about"
  ) {
    return;
  }


  const openButton =
    document.getElementById(
      "aboutChallengeButton"
    );


  const dialog =
    document.getElementById(
      "aboutChallengeDialog"
    );


  const wantButton =
    document.getElementById(
      "aboutChallengeWantButton"
    );


  const anotherButton =
    document.getElementById(
      "aboutChallengeAnotherButton"
    );


  if (
    !openButton ||
    !dialog
  ) {
    return;
  }


  openButton.addEventListener(
    "click",
    () => {
      showAboutChallenge();

      dialog.showModal();
    }
  );


  anotherButton?.addEventListener(
    "click",
    showAboutChallenge
  );


  wantButton?.addEventListener(
    "click",
    () => {
      if (
        !currentAboutChallenge
      ) {
        return;
      }


      localStorage.setItem(
        "status-" +
          currentAboutChallenge.id,
        "want"
      );


      wantButton.textContent =
        "Want to try ✓";


      updateCounts();
    }
  );
}
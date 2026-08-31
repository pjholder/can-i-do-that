const page =
  document.body.dataset.page;

const PAGE_SIZE = 50;

let visibleCount =
  PAGE_SIZE;

let activeCapability =
  null;

let searchTerm =
  "";

let activeStatus =
  new URLSearchParams(
    location.search
  ).get("status");


if (
  ![
    "can",
    "learning",
    "want"
  ].includes(activeStatus)
) {
  activeStatus =
    null;
}


let currentSuggestion =
  null;

let currentAboutChallenge =
  null;

let storySkillId =
  null;

let editingCustomSkillId =
  null;

let selectedCustomCapabilities =
  [];

let selectedCustomStatus =
  null;


/* =========================
   CLOSE DIALOGS
========================= */

function setupDialogClosers() {
  document
    .querySelectorAll(
      "[data-close-dialog]"
    )
    .forEach(
      button => {
        button.addEventListener(
          "click",
          () => {
            const dialog =
              document.getElementById(
                button.dataset.closeDialog
              );


            if (dialog) {
              dialog.close();
            }
          }
        );
      }
    );
}


/* =========================
   START
========================= */

setupDialogClosers();

setupTryDialog();

setupStoryDialog();

setupBackupRestore();

setupAboutChallenge();

updateCounts();

renderHome();

setupSkillsPage();
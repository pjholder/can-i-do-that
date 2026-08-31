/* =========================
   SAFE TEXT
========================= */

function escapeHTML(text) {
  const div =
    document.createElement(
      "div"
    );

  div.textContent =
    text ?? "";

  return div.innerHTML;
}


/* =========================
   LOCAL STORAGE
========================= */

function getJSON(
  key,
  fallback
) {
  try {
    const value =
      JSON.parse(
        localStorage.getItem(
          key
        )
      );

    return (
      value ??
      fallback
    );
  } catch {
    return fallback;
  }
}


function getCustomSkills() {
  return getJSON(
    "customSkills",
    []
  ).map(skill => ({
    ...skill,
    custom: true
  }));
}


function saveCustomSkills(
  skills
) {
  localStorage.setItem(
    "customSkills",
    JSON.stringify(
      skills
    )
  );
}


function getHiddenSkills() {
  return getJSON(
    "hiddenSkills",
    []
  );
}


function saveHiddenSkills(
  ids
) {
  localStorage.setItem(
    "hiddenSkills",
    JSON.stringify(
      ids
    )
  );
}


/* =========================
   SKILL LISTS
========================= */

function getVisibleOfficialSkills() {
  const hidden =
    getHiddenSkills();

  return starterSkills.filter(
    skill =>
      !hidden.includes(
        skill.id
      )
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


function setStatus(
  id,
  status
) {
  if (
    getStatus(id) ===
    status
  ) {
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


function saveStory(
  id,
  story
) {
  localStorage.setItem(
    "story-" + id,
    JSON.stringify(
      story
    )
  );
}


function deleteStory(id) {
  localStorage.removeItem(
    "story-" + id
  );
}


/* =========================
   COUNTS
========================= */

function updateCounts() {
  const counts = {
    can: 0,
    learning: 0,
    want: 0
  };


  const allSkills = [
    ...starterSkills,
    ...getCustomSkills()
  ];


  allSkills.forEach(
    skill => {
      const status =
        getStatus(
          skill.id
        );

      if (
        status &&
        status in counts
      ) {
        counts[
          status
        ]++;
      }
    }
  );


  const map = {
    can: "canCount",
    learning:
      "learningCount",
    want: "wantCount"
  };


  Object.entries(
    map
  ).forEach(
    ([key, id]) => {
      const element =
        document.getElementById(
          id
        );

      if (element) {
        element.textContent =
          counts[key];
      }
    }
  );
}


/* =========================
   BACKUP
========================= */

function collectBackup() {
  const data = {
    version: 1,

    createdAt:
      new Date()
        .toISOString(),

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
  ].forEach(
    skill => {
      const status =
        getStatus(
          skill.id
        );


      const story =
        getStory(
          skill.id
        );


      if (status) {
        data.statuses[
          skill.id
        ] =
          status;
      }


      if (story) {
        data.stories[
          skill.id
        ] =
          story;
      }
    }
  );


  return data;
}


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
   RESTORE
========================= */

function restoreData(
  file
) {
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
        ).forEach(
          key => {
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
          }
        );


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
          data.statuses ||
          {}
        ).forEach(
          (
            [
              id,
              status
            ]
          ) => {
            localStorage.setItem(
              "status-" +
                id,
              status
            );
          }
        );


        Object.entries(
          data.stories ||
          {}
        ).forEach(
          (
            [
              id,
              story
            ]
          ) => {
            localStorage.setItem(
              "story-" +
                id,
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
    .forEach(
      button => {
        button.addEventListener(
          "click",
          backupData
        );
      }
    );


  document
    .querySelectorAll(
      "[data-restore]"
    )
    .forEach(
      button => {
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
      }
    );


  document
    .querySelectorAll(
      "[data-restore-input]"
    )
    .forEach(
      input => {
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
      }
    );
}
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
   BACKUP VALIDATION
========================= */

function isPlainObject(
  value
) {
  return (
    value !== null &&
    typeof value ===
      "object" &&
    !Array.isArray(
      value
    )
  );
}


function isValidSkillId(
  id
) {
  return (
    typeof id ===
      "string" &&
    /^[a-z0-9][a-z0-9_-]{0,99}$/i
      .test(id)
  );
}


function validateBackupData(
  data
) {
  if (
    !isPlainObject(
      data
    )
  ) {
    return false;
  }


  if (
    data.version !== 1
  ) {
    return false;
  }


  if (
    !Array.isArray(
      data.customSkills
    ) ||
    !Array.isArray(
      data.hiddenSkills
    ) ||
    !isPlainObject(
      data.statuses
    ) ||
    !isPlainObject(
      data.stories
    )
  ) {
    return false;
  }


  const officialIds =
    new Set(
      starterSkills.map(
        skill =>
          skill.id
      )
    );


  const customIds =
    new Set();


  for (
    const skill of
      data.customSkills
  ) {
    if (
      !isPlainObject(
        skill
      )
    ) {
      return false;
    }


    if (
      !isValidSkillId(
        skill.id
      )
    ) {
      return false;
    }


    if (
      officialIds.has(
        skill.id
      ) ||
      customIds.has(
        skill.id
      )
    ) {
      return false;
    }


    if (
      typeof skill.name !==
        "string" ||
      !skill.name.trim() ||
      skill.name.length >
        120
    ) {
      return false;
    }


    if (
      !Array.isArray(
        skill.capabilities
      ) ||
      skill.capabilities
        .length > 3
    ) {
      return false;
    }


    const seenCapabilities =
      new Set();


    for (
      const capability of
        skill.capabilities
    ) {
      if (
        typeof capability !==
          "string" ||
        capability.length >
          50 ||
        !capabilities.includes(
          capability
        ) ||
        seenCapabilities.has(
          capability
        )
      ) {
        return false;
      }


      seenCapabilities.add(
        capability
      );
    }


    customIds.add(
      skill.id
    );
  }


  for (
    const id of
      data.hiddenSkills
  ) {
    if (
      typeof id !==
        "string" ||
      !officialIds.has(
        id
      )
    ) {
      return false;
    }
  }


  const knownIds =
    new Set([
      ...officialIds,
      ...customIds
    ]);


  const validStatuses =
    new Set([
      "can",
      "learning",
      "want"
    ]);


  for (
    const [
      id,
      status
    ] of
      Object.entries(
        data.statuses
      )
  ) {
    if (
      !knownIds.has(
        id
      ) ||
      !validStatuses.has(
        status
      )
    ) {
      return false;
    }
  }


  for (
    const [
      id,
      story
    ] of
      Object.entries(
        data.stories
      )
  ) {
    if (
      !knownIds.has(
        id
      ) ||
      !isPlainObject(
        story
      )
    ) {
      return false;
    }


    const textFields = [
      [
        "when",
        200
      ],
      [
        "who",
        200
      ],
      [
        "where",
        200
      ],
      [
        "memory",
        5000
      ]
    ];


    for (
      const [
        field,
        maxLength
      ] of
        textFields
    ) {
      if (
        story[field] !==
          undefined &&
        (
          typeof story[field] !==
            "string" ||
          story[field].length >
            maxLength
        )
      ) {
        return false;
      }
    }
  }


  return true;
}


/* =========================
   RESTORE HELPERS
========================= */

function getSavedDataKeys() {
  return Object.keys(
    localStorage
  ).filter(
    key =>
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
  );
}


function snapshotSavedData() {
  const snapshot = {};


  getSavedDataKeys()
    .forEach(
      key => {
        snapshot[key] =
          localStorage.getItem(
            key
          );
      }
    );


  return snapshot;
}


function clearSavedData() {
  getSavedDataKeys()
    .forEach(
      key => {
        localStorage.removeItem(
          key
        );
      }
    );
}


function restoreSnapshot(
  snapshot
) {
  clearSavedData();


  Object.entries(
    snapshot
  ).forEach(
    (
      [
        key,
        value
      ]
    ) => {
      if (
        value !== null
      ) {
        localStorage.setItem(
          key,
          value
        );
      }
    }
  );
}


function writeBackupData(
  data
) {
  saveCustomSkills(
    data.customSkills
  );


  saveHiddenSkills(
    data.hiddenSkills
  );


  Object.entries(
    data.statuses
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
    data.stories
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
      let data;


      try {
        data =
          JSON.parse(
            reader.result
          );
      } catch {
        alert(
          "That backup file could not be restored. No saved data was changed."
        );

        return;
      }


      if (
        !validateBackupData(
          data
        )
      ) {
        alert(
          "That backup file could not be restored. No saved data was changed."
        );

        return;
      }


      if (
        !confirm(
          "Restore your backup?\n\nThis will replace the skills, statuses and stories currently saved on this device."
        )
      ) {
        return;
      }


      const snapshot =
        snapshotSavedData();


      try {
        clearSavedData();

        writeBackupData(
          data
        );

        location.reload();
      } catch {
        try {
          restoreSnapshot(
            snapshot
          );

          alert(
            "The restore could not be completed. Your previous saved data has been put back."
          );
        } catch {
          alert(
            "The restore could not be completed, and the previous saved data could not be fully restored automatically. Keep your backup file safe."
          );
        }
      }
    };


  reader.onerror =
    () => {
      alert(
        "That backup file could not be read. No saved data was changed."
      );
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
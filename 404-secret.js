const secretTrigger =
  document.getElementById(
    "secretTrigger"
  );

const secretLine =
  document.getElementById(
    "secretLine"
  );

const secretFirstMark =
  document.getElementById(
    "secretFirstMark"
  );

const secretClueTwo =
  document.getElementById(
    "secretClueTwo"
  );

const secretClueZero =
  document.getElementById(
    "secretClueZero"
  );

const secretClueFour =
  document.getElementById(
    "secretClueFour"
  );

const secretCodeArea =
  document.getElementById(
    "secretCodeArea"
  );

const secretFoundButton =
  document.getElementById(
    "secretFoundButton"
  );

const secretCodeForm =
  document.getElementById(
    "secretCodeForm"
  );

const secretCodeInput =
  document.getElementById(
    "secretCodeInput"
  );

const secretCodeMessage =
  document.getElementById(
    "secretCodeMessage"
  );

const secretFinal =
  document.getElementById(
    "secretFinal"
  );



if (
  secretTrigger &&
  secretLine &&
  secretFirstMark
) {

  let secretStarted =
    false;

  let sevenFound =
    false;

  let twoFound =
    false;

  let zeroFound =
    false;

  let fourFound =
    false;

  let codeSolved =
    false;



  /* ========================================
     SECRET ENTRANCE

     THAT'S IT.
     ↓
     STILL LOOKING.
  ======================================== */

  secretTrigger.addEventListener(
    "click",
    function () {

      if (secretStarted) {
        return;
      }


      secretStarted =
        true;


      secretLine.textContent =
        "Still looking.";



      /*
        Give the page a tiny moment before
        the first strange mark appears.
      */

      window.setTimeout(
        function () {

          secretFirstMark.hidden =
            false;

        },
        450
      );

    }
  );



  /* ========================================
     FIRST DISCOVERY

     ·
     ↓
     7
  ======================================== */

  secretFirstMark.addEventListener(
    "click",
    function () {

      if (sevenFound) {
        return;
      }


      sevenFound =
        true;


      secretFirstMark.textContent =
        "7";


      secretFirstMark.classList.add(
        "secret-number-found"
      );


      secretFirstMark.setAttribute(
        "aria-label",
        "7"
      );



      /*
        Only the NEXT clue appears.

        Nothing else changes yet.
      */

      window.setTimeout(
        function () {

          if (secretClueTwo) {

            secretClueTwo.hidden =
              false;

          }

        },
        500
      );

    }
  );



  /* ========================================
     SECOND DISCOVERY

     ·
     ↓
     2
  ======================================== */

  if (secretClueTwo) {

    secretClueTwo.addEventListener(
      "click",
      function () {

        if (
          !sevenFound ||
          twoFound
        ) {
          return;
        }


        twoFound =
          true;


        secretClueTwo.textContent =
          "2";


        secretClueTwo.classList.add(
          "secret-number-found"
        );


        secretClueTwo.setAttribute(
          "aria-label",
          "2"
        );



        /*
          Now the next mark quietly
          appears elsewhere.
        */

        window.setTimeout(
          function () {

            if (secretClueZero) {

              secretClueZero.hidden =
                false;

            }

          },
          500
        );

      }
    );

  }



  /* ========================================
     THIRD DISCOVERY

     +
     ↓
     0
  ======================================== */

  if (secretClueZero) {

    secretClueZero.addEventListener(
      "click",
      function () {

        if (
          !twoFound ||
          zeroFound
        ) {
          return;
        }


        zeroFound =
          true;


        secretClueZero.textContent =
          "0";


        secretClueZero.classList.add(
          "secret-number-found"
        );


        secretClueZero.setAttribute(
          "aria-label",
          "0"
        );



        /*
          Last hidden mark.
        */

        window.setTimeout(
          function () {

            if (secretClueFour) {

              secretClueFour.hidden =
                false;

            }

          },
          500
        );

      }
    );

  }



  /* ========================================
     FOURTH DISCOVERY

     ×
     ↓
     4
  ======================================== */

  if (secretClueFour) {

    secretClueFour.addEventListener(
      "click",
      function () {

        if (
          !zeroFound ||
          fourFound
        ) {
          return;
        }


        fourFound =
          true;


        secretClueFour.textContent =
          "4";


        secretClueFour.classList.add(
          "secret-number-found"
        );


        secretClueFour.setAttribute(
          "aria-label",
          "4"
        );



        /*
          All four numbers have now
          been discovered.

          Only now does the page ask
          "Found something?"
        */

        window.setTimeout(
          function () {

            if (secretCodeArea) {

              secretCodeArea.hidden =
                false;

            }

          },
          600
        );

      }
    );

  }



  /* ========================================
     FOUND SOMETHING?
  ======================================== */

  if (
    secretFoundButton &&
    secretCodeForm &&
    secretCodeInput
  ) {

    secretFoundButton.addEventListener(
      "click",
      function () {

        secretFoundButton.hidden =
          true;


        secretCodeForm.hidden =
          false;


        secretCodeInput.focus();

      }
    );

  }



  /* ========================================
     CHECK THE CODE
  ======================================== */

  if (
    secretCodeForm &&
    secretCodeInput
  ) {

    secretCodeForm.addEventListener(
      "submit",
      function (event) {

        event.preventDefault();


        if (codeSolved) {
          return;
        }



        const value =
          secretCodeInput.value
            .replace(/\s/g, "")
            .trim();



        if (value === "7204") {

          codeSolved =
            true;


          if (secretCodeMessage) {

            secretCodeMessage.textContent =
              "";

          }


          secretCodeForm.hidden =
            true;



          if (secretFinal) {

            secretFinal.hidden =
              false;

          }


          return;

        }



        if (secretCodeMessage) {

          secretCodeMessage.textContent =
            "Not quite.";

        }

      }
    );

  }

}
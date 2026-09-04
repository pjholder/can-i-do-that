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

const secretNumberClues =
  document.querySelectorAll(
    "[data-secret-digit]"
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

  let secretStarted = false;

  let firstNumberFound = false;

  let codeSolved = false;


  const foundDigits =
    new Set();



  /* ========================================
     START

     CLICK THE BLUE DOT / "IT"
  ======================================== */

  secretTrigger.addEventListener(
    "click",
    function () {

      if (secretStarted) {
        return;
      }


      secretStarted = true;


      secretLine.textContent =
        "Still looking.";


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
     FIRST MARK

     THE FIRST MARK BECOMES 7.
     THEN THE OTHER MARKS APPEAR.
  ======================================== */

  secretFirstMark.addEventListener(
    "click",
    function () {

      if (firstNumberFound) {
        return;
      }


      firstNumberFound = true;


      secretFirstMark.textContent =
        "7";


      secretFirstMark.classList.add(
        "secret-number-found"
      );


      secretFirstMark.setAttribute(
        "aria-label",
        "7"
      );


      secretNumberClues.forEach(
        function (clue) {

          clue.hidden =
            false;

        }
      );

    }
  );



  /* ========================================
     OTHER NUMBER MARKS
  ======================================== */

  secretNumberClues.forEach(
    function (clue) {

      clue.addEventListener(
        "click",
        function () {

          if (!firstNumberFound) {
            return;
          }


          const digit =
            clue.dataset.secretDigit;


          if (
            !digit ||
            foundDigits.has(digit)
          ) {
            return;
          }


          foundDigits.add(
            digit
          );


          clue.textContent =
            digit;


          clue.classList.add(
            "secret-number-found"
          );


          clue.setAttribute(
            "aria-label",
            digit
          );


          /*
            The three hidden numbers are:

            2
            0
            4
          */

          if (
            foundDigits.size === 3
          ) {

            window.setTimeout(
              function () {

                if (secretCodeArea) {

                  secretCodeArea.hidden =
                    false;

                }

              },
              450
            );

          }

        }
      );

    }
  );



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

          codeSolved = true;


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
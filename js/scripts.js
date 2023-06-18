window.onload = function () {
  //global varibles for elements
  let form = document.querySelector("form");
  let resetBtn = document.querySelector("button#reset");
  let answers = document.querySelector("div#answerDiv");
  // //variables for possible answers
  let ruby = document.getElementById("aRuby");
  ruby.setAttribute("class", "hidden");
  let cSharp = document.getElementById("aCSharp");
  cSharp.setAttribute("class", "hidden");
  let jScript = document.getElementById("aJavascript");
  jScript.setAttribute("class", "hidden");
  let python = document.getElementById("aPython");
  python.setAttribute("class", "hidden");
  let undetermined = document.getElementById("undetermined");
  undetermined.setAttribute("class", "hidden");
  //varibles for input answers
  let q1 = parseInt(document.getElementById("q1puppies").value);
  let q2 = parseInt(document.querySelector("input#q2daffodils").value);
  let q3 = parseInt(document.querySelector("input#q3sneezes").value);
  let q4 = parseInt(document.querySelector("input#q4hives").value);  
  let q5 = parseInt(document.querySelector("input#q5muffin").value);

  form.onsubmit = function (event) {
    event.preventDefault();
    if (q1 || q2 === 1) {
      ruby.removeAttribute("class");
    } else if (q3 === 2) {
      cSharp.removeAttribute("class");
    } else if (q4 === 1) {
      jScript.removeAttribute("class");
    } else if (q5 === 1) {
      python.removeAttribute("class");
    } else {
      undetermined.removeAttribute("class");
    }
  }

  form.addEventListener("submit", function () {
    resetBtn.removeAttribute("class");
  } )

  resetBtn.addEventListener("click", function () {
    answers.setAttribute("class", "hidden");
    const q1 = (document.querySelector("input#q1puppies").value = null);
    const q2 = (document.querySelector("input#q2daffodils").value = null);
    const q3 = (document.querySelector("input#q3sneeze").value = null);
    const q4 = (document.querySelector("input#q4hives").value = null);
    const q5 = (document.querySelector("input#q5muffin").value = null);

    resetBtn.setAttribute("class", "hidden");
  });
};

window.onload = function () {
  //global varibles for elements
  let form = document.querySelector("form");
  let resetBtn = document.querySelector("button#reset");
  let answers = document.querySelector("div#answerDiv");
  //variables for possible answers
  let ruby = document.getElementById("aRuby");
  let cSharp = document.getElementById("aCSharp");
  let jScript = document.getElementById("aJavascript");
  let python = document.getElementById("aPython");
  //varibles for input answers
  let q1 = document.getElementById("q1puppies").value;
    

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(q1);
  });

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

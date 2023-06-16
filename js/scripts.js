//function parameters "submit", "input answers".  Needs yes/no answers, needs to deal with "other" answers.  Then match yes/no to the correct option OR disregard answer.  Optional answers are one of 4 languages or an "unable to determine at this time, come back when you have a clearer of idea."
//needs variables for inputs for q1, q2, q3, q4 & q5
//needs variables for option 1, 2, 3, 4 and option 5 - unable to determine.

window.onload = function () {
    let form = document.querySelector("form");
    let resetBtn = document.querySelector("button#reset");
    let answers = document.querySelector("div#answerDiv");

    form.addEventListener("submit", function (event) {
        const q1 = document.querySelector("input#q1puppies").value;
        const q2 = document.querySelector("input#q2daffodils").value;
        const q3 = document.querySelector("input#q3sneeze").value;
        const q4 = document.querySelector("input#q4hives").value;
        const q5 = document.querySelector("input#q5muffin").value;

        document.querySelector("div#aRuby").removeAttribute("class");
        event.preventDefault();
    });

    form.addEventListener("submit", function () {
        reset.removeAttribute("class");
    });

    resetBtn.addEventListener("click", function () {
        answers.setAttribute("class", "hidden");
        const q1 = document.querySelector("input#q1puppies").value = null;
        const q2 = document.querySelector("input#q2daffodils").value = null;
        const q3 = document.querySelector("input#q3sneeze").value = null;
        const q4 = document.querySelector("input#q4hives").value = null;
        const q5 = document.querySelector("input#q5muffin").value = null;

        resetBtn.setAttribute("class", "hidden");
    });
}

// window.addEventListener("load", function () {
//   let form = document.querySelector("form");
//   let resetBtn = document.getElementById("reset");
  
    

//   form.addEventListener("submit", function (event) {
//     event.preventDefault();

  
//     let ruby = document.getElementById("aRuby");
//     ruby.setAttribute("class", "hidden");
//     let cSharp = document.getElementById("aCSharp");
//     cSharp.setAttribute("class", "hidden");
//     let jScript = docuemnt.getElementById("aJavascript");
//     jScript.setAttribute("class", "hidden");
//     let python = document.getElementById("aPython");
//     python.setAttribute("class", "hidden");
//     let undecided = document.getElementById("undetermined");
//     undecided.setAttribute("class", "hidden");

//     if (q1 || q2 === "yes") {
//       ruby.removeAttribute("class");
//     } else if (q3 === "yes") {
//       cSharp.removeAttribute("class");
//     } else if (q4 === "yes") {
//       jScript.removeAttribute("class");
//     } else if (q5 === "yes") {
//       python.removeAttribute("class");
//     } else {
//       undecided.removeAttribute("class", "hidden");
//     }
//   });
// });

window.onload = function () {
  const form = document.querySelector("form");
  const resetBtn = document.querySelector("button#reset");


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

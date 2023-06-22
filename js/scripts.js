function captureVal(event) {
  event.preventDefault();
  const pup = document.getElementById("puppies");
  let pupOpt = pup.options[pup.selectedIndex].text;

  const daff = document.getElementById("daffodils");
  let daffOpt = daff.options[daff.selectedIndex].text;

  const snee = document.getElementById("sneezes");
  let sneeOpt = snee.options[snee.selectedIndex].text;
  
  const hive = document.getElementById("hives");
  let hiveOpt = hive.options[hive.selectedIndex].text;
  
  const muff = document.getElementById("muffins");
  let muffOpt = muff.options[muff.selectedIndex].text;

  const message = document.querySelector("div#message");
  message.setAttribute("class", "hidden");
    const errMessage = document.querySelector("div#err-msg");
    errMessage.setAttribute("class", "hidden");

  if (pupOpt && daffOpt === "Yes") {
    message.removeAttribute("class");
    document.querySelector("span#replace").innerText = "Ruby";
  } else if (sneeOpt === "Yes") {
      message.removeAttribute("class");
      document.querySelector("span#replace").innerText = "C#";
  } else if (hiveOpt === "Yes") {
      message.removeAttribute("class");
      document.querySelector("span#replace").innerText = "Javascript";
  } else if (muffOpt === "Yes") {
      message.removeAttribute("class");
      document.querySelector("span#replace").innerText = "Python";
  } else {
      errMessage.removeAttribute("class");
  }
}

window.addEventListener("load", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", captureVal);
});

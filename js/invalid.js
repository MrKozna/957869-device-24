var oForm = document.getElementById("wr");
var email = oForm.querySelector("[type = email]");
var text = oForm.querySelector("[type = text]");



email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    // email.setCustomValidity("I expect an e-mail, darling!");
    email.style.backgroundColor = "#EDB5B5"; 
  } else {
    // email.setCustomValidity("");
    email.style.backgroundColor = ""; 
  }
});

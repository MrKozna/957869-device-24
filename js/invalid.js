var email = document.querySelector(".email");
var text = document.getElementsByClassName("name");
email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I expect an e-mail, darling!");
  } else {
    email.setCustomValidity("");
  }
});






/*
var inp =  document.querySelector(".Write-us-popup input");
var but = document.querySelector(".button-link-send");
var form  = document.querySelector('.Write-us-popup ~ form');

but.addEventListener("click", function (evt) {
    
    if (!inp.validity.valid) {inp.classList.add("invalid"); evt.preventDefault();}
    
  });
  */
  
var oForm = document.getElementById("wr");
var email = oForm.querySelector("[type = email]");
var text = oForm.querySelector("[type = text]");




/*
oForm.addEventListener("submit", function(evt) { ;
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I expect an e-mail, darling!");
  } else {
    email.setCustomValidity("");
  }
});
*/


email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    // email.setCustomValidity("I expect an e-mail, darling!");
    email.style.backgroundColor = "#EDB5B5"; 
  } else {
    // email.setCustomValidity("");
    email.style.backgroundColor = ""; 
  }
});

/*
text.addEventListener("input", function (event) {
  if (!text.validity.typeMismatch) {
    // text.setCustomValidity("I expect an e-mail, darling!");
    text.style.backgroundColor = "#EDB5B5"; 
  } else {
    // email.setCustomValidity("");
    text.style.backgroundColor = ""; 
  }
});
*/



/*
var inp =  document.querySelector(".Write-us-popup input");
var but = document.querySelector(".button-link-send");
var form  = document.querySelector('.Write-us-popup ~ form');

but.addEventListener("click", function (evt) {
    
    if (!inp.validity.valid) {inp.classList.add("invalid"); evt.preventDefault();}
    
  });
  */
  
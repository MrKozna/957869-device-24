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


var mapLink =  document.querySelector(".map");
var mapModal = document.querySelector(".map-popup");
var mapClose = mapModal.querySelector(".modal-close");


mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapModal.classList.add("popup-visible");
  });
  
  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapModal.classList.remove("popup-visible");
    
  });
  
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (mapModal.classList.contains("popup-visible")) {
        mapModal.classList.remove("popup-visible");
      }
    }
  });

var link =  document.querySelector(".popup");
var modal = document.querySelector(".write-us-popup");
var close = document.querySelector(".modal-close");
var name = document.querySelector("[name=login]");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("popup-visible");
  });
  
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove("popup-visible");
    
  });
  
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modal.classList.contains("popup-visible")) {
        modal.classList.remove("popup-visible");
      }
    }
  });

  var slider = document.querySelector(".slider-1-buttons");
var buttonOne =  slider.querySelector(".sl1");
var buttonTwo =  slider.querySelector(".sl2");
var buttonThree =  slider.querySelector(".sl3");
var articleOne = document.querySelector(".monopod");
var articleTwo = document.querySelector("article:nth-child(2)");
var articleThree = document.querySelector("article:nth-child(3)");



buttonOne.addEventListener("click", function (evt) { 

    if (!buttonOne.classList.contains("active")){
        evt.preventDefault();
        buttonOne.classList.add("active");
        buttonTwo.classList.remove("active");
        buttonThree.classList.remove("active");
        articleOne.classList.add("article-show");
        articleTwo.classList.remove("article-show");
        articleThree.classList.remove("article-show");}

});

buttonTwo.addEventListener("click", function (evt) { 

    if (!buttonTwo.classList.contains("active")){
        evt.preventDefault();
        buttonTwo.classList.add("active");
        buttonOne.classList.remove("active");
        buttonThree.classList.remove("active");
        articleTwo.classList.add("article-show");
        articleOne.classList.remove("article-show");
        articleThree.classList.remove("article-show");}

});

buttonThree.addEventListener("click", function (evt) { 

    if (!buttonThree.classList.contains("active")){
        evt.preventDefault();
        buttonThree.classList.add("active");
        buttonTwo.classList.remove("active");
        buttonOne.classList.remove("active");
        articleThree.classList.add("article-show");
        articleTwo.classList.remove("article-show");
        articleOne.classList.remove("article-show");}

});

var linkOne =  document.querySelector(".deliver");
var linkTwo =  document.querySelector(".warranties");
var linkThree =  document.querySelector(".creditor");
var serviceOne = document.querySelector(".delivery");
var serviceTwo = document.querySelector(".warranty");
var serviceThree = document.querySelector(".credit");



linkOne.addEventListener("click", function (evt) { 

    if (!serviceOne.classList.contains("show")){
        evt.preventDefault();
        serviceOne.classList.add("show");
        serviceTwo.classList.remove("show");
        serviceThree.classList.remove("show");
        linkOne.classList.add("deliver-black", "action");
        linkTwo.classList.remove("warranties-black", "action");
        linkThree.classList.remove("creditor-black", "action");
    }

});

linkTwo.addEventListener("click", function (evt) { 

    if (!serviceTwo.classList.contains("show")){
        evt.preventDefault();
        serviceTwo.classList.add("show");
        serviceOne.classList.remove("show");
        serviceThree.classList.remove("show");
        linkOne.classList.remove("deliver-black", "action");
        linkTwo.classList.add("warranties-black", "action");
        linkThree.classList.remove("creditor-black", "action");
    }

});

linkThree.addEventListener("click", function (evt) { 

    if (!serviceThree.classList.contains("show")){
        evt.preventDefault();
        serviceThree.classList.add("show");
        serviceOne.classList.remove("show");
        serviceTwo.classList.remove("show");
        linkOne.classList.remove("deliver-black", "action");
        linkTwo.classList.remove("warranties-black", "action");
        linkThree.classList.add("creditor-black", "action");
    }

});



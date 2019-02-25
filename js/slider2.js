var linkOne =  document.querySelector(".del");
var linkTwo =  document.querySelector(".war");
var linkThree =  document.querySelector(".cre");
var serviceOne = document.querySelector(".delivery");
var serviceTwo = document.querySelector(".warranty");
var serviceThree = document.querySelector(".credit");



linkOne.addEventListener("click", function (evt) { 

    if (!serviceOne.classList.contains("show")){
        evt.preventDefault();
        serviceOne.classList.add("show");
        serviceTwo.classList.remove("show");
        serviceThree.classList.remove("show");}

});

linkTwo.addEventListener("click", function (evt) { 

    if (!serviceTwo.classList.contains("show")){
        evt.preventDefault();
        serviceTwo.classList.add("show");
        serviceOne.classList.remove("show");
        serviceThree.classList.remove("show");
    }

});

linkThree.addEventListener("click", function (evt) { 

    if (!serviceThree.classList.contains("show")){
        evt.preventDefault();
        serviceThree.classList.add("show");
        serviceOne.classList.remove("show");
        serviceTwo.classList.remove("show");}

});

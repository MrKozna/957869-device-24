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
        serviceThree.classList.remove("show");
        linkOne.classList.add("del-black", "act");
        linkTwo.classList.remove("war-black", "act");
        linkThree.classList.remove("cre-black", "act");
    }

});

linkTwo.addEventListener("click", function (evt) { 

    if (!serviceTwo.classList.contains("show")){
        evt.preventDefault();
        serviceTwo.classList.add("show");
        serviceOne.classList.remove("show");
        serviceThree.classList.remove("show");
        linkOne.classList.remove("del-black", "act");
        linkTwo.classList.add("war-black", "act");
        linkThree.classList.remove("cre-black", "act");
    }

});

linkThree.addEventListener("click", function (evt) { 

    if (!serviceThree.classList.contains("show")){
        evt.preventDefault();
        serviceThree.classList.add("show");
        serviceOne.classList.remove("show");
        serviceTwo.classList.remove("show");
        linkOne.classList.remove("del-black", "act");
        linkTwo.classList.remove("war-black", "act");
        linkThree.classList.add("cre-black", "act");
    }

});

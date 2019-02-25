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

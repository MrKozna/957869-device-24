var link =  document.querySelector(".popup");
var modal = document.querySelector(".Write-us-popup");
var close = document.querySelector(".modal-close");
var name = document.querySelector("[name = login]");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("popup-visible");

  });
  
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("popup-visible");
    
  });
  


/*
link.addEventListener("click", 
    function(evt) {evt.preventDefault();}

);


link.addEventListener("click", 
    function(evt) {evt.preventDefault(); 
    modal.classList.add(popup-visible);
    name.focus;
});

close.addEventListener("click", function(evt){evt.preventDefault();
    modal.classList.remove(Write-us-popup-visible);
});

document.addEventListener("keydown", 
    function(evt){if (evt.keyCode === 27) {evt.preventDefault(); 
    if (modal.classList.contains(popup-visible)) {modal.classList.remove(popup-visible);}}
    
});
*/
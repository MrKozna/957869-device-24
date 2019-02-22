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
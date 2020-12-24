// For Meni - Donje Mostre
var hideEverything = function hideEverything() {
  var hideableSections = document.querySelectorAll('.hideable-section');
  
  var keyArray = Object.keys(hideableSections);

  keyArray.forEach(function(key){
      hideableSections[key].style.display = 'none';
  });
 
}

var showSectionWithId = function showSectionWithId(id) {
  hideEverything(); 

  var element = document.getElementById(id); 

  element.style.display = 'block'; 
  
}

// For Meni - Visoko
var hideAll = function hideAll() {
  var hideableSections = document.querySelectorAll('.hideable-part');
  
  var keyArray = Object.keys(hideableSections);

  keyArray.forEach(function(key){
      hideableSections[key].style.display = 'none';
  });
 
}


var showPartWithId = function showPartWithId(id) {
  hideAll(); 

  var element = document.getElementById(id); 

  element.style.display = 'block'; 
  
}

window.addEventListener("hashchange", function() { scrollBy(0, -77) });

//For photo gallery
const newImg = document.querySelector(".opened-img");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const imgText = document.querySelector(".caption");

previews.forEach(preview => {
  preview.addEventListener('click', () => {
    newImg.classList.add("open");
    original.classList.add("open");

    const originalSrc = preview.getAttribute("data-original");
    original.src = `./images/${originalSrc}`;
  });
});

newImg.addEventListener("click", (e) => {
  if (e.target.classList.contains("opened-img")) {
    newImg.classList.remove("open");
    original.classList.remove("open");

  }
});
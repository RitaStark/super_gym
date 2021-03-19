'use strict';


function openSub(evt, subType) {
  var i, tabcontent, tablinks;

  tabcontent = document.querySelectorAll(".subscriptions__list");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.querySelectorAll(".subscriptions__toggle-item");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }

  document.getElementById(subType).style.display = "block";
  evt.currentTarget.className += "active";
}




// var slideIndex = 1;
// showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var slideIndex = 1;
  showSlides(slideIndex);
  var i;
  var slides = document.querySelectorAll(".trainers__slides");
  console.log(slides.length);
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 1; i < slides.length; i++) {

    // slides[i].style.position = "relative";
    // slides[i].insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0"></span>`);
    // i++;


    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

var width = 260; // ширина картинки
var count = 4; // видимое количество изображений

var list = document.querySelector('.trainers__wrapper');
var listElems = document.querySelectorAll('.trainers__slides');

var position = 0;

var previewButton = document.querySelector(".trainers__prev-button");
var nextButton = document.querySelector(".trainers__next-button");

previewButton.onclick = function () {
  // сдвиг влево
  position += width * count;

  position = Math.min(position, 0)
  list.style.marginLeft = position + 'px';
};

nextButton.onclick = function () {
  // сдвиг вправо
  position -= width * count;

  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = '-200px';
};



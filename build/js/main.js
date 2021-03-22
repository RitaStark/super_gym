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



// отзывы



var reviewsSlideIndex = 1;
reviewsShowSlides(reviewsSlideIndex);

function reviewsPlusSlides(n) {
  reviewsShowSlides(reviewsSlideIndex += n);
}

function reviewsShowSlides(n) {
  var i;
  var reviews = document.querySelectorAll(".reviews__item");
  if (n > reviews.length) { reviewsSlideIndex = 1 }
  if (n < 1) { reviewsSlideIndex = reviews.length }
  for (i = 0; i < reviews.length; i++) {
    reviews[i].style.display = "none";
  }
  reviews[reviewsSlideIndex - 1].style.display = "block";
}



// тренеры

(function () {

  var width = 300;
  // var mobileWidth = 260;
  var countDesktop = 4;
  var countTablet = 2;
  var countMobile = 1;

  var sliderContainer = document.querySelector(".trainers__container");
  var sliderList = document.querySelector(".trainers__list");
  var sliderElements = document.querySelectorAll(".trainers__item");

  var previewButton = document.querySelector(".trainers__prev-button");
  var nextButton = document.querySelector(".trainers__next-button");

  var position = 0;

  const mediaQueryDesktop = window.matchMedia('(min-width: 1200px)');
  const mediaQueryTablet = window.matchMedia('(max-width: 1199px)');
  const mediaQueryMobile = window.matchMedia('(max-width: 767px)');

  previewButton.addEventListener("click", function () {

    function handleDesktopChange(mediaQueryDesktop) {
      if (mediaQueryDesktop.matches) {
        position += width * countDesktop;
        position = Math.min(position, 0);
        sliderList.style.marginLeft = position + 'px';
      }
    }
    mediaQueryDesktop.addEventListener("change", handleDesktopChange)
    handleDesktopChange(mediaQueryDesktop);


    function handleTabletChange(mediaQueryTablet) {
      if (mediaQueryTablet.matches) {
        position += width * countTablet;
        position = Math.min(position, 0);
        sliderList.style.marginLeft = position + 'px';
      }
    }
    mediaQueryTablet.addEventListener("change", handleTabletChange)
    handleTabletChange(mediaQueryTablet);


    function handleMobileChange(mediaQueryMobile) {
      if (mediaQueryMobile.matches) {
        position += width * countMobile;
        position = Math.min(position, 0);
        sliderList.style.marginLeft = position + 'px';
      }
    }
    mediaQueryMobile.addEventListener("change", handleMobileChange)
    handleMobileChange(mediaQueryMobile);
  });


  nextButton.addEventListener("click", function () {

    function handleDesktopChange(mediaQueryDesktop) {
      if (mediaQueryDesktop.matches) {
        position -= width * countDesktop;
        position = Math.max(position, -width * (sliderElements.length - countDesktop));
        sliderList.style.marginLeft = position + 'px';
      }
    }
    mediaQueryDesktop.addEventListener("change", handleDesktopChange)
    handleDesktopChange(mediaQueryDesktop);


    function handleTabletChange(mediaQueryTablet) {
      if (mediaQueryTablet.matches) {
        position -= width * countTablet;
        position = Math.max(position, -width * (sliderElements.length - countTablet));
        sliderList.style.marginLeft = position + 'px';
      }
    }
    mediaQueryTablet.addEventListener("change", handleTabletChange)
    handleTabletChange(mediaQueryTablet);

    function handleMobileChange(mediaQueryMobile) {
      if (mediaQueryMobile.matches) {
        position -= width * countMobile;
        position = Math.max(position, -width * (sliderElements.length - countMobile));
        sliderList.style.marginLeft = position + 'px';
      }
    }
    mediaQueryMobile.addEventListener("change", handleMobileChange)
    handleMobileChange(mediaQueryMobile);
  });

})();
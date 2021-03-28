'use strict';


function openSub(evt, subType) {
  var i;
  var tabcontent;
  var tablinks;

  tabcontent = document.querySelectorAll('.subscriptions__list');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  tablinks = document.querySelectorAll('.subscriptions__toggle-item');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace('active', '');
  }

  document.getElementById(subType).style.display = 'block';
  evt.currentTarget.className += 'active';
}



// отзывы


var reviewsSlideIndex = 1;
reviewsShowSlides(reviewsSlideIndex);

function reviewsPlusSlides(n) {
  reviewsShowSlides(reviewsSlideIndex += n);
}

function reviewsShowSlides(n) {
  var i;
  var reviews = document.querySelectorAll('.reviews__item');
  if (n > reviews.length) {
    reviewsSlideIndex = 1;
  }
  if (n < 1) {
    reviewsSlideIndex = reviews.length;
  }
  for (i = 0; i < reviews.length; i++) {
    reviews[i].style.display = 'none';
  }
  reviews[reviewsSlideIndex - 1].style.display = 'block';
}


// тренеры

(function () {

  var width = 300;
  var countDesktop = 4;
  var countTablet = 2;
  var countMobile = 1;

  var sliderList = document.querySelector('.trainers__list');
  var sliderElements = document.querySelectorAll('.trainers__item');

  var prevButton = document.querySelector('.trainers__prev-button');
  var nextButton = document.querySelector('.trainers__next-button');


  var mediaQueryDesktop = window.matchMedia('(min-width: 1200px)');
  var mediaQueryTablet = window.matchMedia('(min-width: 768px) and (max-width: 1199px )');
  var mediaQueryMobile = window.matchMedia('(max-width: 767px)');

  var currentPage = 0;

  var nextPage = function () {
    currentPage += 1;
    var pageCount = Math.ceil(sliderElements.length / getCountPerPage());
    if (currentPage > pageCount - 1) {
      currentPage = 0;
    }

    showPage(currentPage, getCountPerPage());
  };

  var prevPage = function () {
    currentPage -= 1;
    var pageCount = Math.ceil(sliderElements.length / getCountPerPage());
    if (currentPage < 0) {
      currentPage = pageCount - 1;
    }
    showPage(currentPage, getCountPerPage());
  };

  var getCountPerPage = function () {
    if (currentMode == "desktop") {
      return countDesktop;
    }
    if (currentMode == "tablet") {
      return countTablet;
    }
    if (currentMode == "mobile") {
      return countMobile;
    }
    console.error("not maches media")
    return countDesktop;
  };

  var showPage = function (pageNum, countPerPage) {
    var pos = -width * countPerPage * pageNum;
    sliderList.style.marginLeft = pos + 'px';
    console.log("show page", pageNum, "countperpage", countPerPage);
  };

  var currentMode;

  var setCurrentMode = function (newMode) {
    currentMode = newMode;
    console.log("switching mode to", newMode);

    currentPage = 0;
    showPage(currentPage, getCountPerPage());
  };

  if (mediaQueryDesktop.matches) {
    setCurrentMode("desktop");
  } else if (mediaQueryTablet.matches) {
    setCurrentMode("tablet");
  } else if (mediaQueryMobile.matches) {
    setCurrentMode("mobile");
  } else {
    console.error("not maches media")
    setCurrentMode("desktop");
  };
  console.log("mode on start", currentMode);

  mediaQueryDesktop.addEventListener('change', function (evt) {
    if (evt.matches) {
      setCurrentMode("desktop");
    }
  });

  mediaQueryTablet.addEventListener('change', function (evt) {
    if (evt.matches) {
      setCurrentMode("tablet");
    }
  });

  mediaQueryMobile.addEventListener('change', function (evt) {
    if (evt.matches) {
      setCurrentMode("mobile");
    }
  });



  prevButton.addEventListener('click', function () {
    prevPage();
  });

  nextButton.addEventListener('click', function () {
    nextPage();
  });

})();

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


'use strict';



(function () {

  var trainerSubscription = document.querySelector('.subscriptions__trainer');
  var subscriptionOnaMonth = document.querySelector('.subscriptions__toggle-item--1months');

  trainerSubscription.addEventListener("mousemove", function () {
    subscriptionOnaMonth.style.cssText = "border-bottom:2px solid #c00; padding-bottom:21px"; this.addEventListener("mouseout", function () {
      subscriptionOnaMonth.style.borderBottom = "";
    });
  });

})();



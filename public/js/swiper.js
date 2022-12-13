var swiper = new Swiper(".mySwiper1", {
  direction: "vertical",
  slidesPerGroup: 1,
  loop: true,
  autoplay: true,
  allowTouchMove: false,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".mySwiper2", {
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  observer: true,
  observeParents: true,
  allowTouchMove: false,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
});

var swiper = new Swiper(".mySwiper3", {
  spaceBetween: 0,
  centeredSlides: true,
  speed: 8000,
  autoplay: {
    delay: 2,
  },
  loop: true,
  slidesPerView: 'auto',
  allowTouchMove: false,
  disableOnInteraction: false,
});

var swiper = new Swiper(".mySwiper4", {
  spaceBetween: 0,
  centeredSlides: true,
  speed: 8000,
  autoplay: {
    delay: 2,
    reverseDirection: true
  },
  loop: true,
  loopedSlides: 4,
  slidesPerView: 'auto',
  allowTouchMove: false,
  disableOnInteraction: false,

});
var swiper = new Swiper(".mySwiper1", {
  direction: "vertical",
  slidesPerGroup: 1,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next", 
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
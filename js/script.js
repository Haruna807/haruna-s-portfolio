// ドロワーメニュー

jQuery("#js-drawer-icon").on("click", function(e) {
  e.preventDefault();
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
});

// スライダー

var mySwiper = new Swiper('.swiper', {
  loop: false,
  slidesPerView: 2,
  spaceBetween: 10,
  centeredSlides: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    767: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});










// ローディング画面


window.addEventListener('load', function() {
  setTimeout(function() {
      document.querySelector('.loading-wrapper').style.display = 'none';
      const wrapper = document.querySelector('.top-wrapper');
      wrapper.style.display = 'block';
      requestAnimationFrame(() => {
          wrapper.classList.add('is-visible');
      });
  }, 2000);
});



// ドロワーメニュー;

jQuery("#js-drawer-icon").on("click", function(e) {
  e.preventDefault();
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
  jQuery("body").toggleClass("is-fixed");
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
    375: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});


// スクロール時のアニメーション

const intersectionObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-in-view");
    } else {
      // entry.target.classList.remove("is-in-view"); /* 一度表示されたらそのまま */
    }
  });
});

const inViewItems = document.querySelectorAll(".js-in-view");
inViewItems.forEach(function(inViewItem) {
  intersectionObserver.observe(inViewItem);
});










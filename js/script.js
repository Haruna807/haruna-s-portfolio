// ドロワーメニュー

jQuery("#js-drawer-icon").on("click", function(e) {
  e.preventDefault();
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
});


// ファーストビュー


$(document).ready(function() {
  // スマホとPC用の背景画像をそれぞれ設定
  const backgrounds = {
    desktop: [
      './img/fv/fv_img-1.png',
      './img/fv/fv_img-2.png',
      './img/fv/fv_img-3.png',
      './img/fv/fv_img-4.png',
    ],
    mobile: [
      './img/fv/fv_img-1.png',
      './img/fv/sp/fv_img-2-sp.png',
      './img/fv/fv_img-3.png',
      './img/fv/fv_img-4.png',
    ],
  };

  let currentIndex = 0;

  // 画面サイズに応じた画像の配列を選択
  function getBackgrounds() {
    return window.innerWidth <= 768 ? backgrounds.mobile : backgrounds.desktop;
  }

  function changeBackground() {
    const bgImages = getBackgrounds();
    
    // 現在の背景を透明にする
    $('.fv__background').css('opacity', 0);
    
    // インデックスを更新
    currentIndex = (currentIndex + 1) % bgImages.length;

    // 透明になるのを待ってから新しい背景画像を設定
    setTimeout(function() {
      // 新しい背景画像を設定
      $('.fv__background').css('background-image', `url(${bgImages[currentIndex]})`);

      // 新しい背景をふわっと登場させる
      $('.fv__background').css('opacity', 1);
    }, 3000); // 3秒待ってから画像を変更
  }

  // 背景を10秒ごとに変更 (3秒の透明化 + 3秒の表示 + 4秒の表示)
  setInterval(changeBackground, 9000); 

  // 最初の背景を設定し、ふわっと登場させる
  const initialBgImages = getBackgrounds();
  $('.fv__background').css('background-image', `url(${initialBgImages[currentIndex]})`);
  $('.fv__background').css('opacity', 0); // 最初は透明にする
  setTimeout(() => {
    $('.fv__background').css('opacity', 1); // ふわっと登場させる
  }, 2000); // 短い遅延で透明から不透明に
});


const swiper = new Swiper('.swiper', {
  loop: false, // ループを無効
  centeredSlides: false, // 中央表示を無効
  slidesPerView: 1.2, // 一度に表示するスライドの数
  spaceBetween: 100, // スライド間のスペースを調整

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // スライドの動きを調整するための設定
  on: {
    slideChangeTransitionEnd: function () {
      // スライドが変更された後の処理
      this.update(); // スライドの更新を行う
    },
  },
});




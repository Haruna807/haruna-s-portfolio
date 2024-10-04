// ドロワーメニュー

jQuery("#js-drawer-icon").on("click", function(e) {
  e.preventDefault();
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
});


// ファーストビュー

// $(document).ready(function() {
//   const $images = $('.fv__inner img'); // すべての画像を選択
//   let currentIndex = 0;

//   function changeImage() {
//     // 新しい画像を表示
//     currentIndex = (currentIndex + 1) % $images.length;
//     $images.eq(currentIndex).addClass('active');

//     // 現在の画像を非表示にする
//     $images.eq((currentIndex - 1 + $images.length) % $images.length).removeClass('active');
//   }

//   // 画像を5秒ごとに変更
//   setInterval(changeImage, 5000);

//   // 最初の画像を表示
//   $images.eq(currentIndex).addClass('active');
// });

$(document).ready(function() {
  const backgrounds = [
    './img/fv/fv_img-1.png',
    './img/fv/fv_img-2.png',
    './img/fv/fv_img-3.png',
    './img/fv/fv_img-4.png',
  ];
  
  let currentIndex = 0;

  function changeBackground() {
    // 現在の背景を透明にする
    $('.fv__background').css('opacity', 0);

    // インデックスを更新
    currentIndex = (currentIndex + 1) % backgrounds.length;

    // 透明になるのを待ってから新しい背景画像を設定
    setTimeout(function() {
      // 新しい背景画像を設定
      $('.fv__background').css('background-image', `url(${backgrounds[currentIndex]})`);

      // 新しい背景をふわっと登場させる
      $('.fv__background').css('opacity', 1);
    }, 3000); // 3秒待ってから画像を変更
  }

  // 背景を10秒ごとに変更 (3秒の透明化 + 3秒の表示 + 4秒の表示)
  setInterval(changeBackground, 9000); 

  // 最初の背景を設定し、ふわっと登場させる
  $('.fv__background').css('background-image', `url(${backgrounds[currentIndex]})`);
  $('.fv__background').css('opacity', 0); // 最初は透明にする
  setTimeout(() => {
    $('.fv__background').css('opacity', 1); // ふわっと登場させる
  }, 3000); // 短い遅延で透明から不透明に
});




// ドロワーメニュー

jQuery("#js-drawer-icon").on("click", function(e) {
  e.preventDefault();
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
});


// ファーストビュー

$(document).ready(function() {
  const $images = $('.fv__inner img'); // すべての画像を選択
  let currentIndex = 0;

  function changeImage() {
    // 新しい画像を表示
    currentIndex = (currentIndex + 1) % $images.length;
    $images.eq(currentIndex).addClass('active');

    // 現在の画像を非表示にする
    $images.eq((currentIndex - 1 + $images.length) % $images.length).removeClass('active');
  }

  // 画像を5秒ごとに変更
  setInterval(changeImage, 5000);

  // 最初の画像を表示
  $images.eq(currentIndex).addClass('active');
});


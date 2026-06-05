$(function () {
  // =========================================================
  // 共通変数のキャッシュ（パフォーマンス向上）
  // =========================================================
  const $window = $(window);
  const $body = $('body');

  // =========================================================
  // ハンバーガーメニュー
  // =========================================================
  const $menu = $('.menu');
  const $nav = $('.nav');

  $menu.on('click', function () {
    $menu.toggleClass('active');
    $nav.toggleClass('active');
    $body.toggleClass('fixed');
  });

  // =========================================================
  // メインスライダー (Slick)
  // =========================================================
  $('.main_slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    fade: true,
    arrows: false,
    pauseOnHover: false
  });

  // =========================================================
  // カスタムスライダー (ドット生成と切り替え)
  // =========================================================
  const $slides = $('.slider-track .slide');
  const $pagination = $('.slider-pagination');

  // 1. スライドの枚数分だけドットを動的に生成する
  $slides.each(function (index) {
    const activeClass = index === 0 ? 'active' : '';
    
    $pagination.append(`<button class="dot ${activeClass}"></button>`);
  });

  // 2. ドットをクリックしたときの処理
  $pagination.on('click', '.dot', function () {
    const clickedIndex = $(this).index();

    $pagination.find('.dot').removeClass('active');
    $slides.removeClass('active');

    $(this).addClass('active');
    $slides.eq(clickedIndex).addClass('active');
  });

  // =========================================================
  // タブ切り替え（ニュース等のカテゴリー絞り込み）
  // =========================================================
  const $listItems = $('.list > li');
  $listItems.show();

  $('.tab a').on('click', function (e) {
    e.preventDefault();
    const $this = $(this);

    $('.tab a').removeClass('on');
    $this.addClass('on');

    // クラス名から 'cate' で始まるものを抽出 (findを使用)
    const className = $this.attr('class') || '';
    const targetClass = className.split(' ').find(cls => cls.startsWith('cate'));

    if (targetClass === 'cate00') {
      $listItems.hide().fadeIn(300);
    } else if (targetClass) {
      // .filter()を使って対象の要素だけを残してフェードイン
      $listItems.hide().filter(function () {
        return $(this).find(`span.${targetClass}`).length > 0;
      }).fadeIn(300);
    }
  });

  // =========================================================
  // スクロールフェードインアニメーション
  // =========================================================
  const $fadeElements = $('.fadein');

  $window.on('scroll load', function () {

    const triggerBottom = $window.scrollTop() + $window.height() - 150;

    $fadeElements.each(function () {
      const $elem = $(this);
      if (triggerBottom > $elem.offset().top) {
        $elem.addClass('is-show');
      }
    });
  });

  // =========================================================
  // アコーディオン
  // =========================================================
  document.querySelectorAll(".accordion-header").forEach(btn => {
    btn.addEventListener("click", () => {
      
      btn.parentElement.classList.toggle("active");
    });
  });

  // =========================================================
  // スライドの高さを揃える
  // =========================================================
  function setSlideHeight() {
    const items = document.querySelectorAll('.slide > div > div');
    if (items.length === 0) return; 

    items.forEach(item => item.style.height = 'auto');

    let maxHeight = 0;
    items.forEach(item => {
      maxHeight = Math.max(maxHeight, item.offsetHeight);
    });

    items.forEach(item => {
      item.style.height = `${maxHeight}px`;
    });
  }

  window.addEventListener('load', setSlideHeight);
  window.addEventListener('resize', setSlideHeight);

});
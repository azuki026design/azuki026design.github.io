// ============================================== //
// ハンバーガーメニュー
// ============================================== //
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.header__hamburger-button');
  const bars = document.querySelectorAll('.header__hamburger-button-bar');
  const menu = document.querySelector('.header__hamburger-menu');
  const menuList = document.querySelector('.header__hamburger-menu-list'); // 高さを測る対象（ul）
  const menuItems = document.querySelectorAll('.header__hamburger-link');

  // 初期状態：閉じている
  // HTML側で aria-expanded="false" を設定しておく

  let isAnimating = false; // 連打防止フラグ

  // ハンバーガークリック
  button.addEventListener('click', (event) => {
    if (isAnimating) return; // アニメ中は即リターン
    isAnimating = true;      // フラグON

    if (button.getAttribute('aria-expanded') === 'false') {   // ← aria-expandedで判定
      // 開く：アコーディオンの開くロジックをほぼコピペ
      button.classList.add('is-open'); // バーアニメ用
      bars.forEach(bar => bar.classList.add('is-open'));
      menu.classList.add('is-open');   // 見た目用

      // コンテンツ内側の要素の高さを取得
      const targetHeight = menuList.offsetHeight; // 実際の高さ
      menu.style.height = targetHeight + 'px';   // 外側に高さを設定

      setTimeout(function () {
        menu.style.height = 'auto'; // アニメ完了後にauto
        button.setAttribute('aria-expanded', 'true');        // ← ariaで更新
        isAnimating = false;          // フラグOFF
      }, 500); // transition時間に合わせる

    } else if (button.getAttribute('aria-expanded') === 'true') {
      // 閉じる：アコーディオンの閉じるロジックをほぼコピペ
      button.classList.remove('is-open');
      bars.forEach(bar => bar.classList.remove('is-open'));
      menu.classList.remove('is-open');

      // 現在の高さを一旦固定
      const targetHeight = menuList.offsetHeight;
      menu.style.height = targetHeight + 'px';

      setTimeout(function () {
        menu.style.height = '0'; // 高さを0に（アニメ開始）
        button.setAttribute('aria-expanded', 'false');      // ← ariaで更新
        isAnimating = false;           // フラグOFF
      }, 1); // 即時reflow
    }
  });

  // メニュー内リンククリックで閉じる（状態をfalseに強制）
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      if (button.getAttribute('aria-expanded') === 'true' && !isAnimating) {
        // 閉じる処理を呼び出す（上記のelse ifと同じロジック）
        button.classList.remove('is-open');
        bars.forEach(bar => bar.classList.remove('is-open'));
        menu.classList.remove('is-open');

        const targetHeight = menuList.offsetHeight;
        menu.style.height = targetHeight + 'px';

        setTimeout(() => {
          menu.style.height = '0';
          button.setAttribute('aria-expanded', 'false');  // ← ariaで更新
          isAnimating = false;
        }, 1);
      }
    });
  });

  // 外側クリックで閉じる（状態falseに）
  document.addEventListener('click', (e) => {
    if (!button.contains(e.target) && !menu.contains(e.target) && button.getAttribute('aria-expanded') === 'true' && !isAnimating) {
      // 閉じる処理（上記と同じ）
      button.classList.remove('is-open');
      bars.forEach(bar => bar.classList.remove('is-open'));
      menu.classList.remove('is-open');

      const targetHeight = menuList.offsetHeight;
      menu.style.height = targetHeight + 'px';

      setTimeout(() => {
        menu.style.height = '0';
        button.setAttribute('aria-expanded', 'false');  // ← ariaで更新
        isAnimating = false;
      }, 1);
    }
  });

  // リサイズ時：開いていたら高さを再計算
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && button.getAttribute('aria-expanded') === 'true') {
      // PC幅になったら即閉じ（アニメーションなしでサクッと）
      button.classList.remove('is-open');
      bars.forEach(bar => bar.classList.remove('is-open'));
      menu.classList.remove('is-open');
      menu.style.height = '0';
      button.setAttribute('aria-expanded', 'false');
    }
  });
});

// ============================================== //
// スライダー（swiper) 1つ目
// ============================================== //
// Swiperは頭文字大文字のパスカルケースが正しい
const swiper1 = new Swiper('.swiper1', {
  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 20,
  speed: 600,
  initialSlide: 0,
  navigation: false,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 5,
  },
});

// ============================================== //
// スライダー（swiper) 2つ目
// ============================================== //
// Swiperは頭文字大文字のパスカルケースが正しい
const swiper2 = new Swiper('.swiper2', {
  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 20,
  speed: 600,
  initialSlide: 0,
  navigation: false,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 5,
  },
});
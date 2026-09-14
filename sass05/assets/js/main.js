// ============================================== //
// オープニングアニメ
// ============================================== //
document.addEventListener('DOMContentLoaded', () => {
  const opening = document.querySelector('.c-anime-openning');
  const logo = document.querySelector('.c-anime-openning-img');

  if (sessionStorage.getItem('openingShown')) {
    opening.classList.add('is-hide');
    return;
  }

  document.body.classList.add('is-loading');

  setTimeout(() => {
    logo.classList.add('is-show');
  }, 100); //

  setTimeout(() => {
    opening.classList.add('is-hide');

    setTimeout(() => {
      opening.remove();
      document.body.classList.remove('is-loading');
    }, 600);
  }, 1800);

  sessionStorage.setItem('openingShown', 'true');
});

// ============================================== //
// スライダー（swiper) 1つ目
// ============================================== //
const swiper1 = new Swiper('.swiper1', {
  loop: true,
  slidesPerView: 1,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  speed: 800,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

// ============================================== //
// スライダー（swiper) 2つ目
// ============================================== //
const swiper2 = new Swiper('.swiper2', {
  loop: true,
  loopAdditionalSlides: 1,
  loopedSlides: 1,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 32,
  speed: 600,
  initialSlide: 0,
  watchSlidesProgress: true,
  resistanceRatio: 0,
  navigation: false,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 4,
  },
});

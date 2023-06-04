const openMobileNavigationButton = document.querySelector('.header__burger'),
  closeMobileNavigationButton = document.querySelector('.header__burger-close'),
  mobileNavigation = document.querySelector('.header__burger-menu');
function openMobileNavigationHandler() {
  mobileNavigation.classList.remove('hide'),
    mobileNavigation.classList.add('open'),
    document.body.classList.add('navigation-open');
}
function hideMobileNavigationHandler() {
  mobileNavigation.classList.add('hide'),
    setTimeout(() => {
      mobileNavigation.classList.remove('open'), document.body.classList.remove('navigation-open');
    }, 100);
}
openMobileNavigationButton.addEventListener('click', openMobileNavigationHandler),
  closeMobileNavigationButton.addEventListener('click', hideMobileNavigationHandler);
const swiper = new Swiper('.stop__slider', {
  direction: 'horizontal',
  loop: !0,
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.stop__slider-pagination.swiper-pagination',
    clickable: !0,
    renderBullet: function () {
      return '<span class="stop__slider-bullet swiper-pagination-bullet"></span>';
    },
  },
  navigation: { nextEl: '.stop__slider-next', prevEl: '.stop__slider-prev' },
});

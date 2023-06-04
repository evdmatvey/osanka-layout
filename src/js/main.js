// burger menu
const openMobileNavigationButton = document.querySelector('.header__burger');
const closeMobileNavigationButton = document.querySelector('.header__burger-close');
const mobileNavigation = document.querySelector('.header__burger-menu');

openMobileNavigationButton.addEventListener('click', openMobileNavigationHandler);
closeMobileNavigationButton.addEventListener('click', hideMobileNavigationHandler);

function openMobileNavigationHandler() {
  mobileNavigation.classList.remove('hide');
  mobileNavigation.classList.add('open');
  document.body.classList.add('navigation-open');
}

function hideMobileNavigationHandler() {
  mobileNavigation.classList.add('hide');
  setTimeout(() => {
    mobileNavigation.classList.remove('open');
    document.body.classList.remove('navigation-open');
  }, 100);
}

// why to stop slider
const swiper = new Swiper('.stop__slider', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.stop__slider-pagination.swiper-pagination',
    clickable: true,
    renderBullet: function () {
      return `<span class="stop__slider-bullet swiper-pagination-bullet"></span>`;
    },
  },
  navigation: {
    nextEl: '.stop__slider-next',
    prevEl: '.stop__slider-prev',
  },
});

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

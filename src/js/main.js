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

// progress tabs
const progressTabsControls = document.querySelectorAll('.progress__tabs-controls button');
const progressTabsContent = document.querySelector('.progress__tabs-content');
const PROGRESS_TABS_INFO = [
  {
    text: 'Вы прекраснее с каждым днём - и окружающие это видят!',
    url: '../img/progress-1.png',
    alt: 'кривая осанка',
  },
  {
    text: 'Улучшается самочувствие и общий тонус организма',
    url: '../img/progress-2.png',
    alt: 'осанка улучшилась',
  },
  {
    text: 'Вы выглядите уверенной и привлекательной',
    url: '../img/progress-3.png',
    alt: 'прямая осанка',
  },
];

changeProgressContentHandler(0);

progressTabsControls.forEach((control, index) => {
  control.addEventListener('click', () => changeProgressContentHandler(index));
});

function changeProgressContentHandler(index) {
  progressTabsControls.forEach((elem) => elem.classList.remove('active'));
  progressTabsControls[index].classList.add('active');

  progressTabsContent.innerHTML = `<img src="${PROGRESS_TABS_INFO[index].url}" alt="${PROGRESS_TABS_INFO[index].alt}" />
              <p>
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M57.7386 27.7386C56.4896 27.7386 55.4774 28.7509 55.4774 30C55.4774 44.0488 44.0488 55.4774 30 55.4774C15.952 55.4774 4.52262 44.0488 4.52262 30C4.52262 15.952 15.952 4.52262 30 4.52262C31.249 4.52262 32.2614 3.51035 32.2614 2.26137C32.2614 1.01227 31.249 0 30 0C13.4578 0 0 13.4578 0 30C0 46.5415 13.4578 60 30 60C46.5415 60 60 46.5415 60 30C60 28.751 58.9877 27.7386 57.7386 27.7386Z"
                    fill="#F0EB76"
                  />
                  <path
                    d="M58.2842 8.20251C57.4016 7.31833 55.9694 7.3168 55.0868 8.19876L27.9587 35.2552L18.171 24.6248C17.3252 23.7068 15.8953 23.6472 14.9757 24.4929C14.0569 25.3386 13.998 26.7692 14.8438 27.6881L26.2257 40.0491C26.6426 40.5022 27.2259 40.7653 27.841 40.7781C27.8576 40.7788 27.8735 40.7788 27.8893 40.7788C28.4871 40.7788 29.0621 40.5413 29.4858 40.1192L58.2798 11.4007C59.1647 10.5188 59.1662 9.08669 58.2842 8.20251Z"
                    fill="#F0EB76"
                  />
                </svg>
                ${PROGRESS_TABS_INFO[index].text}
              </p>`;
}

// reviews slider
const reviewsSlider = new Swiper('.reviews__slider', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 50,
  pagination: {
    el: '.reviews__slider-pagination.swiper-pagination',
    clickable: true,
    renderBullet: function () {
      return `<span class="reviews__slider-bullet swiper-pagination-bullet"></span>`;
    },
  },
  navigation: {
    nextEl: '.reviews__slider-next',
    prevEl: '.reviews__slider-prev',
  },
});

// order kits (counters)
const kitsIncrements = document.querySelectorAll('.order__kit-increment');
const kitsDecrements = document.querySelectorAll('.order__kit-decrement');

kitsIncrements.forEach((increment) => {
  increment.addEventListener('click', (event) => incrementHandler(event, increment));
});

kitsDecrements.forEach((decrement) => {
  decrement.addEventListener('click', (event) => decrementHandler(event, decrement));
});

function incrementHandler(event, increment) {
  event.preventDefault();
  event.stopImmediatePropagation();

  changeAmountOfKit(1, increment);
}

function decrementHandler(event, decrement) {
  event.preventDefault();
  event.stopImmediatePropagation();

  changeAmountOfKit(-1, decrement);
}

function changeAmountOfKit(amount, child) {
  const currentKit = child.parentElement.parentElement;
  const currentAmountElement = currentKit.querySelector('.order__kit-amount');
  const currentAmount = +currentAmountElement.innerText;

  if (amount > 0) {
    if (currentAmount >= 0) currentAmountElement.innerText = currentAmount + amount;
  } else {
    if (currentAmount > 0) currentAmountElement.innerText = currentAmount + amount;
  }
}

// scroll

(function () {
  const smoothScroll = function (targetEl, duration) {
    const headerElHeight = document.querySelector('.header').clientHeight;
    let target = document.querySelector(targetEl);
    let targetPosition = target.getBoundingClientRect().top - headerElHeight;
    let startPosition = window.scrollY;
    let startTime = null;

    const ease = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = function (currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
  };

  const scrollTo = function () {
    const links = document.querySelectorAll('.js-scroll');
    links.forEach((each) => {
      each.addEventListener('click', function () {
        const currentTarget = this.getAttribute('href');
        if (mobileNavigation.classList.contains('open')) {
          hideMobileNavigationHandler();
        }
        smoothScroll(currentTarget, 1000);
      });
    });
  };
  scrollTo();
})();

// lazy loading

document.addEventListener('DOMContentLoaded', function () {
  const lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));

  if ('IntersectionObserver' in window) {
    let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove('lazy');
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  }
});

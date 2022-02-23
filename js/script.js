//////////////// MAIN ///////////////////

import Slider from './slider.js';
import Tabs from './tabs.js';
import Modal from './modal.js';
import NavHover from './navHover.js';
import Observers from './observers.js';

const allSections = document.querySelectorAll('.section');

const navLogo = document.querySelector('.nav__logo');

allSections.forEach(el => el.classList.add('section--hidden'));

/////////////////////////////////////////////

///////////// OBSERVERS ///////////////

Observers();

///////////// NAV HOVER /////////////

NavHover();

///////////// MODAL /////////////////

Modal();

///////////// TABS //////////////////

Tabs();

///////////// SLIDER ///////////////

const controlSlideBtnR = function () {
  Slider.nextSlide();
};

const controlSlideBtnL = function () {
  Slider.prevSlide();
};

const controlArrows = function (e) {
  if (e.key === 'ArrowRight') Slider.nextSlide();
  e.key === 'ArrowLeft' && Slider.prevSlide();
};

const controlDots = function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const { slide } = e.target.dataset;
    Slider.curSlideNum = +slide;
    Slider.goToSlide(Slider.curSlideNum);
    Slider.activateDot(Slider.curSlideNum);
  }
};

const sliderInit = function () {
  Slider.createDots();
  Slider.activateDot(0);
  Slider.goToSlide(0);
  Slider.addHandlerBtnR(controlSlideBtnR);
  Slider.addHandlerBtnL(controlSlideBtnL);
  Slider.addHandlerArrows(controlArrows);
  Slider.addHandlerDots(controlDots);
};
sliderInit();

/////////////// LEARN MORE //////////////////////

const learnMore = function () {
  const btnScrollTo = document.querySelector('.btn--scroll-to');
  const section1 = document.querySelector('#section--1');

  btnScrollTo.addEventListener('click', function (e) {
    section1.scrollIntoView({ behavior: 'smooth' });
  });

  document.querySelector('.nav__links').addEventListener('click', function (e) {
    e.preventDefault();

    if (
      e.target.classList.contains('nav__link') &&
      !e.target.classList.contains('btn--show-modal')
    ) {
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  });
};
learnMore();

/////////////////////////////////////////////////

window.addEventListener('beforeunload', function () {
  window.scrollTo(0, 0);
});

navLogo.addEventListener('click', function (e) {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
});

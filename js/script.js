//////////////// MAIN ///////////////////

import Slider from './slider.js';
import Tabs from './tabs.js';
import Modal from './modal.js';
import NavHover from './nav-hover.js';
import Observers from './observers.js';
import ScrollSections from './scroll-sections.js';

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

/////////////// SCROLL SECTIONS //////////////////////

ScrollSections();

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

/////////////////////////////////////////////////

window.addEventListener('beforeunload', function () {
  window.scrollTo(0, 0);
});

navLogo.addEventListener('click', function (e) {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
});

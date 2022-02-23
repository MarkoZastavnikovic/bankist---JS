class Slider {
  slides = document.querySelectorAll('.slide');
  btnLeft = document.querySelector('.slider__btn--left');
  btnRight = document.querySelector('.slider__btn--right');
  dotContainer = document.querySelector('.dots');

  curSlideNum = 0;
  maxSlide = this.slides.length;

  addHandlerBtnR(handler) {
    this.btnRight.addEventListener('click', handler);
  }

  addHandlerBtnL(handler) {
    this.btnLeft.addEventListener('click', handler);
  }

  addHandlerArrows(handler) {
    document.addEventListener('keydown', handler);
  }

  addHandlerDots(handler) {
    this.dotContainer.addEventListener('click', handler);
  }

  createDots() {
    this.slides.forEach((_, i) => {
      this.dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot dots__dot--${i}" data-slide="${i}"></button>`
      );
    });
  }

  activateDot(slideNum) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    document
      .querySelector(`.dots__dot[data-slide="${slideNum}"]`)
      .classList.add('dots__dot--active');
  }

  goToSlide(slideNum) {
    this.slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slideNum)}%)`)
    );
  }

  nextSlide() {
    if (this.curSlideNum === this.maxSlide - 1) {
      this.curSlideNum = 0;
    } else {
      ++this.curSlideNum;
    }

    this.goToSlide(this.curSlideNum);
    this.activateDot(this.curSlideNum);
  }

  prevSlide() {
    if (this.curSlideNum === 0) {
      this.curSlideNum = this.maxSlide - 1;
    } else {
      --this.curSlideNum;
    }

    this.goToSlide(this.curSlideNum);
    this.activateDot(this.curSlideNum);
  }
}

export default new Slider();

import digital from '../img/digital.jpg';
import grow from '../img/grow.jpg';
import card from '../img/card.jpg';

const observersFunction = function () {
  const importImgs = {
    digitalP: digital,
    growP: grow,
    cardP: card,
  };

  const header = document.querySelector('.header');

  const nav = document.querySelector('.nav');

  const navHeight = nav.getBoundingClientRect().height;

  const allSections = document.querySelectorAll('.section');

  /////////// SECTIONS OBS ///////////////////

  const revealSection = function (entries, observer) {
    const [entry] = entries;

    if (entry.isIntersecting) {
      entry.target.classList.remove('section--hidden');
      observer.unobserve(entry.target);
    }
  };

  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
  });

  allSections.forEach(function (section) {
    sectionObserver.observe(section);
  });

  ///////////////// IMG OBS ///////////////////

  const imgTargets = document.querySelectorAll('img[data-src]');

  const loadImg = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    // Bundler img probem
    entry.target.src = importImgs[entry.target.dataset.src];

    entry.target.addEventListener('load', function () {
      entry.target.classList.remove('lazy-img');
    });

    observer.unobserve(entry.target);
  };

  const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
    rootMargin: '200px',
  });

  imgTargets.forEach(img => imgObserver.observe(img));

  ///////////// HEADER OBS /////////////////

  const obsCallback = function (entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        nav.classList.add('sticky');
      } else {
        nav.classList.remove('sticky');
      }
    });
  };

  const obsOptions = {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
  };

  const observer = new IntersectionObserver(obsCallback, obsOptions);
  observer.observe(header);
};

export default observersFunction;

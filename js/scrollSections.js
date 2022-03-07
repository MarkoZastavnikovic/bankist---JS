const ScrollSections = function () {
  ///////// Learn More //////////
  const btnScrollTo = document.querySelector('.btn--scroll-to');
  const section1 = document.querySelector('#section--1');

  btnScrollTo.addEventListener('click', function (e) {
    section1.scrollIntoView({ behavior: 'smooth' });
  });

  ////////// Navigation ///////////
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

export default ScrollSections;

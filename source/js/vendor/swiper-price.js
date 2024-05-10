const initSwiperPrice = () => {
  const initSlider = () => {
    if (window.matchMedia('(max-width: 767px)').matches) {
      new Swiper('[data-swiper-price]', {
        direction: 'horizontal',
        loop: false,
        pagination: {
          el: '.swiper-pagination',
        },
        initialSlide: 0,
        slidesPerView: 1,
      });
    }
  };

  initSlider();

  window.addEventListener('resize', () => {
    initSlider();
  });
};

export {initSwiperPrice};

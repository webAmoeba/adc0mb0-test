const initSwiperPrice = () => {
  let swiperInstance = null;

  const initSlider = () => {
    if (window.matchMedia('(max-width: 767px)').matches) {
      if (!swiperInstance) {
        swiperInstance = new Swiper('[data-swiper-price]', {
          direction: 'horizontal',
          loop: false,
          pagination: {
            el: '.swiper-pagination',
          },
          initialSlide: 0,
          slidesPerView: 1,
        });
      }
    } else {
      if (swiperInstance) {
        swiperInstance.destroy(true, true);
        swiperInstance = null;
      }
    }
  };

  initSlider();

  window.addEventListener('resize', () => {
    initSlider();
  });
};

export { initSwiperPrice };

const initSwiperPrice = (swiper) => {
  if (swiper) {
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

export {initSwiperPrice};

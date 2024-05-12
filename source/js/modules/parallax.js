let wrappers = document.querySelectorAll('[data-parallax-wrapper]');
let items = document.querySelectorAll('[data-parallax-item]');

export const parallax = () => {
  document.addEventListener('mousemove', function (e) {
    for (let i = 0; i < wrappers.length; i++) {
      let wrapper = wrappers[i];
      let item = items[i];
      let wrapperRect = wrapper.getBoundingClientRect();

      if (
        e.clientX >= wrapperRect.left &&
        e.clientX <= wrapperRect.right &&
        e.clientY >= wrapperRect.top &&
        e.clientY <= wrapperRect.bottom
      ) {
        let x = (e.clientX - wrapperRect.left) / wrapperRect.width;
        let y = (e.clientY - wrapperRect.top) / wrapperRect.height;
        item.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
      } else {
        item.style.transform = 'none';
      }
    }
  });
};

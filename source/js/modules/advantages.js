const elements = document.querySelectorAll('[data-advantage]');
const icons = document.querySelectorAll('[data-advantage-icon]');
const howMany = elements.length;
const lastIndex = elements.length - 1;
const fullDegree = 360;
const pixelPerfect = true;

let minDegree = 0;
let maxDegree = 360;

function arrangeAdvantages() {
  if (howMany && (window.matchMedia('(min-width: 768px)').matches)) {
    elements[0].style = `transform: rotate(${minDegree}deg);`;
    icons[0].style = `transform: rotate(${minDegree * -1}deg);`;
    elements[lastIndex].style = `transform: rotate(${maxDegree - (fullDegree / howMany)}deg);`;
    icons[lastIndex].style = `transform: rotate(${(maxDegree - (fullDegree / howMany)) * -1}deg);`;

    const degree = fullDegree / (howMany);
    let newDegree = 0;

    elements.forEach((element, index) => {
      if (index !== 0 && index !== (howMany - 1)) {
        newDegree += degree;
        element.style = `transform: rotate(${newDegree}deg);`;
        icons[index].style = `transform: rotate(${newDegree * -1}deg);`;
      }
    });

    if (pixelPerfect && howMany === 6) {
      elements[2].style = 'transform: rotate(0deg);';
      icons[2].style = 'transform: rotate(0deg);';

      elements[0].style = 'transform: rotate(60deg);';
      icons[0].style = 'transform: rotate(-60deg);';

      elements[3].style = 'transform: rotate(120deg);';
      icons[3].style = 'transform: rotate(-120deg);';

      elements[1].style = 'transform: rotate(180deg);';
      icons[1].style = 'transform: rotate(-180deg);';
    }
  }
}

function handleResize() {
  if (window.innerWidth <= 768) {
    elements.forEach((element) => {
      element.style = '';
    });
    icons.forEach((icon) => {
      icon.style = '';
    });
  } else {
    arrangeAdvantages();
  }
}

window.addEventListener('resize', handleResize);

handleResize();

export {arrangeAdvantages};

const elements = document.querySelectorAll('[data-advantage]');
const icons = document.querySelectorAll('[data-advantage-icon]');
const howMany = elements.length;
const lastIndex = elements.length - 1;
const fullDegree = 360;

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


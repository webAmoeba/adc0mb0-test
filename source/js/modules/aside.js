const aside = document.querySelector('[data-aside]');

export function mooveAside() {
  if (aside) {
    aside.addEventListener('click', () => {
      if (!aside.classList.contains('aside--open')) {
        aside.classList.add('aside--open');
      } else {
        aside.classList.remove('aside--open');
      }
    });
  }
}

export function startTimer() {
  const display = document.querySelector('[data-discount-timer]');
  let duration = 0.1 * 60;
  let timer = duration;
  let minutes;
  let seconds;

  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    display.querySelector('[data-discount-mm]').textContent = minutes;
    display.querySelector('[data-discount-ss]').textContent = seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

startTimer();

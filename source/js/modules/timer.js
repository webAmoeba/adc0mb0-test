export function startTimer() {
  const display = document.querySelector('[data-discount-timer]');
  let duration = 60 * 30;// ss * mm * hh
  let timer = duration;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  setInterval(function () {
    hours = parseInt(timer / 3600, 10);
    minutes = parseInt((timer % 3600) / 60, 10);
    seconds = parseInt(timer % 60, 10);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    display.querySelector('[data-discount-hh]').textContent = hours;
    display.querySelector('[data-discount-mm]').textContent = minutes;
    display.querySelector('[data-discount-ss]').textContent = seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

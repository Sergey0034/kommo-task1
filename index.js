const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = () => {
  return (seconds) => {

    let timer = setInterval(function () {
      let timeSeconds = Math.trunc(seconds % 60);
      let timeMinutes = Math.trunc(seconds / 60 % 60);
      let timeHour = Math.trunc(seconds / 60 / 60 % 60);
      if (seconds < 0) {
        clearInterval(timer);
        alert('Время истекло');
      } else {
        timerEl.innerHTML = timeHour + ':' + timeMinutes + ':' + timeSeconds;
      }
      --seconds;
    }, 1000)
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(/\D/, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});

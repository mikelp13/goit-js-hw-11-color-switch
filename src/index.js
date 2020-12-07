import './styles.css';


const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  body: document.querySelector("body"),
};

let timerId = null;
let isBtnPressed = false;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const onBtnStart = () => {
  if (isBtnPressed) {
    return;
  }

  isBtnPressed = true;

  timerId = setInterval(() => {
    const colorIndex = randomIntegerFromInterval(0, 5);
    refs.body.style.backgroundColor = colors[colorIndex];
  }, 1000);
};

const onBtnStop = () => {
  isBtnPressed = false;
  clearInterval(timerId);
};

refs.startBtn.addEventListener("click", onBtnStart);
refs.stopBtn.addEventListener("click", onBtnStop);

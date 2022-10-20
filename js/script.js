const btn = document.querySelector('.footer'); let timerId,
  i = 0;
btn.addEventListener('click', () => {
  // const timerId = setTimeout(logger, 2000, 'Hello');
  timerId = setInterval(logger, 500);
})

function logger() {
  if (i == 3) {
    clearInterval(timerId);
  }
  console.log('Hello');
  i++;
}

// let id = setTimeout(function log() {
//   console.log('Hello');
//   id = setTimeout(log, 2000)
// }, 500);


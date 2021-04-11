'use strict';
let secretNumber = Math.trunc(Math.random() * 10 + 1);

let score = 10;
let highscore = 0;
//here the funtion inside the event listener is called as event Handler.

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent =
      'Warning! No Values Entered';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '😺 Correct Guess😺';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📉 Too high' : '📉 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '😿 You Lost This Game 😿 ';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 10 + 1);
  score = 10;
  document.querySelector('.message').textContent = 'Start Guessing';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';

  document.querySelector('.score').textContent = '10';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});

/*else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '😿 You Lost This Game 😿 ';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '😿 You Lost This Game 😿 ';
      document.querySelector('.score').textContent = 0;
    }
  }*/

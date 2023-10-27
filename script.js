'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Corrrect number...🏆';
// console.log(
//   (document.querySelector('.message').textContent = 'Corrrect number...🏆')
// );

// document.querySelector('.number').textContent = 14;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const print = click => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  } else if (guess === SecretNumber) {
    document.querySelector('.message').textContent = 'Corrrect number...🏆';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = SecretNumber;

    if (highscore == 0) {
      document.querySelector('.highscore').textContent = score;
    }
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > SecretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose the game...😓';
      document.querySelector('.score').textContent = score = 0;
    }
  } else if (guess < SecretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose the game...😓';
      document.querySelector('.score').textContent = score = 0;
    }
  }
};

document.querySelector('.check').addEventListener('click', print);

// Coding challenge --> #1

// implement the game of reset button
const reset = click => {
  SecretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  // document.querySelector('.highscore').textContent = highscore;
};
document.querySelector('.again').addEventListener('click', reset);

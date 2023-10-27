'use strict';

// Create random value of number :-
// let highscore = document.querySelector('.highscore');
let highscore = 0;
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
console.log(number);

// For Check number Input :-
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // For empty :
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  }
  // When score be 0 :
  else if (Number(score) === 0) {
    document.body.style.backgroundColor = '#cf1b1b';
    document.querySelector('.message').textContent = '🚫 Game-Over';
  }
  // For Correct answer :
  else if (guess === number) {
    document.querySelector('.message').textContent = '🏆 correct answer!';
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    // highscore :
    document.querySelector('.highscore').textContent = score;
    if(number < score) {
        score = highscore;
    }
} else if (guess > 20) {
    document.querySelector('.message').textContent = '❌ Out of range!';
    document.body.style.backgroundColor = '#141010';
} else if (guess > number) {
    document.querySelector('.message').textContent = 'too high📉';
    document.body.style.backgroundColor = '#121435';
    --score;
    document.querySelector('.score').textContent = score;
} else if (guess < number) {
    document.querySelector('.message').textContent = 'too low📈';
    --score;
    document.querySelector('.score').textContent = score;
    document.body.style.backgroundColor = '#346357';
}
});

// Again :-
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1
    console.log(number);
    document.querySelector('.score').textContent = 20;
    document.body.style.backgroundColor = '#222';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').style.width = '20rem';
    document.querySelector('.number').textContent = '?';
});
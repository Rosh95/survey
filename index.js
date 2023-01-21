const CURRENT_YEAR = 2023;
const CORRECT_ANSWER = 'Ответ правильный';
const INCORRECT_ANSWER = 'Ответ правильный';

const inputNode = document.querySelector('.js-input');
const buttonNode = document.querySelector('.js-button');
const outputNode = document.querySelector('.js-output');

buttonNode.addEventListener('click', function () {
  const answer = Number(inputNode.value);
  let output = CORRECT_ANSWER;
  if (answer !== CURRENT_YEAR) {
    output = INCORRECT_ANSWER;
  }
  outputNode.innerHTML = output;
});

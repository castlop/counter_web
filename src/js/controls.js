import {counter} from '../index.js';


const plusButton     = document.querySelector('#plus'),
      lessButton     = document.querySelector('#less'),
      negativeToggle = document.querySelector("#allow-negatives");


const events = () => {
  plusButton.addEventListener('click', () => {
    counter.plusOne();
  });

  lessButton.addEventListener('click', () => {
    if (counter.value > 0) {
      counter.lessOne();
    } else if (negativeToggle.checked) {
      counter.lessOne();
    }
  });

  negativeToggle.addEventListener('change', () => {
    if (!negativeToggle.checked && counter.value < 0) counter.reset();
  });
  
}

export const init = () => {
  events();
}
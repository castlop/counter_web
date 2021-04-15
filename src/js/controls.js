import {counter} from '../index.js';


const counterHtml    = document.querySelector('#counter'),
      plusButton     = document.querySelector('#plus'),
      lessButton     = document.querySelector('#less'),
      negativeToggle = document.querySelector("#allow-negatives");


const events = () => {
  plusButton.addEventListener('click', () => {
    counter.plusOne();
    counterHtml.innerText = counter.value;
  });

  lessButton.addEventListener('click', () => {
    if (counter.value > 0) {
      counter.lessOne();
    } else if (negativeToggle.checked) {
      counter.lessOne();
    }
    counterHtml.innerText = counter.value;
  });

  negativeToggle.addEventListener('change', () => {
    if (!negativeToggle.checked) {
      counter.value = (counter.value > 0) ? counter.value : 0;
      counterHtml.innerText = counter.value;
    }
  });
  
}

export const init = () => {
  events();
}
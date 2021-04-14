import {Counter} from './counter.js';


const counterHtml    = document.querySelector('#counter'),
      plusButton     = document.querySelector('#plus');

let counter;


const createCounter = () => {
  return new Counter();
}

const events = () => {
  plusButton.addEventListener('click', () => {
    counter.plusOne();
    counterHtml.innerText = counter.value;
  });
}

export const init = () => {
  counter = createCounter();
  events();
}
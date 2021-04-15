import {counter} from '../index.js';


const resetButton = document.querySelector('#reset-button');


const eventsToolbar = () => {
  resetButton.addEventListener('click', () => {
    counter.reset();
  });
}


export const init = () => {
  eventsToolbar();
}
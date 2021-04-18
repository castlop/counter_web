import {counter} from '../index.js';


const resetButton = document.querySelector('#reset-button');
const saveButton  = document.querySelector('#save-button');


const eventsToolbar = () => {
  resetButton.addEventListener('click', () => {
    counter.reset();
  });

  saveButton.addEventListener('click', () => {
    console.log('Save button');
  });

}


export const init = () => {
  eventsToolbar();
}
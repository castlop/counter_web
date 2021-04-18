import {counter} from '../index.js';
import {bgDisabled} from '../components/background-disabled/background-disabled';


const resetButton = document.querySelector('#reset-button');
const saveButton  = document.querySelector('#save-button');


const eventsToolbar = () => {
  resetButton.addEventListener('click', () => {
    counter.reset();
  });

  saveButton.addEventListener('click', () => {
    bgDisabled.classList.toggle('bg-disabled-hidden');
  });

}


export const init = () => {
  eventsToolbar();
}
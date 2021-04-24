import {counter, bgDisabled} from '../index.js';
import {modalSave} from '../components/modal-save/modal-save';

const resetButton = document.querySelector('#reset-button');
const saveButton  = document.querySelector('#save-button');


const eventsToolbar = () => {
  resetButton.addEventListener('click', () => {
    counter.reset();
  });

  saveButton.addEventListener('click', () => {
    bgDisabled.classList.toggle('bg-disabled-hidden');
    if (!bgDisabled.contains(modalSave)) {
      bgDisabled.appendChild(modalSave);
    }
  });

}


export const init = () => {
  eventsToolbar();
}
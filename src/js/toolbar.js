import {counter, bgDisabled} from '../index.js';
import {saveCounter} from './storage';
import {modalSave} from '../components/modal-save/modal-save';

const resetButton = document.querySelector('#reset-button');
const saveButton  = document.querySelector('#save-button');



const eventsToolbar = () => {
  resetButton.addEventListener('click', () => {
    counter.reset();
  });

  saveButton.addEventListener('click', () => {
    bgDisabled.switchDisplay();
    if (!bgDisabled.haveComponent(modalSave)) {
      bgDisabled.appendComponent(modalSave);
    }
  });

  modalSave.addEventListener('click', (event) => {
    const inputField = modalSave.querySelector('input');
    if (event.target.innerText === 'Save') {
      saveCounter(inputField.value, counter.value);
      inputField.value = '';
      bgDisabled.switchDisplay();
    }
  });

}


export const init = () => {
  eventsToolbar();
}
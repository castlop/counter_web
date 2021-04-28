import {counter, bgDisabled, counterList} from '../index.js';
import {saveCounter} from './storage';
import {modalSave} from '../components/modal-save/modal-save';
import {modalLoad, createOptionsLoaded} from '../components/modal-load/';


const resetButton = document.querySelector('#reset-button');
const saveButton  = document.querySelector('#save-button');
const loadButton  = document.querySelector('#load-button');


const eventsToolbar = () => {
  resetButton.addEventListener('click', () => {
    counter.reset();
  });

  saveButton.addEventListener('click', () => {
    bgDisabled.clearComponents();
    bgDisabled.switchDisplay();
    if (!bgDisabled.haveComponent(modalSave)) {
      bgDisabled.appendComponent(modalSave);
    }
  });

  loadButton.addEventListener('click', (event) => {
    bgDisabled.clearComponents();
    bgDisabled.switchDisplay();
    if (!bgDisabled.haveComponent(modalLoad)) {
      bgDisabled.appendComponent(modalLoad);
    }
    const catalog     = modalLoad.querySelector('#catalog');
    catalog.innerHTML = createOptionsLoaded(counterList);
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
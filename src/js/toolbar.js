import {counter, bgDisabled, counterList} from '../index.js';
import {saveCounter} from './storage';
import {modalSave} from '../components/modal-save/modal-save';
import {modalLoad, createOptionsLoaded} from '../components/modal-load/';
import {extractCounterValue} from './helpers';


const resetButton = document.querySelector('#reset-button');
const saveButton  = document.querySelector('#save-button');
const loadButton  = document.querySelector('#load-button');


const eventsToolbar = () => {
  resetButton.addEventListener('click', () => {
    counter.reset();
  });

  saveButton.addEventListener('click', () => {
    bgDisabled.clearComponents();
    if (bgDisabled.isHidden()) {
      bgDisabled.switchDisplay();
    }
    if (!bgDisabled.haveComponent(modalSave)) {
      bgDisabled.appendComponent(modalSave);
    }
  });

  loadButton.addEventListener('click', (event) => {
    bgDisabled.clearComponents();
    if (bgDisabled.isHidden()) {
      bgDisabled.switchDisplay();
    }
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

  modalLoad.addEventListener('click', (event) => {
    if (event.target.innerText === 'Load') {
      const selectItem = modalLoad.querySelector('#catalog');      
      const optionSelected = selectItem.options[selectItem.selectedIndex].text;
      
      counter.value = extractCounterValue(optionSelected);
      counter.updateDom();
      bgDisabled.switchDisplay();
    }
  });

}


export const init = () => {
  eventsToolbar();
}
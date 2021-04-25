import {init} from './js/controls.js';
import {init as initToolbar} from './js/toolbar.js';
import {Counter} from './js/counter.js';
import {createBgDisabled} from './components/background-disabled/';

import './styles.css';


const counter = new Counter();
const counterList = [];
const container = document.body;
const bgDisabled = createBgDisabled(container);


export {
  counter,
  bgDisabled,
  counterList
}

init();
initToolbar();
import {init} from './js/controls.js';
import {init as initToolbar} from './js/toolbar.js';
import {Counter} from './js/counter.js';
import {createBgDisabled} from './components/background-disabled/';

import './styles.css';


const counter = new Counter();
const bgDisabled = createBgDisabled(document.body);


export {
  counter,
  bgDisabled
}

init();
initToolbar();
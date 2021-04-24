import {init} from './js/controls.js';
import {init as initToolbar} from './js/toolbar.js';
import {Counter} from './js/counter.js';
import {bgDisabled as bgD} from './components/background-disabled/background-disabled';

import './styles.css';


const counter = new Counter();
const bgDisabled = bgD;

export {
  counter,
  bgDisabled
}

init();
initToolbar();
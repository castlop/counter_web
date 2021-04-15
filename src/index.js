import {init} from './js/controls.js';
import {init as initToolbar} from './js/toolbar.js';
import {Counter} from './js/counter.js';

import './styles.css';

export const counter = new Counter();

init();
initToolbar();
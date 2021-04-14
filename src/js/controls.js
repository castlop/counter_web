import {Counter} from './counter.js';

let counter;

const createCounter = () => {
  return new Counter();
}

export const init = () => {
  counter = createCounter();
}
import {createId} from './helpers';
import {counterList} from '../index.js';


const saveCounter = (description, counterValue) => {
  counterList.push({id: createId(), description, counterValue});
  localStorage.setItem('CounterApp', JSON.stringify(counterList));
}


export {
  saveCounter
}
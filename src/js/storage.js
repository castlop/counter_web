import {createId} from './helpers';
import {counterList} from '../index.js';


const saveCounter = (description, counterValue) => {
  counterList.push({id: createId(), description, counterValue});
  localStorage.setItem('CounterApp', JSON.stringify(counterList));
}

const loadCounters = () => {
  const retrievedData = JSON.parse(localStorage.getItem('CounterApp'));
  return (retrievedData) ? retrievedData : [];
}


export {
  saveCounter,
  loadCounters
}
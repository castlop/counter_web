import {BgDisabled} from './background-disabled';

import './background-disabled.css';


const createBgDisabled = (parent) => {
  const bgDisabledStyleClasses = {
    base:   'bg-disabled',
    hidden: 'bg-disabled-hidden'
  }
  const bgDisabled = new BgDisabled(bgDisabledStyleClasses);
  bgDisabled.appendTo(parent);
  return bgDisabled;
}


export {
  createBgDisabled
}
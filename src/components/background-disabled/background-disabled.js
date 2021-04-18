import './background-disabled.css';

const createBgDisabled = () => {
  const bgDisabled = document.createElement('div');

  bgDisabled.classList.add('bg-disabled');
  bgDisabled.classList.add('bg-disabled-hidden');
  document.body.append(bgDisabled);
  
  return bgDisabled;

}

const bgDisabled  = createBgDisabled();


export {
  bgDisabled
}
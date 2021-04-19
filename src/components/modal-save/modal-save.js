import './modal-save.css';


const createModalSave = () => {
  
  const htmlTemplate = `
    <label for="description"> Add a description</label>
    <input type="text" id="description">
    <button class="button">Save</button>
    <button class="button">Cancel</button>
  `
  
  const modalSave = document.createElement('div');
  modalSave.classList.add('modalSave')
  modalSave.innerHTML = htmlTemplate;

  return modalSave;
}

const modalSave   = createModalSave();


export {
  modalSave
}
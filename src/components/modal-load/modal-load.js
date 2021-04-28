const createModalLoad = (options) => {
  
  const htmlTemplate = `
    <label for="catalog">Choose one counter</label>
    <select name="catalog" id="catalog">
    </select>
    <button class="button">Load</button>
    <button class="button">Cancel</button>
  `;
  
  const modalLoad = document.createElement('div');
  modalLoad.classList.add('modalLoad')
  modalLoad.innerHTML = htmlTemplate;

  return modalLoad;
}


const createOptionsLoaded = options => {
  return (!options.length)
            ? '<option value ="" selected>-- No counters found --</option>'
            : options
              .map(option => `<option value="${option.description}">${option.description}: ${option.counterValue}</option>`)
              .join('\n');
}


export {
  createModalLoad,
  createOptionsLoaded
}
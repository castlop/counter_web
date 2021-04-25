import './background-disabled.css';


class BgDisabled {  
  
  constructor(classes) {
    this._itemHtml    = document.createElement('div');
    this._classHidden = classes.hidden;
    this._itemHtml.classList.add(...Object.values(classes));
  }
  
  set itemHtml(newItem) {
    throw 'Cannot assign other HTML element';
  }

  set classHidden(newClassList) {
    throw 'Cannot assign other classHidden';
  }

  appendTo(parent) {
    parent.append(this._itemHtml);
  }

  appendComponent(component) {
    this._itemHtml.append(component);
  }
  

  haveComponent(component) {
    return this._itemHtml.contains(component);
  }

  switchDisplay() {
    this._itemHtml.classList.toggle(this._classHidden);
  }

}

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
export class Counter {

  constructor(start_value = 0) {
    this._value   = start_value;
    this._itemDom = document.querySelector('#counter');

    this.updateDom();
  }

  get value() {
    return this._value;
  }

  set value(new_value) {
    if (typeof new_value === "number") {
      this._value = new_value;
    } else {
      throw 'Use only numbers, please';
    }
  }

  get itemDom() {
    return this._itemDom;
  }

  updateDom() {
    this.itemDom.innerText = this.value;
  }

  plusOne() {
    this.value++;
    this.updateDom();
  }

  lessOne() {
    this.value--;
    this.updateDom();
  }

  reset() {
    this.value = 0;
    this.updateDom();
  }
}
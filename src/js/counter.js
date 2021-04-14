export class Counter {
  constructor(start_value = 0) {
    this.value = start_value;
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

  plusOne() {
    this.value++;
  }

  lessOne() {
    this.value--;
  }

  reset() {
    this.value = 0;
  }
}
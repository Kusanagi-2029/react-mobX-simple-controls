import { action, makeAutoObservable, observable } from 'mobx';

class ButtonControlStore {
  @observable
  inputValue: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  @action
  setInputValue(value: string) {
    this.inputValue = value;
  }

  @action
  clearInput() {
    this.inputValue = '';
  }

  @action
  setHelloWorld() {
    this.inputValue = 'Hello world!';
  }
}

const buttonControlStore = new ButtonControlStore();
export default buttonControlStore;

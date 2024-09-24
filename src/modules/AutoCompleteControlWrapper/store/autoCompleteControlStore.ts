import {
  action,
  makeAutoObservable,
  observable,
  runInAction,
} from 'mobx';
import { getCountryByName } from '../api/apiService';
import { ICountry } from '../_types/interfaces';

class AutoCompleteControlStore {
  @observable
  inputValue: string = '';

  @observable
  suggestions: ICountry[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  @action
  setInputValue(value: string) {
    this.inputValue = value;
    this.fetchSuggestions();
  }

  async fetchSuggestions() {
    if (this.inputValue) {
      const suggestions = await getCountryByName(this.inputValue);
      runInAction(() => {
        this.setSuggestions(suggestions);
      });
    } else {
      runInAction(() => {
        this.setSuggestions([]);
      });
    }
  }

  @action
  setSuggestions(suggestions: ICountry[]) {
    this.suggestions = suggestions;
  }
}

const autoCompleteControlStore = new AutoCompleteControlStore();
export default autoCompleteControlStore;

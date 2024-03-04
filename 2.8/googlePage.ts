import { By } from "selenium-webdriver";
import {BasePage} from './basePage';

export class Google extends BasePage {
    searchInput: By = By.name('q');
    searchResults: By = By.id('rcnt');

    constructor() {
        super({url: "https://www.google.com/"});
    };
    async search(googleSearch: string) {
        return this.setInput(this.searchInput, `${googleSearch}\n`);
    };
    async getResults(){
        return this.getText(this.searchResults);
    };
};
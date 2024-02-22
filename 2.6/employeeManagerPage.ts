import {By, until, WebDriver} from 'selenium-webdriver';

export class EmployeePage {
    driver: WebDriver;
    url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html";

    bernice: By = By.name('employee1');
    name: By = By.name('nameEntry');
    addEmployee: By = By.name('addEmployee');
    newEmployee: By = By.xpath('//li[text()="New Employee"]');
    phone: By = By.name('phoneEntry');
    title: By = By.name('titleEntry');
    phillip: By = By.name('employee3');
    saveBtn: By = By.id('saveBtn');
    employeeName: By = By.name('employeeName');

    constructor(driver: WebDriver) {
        this.driver = driver;
    };

    async navigate() {
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(this.bernice));
    };
    async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        return (await this.driver.findElement(elementBy)).click();
    };
    async setInput(elementBy: By, keys: any) {
        await this.driver.wait(until.elementLocated(elementBy)).clear();
        return this.driver.findElement(elementBy).sendKeys(keys);
    };
    async getText(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        return this.driver.findElement(elementBy).getText();
    };
};

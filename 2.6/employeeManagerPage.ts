import {By, until, WebDriver} from 'selenium-webdriver';

export class EmployeeManagerPage {
    driver: WebDriver;
    url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html";

    BerniceOrtiz: By = By.name('employee1');
    Name: By = By.name('nameEntry');
    AddEmployee: By = By.name('addEmployee');
    NewEmployee: By = By.xpath('//li[text()="New Employee"]');
    PhoneNumber: By = By.name('phoneEntry');
    Title: By = By.name('titleEntry');
    PhillipWeaver: By = By.name('employee3');
    SaveButton: By = By.id('saveBtn');
    EmployeeName: By = By.name('employeeName');

    constructor(driver: WebDriver) {
        this.driver = driver;
    };

    async navigate() {
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(this.BerniceOrtiz));
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
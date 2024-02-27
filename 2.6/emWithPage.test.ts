import { Builder, Capabilities, WebDriver, WebElement } from "selenium-webdriver";
const chromedriver = require('chromedriver');
const driver= new Builder().withCapabilities(Capabilities.chrome()).build();
//import the class from the page object
import { EmployeeManagerPage } from "./employeeManagerPage";
const page = new EmployeeManagerPage(driver);

describe("Navigate Objects", () => {
    beforeEach(async () => {
        await page.navigate();
    });
    afterAll(async () => {
        await page.driver.quit();
    });
    test('Bernice Ortiz name change to Dario Kohn', async () => {
        await page.click(page.BerniceOrtiz);
        await page.click(page.Name);
        await page.setInput(page.Name, "Dario Kohn");
        await page.click(page.SaveButton);
        let newName = await page.getText(page.EmployeeName);
        expect(newName).toContain('Dario Kohn');
    });
    test('Adding a new employee', async () => {
        await page.click(page.AddEmployee);
        await page.click(page.NewEmployee);
        await page.setInput(page.Name, 'Caroline Kohn');
        await page.setInput(page.PhoneNumber, '9876543210');
        await page.setInput(page.Title, 'Product Manager');
        await page.click(page.SaveButton);
    });
    test('Changing title of Phillip Weaver', async () => {
        await page.click(page.PhillipWeaver);
        await page.setInput(page.Title, 'Director of Product Department');
        await page.click(page.SaveButton);
    })
})
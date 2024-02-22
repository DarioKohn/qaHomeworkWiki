import { Builder, Capabilities, WebDriver, WebElement } from "selenium-webdriver";
const chromedriver = require('chromedriver');
const driver= new Builder().withCapabilities(Capabilities.chrome()).build();
//import the class from the page object
import { EmployeePage } from "./employeeManagerPage";
const page = new EmployeePage(driver);

describe("Practing Page Objects", () => {
    beforeEach(async () => {
        await page.navigate();
    });
    afterAll(async () => {
        await page.driver.quit();
    });
    test('changing bernices name', async () => {
        await page.click(page.bernice);
        await page.click(page.name);
        await page.setInput(page.name, "Jane Doe");
        await page.click(page.saveBtn);
        let newName = await page.getText(page.employeeName);
        expect(newName).toContain('Jane Doe');
    });
    test('adding employee', async () => {
        await page.click(page.addEmployee);
        await page.click(page.newEmployee);
        await page.setInput(page.name, "Joey Wilkinson");
        await page.setInput(page.phone, '8018675309');
        await page.setInput(page.title, 'Coolest Mentor Ever');
        await page.click(page.saveBtn);
    });
    test('promoting phillip', async () => {
        await page.click(page.phillip);
        await page.setInput(page.title, 'Co-CEO');
        await page.click(page.saveBtn);
    })
})

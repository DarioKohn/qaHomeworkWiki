import { Google } from "./googlePage";
const fs = require('fs');
const page = new Google();

test('do a search', async () => {
    await page.navigate();
    await page.search('Fronzoni 64 table');
    let pageResults = await page.getResults();
    expect(pageResults).toContain('Fronzoni 64 table');
    await fs.writeFile(`${__dirname}/fronzoniTable.png`,
    await page.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Fronzoni image saved');
    });
    await page.driver.quit();
});
import { pageObject } from "./2.7PageObject";
const page = new pageObject();

class Intern {
   //create a class for interns that includes the name phone and title for the intern.
   name: string;
   phone: number;
   title: string;

   constructor(name: string, phone: number, title: string) {
      this.name =name;
      this.phone = phone;
      this.title = title;
  };
}; 

let newInterns: Array<Intern> = [
   //create an array of Interns using your class
   new Intern("Dario Kohn", 1123456789, "Absolute beginner"),
   new Intern("Caroline Kohn", 9876543212, "Poet"),
   new Intern("Nadezda Kohn", 1123456789, "Misfortunate 1"),
   new Intern("Bini Kohn", 9876543212, "Misfortunate 2")
];

let addInterns = async (newInterns) => {
   //create a function to add the interns from your array
   await page.click(page.addEm);
   await page.click(page.newEm);
   await page.setInput(page.namInp, newInterns.name);
   await page.setInput(page.phoInp, newInterns.phone);
   await page.setInput(page.titleInp, newInterns.title);
   await page.click(page.saveBtn);
};

test('can add the bake off crew',async () => {
    await page.navigate();
    await page.getElement(page.addEm);
    for(let i= 0; i < newInterns.length; i ++){
        await addInterns(newInterns[i]);
    };
    await page.driver.sleep(2000);
    await page.driver.quit();
})
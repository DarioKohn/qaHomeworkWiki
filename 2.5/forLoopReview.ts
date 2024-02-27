// list of desserts for a for loop
var desserts: Array<string> = [
    "Brownie", 
    "Cheese Cake", 
    "Grape", 
    "Chocolate Tort", 
    "Cake", 
    "Cookie"
]; 

for (let i = 0; i < desserts.length; i++) {
    console.log(`My favorite dessert is ${i + 1}: ${desserts[i]}`); 
}; 

desserts.forEach((sweet) => {
    console.log(`This is the best ${sweet} I've ever had!`); 
}); 
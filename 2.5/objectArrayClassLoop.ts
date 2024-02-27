//! Starting with an object
console.log("Our Object\n");
// Objects are similar to classes the difference is that the object is not a template like the class
// Objects hold preset values or values that you put in while setting the object.

var myPerson = {
    firstName: 'Arthur',
    lastName: 'Morgan',
    age: 35
};
// now when we call myPerson we can use commands like myPerson.firstName to get back the information in the object
console.log(`Our person \n Name: ${myPerson.firstName} ${myPerson.lastName} Age: ${myPerson.age}`);

//! Here is the array example
// arrays start with a declaring variable followed by a name and what type of array it is and [];
console.log('\nOur Array\n');

var iceCreamFlavor: Array<string> = [
    "Mint Chocolate Chip",
    "Vanilla Bean",
    "Moosetracks",
    "Oreo",
    "Cookies and cream",
    "Chocolate"
];

iceCreamFlavor.forEach((flavor, i) => {
    console.log(`${i + 1}. ${flavor}`);
});

console.log('\nArray of Objects\n');

//! First set your array -> array values are now objects
var people = [
    {
        first: 'Arthur',
        last: 'Morgan',
        age: 35
    },
    {
        first: 'John',
        last: "Marston",
        age: 26
    },
    {
        first: 'Sadie',
        last: 'Adler',
        age: 25
    }
]

people.forEach((person) => {
    console.log(`Person: \n ${person.first} ${person.last} \n Age: ${person.age}`);
});

console.log("\nAn Object with An Array\n");

var personWithIceCream = {
    first: 'Sadie',
    last: 'Adler',
    age: 25,
    favoriteIceCreams: [
        "Mint Chocolate Chip",
        "Vanilla Bean",
        "Moosetracks",
        "Oreo",
        "Cookies and cream",
        "Chocolate"
    ]
};
personWithIceCream.favoriteIceCreams.forEach((flavor) => {
    console.log(`If ${personWithIceCream.first} ${personWithIceCream.last} could only eat one ice cream flavor for the rest of their lives it would be ${flavor}`);
});
// objects and arrays
var person = {}
person.name = "Mrs. White";
console.log(person.name);

// who is variable 
let who = person.name;

person.name = 'Mr. White';

console.log(person.name);
console.log(typeof person);

console.log(who.story);

var personNew = [];
personNew.name = "Mrs. White";
console.log(typeof personNew === 'array');
console.log(typeof personNew === 'object');
console.log(personNew);
personNew[0] = "I was not in the Billiards Room";
console.log(personNew[0]);


let plea = "wouldShe";
personNew[plea] = "I would never!";
console.log(personNew[plea]);

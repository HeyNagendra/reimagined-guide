//variable destructuring
const [first, second, third] = [1, true, false];
console.log(first, second, third);
console.log(typeof second);

// const cannot be reassigned

// object destructuring
const { name, age } = { name: "John", age: 30 };
console.log(name, age);
console.log(typeof name);

// {'name1': 'Rusty', 'room': 'kitchen', 'weapon': 'candlestick'};
// this method is called object destructuring and it is used to extract properties from an object
// and assign them to variables.
// The syntax is:
// const {property1, property2, ...} = object;
// The above code will extract the properties name1, room, and weapon from the object 
// and assign them to the variables property1, property2, and ... respectively.


// obj = {'name1': 'Rusty', 'room': 'kitchen', 'weapon': 'candlestick'};
// name1 = obj.name1;
// room = obj.room;
// weapon = obj.weapon;
// simple destructuring is below code


const { name1, weapon, room } = {
  name1: "Rusty",
  weapon: "candlestick",
  room: "kitchen",
};
console.log(name1);






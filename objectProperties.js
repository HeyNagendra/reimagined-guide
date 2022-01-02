const jonas = {
  firstName: "Jonas",
  lastName: "Jonaitis",
  job: "developer",
  age: 25,
  friends: ["Petras", "Ona", "Jonas"],
  hasDriversLicense: true,
  summary: function() {
      return `${this.firstName} is ${this.age} years old and ${this.hasDriversLicense? "has" : "doesn't have"} a drivers license`;
},
};

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends and is best friend is ${jonas.friends[0]}`
);
console.log(jonas.summary());

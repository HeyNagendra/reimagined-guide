"use strict";
var suspects = ["Miss Scarlet", "Colonel Mustard", "Mr. White"];
let suspectsList = [];
let suspestsInUpperCase = [];

function CreateSuspectObjects(name) {
  return {
    name: name,
    color: name.split(" ")[1],
    speak() {
      console.log(`my name is ${name}`);
    },
  };
}

for (let i=0; i < suspects.length; i++) {
  suspects = CreateSuspectObjects(suspects[i]);
  suspectsList.push(suspects);
}


let newSuspects = ["Alan Turing", "Charles Babbage", "Captian Sparrow"];
for (let i=0; i < newSuspects.length; i++) {
  suspestsInUpperCase.push(newSuspects[i].toUpperCase());
}

console.log(suspestsInUpperCase);
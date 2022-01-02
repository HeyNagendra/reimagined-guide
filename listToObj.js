var suspects = ["Miss Scarlet", "Colonel Mustard", "Mr. White"];
let suspectsList = [];

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
  suspect = CreateSuspectObjects(suspects[i]);
  suspectsList.push(suspect);
}

console.log(suspectsList[2].speak());
// nesting

const game = {
  suspects: [
    {
      name: "Rusty",
      color: "orange",
    },
    {
      name: "Miss Scarlet",
      color: "red",
    },
  ],
};

console.log(game.suspects);

function foo() {
  for (let i = 0; i < game.suspects.length; i++) {
    console.log(game.suspects[i]);
  }
}
foo();

for (let key in game) {
  console.log(game[key]);
}

var gameLoop = function () {
  for (var i = 0; i < game.suspects.length; i++) {
      console.log('outer loop');
    for (var key in game.suspects[i]) {
        console.log('inner loop');
      if (game.suspects[i][key] === "Rusty") {
        console.log("Found them!");
      } else {
        console.log("Keep looking!");
      }
    }
  }
};

console.log(gameLoop());




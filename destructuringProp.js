let game = {
suspects : [
  {
    name: "Rusty",
    color: "orange",
  },
  {
    name: "Miss Scarlet",
    color: "red",
  }
]
};

let firstColor = game.suspects[0].color;
let secondColor = game.suspects[1].color;

let [color, color2] = [game.suspects[0].color, game.suspects[1].color];
let [{colors: orangeColor}, {color: redColor}] = game.suspects;
console.log(orangeColor);


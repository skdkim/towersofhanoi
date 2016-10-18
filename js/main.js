const HanoiGame = require("./game.js");
const HanoiView = require("./hanoi-view.js");

console.log("hello world");
$( () => {
  const rootEl = $("figure");
  const game = new HanoiGame();
  new HanoiView(game, rootEl);
});

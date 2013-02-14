STEP_TIME_MILLIS = 250;


$('html').keydown(function (event) {
  console.log("You pressed keycode: " + event.keyCode);
} );


function println(string) {
  $('.output').append(string);
  $('.output').append("\n");
}


function runLoop() {
  // Schedule runLoop to be run again.
  window.setTimeout(runStep(), STEP_TIME_MILLIS);

}

function runStep() {
  println(game.makeBoardString());
  game.snake.step();
  console.log(game.snake);
  println(game.makeBoardString());

}

game = makeGame();
game.initialize();
// console.log(game);
// console.log(game.snake.snake);





runLoop();


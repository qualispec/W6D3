STEP_TIME_MILLIS = 500;

$('html').keydown(function (event) {
  console.log("You pressed keycode: " + event.keyCode);
  switch (event.keyCode) {
    case 38:
      game.snake.turn('up');
      break;
    case 40:
      game.snake.turn('down');
      break;
    case 37:
      game.snake.turn('left');
      break;
    case 39:
      game.snake.turn('right');
      break;
  }
  game.isDead();
  clear();
  println(game.makeBoardString());
  window.setTimeout(STEP_TIME_MILLIS);
} );


function println(string) {
  $('.output').append(string);
  $('.output').append("\n");
}

function clear() {
  $('.output').html("")
}

function runLoop() {
  // Schedule runLoop to be run again.
  window.setTimeout(runStep, STEP_TIME_MILLIS);

}

function runStep() {
  if (!game.isDead()) {
    game.snake.step();
    // game.eatsApple();
    clear();
    println(game.makeBoardString());
    runLoop();
  } else {
    clear();
    println(game.makeBoardString());
  }
}

game = makeGame();
game.initialize();
// console.log(game);
// console.log(game.snake.snake);

runLoop();



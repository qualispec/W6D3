STEP_TIME_MILLIS = 150;

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
  // println(game.makeBoardString());
  createBoard(game);
  window.setTimeout(STEP_TIME_MILLIS);
} );


function println(string) {
  $('.output').append(string);
  $('.output').append("\n");
}

function createBoard(game) {

  for(row = 0; row < game.board.board.length; row++) {
    for (col = 0; col < game.board.board[0].length; col++) {

      if (game.containsCoord(game.snake.snake, [row, col])) {
        $('.game_container').append('<div class="snake grid"></div>');
      } else if (game.containsCoord(game.apple, [row, col])) {
        $('.game_container').append('<div class="apple grid"></div>');
      } else {
        $('.game_container').append('<div class="grid"></div>');
      }
    }
  }
}


function clear() {
  $('.game_container').html("")
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
    // println(game.makeBoardString());
    createBoard(game);
    $('.stats').html(game.snake.snake.length);
    runLoop();
  } else {
    clear();
    // println(game.makeBoardString());
    createBoard(game);
    alert("Game Over!");
  }
}

game = makeGame();
game.initialize();
// console.log(game);
// console.log(game.snake.snake);

runLoop();



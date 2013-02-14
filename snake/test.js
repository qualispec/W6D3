var snake = require('./snake.js');
var sh = console.log;

// board = snake.makeBoard();
// board.initialize(20);

// snake = snake.makeSnake();
// snake.initialize();

game = snake.makeGame();
game.initialize();
sh(game.makeBoardString());



// game.justTesting();

// sh(snake.findDirection());

// sh(board.board);
//snake.turn('up');
// snake.turn('down');
// snake.step();
// snake.step();
// snake.step();
// snake.step();
// snake.step();
// snake.step();
// snake.turn('right');
// snake.turn('down');
// snake.step();
// snake.step();
// snake.step();
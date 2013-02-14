var snake = require('./snake.js');
var sh = console.log;

board = snake.makeBoard();
board.initialize(20);

snake = snake.makeSnake();
snake.initialize();

// sh(snake.findDirection());

// sh(board.board);
//snake.turn('up');
// snake.turn('down');
snake.step();
snake.step();
snake.step();
snake.step();
snake.step();
snake.step();
snake.turn('right');
snake.turn('down');
snake.step();
snake.step();
snake.step();
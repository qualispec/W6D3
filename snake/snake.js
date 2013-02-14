// var _ = require('./underscore-min.js');
// var sh = console.log;

function makeBoard() {
    return {
    board: undefined,

    initialize: function(size) {
      this.board = [];

      for(i = 0; i < size; i++) {
        this.board.push([]);
        for(j = 0; j < size; j++) {
          this.board[i].push('');
        };
      };
    }
  }
}

function makeSnake() {
  return {
    snake: undefined,

    initialize: function() {
      this.snake = [ [10, 10], [10, 11], [10, 12] ]; //left
      // this.snake = [ [10, 10], [10, 9], [10, 8] ]; // right
      // this.snake = [ [10, 10], [9, 10], [8, 10] ]; // down
      // this.snake = [ [10, 10], [11, 10], [12, 10] ]; // up
    },

    findDirection: function() {
      var head = this.snake[0];
      var second = this.snake[1];

      if (head[0] - second[0] == 0) { // Left or Right
        if (head[1] < second[1]) {
          return 'left';
        } else {
          return 'right';
        }
      } else {        // Up or Down
        if ( head[0] < second[0] ) {
          return 'up';
        } else {
          return 'down';
        }
      }
    },

    step: function() {
      this.changePos(this.findDirection());
    },

    turn: function(direction) {
      current_direction = this.findDirection();

      if ( current_direction == 'left' && direction == 'right') {
        // do nothing
        console.log("you're going left and trying to turn right");
      } else if ( current_direction == 'right' && direction == 'left' ) {
        // do nothing
        console.log("you're going right and trying to turn left");
      } else if ( current_direction == 'up' && direction == 'down' ) {
        // do nothing
        console.log("you're going up and trying to turn down");
      } else if (current_direction == 'down' && direction == 'up' ) {
        // do nothing
        console.log("you're going down and trying to turn up");
      } else {
        this.changePos(direction);
        console.log("you've successfully turned " + direction);
      }
    },

    changePos: function(direction) {
      var head = this.snake[0];

      switch (direction) {
        case 'up':
          this.snake.unshift([ head[0] - 1, head[1] ]);
          break;
        case 'down':
          this.snake.unshift([ head[0] + 1, head[1] ]);
          break;
        case 'left':
          this.snake.unshift([ head[0], head[1] - 1 ]);
          break;
        case 'right':
          this.snake.unshift([ head[0], head[1] + 1 ]);
          break;
      }
      this.snake.pop();
      console.log(this.snake);
    }
  }
}

function makeGame() {
  return {

    board: undefined,
    snake: undefined,

    initialize: function() {
      this.board = makeBoard();
      this.board.initialize(20);

      this.snake = makeSnake();
      this.snake.initialize();
    },

    isSnakeCoord: function(coordinate) {
      row = coordinate[0];
      col = coordinate[1];
      snakeCoordBool = false;

      this.snake.snake.forEach( function(coord) {

        if (coord[0] == row && coord[1] == col) {
          snakeCoordBool = true;
        }
      } );
      return snakeCoordBool;
    },

    makeBoardString: function() {
      var board_string = "";

      for(row = 0; row < this.board.board.length; row++) {

        for (col = 0; col < this.board.board[0].length; col++) {

          if (this.isSnakeCoord([row, col])) {
            board_string += "[X]";
          } else if (this.board.board[row][col] === '') {
            board_string += "[ ]";
          }
        }
        board_string += "\n";
      }
      return board_string;
    }


  }
}





// function clear() {
//   $('.output').html("");
// }

// println("Loaded it up!");
// var input = prompt("Type in your input:");
// println(input);









// module.exports = {
//   makeBoard: makeBoard,
//   makeSnake: makeSnake,
//   makeGame: makeGame
// }
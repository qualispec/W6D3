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
    game: undefined,

    initialize: function(game) {
      this.snake = [ [10, 10], [10, 11], [10, 12] ]
                     // [10, 15], [10, 16], [10, 17], [10, 18] ]; //left
      // this.snake = [ [10, 10], [10, 9], [10, 8] ]; // right
      // this.snake = [ [10, 10], [9, 10], [8, 10] ]; // down
      // this.snake = [ [10, 10], [11, 10], [12, 10] ]; // up
      this.game = game;
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

    // we need to refactor this very badly
    turn: function(direction) {
      current_direction = this.findDirection();

      if ( current_direction == 'left' && direction == 'right' || current_direction == 'left' && direction == 'left') {
        // do nothing
        console.log("you're going left and trying to turn right");
      } else if ( current_direction == 'right' && direction == 'left' || current_direction == 'right' && direction == 'right' ) {
        // do nothing
        console.log("you're going right and trying to turn left");
      } else if ( current_direction == 'up' && direction == 'down' || current_direction == 'up' && direction == 'up' ) {
        // do nothing
        console.log("you're going up and trying to turn down");
      } else if (current_direction == 'down' && direction == 'up' || current_direction == 'down' && direction == 'down') {
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
      if (game.eatsApple()) {
        // do nothing
      } else {
        this.snake.pop();
      }
    }

  }
}

function makeGame() {
  return {

    board: undefined,
    snake: undefined,
    apple: undefined,

    initialize: function() {
      this.board = makeBoard();
      this.board.initialize(20);

      this.snake = makeSnake();
      this.snake.initialize(this);

      this.apple = [ [Math.floor((Math.random()*20)), Math.floor((Math.random()*20))] ];
    },

    containsCoord: function(coordinates, target_coord) {
      coordBool = false;

      coordinates.forEach( function(coord) {
        if (coord[0] == target_coord[0] && coord[1] == target_coord[1]) {
          coordBool = true;
        }
      } );
      return coordBool;
    },

    makeBoardString: function() {
      var board_string = "";

      for(row = 0; row < this.board.board.length; row++) {
        for (col = 0; col < this.board.board[0].length; col++) {

          if (this.containsCoord(this.snake.snake, [row, col])) {
            board_string += "[X]";
          } else if (this.containsCoord(this.apple, [row, col])) {
            board_string += "[*]";
          } else {
            board_string += "[ ]";
          }
        }
        board_string += "\n";
      }
      return board_string;
    },

    isDead: function() {
      var headCoord = this.snake.snake[0];

      if (headCoord[0] >= this.board.board.length || headCoord[0] < 0 ) {
        console.log("DEAD DEAD DEAD: you hit the wall.");
        return true;
      } else if (headCoord[1] >= this.board.board[0].length || headCoord[1] < 0) {
        console.log("DEAD DEAD DEAD: you hit the wall.");
        return true;
      } else if (this.containsCoord(this.snake.snake.slice(1), (headCoord))) {
          console.log("DEAD DEAD DEAD: you ran into yourself.");
          return true;
      }
    },

    eatsApple: function() {
      if (this.containsCoord(this.snake.snake, this.apple[0])) {
        console.log("hit the apple");
        this.apple.pop();
        this.apple.push([Math.floor((Math.random()*20)), Math.floor((Math.random()*20))]);
        return true;
      }
      return false;
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
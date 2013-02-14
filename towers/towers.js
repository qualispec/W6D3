// var _ = require('./underscore-min');
var sh = println;

function makeTowersGame() {
  return {
    board: undefined,

    initialize: function() {
      this.board = [ [3, 2, 1], [], [] ];
    },

    executeMove: function(start, end) {
      this.board[end].push(this.board[start].pop());
    },

    validMove: function(start, end) {
      if(this.board[start].length == 0) {
        sh('Invalid move: no disk at start.');
        return false;
      } else if (_.last(this.board[start]) > _.last(this.board[end])) {
        sh('Invalid move: disk at start is bigger than disk at end.');
        return false;
      } else {
        sh('Valid move!');
        return true;
      }
    },

    makeMove: function(start, end) {
      if(this.validMove(start, end)) {
        this.executeMove(start, end);
        return true;
      } else {
        return false;
      }
    },

    gameWon: function() {
      if(this.board[1].toString() == [3, 2, 1].toString() ||
         this.board[2].toString() == [3, 2, 1].toString()) {
        return true;
      }
      return false;
    }
  };
}

function playLoop() {
  var game = makeTowersGame();
  game.initialize();
  while(!(game.gameWon())) {
    printLnArray(game.board);
    var moveStart = prompt("what do you want to move?");
    var moveEnd = prompt("where do you want to move it to?");
    game.makeMove(moveStart, moveEnd);
  }
  // print congrats
}



// jquery functionality

function println(string) {
  // we'll learn about this when we talk about DOM manipulation.
  $('.output').append(string);
  $('.output').append("\n");
}

function printLnArray(array) {

  array.forEach( function(element) {
    $('.output').append(element);
  } );
  $('.output').append("\n");
}

function clear() {
  $('.output').html("");
}

// println("Loaded it up!");
// var input = prompt("Type in your input:");
// println(input);



// module.exports = {
//   makeTowersGame: makeTowersGame
// }

playLoop();
var sh = console.log;


function makeTicTacToeGame() {
  return {
    board: undefined,

    initialize: function() {
      this.board = [ [null, null, null],
                     [null, null, null],
                     [null, null, null] ];
    },

    executeMove: function(piece, row, col) {
      this.board[row][col] = piece;
    },

    validMove: function(piece, row, col) {
      if (row >= this.board.length || col >= this.board[0].length ) {
        return false;
      } else if ( this.board[row][col] == null) {
        return true;
      } else {
        return false;
      }
    },

    makeMove: function(piece,row,col) {
      if (this.validMove(piece,row,col)) {
        this.executeMove(piece,row,col);
        return true;
      } else {
        return false;
      }
    },

    gameWon: function() {
      if (this.checkRow(this.board) || this.checkRow(this.transpose(this.board)) ||
        this.checkDiagonals(this.board)) {
          return true;
      }
      return false;
    },

    checkRow: function(array) {
      var toggle = false;

      array.forEach( function(row) {
        var piece = row[0];

        if ((piece == null) || (piece == undefined)) {
          // do nothing
        } else if ((row[1] == row[0]) && (row[2] == row[0])) {
          toggle = true;
        }

      } );
       return toggle;
    },

    transpose: function(array) {
      num_rows = array.length;
      num_cols = array[0].length;

      var transposed_array = new Array(num_rows);

      for(x = 0; x < num_rows; x++) {
        transposed_array[x] = new Array(num_cols)
      }

      for(row = 0; row < num_rows; row++) {
        for(col = 0; col < num_cols; col++) {
          transposed_array[row][col] = array[col][row];
        }
      }
      return transposed_array;
    },

    checkDiagonals: function(board) {
      if ( board[0][0] == board[1][1] && board[2][2] == board[1][1] && board[0][0] != null) {
        return true;
      } else if ( board[0][2] == board[1][1] && board[2][0] == board[1][1] && board[0][2] != null) {
        return true;
      } else {
        return false;
      }
    }
  }
}

function playLoop() {
  game = makeTicTacToeGame();
  game.initialize();

  while(!(game.gameWon())){
    prettyPrint(game.board);

    var piece = prompt("Enter your piece");
    var row = prompt("Enter row");
    var col = prompt("Enter col");

    if (game.makeMove(piece, row, col)) {
      // do nothing
    } else {
      alert("Invalid move!");
    }
  }
  prettyPrint(game.board);
  alert("DONE");
}

function prettyPrint(board) {

  for(row = 0; row < board.length; row++) {
    for(col = 0; col < board[0].length; col++) {
      $(".r" + row + "c" + col).html("");
      $(".r" + row + "c" + col).addClass(board[row][col]);
      $(".r" + row + "c" + col).append(board[row][col]);
    };
  };
}


// module.exports = {
//   makeTicTacToeGame: makeTicTacToeGame
// }
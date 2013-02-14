var tictactoe = require('./tictactoe');
var sh = console.log;

game = tictactoe.makeTicTacToeGame();
game.initialize();
// sh(game.board);
// game.executeMove("x",0,1);
// sh(game.board);
// sh(game.validMove("x",0,1)); // should be false
// sh(game.validMove("x",3,1)); // should be false
// sh(game.validMove("x",1,3)); // should be false
// sh(game.validMove("x",0,2)); // should be true
// sh(game.makeMove("x",0,1)); // should be false
// sh(game.transpose([ [0, 1, 2], [3, 4, 5], [6, 7, 8] ]));

// sh(game.checkRow([["x","x","x"],[],[]])); // should be true
// sh(game.checkRow([["x","o","x"],["o", "o", "o"],["x", "x", "o"]])); // should be true

// sh(game.checkRow(game.transpose([["x","o","x"],["o", "o", "o"],["x", "x", "o"]]))); // should be false
// sh(game.checkRow(game.transpose([["x","o","x"],["x", "o", "o"],["x", "x", "o"]]))); // should be true
// sh(game.checkDiagonals([["x", "o", "o"],["o", "x", "o"],["o", "o", "x"]])); // should be true
// sh(game.checkDiagonals([["x", "x", "o"],["x", "o", "x"],["o", "x", "x"]])); // should be true
// sh(game.checkDiagonals([["x", "o", "o"],
//                         ["o", "o", "o"],
//                         ["x", "o", "x"]])); // should be false


game.makeMove("x", 0, 0);
game.makeMove("x", 0, 1);
game.makeMove("x", 0, 2);
sh(game.board);
sh(game.gameWon());

// game.initialize();

// game.makeMove("o", 0, 1);
// game.makeMove("o", 1, 1);
// game.makeMove("o", 2, 1);
// sh(game.board);
// sh(game.gameWon());

// game.initialize();

// game.makeMove("x", 0, 0);
// game.makeMove("x", 1, 1);
// game.makeMove("x", 2, 2);
// sh(game.board);
// sh(game.gameWon());

// game.initialize();

// game.makeMove("o", 0, 2);
// game.makeMove("o", 1, 1);
// game.makeMove("o", 2, 0 );
// sh(game.board);
// sh(game.gameWon());

// game.initialize();

// game.makeMove("x", 0, 0);
// game.makeMove("o", 0, 1);
// game.makeMove("x", 0, 2);
// sh(game.board);
// sh(game.gameWon());

// game.initialize();
// sh(game.gameWon());
// sh(game.checkDiagonals(game.board));
// sh(game.checkRow(game.board));
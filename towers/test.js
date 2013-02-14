var sh = console.log
var towers = require('./towers');
var game = towers.makeTowersGame();
game.initialize();
// sh(game.validMove(0,2)); // true
// sh(game.validMove(2,0)); // false
// sh(game.validMove(1,0)); // false
// game.executeMove(0,1);
// sh(game.board);
// sh(game.validMove(0,2)); //true
// sh(game.validMove(2,0)); //false
// sh(game.validMove(1,0)); //true
sh(game.board);
game.makeMove(0, 2);
sh(game.board);
sh(game.gameWon());
game.makeMove(0, 1);
sh(game.board);
game.makeMove(1, 2);
sh(game.board);
sh(game.gameWon());
game.makeMove(2,0);
sh(game.board);
game.makeMove(0,1);
sh(game.board);
game.makeMove(0,2);
sh(game.board);
game.makeMove(1,0);
sh(game.board);
game.makeMove(1,2);
sh(game.board);
game.makeMove(0,2);
sh(game.board);
sh(game.gameWon());
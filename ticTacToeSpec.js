/**
 * Created by HS on 18/07/2015.
 */

var TicTacToeGame = require('./ticTacToe');
var GameBoard = require('./gameBoard');
var Player = require('./player');

describe('TicTacToe', function(){

    var tictactoe;
    var gameBoard;
    var player;

    beforeEach(function(){
        //do something before each spec/it() call
        tictactoe = new TicTacToeGame();
        gameBoard = new GameBoard();
        player = new Player('Player 1', 'X');
    });

    afterEach(function(){
        //do something after each spec/it() call
        //tictactoe = null;
    });

    it('Should verify that the result is true when an array contains 1, 2 and 3 values.', function(){
        var actRes = tictactoe.upperRow([1, 4, 2, 5, 3]);
        var expRes = true;
        expect(actRes).toBe(expRes);
    });

    it('Should verify that the result is true when an array contains 4, 5 and 6 values.', function(){
        var actRes = tictactoe.middleRow([4, 5, 6]);
        var expRes = true;
        expect(actRes).toBe(expRes);
    });

    it('Should verify that the result is true when an array contains 7, 8 and 9 values.', function(){
        var actRes = tictactoe.lowerRow([7, 8, 9]);
        var expRes = true;
        expect(actRes).toBe(expRes);
    });

    it('Should verify that the result is true when an array contains 1, 4 and 7 values.', function(){
        var actRes = tictactoe.leftColumn([1, 4, 7]);
        var expRes = true;
        expect(actRes).toBe(expRes);
    });

    it('Should verify that the result is true when an array contains 2, 5 and 8 values.', function(){
        var actRes = tictactoe.middleColumn([2, 5, 8]);
        var expRes = true;
        expect(actRes).toBe(expRes);
    });

    it('Should verify that the result is true when an array contains 3, 6 and 9 values.', function(){
        var actRes = tictactoe.rightColumn([3, 6, 9]);
        var expRes = true;
        expect(actRes).toBe(expRes);
    });

    it('Should verify that the result is true when an array contains 1, 5 and 9 values.', function(){
        var actRes = tictactoe.upperDiagonal([1, 5, 9]);
        var expRes = true;
        expect(actRes).toBe(expRes);
    });

    it('Should verify that the result is true when an array contains 3, 5 and 7 values.', function(){
        var actRes = tictactoe.lowerDiagonal([3, 5, 7]);
        var expRes = true;
        expect(actRes).toBe(expRes);
    });

    /*
    it('should verify a player wins in three turns', function(){
        var actRes = tictactoe.verifyVictoryOnThreeTurns();
        var expRes = true;
        expect(actRes).toBe(expRes);

    });

    it('should verify the result of the game is a draw', function(){
        var actRes = tictactoe.verifyDraw();
        var expRes = true;
        expect(actRes).toBe(expRes);
    });
    */
});




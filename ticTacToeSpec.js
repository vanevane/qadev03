/**
 * Created by HS on 18/07/2015.
 */

var Tictactoe = require('./ticTacToe');


describe('TicTacToe', function(){

    var tictactoe;
    beforeEach(function(){
        //do something before each spec/it() call
        tictactoe = new Tictactoe();
    });

    afterEach(function(){
        //do something after each spec/it() call
        tictactoe = null;
    });

    it('should verify there are equals values in the first row', function(){
        var actRes = tictactoe.verifyRow(1);
        var expRes = true;
        expect(actRes).toBe(expRes);

    });

    it('should verify there are equals values in the second row', function(){
        var actRes = tictactoe.verifyRow(2);
        var expRes = true;
        expect(actRes).toBe(expRes);

    });

    it('should verify there are equals values in the third row', function(){
        var actRes = tictactoe.verifyRow(3);
        var expRes = true;
        expect(actRes).toBe(expRes);
    });

    it('should verify there are equals values in the first column', function(){
        var actRes = tictactoe.verifyColumn(1);
        var expRes = true;
        expect(actRes).toBe(expRes);
    });

    it('should verify there are equals values in the second column', function(){
        var actRes = tictactoe.verifyColumn(2);
        var expRes = true;
        expect(actRes).toBe(expRes);
    });

    it('should verify there are equals values in the third column', function(){
        var actRes = tictactoe.verifyColumn(3);
        var expRes = true;
        expect(actRes).toBe(expRes);
    });

    it('should verify there are equals values in the first diagonal', function(){
        var actRes = tictactoe.verifyDiagonal(1);
        var expRes = true;
        expect(actRes).toBe(expRes);
    });

    it('should verify there are equals values in the second diagonal', function(){
        var actRes = tictactoe.verifyColumn(2);
        var expRes = true;
        expect(actRes).toBe(expRes);
    });

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



});




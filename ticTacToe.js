/**
 * Created by HS on 18/07/2015.
 */
var TicTacToeGame = function()
{
    this.players = [];
    this.gameboard;

    this.init();
    this.start();

};

TicTacToeGame.prototype.init = function()
{
    this.players.push(new Player('Player 1', 'X'));
    this.players.push(new Player('Player 2', 'O'));
    this.gameboard = new GameBoard();
};

TicTacToeGame.prototype.start = function()
{


this.TwoPlayers();

};

TicTacToeGame.prototype.TwoPlayers = function()
{
    var turns1 = 5;
    var turns2 = 4;

    console.log('Maximum number of turns for Player 1: ', turns1);
    //document.write('Maximum number of turns for Player 1: ', turns1);
    //document.write("<br>");

    console.log('Maximum number of turns for Player 2: ', turns2);
    //document.write('Maximum number of turns for Player 2:  ', turns2);
    //document.write("<br>");
    //document.write("<br>");

    this.gameboard.print();
    //this.tables[0].printFake();

    while((turns1 + turns2) > 0) {
        while ((turns1) > 0) {

            console.log('FIRST PLAYER TURN ', turns1);
            //document.write('Now, 1st Player Turn');
            //document.write("<br>");

            var input = window.prompt('Player 1, input a position'); //0,1
            turns1--;
            //document.getElementById('main').innerHTML = '';
            //document.write('Maximum number of turns for Player 2: ', turns2);
            //document.write("<br>");

            this.gameboard.setPosition(input, 1);
            //this.tables[1].setShipShoot(input);//shoot enemy
            //this.tables[0].printFake();//display own table
            this.gameboard.print();

            break;
        }


        while (turns2 > 0) {
            console.log('SECOND PLAYER TURN ', turns2);
            //document.write('Now, 2nd Player Turn');
            //document.write("<br>");

            var input = window.prompt('Player 2, input a position'); //0,1
            turns2--;
            //document.getElementById('main').innerHTML = '';
            //document.write('Maximum number of turns for Player 1: ', turns1);
            //document.write("<br>");

            this.gameboard.setPosition(input, 2);
            //this.tables[0].setShipShoot(input);//shoot enemy table
            //this.tables[1].printFake();//display own table to prepare next shoot
            this.gameboard.print();

            break;
        }
    }

};

const program = require('commander');
const chalk = require('chalk');
const figlet = require('figlet');

const BlackjackGame = require("blackjack/BlackjackGame");

const DEFAULT_NUMBER_OF_PLAYERS = 1;

program.version('1.0.0');
program.description('Blackjack game for the Kleiner Perkins Fellowship 2019/20, by Simon Ayzman.');
program.option("-p, --players <number>", "How many players to play with?");
program.parse(process.argv);

let numberOfPlayers = parseInt(program.players);
if (Number.isNaN(numberOfPlayers) === true) {
    console.log("Defaulting game to 1 player.");
    numberOfPlayers = DEFAULT_NUMBER_OF_PLAYERS;
}

const game = new BlackjackGame(numberOfPlayers);
game.start();

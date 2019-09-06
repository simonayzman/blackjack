const inquirer = require('inquirer');
const program = require('commander');
const chalk = require('chalk');
const figlet = require('figlet');

const BlackjackGame = require("blackjack/BlackjackGame");

const DEFAULT_NUMBER_OF_PLAYERS = 1;

program.version('1.0.0');
program.description('Blackjack game for the Kleiner Perkins Fellowship 2019/20, by Simon Ayzman.');
program.option("-p, --players <number>", "Number of players, not including the dealer. (Min: 1, Max: 6)", DEFAULT_NUMBER_OF_PLAYERS);
program.parse(process.argv);

async function startBlackjackGame() {
    const { numberOfPlayers } = await inquirer.prompt([
        {
            name: 'numberOfPlayers',
            type: 'list',
            message: `How many players (not including the dealer)? Minimum 1. Maximum: 6.`,
            choices: [1,2,3,4,5,6],
        },
    ]);

    const game = new BlackjackGame(numberOfPlayers);
    game.start();
}

startBlackjackGame();

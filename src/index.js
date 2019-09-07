const inquirer = require('inquirer');
const chalk = require('chalk');
const figlet = require('figlet');

const BlackjackGame = require("blackjack/BlackjackGame");

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

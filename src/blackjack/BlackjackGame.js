const inquirer = require('inquirer');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const Deck = require("cards/Deck");
const BlackjackPlayer = require("blackjack/BlackjackPlayer");

class BlackjackGame {
    constructor(numberOfPlayers) {
        this.deck = new Deck;
        this.dealer = new BlackjackPlayer("DEALER");
        this.players = [];
        for (let playerIndex = 0; playerIndex < numberOfPlayers; playerIndex++) {
            const player = new BlackjackPlayer(`Player ${playerIndex+1}`);
            this.players.push(player);
        }
    }

    async start() {
        const introText = figlet.textSync("Let's play Blackjack!", { horizontalLayout: 'full' });
        console.log(chalk.redBright(introText));

        let stillPlaying = true;
        while (stillPlaying) {
            await this.playRound();
            const { continuePlaying } = await inquirer.prompt([
                {
                    name: 'continuePlaying',
                    type: 'confirm',
                    message: 'Do you want to continue playing?',
                },
            ]);
            stillPlaying = continuePlaying;
        }
        const exitText = figlet.textSync("Thanks for playing!", { horizontalLayout: 'full' });
        console.log(chalk.redBright(exitText));
    }

    resetRound() {
        this.deck.reset();
        this.deck.shuffle();

        this.dealer.resetHand();
        for (let player of this.players) {
            player.resetHand();
        }
        
        clear();
        clear();
    }

    playRound() {
        this.resetRound();

        // Initial deal
        console.log("=====================");
        this.dealer.receiveNewCard(this.deck.dealCard());
        this.dealer.receiveNewCard(this.deck.dealCard());
        this.dealer.displayHand(true);
        console.log("=====================");
        for (let player of this.players) {
            player.receiveNewCard(this.deck.dealCard());
            player.receiveNewCard(this.deck.dealCard());
            player.displayHand();
        }
        console.log("=====================\n");

    shouldDealerHit() {
        return this.dealer.getHandValue() < 17;
    }
}

module.exports = BlackjackGame;
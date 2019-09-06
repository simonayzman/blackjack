const inquirer = require('inquirer');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

const Deck = require("cards/Deck");
const BlackjackPlayer = require("blackjack/BlackjackPlayer");

const PLAYER_ACTIONS = {
    Hit: 'Hit',
    Stand: 'Stand',
};

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

    async playRound() {
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

        // Players turn
        for (let player of this.players) {
            let playerStands = false;
            let playerHandValue = 0;
            while (!playerStands && playerHandValue <= 21) {
                player.displayHand();
                const { playerAction } = await inquirer.prompt([
                    {
                        name: 'playerAction',
                        type: 'list',
                        message: `${player.getName()}, what do you want to do?`,
                        choices: [PLAYER_ACTIONS.Hit, PLAYER_ACTIONS.Stand],
                    },
                ]);
                if (playerAction === PLAYER_ACTIONS.Hit) {
                    player.receiveNewCard(this.deck.dealCard());
                    playerHandValue = player.getHandValue();
                } else if (playerAction === PLAYER_ACTIONS.Stand) {
                    playerStands = true;
                } else {
                    throw new Error("Unrecognized action.");
                }
            }

            player.displayHand();
            if (playerHandValue > 21) {
                console.log(`${player.getName()} busted!`);
            }
            console.log();
        }

        // Dealers turn
        this.dealer.displayHand();
        while (this.shouldDealerHit()) {
            console.log(`${this.dealer.getName()} hits!`);
            this.dealer.receiveNewCard(this.deck.dealCard());
            this.dealer.displayHand();
        }
        if (this.dealer.getHandValue() > 21) {
            console.log(`${this.dealer.getName()} busted!`);
        } else {
            console.log(`${this.dealer.getName()} stands!`);
        }
        console.log();

        // Showdown
        const dealerHandValue = this.dealer.getHandValue();
        for (let player of this.players) {
            const playerHandValue = player.getHandValue();
            if (playerHandValue > 21) {
                console.log(chalk.redBright(`${player.getName()} LOST by busting.`))
            } else {
                if (dealerHandValue > 21) {
                    console.log(chalk.greenBright(`${player.getName()} WON because ${this.dealer.getName()} busted.`))
                } else if (dealerHandValue === playerHandValue) {
                    console.log(`${player.getName()} DREW by equalling ${this.dealer.getName()}.`);
                } else if (playerHandValue > dealerHandValue) {
                    console.log(chalk.greenBright(`${player.getName()} WON by beating ${this.dealer.getName()}.`))
                } else if (dealerHandValue > playerHandValue) {
                    console.log(chalk.redBright(`${player.getName()} LOST by losing to ${this.dealer.getName()}.`))
                } else {
                    throw new Error("Unknown game condition");
                }
            }
        }
    }

    shouldDealerHit() {
        return this.dealer.getHandValue() < 17;
    }
}

module.exports = BlackjackGame;
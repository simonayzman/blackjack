const Card = require("cards/Card");
const constants = require("lib/constants");

const { ALL_SUITS, ALL_RANKS } = constants;

class Deck {
    constructor() {
        this.reset();
    }

    reset() {
        this.deck = [];
        for (let rankIndex = 0; rankIndex < ALL_RANKS.length; rankIndex++) {
            const currentRank = ALL_RANKS[rankIndex];
            for (let suitIndex = 0; suitIndex < ALL_SUITS.length; suitIndex++) {
                const currentSuit = ALL_SUITS[suitIndex];
                const card = new Card(currentRank, currentSuit);
                this.deck.push(card);
            }
        }
    }

    // Algorithm based on Fisher-Yates (aka Knuth) Shuffle
    // StackOverflow reference here: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    shuffle() {
        var currentIndex = this.deck.length, temporaryValue, randomIndex;      
        while (0 !== currentIndex) {      
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;      
          temporaryValue = this.deck[currentIndex];
          this.deck[currentIndex] = this.deck[randomIndex];
          this.deck[randomIndex] = temporaryValue;
        }      
    }

    dealCard() {
        const card = this.deck.pop();
        return card;
    }

    isEmpty() {
        return this.deck.length === 0;
    }

    displayDeck() {
        let deckOutput = "";
        for (let deckIndex = 0; deckIndex < this.deck.length; deckIndex++) {
            const card = this.deck[deckIndex];
            deckOutput += card.getCardFace();
            if (deckIndex + 1 < this.deck.length) {
                deckOutput += ", ";
            }
        }
        console.log(deckOutput);
    }
}

module.exports = Deck;
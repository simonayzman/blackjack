class Card {
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }

    getRank() {
        return this.rank;
    }

    getCardFace() {
        return "" + this.rank + this.suit;
    }
}

module.exports = Card;
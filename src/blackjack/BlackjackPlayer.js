class BlackjackPlayer {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }

    resetHand() {
        this.hand = [];
    }

    receiveNewCard(card) {
        this.hand.push(card);
    }

    displayHand() {
        let handOutput = `(Hand value: ${this.getHandValue()}) `;
        for (let handIndex = 0; handIndex < this.hand.length; handIndex++) {
            const card = this.hand[handIndex];
            handOutput += card.getCardFace();
            if (handIndex + 1 < this.hand.length) {
                handOutput += " ";
            }
        }
        console.log(handOutput);
    }

    getHandValue() {
        let value = 0;
        let numberOfAces = 0;
        for (let cardIndex = 0; cardIndex < this.hand.length; cardIndex++) {
            const card = this.hand[cardIndex];
            const rank = card.getRank();
            if (typeof rank === "number") {
                value += rank;
            } else if (typeof rank === "string") {
                if (rank === "A") {
                    numberOfAces++;
                    value += 11;
                } else if (rank === "J" || rank === "Q" || rank === "K") {
                    value += 10;
                } else {
                    throw new Error("Unknown card.");
                }
            } else {
                throw new Error("Unknown card.");
            }
        }

        while (value > 21 && numberOfAces > 0) {
            value -= 10;
            numberOfAces--;
        }

        return value;
    }
}

module.exports = BlackjackPlayer;
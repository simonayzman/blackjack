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
}

module.exports = BlackjackPlayer;
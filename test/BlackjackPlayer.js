const assert = require('assert');

const Card = require('cards/Card');
const BlackjackPlayer = require('blackjack/BlackjackPlayer');
const constants = require('lib/constants');

const { SUITS, RANKS } = constants;

describe('BlackjackPlayer', () => {
    describe('getHandValue()', () => {
        it('Empty hand = 0', () => {
            const player = new BlackjackPlayer("TestPlayer");
            
            const handValue = player.getHandValue();
            const expectedHandValue = 0;
            assert.equal(handValue, expectedHandValue);
        });
    });
});
const assert = require('assert');

const Card = require('cards/Card');
const BlackjackPlayer = require('blackjack/BlackjackPlayer');
const constants = require('lib/constants');

const { RANKS, SUITS } = constants;

describe('BlackjackPlayer', () => {
    describe('getHandValue()', () => {
        describe('No cards', () => {
            it('Empty hand = 0', () => {
                const player = new BlackjackPlayer("TestPlayer");
                
                const handValue = player.getHandValue();
                const expectedHandValue = 0;
                assert.equal(handValue, expectedHandValue);
            });
        });

        describe('One card', () => {
            it('5♥ = 5', () => {
                const player = new BlackjackPlayer("TestPlayer");
                player.receiveNewCard(new Card(RANKS.Five, SUITS.Hearts));

                const handValue = player.getHandValue();
                const expectedHandValue = 5;
                assert.equal(handValue, expectedHandValue);
            });

            it('10♥ = 10', () => {
                const player = new BlackjackPlayer("TestPlayer");
                player.receiveNewCard(new Card(RANKS.Ten, SUITS.Hearts));

                const handValue = player.getHandValue();
                const expectedHandValue = 10;
                assert.equal(handValue, expectedHandValue);
            });

            it('J♥ = 10', () => {
                const player = new BlackjackPlayer("TestPlayer");
                player.receiveNewCard(new Card(RANKS.Jack, SUITS.Hearts));

                const handValue = player.getHandValue();
                const expectedHandValue = 10;
                assert.equal(handValue, expectedHandValue);
            });

            it('A♥ = 11', () => {
                const player = new BlackjackPlayer("TestPlayer");
                player.receiveNewCard(new Card(RANKS.Ace, SUITS.Hearts));

                const handValue = player.getHandValue();
                const expectedHandValue = 11;
                assert.equal(handValue, expectedHandValue);
            });
        });
    });
});
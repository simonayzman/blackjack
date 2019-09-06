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

        describe('1 card', () => {
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

        describe('2 cards', () => {
            it('3♥ 5♥ = 8', () => {
                const player = new BlackjackPlayer("TestPlayer");
                player.receiveNewCard(new Card(RANKS.Three, SUITS.Hearts));
                player.receiveNewCard(new Card(RANKS.Five, SUITS.Hearts));

                const handValue = player.getHandValue();
                const expectedHandValue = 8;
                assert.equal(handValue, expectedHandValue);
            });

            it('5♥ 10♥ = 15', () => {
                const player = new BlackjackPlayer("TestPlayer");
                player.receiveNewCard(new Card(RANKS.Five, SUITS.Hearts));
                player.receiveNewCard(new Card(RANKS.Ten, SUITS.Hearts));

                const handValue = player.getHandValue();
                const expectedHandValue = 15;
                assert.equal(handValue, expectedHandValue);
            });

            it('10♥ 10♦ = 20', () => {
                const player = new BlackjackPlayer("TestPlayer");
                player.receiveNewCard(new Card(RANKS.Ten, SUITS.Hearts));
                player.receiveNewCard(new Card(RANKS.Ten, SUITS.Diamonds));

                const handValue = player.getHandValue();
                const expectedHandValue = 20;
                assert.equal(handValue, expectedHandValue);
            });

            it('10♥ J♥ = 20', () => {
                const player = new BlackjackPlayer("TestPlayer");
                player.receiveNewCard(new Card(RANKS.Ten, SUITS.Hearts));
                player.receiveNewCard(new Card(RANKS.Jack, SUITS.Hearts));

                const handValue = player.getHandValue();
                const expectedHandValue = 20;
                assert.equal(handValue, expectedHandValue);
            });

            it('Q♥ J♥ = 20', () => {
                const player = new BlackjackPlayer("TestPlayer");
                player.receiveNewCard(new Card(RANKS.Queen, SUITS.Hearts));
                player.receiveNewCard(new Card(RANKS.Jack, SUITS.Hearts));

                const handValue = player.getHandValue();
                const expectedHandValue = 20;
                assert.equal(handValue, expectedHandValue);
            });

            it('A♥ 5♥ = 16', () => {
                const player = new BlackjackPlayer("TestPlayer");
                player.receiveNewCard(new Card(RANKS.Ace, SUITS.Hearts));
                player.receiveNewCard(new Card(RANKS.Five, SUITS.Hearts));

                const handValue = player.getHandValue();
                const expectedHandValue = 16;
                assert.equal(handValue, expectedHandValue);
            });

            it('A♥ Q♥ = 21', () => {
                const player = new BlackjackPlayer("TestPlayer");
                player.receiveNewCard(new Card(RANKS.Ace, SUITS.Hearts));
                player.receiveNewCard(new Card(RANKS.Queen, SUITS.Hearts));

                const handValue = player.getHandValue();
                const expectedHandValue = 21;
                assert.equal(handValue, expectedHandValue);
            });

            it('A♥ A♦ = 12', () => {
                const player = new BlackjackPlayer("TestPlayer");
                player.receiveNewCard(new Card(RANKS.Ace, SUITS.Hearts));
                player.receiveNewCard(new Card(RANKS.Ace, SUITS.Diamonds));

                const handValue = player.getHandValue();
                const expectedHandValue = 12;
                assert.equal(handValue, expectedHandValue);
            });
        });

        describe('3+ cards', () => {
            it('3♥ 5♥ 10♥ = 18', () => {
                const player = new BlackjackPlayer("TestPlayer");
                player.receiveNewCard(new Card(RANKS.Three, SUITS.Hearts));
                player.receiveNewCard(new Card(RANKS.Five, SUITS.Hearts));
                player.receiveNewCard(new Card(RANKS.Ten, SUITS.Hearts));

                const handValue = player.getHandValue();
                const expectedHandValue = 18;
                assert.equal(handValue, expectedHandValue);
            });

            it('Q♥ J♥ A♥ = 21', () => {
                const player = new BlackjackPlayer("TestPlayer");
                player.receiveNewCard(new Card(RANKS.Queen, SUITS.Hearts));
                player.receiveNewCard(new Card(RANKS.Jack, SUITS.Hearts));
                player.receiveNewCard(new Card(RANKS.Ace, SUITS.Hearts));

                const handValue = player.getHandValue();
                const expectedHandValue = 21;
                assert.equal(handValue, expectedHandValue);
            });

            it('Q♥ J♥ A♥ A♦ = 22', () => {
                const player = new BlackjackPlayer("TestPlayer");
                player.receiveNewCard(new Card(RANKS.Queen, SUITS.Hearts));
                player.receiveNewCard(new Card(RANKS.Jack, SUITS.Hearts));
                player.receiveNewCard(new Card(RANKS.Ace, SUITS.Hearts));
                player.receiveNewCard(new Card(RANKS.Ace, SUITS.Diamonds));


                const handValue = player.getHandValue();
                const expectedHandValue = 22;
                assert.equal(handValue, expectedHandValue);
            });

            it('A♥ A♦ A♣ = 13', () => {
                const player = new BlackjackPlayer("TestPlayer");
                player.receiveNewCard(new Card(RANKS.Ace, SUITS.Hearts));
                player.receiveNewCard(new Card(RANKS.Ace, SUITS.Diamonds));
                player.receiveNewCard(new Card(RANKS.Ace, SUITS.Clubs));

                const handValue = player.getHandValue();
                const expectedHandValue = 13;
                assert.equal(handValue, expectedHandValue);
            });


            it('A♥ A♦ A♣ A♠ = 14', () => {
                const player = new BlackjackPlayer("TestPlayer");
                player.receiveNewCard(new Card(RANKS.Ace, SUITS.Hearts));
                player.receiveNewCard(new Card(RANKS.Ace, SUITS.Diamonds));
                player.receiveNewCard(new Card(RANKS.Ace, SUITS.Clubs));
                player.receiveNewCard(new Card(RANKS.Ace, SUITS.Spades));

                const handValue = player.getHandValue();
                const expectedHandValue = 14;
                assert.equal(handValue, expectedHandValue);
            });
        });
    });
});
const SUITS = {
    Spades: "♠",
    Hearts: "♥",
    Clubs: "♣",
    Diamonds: "♦",
};

const RANKS = {
    Two: 2,
    Three: 3,
    Four: 4,
    Five: 5,
    Six: 6,
    Seven: 7,
    Eight: 8,
    Nine: 9,
    Ten: 10,
    Jack: "J",
    Queen: "Q",
    King: "K",
    Ace: "A",
};

const ALL_SUITS = [
    SUITS.Spades,
    SUITS.Hearts,
    SUITS.Clubs,
    SUITS.Diamonds
];

const ALL_RANKS = [
    RANKS.Two,
    RANKS.Three,
    RANKS.Four,
    RANKS.Five,
    RANKS.Six,
    RANKS.Seven,
    RANKS.Eight,
    RANKS.Nine,
    RANKS.Ten,
    RANKS.Jack,
    RANKS.Queen,
    RANKS.King,
    RANKS.Ace,
];

module.exports = {
    SUITS,
    RANKS,
    ALL_SUITS,
    ALL_RANKS,
};
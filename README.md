# Blackjack

<img src="https://st1.skybet.com/static/content/casino/game_12_GameInfoForeground_800x640.png" height="250px" alt="Playing cards">

Code submission for Kleiner Perkins Engineering Fellows Program 2020.

### Quick Run

```
npm install
npm start
```

### Usage

When the game starts, the program asks for the number of players playing. Then, the game proceeds by showing the initial deal (with the dealer's first card hidden), and sequentually asking each player whether they would like to hit or stand. After all the players have gone, the dealer then reveals their hand and proceeds to hit until they bust or their hand value is above 16. Then, the final showdown occurs, summarizing the players' wins, losses, and draws. The program then asks whether another round should be played.

### Caveats

A number of more complicated rules and game mechanisms have been ignored for the purposes of this code submission. This list includes, but is not limited to (1) betting, (2) splitting pairs, (3) doubling down, (4) insurance, (5) standard casino shuffling, and (6) round-end on all player bust/Blackjack. For a complete list of Blackjack rules, visit the [Bicycle Blackjack rules site](https://bicyclecards.com/how-to-play/blackjack/).

### Dependencies

All external libraries used can be found in [package.json](package.json).

### Example Game

```
$ npm start

> blackjack@1.0.0 start /blackjack
> NODE_PATH=src/ node src/index.js

? How many players (not including the dealer)? Minimum 1. Maximum: 6. 
3

=====================
DEALER (XX): XX 9♥
=====================
Player 1 (20): 10♦ Q♦
Player 2 (12): J♠ 2♥
Player 3 (13): 3♣ Q♣
=====================

Player 1 (20): 10♦ Q♦
? Player 1, what do you want to do? Stand
Player 1 (20): 10♦ Q♦

Player 2 (12): J♠ 2♥
? Player 2, what do you want to do? Hit
Player 2 (17): J♠ 2♥ 5♣
? Player 2, what do you want to do? Stand
Player 2 (17): J♠ 2♥ 5♣

Player 3 (13): 3♣ Q♣
? Player 3, what do you want to do? Hit
Player 3 (23): 3♣ Q♣ Q♠
Player 3 busted!

DEALER (15): 10♣ 5♥
DEALER hits!
DEALER (19): 10♣ 5♥ 4♥
DEALER stands!

Player 1 WON by beating DEALER.
Player 2 LOST by being weaker than DEALER.
Player 3 LOST by busting.
```

### Unit Tests

```
npm test
```

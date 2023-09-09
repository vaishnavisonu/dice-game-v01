function rollDice() {
    var dice1 = document.getElementById('dice1');
    var dice2 = document.getElementById('dice2');
    var winnerMsg = document.getElementById('winnerMsg');

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;


    dice1.classList.add('roll');
    dice2.classList.add('roll');


    setTimeout(function() {
    dice1.textContent = randomNumber1;
    dice2.textContent = randomNumber2;


    dice1.classList.remove('roll');
    dice2.classList.remove('roll');

    if (randomNumber1 > randomNumber2) {
        winnerMsg.textContent = "Player 1 wins!";
        dice1.classList.add('winner-player1');
        dice1.classList.add('winnerAnimation');
        dice2.classList.remove('winner-player2');
    } else if (randomNumber2 > randomNumber1) {
        winnerMsg.textContent = "Player 2 wins!";
        dice2.classList.add('winner-player2');
        dice2.classList.add('winnerAnimation');
        dice1.classList.remove('winner-player1');
    } else {
        winnerMsg.textContent = "It's a tie!";
        dice1.classList.remove('winner-player1');
        dice2.classList.remove('winner-player2');
    }
    }, 1500);
}

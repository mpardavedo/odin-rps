let pj;
let pjScore = 0;
let pc;
let pcScore = 0;
let gameEnded = false;

let choices = ['rock', 'paper', 'scissors'];

window.onload = function () {
    for (let i = 0; i < 3; i++) {
        let choice = document.createElement('img');
        choice.id = choices[i];
        choice.src = choices[i] + '.png';
        choice.addEventListener('click', selectChoice);
        document.getElementById('choices').append(choice);
    }
}

function selectChoice() {
    if (gameEnded) return;
    pj = this.id;
    document.getElementById('pj-choice').src = pj + '.png';

    pc = choices[Math.floor(Math.random() * 3)];
    document.getElementById('pc-choice').src = pc + '.png';

    let message = document.querySelector('.message');
    if (pj == pc) {
        message.textContent='Its a draw, rematch!';
    }
    else {
        if (pj == 'rock' && pc == 'scissors'|| pj == 'paper' && pc == 'rock' || pj == 'scissors' && pc == 'paper') {
            pjScore++;
            message.textContent='You win the round!';
        } else {
            pcScore++;
            message.textContent='You lose the round!';
        }
    }

    document.getElementById('pj-score').innerText = pjScore;
    document.getElementById('pc-score').innerText = pcScore;

    if ( pjScore > 2 ) {
        message.textContent='You win the game!';
        gameEnded = true;
    } else if ( pcScore > 2 ) {
        message.textContent='You lose the game!';
        gameEnded = true;
    }
}

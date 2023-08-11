const elements = ['ROCK', 'PAPER', 'SCISSORS'];

function computerChoice () {
    let random = Math.floor(Math.random() * elements.length);
    return elements[random];
}

function userChoice () {
    const user = prompt('RPS?');
    return user.toUpperCase()
}

function round (userChoice, computerChoice) {
    if( userChoice === 'ROCK' && computerChoice === 'SCISSORS' || 
    userChoice === 'PAPER' && computerChoice === 'ROCK' || 
    userChoice === 'SCISSORS' && computerChoice === 'PAPER') {
        return 'win';
    } else if ( userChoice === computerChoice) {
        return 'draw';
    }   
    return 'lose';
}

function game () {
    let userScore = 0;
    let cpuScore = 0;

    do {
        let user = userChoice();
        let cpu = computerChoice();
        let result = round (user,cpu);

        if (result === 'win') {
            userScore++;
            alert('You win the round!');
        } else if (result === 'lose') {
            cpuScore++;
            alert('You lose the round');
        } else {
            alert('Draw');
        }

        alert ('User: ' + userScore + ' | CPU: ' + cpuScore);


        if (userScore === 4) {
            return alert ('You won the game!');
        } else if (cpuScore === 4) {
            return alert ('Game over');
        } 
        
    } while (userScore < 4 || cpuScore < 4);
}


game();



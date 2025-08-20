let score = {
    wins: 0,
    losses: 0,
    ties: 0
    };

    updateScoreElement();

    function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === computerMove) {
        result = 'Tie';
    } else if (
        (playerMove === 'Rock' && computerMove === 'Scissors') ||
        (playerMove === 'Paper' && computerMove === 'Rock') ||
        (playerMove === 'Scissors' && computerMove === 'Paper')
    ) {
        result = 'You Won!';
    } else {
        result = 'You Lose!';
    }

    if (result === 'You Won!') score.wins += 1;
    else if (result === 'You Lose!') score.losses += 1;
    else score.ties += 1;

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `
        You <img src="images/${playerMove.toLowerCase()}.png" class="icon"> 
        <img src="images/${computerMove.toLowerCase()}.png" class="icon"> Computer
    `;
    alert(`You picked ${playerMove}\nComputer picked ${computerMove}\n\nResult: ${result}\nWins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
    }

    function updateScoreElement() {
    document.querySelector('.js-score').innerHTML =
        `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    
    }

    function pickComputerMove() {
    const randomNumber = Math.random();
    if (randomNumber < 1/3) return 'Rock';
    else if (randomNumber < 2/3) return 'Paper';
    return 'Scissors';

                                        }

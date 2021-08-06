function play() {
    let wins = 0;
    let loses = 0;
    while (wins < 3 && loses < 3) {
        let playerChoice = window.prompt("Choose Rock , Paper , Scissors");
        playerChoice = playerChoice.toLocaleLowerCase();
        console.log(playerChoice);

        function computerPlay(comChoice) {
            comChoice = ["Rock", "Paper", "Scissors"];
            return comChoice[Math.floor(Math.random() * comChoice.length)];
        }

        let computerChoice = computerPlay();
        console.log(computerChoice);

        alert(playRound(playerChoice, computerChoice));


        function playRound(playerSelection, computerSelection) {
            function win(playerSelection, computerSelection) {
                wins++;
                return `You WIN ! ${playerSelection} beats ${computerSelection}`;
            }
            function lost(playerSelection, computerSelection) {
                loses++;
                return `You LOST ! ${computerSelection} beats ${playerSelection}`;
            }
            function draw(playerSelection, computerSelection) {
                return `It's a DRAW ! both chose ${playerSelection}`;
            }
            if (playerSelection === "rock" && computerSelection === "Paper") {
                return lost(playerSelection, computerSelection);
            }
            else if (playerSelection === "rock" && computerSelection === "Scissors") {
                return win(playerSelection, computerSelection);
            }
            else if (playerSelection === "rock" && computerSelection === "Rock") {
                return draw(playerSelection);
            }
            else if (playerSelection === "paper" && computerSelection === "Paper") {
                return draw(playerSelection);
            }
            else if (playerSelection === "paper" && computerSelection === "Scissors") {
                return lost(playerSelection, computerSelection);
            }
            else if (playerSelection === "paper" && computerSelection === "Rock") {
                return win(playerSelection, computerSelection);
            }
            else if (playerSelection === "scissors" && computerSelection === "Paper") {
                return win(playerSelection, computerSelection);
            }
            else if (playerSelection === "scissors" && computerSelection === "Scissors") {
                return draw(playerSelection);
            }
            else if (playerSelection === "scissors" && computerSelection === "Rock") {
                return lost(playerSelection, computerSelection);
            }
            else {
                return "ERROR !!!! Choose VALID Input";
            }
        }
    }

    if (wins === 3) {
        alert(`You are the winner with ${wins} wins`);
    }
    else {
        alert(`You loose with ${loses} looses`);
    }
}
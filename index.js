let computerScore = 0;
let playerScore = 0;

const computer = document.querySelector(".computer");
const player = document.querySelector(".player");
const result = document.querySelector(".result");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const reset = document.querySelector(".reset");

function getComputerChoice() {
	return Math.floor(Math.random() * 3);
}

function playRound(player, computer) {
	if ((player + 1) % 3 == computer) {
		return 0;
	} else if (player == (computer + 1) % 3) {
		return 1;
	} else {
		return 2;
	}
}

rock.addEventListener("click", () => {
	if (playerScore < 5 && computerScore < 5) {
		switch (playRound(0, getComputerChoice())) {
			case 0:
				computerScore++;
				computer.textContent = "Computer Score = " + computerScore;
				if (computerScore < 5) {
					result.textContent = "Computer Wins";
				} else {
					result.textContent = "You Lose :(";
				}
				break;
			case 1:
				playerScore++;
				player.textContent = "Your Score = " + playerScore;
				if (playerScore < 5) {
					result.textContent = "You Win";
				} else {
					result.textContent = "Computer Loses :)";
				}
				break;
			default:
				result.textContent = "Tie";
				break;
		}
	}
});

paper.addEventListener("click", () => {
	if (playerScore < 5 && computerScore < 5) {
		switch (playRound(1, getComputerChoice())) {
			case 0:
				computerScore++;
				computer.textContent = "Computer Score = " + computerScore;
				if (computerScore < 5) {
					result.textContent = "Computer Wins";
				} else {
					result.textContent = "You Lose :(";
				}
				break;
			case 1:
				playerScore++;
				player.textContent = "Your Score = " + playerScore;
				if (playerScore < 5) {
					result.textContent = "You Win";
				} else {
					result.textContent = "Computer Loses :)";
				}
				break;
			default:
				result.textContent = "Tie";
				break;
		}
	}
});

scissors.addEventListener("click", () => {
	if (playerScore < 5 && computerScore < 5) {
		switch (playRound(0, getComputerChoice())) {
			case 0:
				computerScore++;
				computer.textContent = "Computer Score = " + computerScore;
				if (computerScore < 5) {
					result.textContent = "Computer Wins";
				} else {
					result.textContent = "You Lose :(";
				}
				break;
			case 1:
				playerScore++;
				player.textContent = "Your Score = " + playerScore;
				if (playerScore < 5) {
					result.textContent = "You Win";
				} else {
					result.textContent = "Computer Loses :)";
				}
				break;
			default:
				result.textContent = "Tie";
				break;
		}
	}
});

reset.addEventListener("click", ()=>{
    computerScore = 0;
    playerScore = 0;
    player.textContent = "Your Score = 0";
    computer.textContent = "Computer Score - 0";
    result.textContent = "";
})

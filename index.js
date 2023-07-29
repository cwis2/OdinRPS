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

function game() {
    let playerWins = 0;
    let computerWins = 0;
    do{
        let player = prompt("Please input rock paper or scissor: ");

        switch (player.toLowerCase()) {
            case "rock":
                    switch(playRound(0,getComputerChoice())){
                        case 0:
                            console.log("You Lose, paper beats rock");
                            computerWins++;
                            break;
                        case 1:
                            console.log("You Win, rock beats scissors!");
                            playerWins++;
                            break;
                        case 2:
                            console.log("Tie");
                    }
                
                    break;
            case "paper":
                switch(playRound(1,getComputerChoice())){
                    case 0:
                        console.log("You Lose, scissors beats paper");
                        computerWins++;
                        break;
                    case 1:
                        console.log("You Win, paper beats rock!");
                        playerWins++;
                        break;
                    case 2:
                        console.log("Tie");
                }
                break;
            case "scissor":
                switch(playRound(2,getComputerChoice())){
                    case 0:
                        console.log("You Lose, rock beats scissors");
                        computerWins++;
                        break;
                    case 1:
                        console.log("You Win, scissors beats paper!");
                        playerWins++;
                        break;
                    case 2:
                        console.log("Tie");
                }
                break;
            default:
                let player = "";
                console.log("Try again");
        }
    } while (playerWins<5 && computerWins<5);
    console.log((playerWins==5)?"You Win :3":"You lose :(");
}


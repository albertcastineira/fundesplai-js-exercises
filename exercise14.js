const Options = {
    Rock: "rock",
    Paper: "paper",
    Scissors: "scissors"
};

const Messages = {
    UserWins: "User wins!",
    ComputerWins: "Computer wins!",
    Tie: "Tie!"
};

const Player = {
    Computer: "Computer",
    User: "User"
}

let userScore = 0;
let computerScore = 0;
let currentRound = 0;

let lastUserOption = "";
let lastComputerOption = "";

function playGame(userOption,computerOption) {
    currentRound++;
    if(userOption == computerOption) {
        userScore++;
        computerScore++;
        return Messages.Tie;
    } else if(userOption == Options.Rock) { // Rock

        if(computerOption == Options.Scissors) {
            userScore++;
            return Messages.UserWins;
        } else if(computerOption == Options.Paper) {
            computerScore++;
            return Messages.ComputerWins;
        }
    } else if(userOption == Options.Paper) { // Paper
        
        if(computerOption == Options.Scissors) {
            computerScore ++;
            return Messages.ComputerWins;
        } else if(computerOption == Options.Rock) {
            userScore++;
            return Messages.UserWins;
        }
    } else if(userOption == Options.Scissors) { // Scissors
        
        if(computerOption == Options.Paper) {
            userScore++;
            return Messages.UserWins;
        } else if(computerOption == Options.Rock) {
            computerScore++;
            return Messages.ComputerWins;
        }
    }

}

function getRandomOption() {
    let random = Math.floor(Math.random() * 3) + 1
    switch (random) {
        case 1:
            return Options.Rock;
            break;
        case 2:
            return Options.Paper;
            break;
        case 3:
            return Options.Scissors;
            break;

        default:
            break;
    }
}

function getIconFromOption(option) {
    switch (option) {
        case Options.Rock:
            return `<i style="color: #ffe392; font-size: 1.5em" class="fa-solid fa-hand-back-fist"></i>`;
            break;
        case Options.Paper:
            return `<i style="color: #ffe392; font-size: 1.5em" class="fa-solid fa-hand"></i>`;
            break;
        case Options.Scissors:
            return `<i style="color: #ffe392; font-size: 1.5em" class="fa-solid fa-hand-scissors"></i>`;
            break;
        default:
            break;
    }
}

function writeGameLog(message,userOption,computerOption,round) {
    let box = `
        <div id="Log${round}" class="gameLog">
            <p><strong><i class="fa-solid fa-hashtag"></i> Round ${round}</strong> ${getIconFromOption(userOption)} VS ${getIconFromOption(computerOption)} <i class="fa-solid fa-right-long"></i> ${message}</p>
        </div>
    `;
    $("main").prepend(box);
}

function updateScoreboard() {
    $("#userScoreText").text(userScore);
    $("#computerScoreText").text(computerScore);
}

// Rock Btn
$("#rockBtn").on("click", function() {
    lastUserOption = Options.Rock;
    lastComputerOption = getRandomOption();
    let message = playGame(lastUserOption,lastComputerOption);
    writeGameLog(message,lastUserOption,lastComputerOption,currentRound);
    updateScoreboard();
});

// Paper Btn
$("#paperBtn").on("click", function() {
    lastUserOption = Options.Paper;
    lastComputerOption = getRandomOption();
    let message = playGame(lastUserOption,lastComputerOption);
    writeGameLog(message,lastUserOption,lastComputerOption,currentRound);
    updateScoreboard();
});

// Scissors Btn
$("#scissorsBtn").on("click", function() {
    lastUserOption = Options.Scissors;
    lastComputerOption = getRandomOption();
    let message = playGame(lastUserOption,lastComputerOption);
    writeGameLog(message,lastUserOption,lastComputerOption,currentRound);
    updateScoreboard();
});
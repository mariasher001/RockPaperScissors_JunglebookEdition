var userScore = 0;
var PcScore = 0;
const humanScore = document.getElementById("humanScore");
const grizzlyScore = document.getElementById("grizzlyScore");
const heading2 = document.getElementById("heading2");
const heading_div = document.getElementById("heading");
const button_div = document.getElementById("startButton");
const body = document.getElementById("body");
const page2 = document.getElementById("page2");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const img1 = document.getElementById("img1");

button_div.addEventListener('click', function () {
    heading_div.style.opacity = "0";
    button_div.style.opacity = "0";
    button_div.style.pointerEvents = "none";

    body.style.backgroundImage = "url('jungle2.jpg')";
    page2.style.opacity = "1";
    page2.style.pointerEvents = "all";
})

function getPcChoice() {
    const PcChoice = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return PcChoice[random];
}

function win(userChoice, PcChoice) {
    userScore++;
    humanScore.innerHTML = userScore;
    heading2.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Human Won &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
}

function lose(userChoice, PcChoice) {
    PcScore++;
    grizzlyScore.innerHTML = PcScore;
    heading2.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Grizzly Won &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
}

function draw(userChoice, PcChoice) {
    heading2.innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp It's a Draw &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
}
function game(userChoice) {
    const PcChoice = getPcChoice();
    if ((userChoice == "rock" && PcChoice == "rock") || (userChoice == "paper" && PcChoice == "paper")
        || (userChoice == "scissors" && PcChoice == "scissors")) {
        draw(userChoice, PcChoice);
    }
    else if ((userChoice == "rock" && PcChoice == "scissors") || (userChoice == "paper" && PcChoice == "rock")
        || (userChoice == "scissors" && PcChoice == "paper")) {
        win(userChoice, PcChoice);
    }
    else if ((userChoice == "rock" && PcChoice == "paper") || (userChoice == "paper" && PcChoice == "scissors")
        || (userChoice == "scissors" && PcChoice == "rock")) {
        lose(userChoice, PcChoice);
    }
}


main();

function main() {
    rock.addEventListener('click', function () {
        game("rock");

    })
    paper.addEventListener('click', function () {
        game("paper");
    })
    scissors.addEventListener('click', function () {
        game("scissors");
    })
}


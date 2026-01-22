let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const drawGame = () => {
    console.log("Game was a draw");
};

const showWinner = (userWin) => {
    if (userWin) {
        console.log("You win");
    } else {
        console.log("You lose");
    }
};

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    

    const computerChoice = genCompChoice();
    console.log("computer choice =", computerChoice);

    if (userChoice === computerChoice) {
        drawGame();
    } else {
        let userWin;

        if (userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = computerChoice === "scissors" ? false : true;
        } else {
            userWin = computerChoice === "rock" ? false : true;
        }

        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoiceId = choice.getAttribute("id");
        playGame(userChoiceId);
    });
});

/*let userScore=0;
let compScore=0;
let choices=document.querySelectorAll(".choice");
const gc=()=>{
    const options=["rock","paper","sissor"];
   const randomIdx= Math.floor(Math.random()*3)
    return options[randomIdx];
}
const playGame=()=>{
console.log("user choise= ",userChoice);
const computerChoice=genenCompChoice();
console.log("computer choise= ",computerChoice);
}
choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userChoiceId=choice.getAttribute("id");
        console.log("choice was clicked",userChoiceId);
         playGame(userChoice);
    });
});  */

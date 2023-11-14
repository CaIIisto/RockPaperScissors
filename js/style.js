let PlayerScore = 0
let PuterScore = 0
let btnS = document.querySelector('.s-button');
let btnP = document.querySelector('.p-button');
let btnR = document.querySelector('.r-button');
let PlayerChoice;
let playerScoreText = document.querySelector('.player-score');
let puterScoreText = document.querySelector('.computer-score');
let scoreMessage = document.querySelector('.score-message');


function PlayGame(){
//Computer randomly selects rock, paper, or scissors: PuterChoice
let PuterChoice;
let rand = Math.random()*3|0;
if (rand == 0) {PuterChoice = "rock";}
else if (rand ==1) {PuterChoice="paper";}
else {PuterChoice = "scissors";}
console.log("The computer has chosen "+ PuterChoice + ".");

//Restart above if PlayerChoice=PuterChoice, print "Draw! Try again."
if (PlayerChoice === PuterChoice) {
    scoreMessage.innerText = "Draw! Try Again"
}
//Scenarios that win: 
//If Player wins, give them one point

//PlayerChoice=rock and PuterChoice=scissors
else if(PlayerChoice==="rock" && PuterChoice==="scissors"){
    scoreMessage.innerText = "Congrats, you win! Rock Beats Scissors";
    PlayerScore = PlayerScore + 1;

}
//PlayerChoice=paper and PuterChoice=rock
else if(PlayerChoice==="paper" && PuterChoice==="rock"){
    scoreMessage.innerText = "Congrats, you win! Paper Beats Rock";
    PlayerScore = PlayerScore + 1;
}
//PlayerChoice=scissors and PuterChoice=paper
else if(PlayerChoice==="scissors" && PuterChoice==="paper"){
    scoreMessage.innerText = "Congrats, you win! Scissors Beats Paper";
    PlayerScore = PlayerScore + 1;
}

//Scenarios that lose: 
//If Puter wins, give them one point
//PuterChoice=rock and PlayerChoice=scissors
else if(PlayerChoice==="scissors" && PuterChoice==="rock"){
    cscoreMessage.innerText = "Sorry, you lose. Rock Beats Scissors";
    PuterScore = PuterScore + 1;
}
//PuterChoice=paper and PlayerChoice=rock
else if(PlayerChoice==="rock" && PuterChoice==="paper"){
    scoreMessage.innerText = "Sorry, you lose. Paper Beats Rock";
    PuterScore = PuterScore + 1;
}
//PuterChoice=scissors and PlayerChoice=paper
else if(PlayerChoice==="paper" && PuterChoice==="scissors"){
    scoreMessage.innerText = "Sorry, you lose. Scissors Beats Paper";
    PuterScore = PuterScore + 1;
}

playerScoreText.innerText = PlayerScore;
puterScoreText.innerText = PuterScore;

console.log("The score is now "+PlayerScore+" to "+PuterScore+".");
}

btnS.addEventListener('click',function(){
    PlayerChoice = 'scissors';
    PlayGame();
});

btnP.addEventListener('click',function(){

    PlayerChoice = 'paper';
    PlayGame();
});

btnR.addEventListener('click',function(){

    PlayerChoice = 'rock';
    PlayGame();
});

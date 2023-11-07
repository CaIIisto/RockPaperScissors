let PlayerScore = 0
let PuterScore = 0

function PlayGame(){
//Prompt user for rock, paper, or scissors: PlayerChoice
let PlayerChoice = prompt("Choose rock, paper, or scissors: ");
//Take input and force lowercase
PlayerChoice = PlayerChoice.toLowerCase();
console.log("You have chosen "+ PlayerChoice +".");

//Computer randomly selects rock, paper, or scissors: PuterChoice
let PuterChoice;
let rand = Math.random()*3|0;
if (rand == 0) {PuterChoice = "rock";}
else if (rand ==1) {PuterChoice="paper";}
else {PuterChoice = "scissors";}
console.log("The computer has chosen "+ PuterChoice + ".");

//Restart above if PlayerChoice=PuterChoice, print "Draw! Try again."
if (PlayerChoice === PuterChoice) {
    console.log("Draw! Try Again")
}
//Scenarios that win: 
//If Player wins, give them one point

//PlayerChoice=rock and PuterChoice=scissors
else if(PlayerChoice==="rock" && PuterChoice==="scissors"){
    console.log("Congrats, you win! Rock Beats Scissors");
    PlayerScore = PlayerScore + 1;
}
//PlayerChoice=paper and PuterChoice=rock
else if(PlayerChoice==="paper" && PuterChoice==="rock"){
    console.log("Congrats, you win! Paper Beats Rock");
    PlayerScore = PlayerScore + 1;
}
//PlayerChoice=scissors and PuterChoice=paper
else if(PlayerChoice==="scissors" && PuterChoice==="paper"){
    console.log("Congrats, you win! Scissors Beats Paper");
    PlayerScore = PlayerScore + 1;
}

//Scenarios that lose: 
//If Puter wins, give them one point
//PuterChoice=rock and PlayerChoice=scissors
else if(PlayerChoice==="scissors" && PuterChoice==="rock"){
    console.log("Sorry, you lose. Rock Beats Scissors");
    PuterScore = PuterScore + 1;
}
//PuterChoice=paper and PlayerChoice=rock
else if(PlayerChoice==="rock" && PuterChoice==="paper"){
    console.log("Sorry, you lose. Paper Beats Rock");
    PuterScore = PuterScore + 1;
}
//PuterChoice=scissors and PlayerChoice=paper
else if(PlayerChoice==="paper" && PuterChoice==="scissors"){
    console.log("Sorry, you lose. Scissors Beats Paper");
    PuterScore = PuterScore + 1;
}


}





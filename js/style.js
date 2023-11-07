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


}





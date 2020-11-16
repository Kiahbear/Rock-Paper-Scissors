//Kiah Nicholson-Wilcox
function generateComputerChoice() {
//generate a random number between 1 and 3
//1 = rock, 2 = paper, 3 = scissors
//the function should return the name of the computer's choice
    return Math.floor((Math.random() * 3) + 1 );
}

function PlayTheGame() {
//declare variables to hold the player choice and the computer choice
let computersChoice = (generateComputerChoice());
   if (computersChoice === 1){
        computersChoice = "Rock";
    }
    else if (computersChoice === 2){
        computersChoice = "Paper";
    }
    else if (computersChoice === 3){
        computersChoice = "Scissors";
    }
   let userChoice = (getplayerChoice()); 
   
   if ((userChoice === "Rock") && (computersChoice === "Scissors")){
        alert("Rock smashes scissors. You win.");
    }
    else if ((userChoice === "Scissors") && (computersChoice === "Paper")){
        alert("Scissors cuts paper. You win.");
    }
    else if ((userChoice === "Paper") && (computersChoice === "Rock")){
        alert("Paper wraps rock. You win.");
    }
    else if ((computersChoice === "Rock") && (userChoice === "Scissors")){
        alert("Rock smashes scissors. You lose.");
    }
    else if ((computersChoice === "Scissors") && (userChoice === "Paper")){
        alert("Scissors cuts paper. You lose.");
    }
    else if ((computersChoice === "Paper") && (userChoice === "Rock")){
        alert("Paper wraps rock. You lose.");
    }
    else if (computersChoice === userChoice){
        alert("Tie. Play again.");
    }
}


//use getElementsByName to get the form radio button values
//loop through the array to find which one is checked
//store the checked radio button's value in the variable for player choice
function getplayerChoice() {
    var radioButtons = document.getElementsByName("choice");
    var index = 0;
    while (index < radioButtons.length) {
        if (radioButtons[index].checked === true ) {
            userChoice = radioButtons[index].value;
        }
        ++index;
    }
    return userChoice;
    

    
//Call the generateComputerChoice function and store the returned value
//in the variable for computer choice


//compare the player's choice and the computer's choice to determine the winner
//rock beats scissors, scissors beat paper, paper beats rock
    
//use an alert box to tell the player who won, or if it was a tie
//when displaying the winner, display both the computer choice and the
//player choice in your message


}


// Game States
// "WIN" - Player robot has defeated all enemy-robots
// "LOSE" - Player robot's health is zero or less
//      * Fight all enemy robots
//      * Defeat each enemt robot
// let playerName = 'Lucid';
let playerName = window.prompt("what is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

console.log(playerMoney);
console.log(playerName, playerAttack, playerHealth);
console.log("You can put regular sentences in these.");

let enemyNames = ["Roberto", "Amy  Android", "Robo Trumble"];
    console.log (enemyNames);
    console.log (enemyNames[0]);
    console.log (enemyNames[1]);
    console.log (enemyNames[2]);
    console.log (enemyNames.length);
for (let i = 0; i < enemyNames.length ; i++) {
    console.log (enemyNames[i]);
    console.log (i);
    console.log (enemyNames[i] + " is at " + i + " index");
}
let enemyHealth = 50;
let enemyAttack = 12;

// fight function
let fight = function(enemyName) {

    // Altert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    // ask player if they'd like to fight or skip
    let promptFight = window.prompt(
        "Would you like to FIGHT or SKIP this battle? Enter 'Fight' or 'SKIP' to choose."
    );

     // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by substracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. "
        );

    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died! ");
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left. ");
    }

    // remove player's healthy by substracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + " ." + playerName + " now has " + playerHealth + " health remaing. "
    );

    // check player's health
    if (playerHealth <= 0) {
        window.alert (playerName + " has died! ");
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left. ");
    }
    // if player choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    let confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes(ture), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye! ");
    // substract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
    }
    // if no(false), ask question again by running fight() again
    else{
        fight();
    }
    // if player did not chose 1 or 2 in prompt
} else {
    window.alert ("You need to pick a vaild option. try again!");
}
};


// run fight funtion to start game
    for(let i = 0; i < enemyNames.length; i++ ) {
        fight(enemyNames[i]);
    }
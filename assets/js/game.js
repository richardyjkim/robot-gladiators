let playerName = window.prompt("what is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

let enemyNames = ["Roberto", "Amy  Android", "Robo Trumble"];
let enemyHealth = 50;
let enemyAttack = 12;
 
    console.log (enemyNames);
    console.log (enemyNames[0]);
    console.log (enemyNames[1]);
    console.log (enemyNames[2]);
    console.log (enemyNames.length);

// fight function (now with parameter for enemy's name)
let fight = function(enemyName) {
    // repeat and execute as long as the enemy-robot is alive
    while(enemyHealth > 0 && enemyHealth > 0) {
        // ask player if they'd like to fight or skip
        let promptFight = window.prompt(
        "Would you like to FIGHT or SKIP this battle? Enter 'Fight' or 'SKIP' to choose."
        );

        // if player choses to skip
        if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
            let confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes(ture), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye! ");
                // substract money from playerMoney for skipping
                playerMoney = playerMoney - 2;
        
   
                break;
            } 
        }       

        // remove enemy's health by substracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log (
            playerName + ' attacted ' + enemyName + '. ' +enemyName + ' now has ' + enemyHealth + ' health remaining.'
        );

        // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + ' has died!');
  
        // award player money for winning
        playerMoney = playerMoney + 20;
  
        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
      }
  
      // remove players's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
      );
  
      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + ' has died!');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerName + ' still has ' + playerHealth + ' health left.');
      }
    }
};
// fight each enemy-robot bt looping over them and fight them one at a time
for(let i = 0; i < enemyNames.length; i++ ) {
// if player is still alive, keep fighting
    if (playerHealth > 0) {
        // let player know what round they are in, remember that arrays start at 0 so it needs to have added to it
        window,alert ('Welcome to Robot Gladiators! Round' + ( i + 1));

        // picked new enemy to fight based on the index of the enemyNames array
        let pickedEnemyName = enemyNames[i];

        // reset enemyHealth before starting new fight
        // enemyHelath = 50;

        // use debugger to pause script from running and check what's going on at the moment in that moment in the code
        debugger;
        
        // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
        fight(pickedEnemyName);   
    }
        // if player isn't alive, stop the game
    else {
        window.alert ('you have lost your robot in battle! Game Over!');
    }
}
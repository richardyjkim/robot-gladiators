let playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

let enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
let enemyHealth = 50;
let enemyAttack = 12;

let randomNumber = function(min, max) {
  let value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

// function to start a new game
let startGame = function() {
  // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  // fight each enemy robot by looping over them and fight them one at a time
  for (let i = 0; i < enemyNames.length; i++) {
    // if player is still alive, keep fighting
    if (playerHealth > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have added to it
      window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

      // pick new enemy to fight based on the index of the enemyNames array
      let pickedEnemyName = enemyNames[i];

      // reset enemyHealth before starting new fight
      enemyHealth = randomNumber(40, 60);
      let damage = randomNumber(playerAttack - 3, playerAttack);

      enemyHealth = Math.max(0, enemyHealth - damage);
    
      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyName);

      // if player is still alive and we're not at the last enemy in the array
      if (playerHealth > 0 && i < enemyNames.length - 1) {
        shop();
      }
    }
    // if player is not alive, break out of the loop and let endGame function run
    else {
      break;
    }
  }

  // after loop ends, we are either out of playerHealth or enemies to fight, so run the endGame function
  endGame();
};

// function to end the entire game
let endGame = function() {
  window.alert("The game has now ended. let's see how you did!");

  // if player is still alive, player wins!
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + '. ');
  } else {
    window.alert("You've lost your robot in battle!");
  }

  // ask player if they'd like to play again
  let playAgainConfirm = window.confirm('Would you like to play again?');

  if (playAgainConfirm) {
    startGame();
  } else {
    window.alert('Thank you for playing Balttlebots! Come back soon!');
  }
};

// fight function (now with parameter for enemy's name)
let fight = function(enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight ot tun
    let promptFight = window.prompt ('Would you like to FIGHT ot SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
        
    //if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      let confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes(ture), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye! ");
        // substract money from playerMoney for skipping
        playerMoney = Math.max(0, playerMoney - 10);
        shop();
        break;
      }
    } 

    // remove enemy's health by substracting the amount set in the playerAttack letiable
    enemyHealth = Math.max(0, enemyHealth - playerAttack);
    console.log (
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');
  
      // award player money for winning
      playerMoney = playerMoney + 20;
  
      // ask player want to use the store before next round
      let storeConfirm = window.confirm('The fight is over, visit the store before the next round?');

      // if yes, take them to the store() function
      if (storeConfirm) {
        shop();
      }

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }
    
    // remove players's health by subtracting the amount set in the enemyAttack letiable
    playerHealth = Math.max(0, playerHealth - enemyAttack);
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

// go to shop between battles function
let shop = function(){
  // ask player waht they'd like to do
  let shopOptionPrompt = window.prompt(
    'Would you liek to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one "REFILL", "UPGRADE", "LEAVE" to make a choice'
  );

  // use switch case to carry out action
  switch (shopOptionPrompt) {
    case 'refill':
    case 'REFILL':
      window.alert("Refilling player's health by 20 for 7 dollars.");
      playerHealth += 20;
      playerMoney -= 7;
      break;
    case 'upgrade':
    case 'UPGRADE':
      window.alert("Upgrading player's attact by 6 for 7 dollars.");
      playerAttack += 6;
      playerMoney -= 7;
      break;
    case 'leave':
    case 'LEAVE':
      window.alert("Leaving the store.");
      break;
    default:
      window.alert('you did not pick a valid option. Try again.');
      shop();
      break;
  }
};
// start first game when page loads
startGame();

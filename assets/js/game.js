/* GAME FUNCTIONS */ 

// function to start a new game
let startGame = function() {
  // reset player stats
  playerInfo.reset();

  // fight each enemy robot by looping over them and fight them one at a time
  for (let i = 0; i < enemyInfo.length; i++) {
    // if player is still alive, keep fighting
    if (playerInfo.health > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have added to it
      window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

      // pick new enemy to fight based on the index of the enemyInfo array
      let pickedEnemyObj = enemyInfo[i];

      // reset enemy before starting new fight
      pickedEnemyObj.health = randomNumber(40, 60);
      
      console.log(pickedEnemyObj);
    
      // pass the pickedEnemyName letiable's value into the fight function, where it will assume the value of the enemy.name parameter
      fight(pickedEnemyObj);
    }  
      // if player is still alive and we're not at the last enemy in the array
    else {
      break;
    }
  }

  // after loop ends, we are either out of playerInfo.health or enemies to fight, so run the endGame function
  endGame();
};

// function to end the entire game
let endGame = function() {
  window.alert("The game has now ended. let's see how you did!");

  // if player is still alive, player wins!
  if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + '. ');
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
let fight = function(enemy) {
  while (playerInfo.health > 0 && enemy.health > 0) {
    // ask player if they'd like to fight ot tun
    let promptFight = window.prompt ('Would you like to FIGHT ot SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
        
    //if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      let confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes(ture), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye! ");
        // substract money from playerInfo.money for skipping
        playerMoney = playerMoney - 10;
        shop();
        break;
      }
    } 

    let damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    // remove enemy's health by substracting the amount set in the playerInfo.attack letiable
    enemy.health = Math.max(0, enemy.health - damage);
    console.log (
      playerInfo.name + 
      ' attacked ' + 
      enemy.name + 
      '. ' + 
      enemy.name +
      ' now has ' + 
      enemy + 
      ' health remaining.'
    );

    // check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + ' has died!');
  
      // award player money for winning
      playerInfo.money = playerInfo.money + 20;
  
      // ask player want to use the store before next round
      let storeConfirm = window.confirm('The fight is over, visit the store before the next round?');

      // if yes, take them to the store() function
      if (storeConfirm) {
        shop();
      }

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
    }
    
    let damage = randomNumber(enemy.attack - 3, enemy.attack);

    // remove players's health by subtracting the amount set in the enemy.attack letiable
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(
      enemy.name + 
      ' attacked ' + 
      playerInfo.name + 
      '. ' + 
      playerInfo.name + 
      ' now has ' + 
      playerInfo.health + 
      ' health remaining.'
    );
  
    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
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
      playerInfo.refillHealth();
      break;
    case 'upgrade':
    case 'UPGRADE':
      playerInfo.upgradeAttack();
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

// function to generate a random numeric value
let randomNumber = function(min, max) {
  let value = Math.floor(Math.random() * (max - min) + min);

  return value;
};
// END GAME FUNCTIONS

// GAME INFORMATION / letIABLES

// PLAYER INFO
let playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.attack = 10;
    this.money = 10;
  },
  refillHealth: function () {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
  },
  upgradeAttack: function (){
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -=7;
  }
};

// enemy information
let enemyInfo = [
  {
    name: 'Roborto',
    attack: randomNumber(10, 14)
  },
  {
    name: 'Amy Android',
    attack: randomNumber(10, 14)
  },
  {
    name: 'Robo Trumble',
    attack: randomNumber(10, 14)
  }
];

console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyInfo[0].name);
console.log(enemyInfo[0]['attack']);

// start first game when page loads
startGame();

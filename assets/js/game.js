/* GAME FUNCTIONS */ 

// function to start a new game
var startGame = function() {
  // reset player stats
  playerInfo.reset();

  // fight each enemy robot by looping over them and fight them one at a time
  for (var i = 0; i < enemyInfo.length; i++) {
    // check player stats
    console.log(playerInfo);

    // if player know what round they are in, remember that arrays start at 0 so it need to hav 1 added to it
    if (playerInfo.health > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have added to it
      window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

      // pick new enemy to fight based on the index of the enemyInfo array
      var pickedEnemyObj = enemyInfo[i];

      // reset enemy before starting new fight
      pickedEnemyObj.health = randomNumber(40, 60);
      
      console.log(pickedEnemyObj);
    
      // pass the pickedEnemyName letiable's value into the fight function, where it will assume the value of the enemy.name parameter
      fight(pickedEnemyObj);
    
      // if player is still alive and we're not at the last enemy in the array
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        // ask if player wants to use the store before next round
        let storeConfirm = window.confirm("This fight is over, visit the store before the next round");
        
        // if yes, take them to the store() function
        if (storeConfirm) {
          shop();
        }
      }
    }
    // if player is not alive, break out of the loop and let endGame function run
    else {
      break;
    }
  }

  // after loop ends, we are either out of playerInfo.health or enemies to fight, so run the endGame function
  endGame();
};

// function to end the entire game
var endGame = function() {
  window.alert("The game has now ended. var's see how you did!");

  // if player is still alive, player wins!
  if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + '. ');
  } else {
    window.alert("You've lost your robot in battle!");
  }

  // ask player if they'd like to play again
  var playAgainConfirm = window.confirm('Would you like to play again?');

  if (playAgainConfirm) {
    startGame();
  } else {
    window.alert('Thank you for playing Balttlebots! Come back soon!');
  }
};

// fight function (now with parameter for enemy's object holding name, health, and attack value)
var fight = function(enemy) {
  // keep track of who goes first
  let isPlayerTurn = true;

  // randomly change of who goes first
  if (Math.random() > 0.5) {
    isPlayerTurn = false
  }

  while (playerInfo.health > 0 && enemy.health > 0) {
    if (isPlayerTurn) {
    // ask player if they'd like to fight or skip using fightOrskip function
    if (fightOrSkip()) {
      // if true, leave fight by breaking loop
      break;
    }
    let damage = randomNumber(playrInfo.attack - 3, playerInfo.attack);

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
        // leaving while() loop if player is dead

        // award player money for winning
         playerInfo.money = playerInfo.money + 20;
    
        break;
      } else {
         window.alert(player.name + "still has " + playerInfo.health + " health left.");
      } 

      // player gets attacked first
    } else { 
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
        window.alert(playerInfo.name + "has died!") ;
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
      }
    }
    // switch turn order for next round
    isPlayerTurn = !isPlayerTurn;
  }
};

// go to shop between battles function
var shop = function(){
  // ask player waht they'd like to do
  var shopOptionPrompt = window.prompt(
    'Would you liek to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one "REFILL", "UPGRADE", "LEAVE" to make a choice'
  );

  // convert answer from prompt to an actual number
  shopOptionPrompt = parseInt(shopOptionPrompt);
  
  // use switch case to carry out action
  switch (shopOptionPrompt) {
    case 1:
      playerInfo.refillHealth();
      break;
    case 2:
      playerInfo.upgradeAttack();
      break;
    case 3:
      window.alert("Leaving the store.");
      break;
    default:
      window.alert('you did not pick a valid option. Try again.');
      shop();
      break;
  }
};

// function to set name
let getPlayerName = function() {
  let name = "";
  name = prompt("What is your robot's name?");

  while (name === "" || name === null);{
  }
  console.log("Yout robot's name is " + name);
  return name;
};
// function to generate a random numeric value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min) + min);

  return value;
};

// function to check if player wants to fight or skip
let fightOrSkip = function() {
  // ask player if they'd like to fight or run
  let promptFight = window.prompt ("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")
    
  // validate prompt answer!
    if (promptFight === "" || promptFight === null) {
      window.alert("You need to provide a valid answer! Please try again");
      // use return to call it again and stop the rest of this function from running
      return fightOrSkip();
    }
    
    // convert promptFight to all lowercase so we can sheck with less options
    promptFight = promptFight.toLowerCase

    if (promptFight === "skip") {
      // confirm player wants to skip
      window.alert("You need to provide a valid answer! Please Try again.");
      return fightOrSkip();
    }

    //if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes(ture), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye! ");
        // substract money from playerInfo.money for skipping
        playerMoney = Math.max(0, playerInfo.money - 10);
        
        // return true if player wants to leave
        return true;
    }
  } 
  return false;
};


// END GAME FUNCTIONS

// GAME INFORMATION / letIABLES

// PLAYER INFO
// function to set name
var playerInfo = {
  name: getPlayerName,
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
var enemyInfo = [
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


// start first game when page loads
startGame();

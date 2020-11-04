/**
 * DOM Adventure Game
 */

document.querySelector('#game').textContent = 'DOM Adventure Game';

const input = document.getElementById("startInput");
input.addEventListener("keyup", function(start) {
    if (event.keyCode === 13)
        event.preventDefault();
}

//This is for later in the game so JS doesn't think you equipped the paintball gun
    let pbEquipped = false;
//Upon death, display this scene
const death = function(cause) {
console.log(cause);
console.log("\nGame over. Try again?\n");
}

//Player Spawn Point
const start = function() {
console.log("You wake up and go about your morning routine.");
console.log("You sit down and turn on the news.");

//Player Input 1
const choice = prompt
("\nWill you have pancakes or waffles for breakfast?\n");

//Input Choices 1
if (choice === "waffles")  {
return newsRoom();
}
else if (choice === "pancakes") {
return foodChoke();
}
else {
  console.log("Sorry, I didn't quite understand that.");
  return start();
}
}

// Choke scene
const foodChoke = function() {
console.log("\nYou begin eating the pancake.");
console.log("The syrup allows it to slide down your throat and goes down your windpipe.");
return death("\nYou choked to death. All because you didn't cut the pieces small enough.");
}

//News scene
const newsRoom = function() {
console.log("\nYou sit down and enjoy your waffle. While eating, you notice a strange topic on the news, as if 2020 couldn't get any worse.");
console.log("\nThe news reporter is live in the city, and is talking about people being infected with a virus.");
console.log("\nThis is nothing like Coronavirus, they say. This is turning people into full blown ZOMBIES!");
console.log("\nThe broadcast is then cut off after the reporter is attacked by one of these zombies.");

//Player Prompt 2
const choice = prompt("\nWhat will you do: Go about your day as usual, leave the area, or prepare for the worst?")

//Player Input 2
if (choice === "go about my day normally") {
  return normalRoom();
}
else if (choice === "leave the area") {
  return weaponRoom();
}
else if (choice === "prepare for the worst") {
  console.log("\nYou go into your panic room full of all of the food, water, and medicine you would need to stay there for a whole year.");
  console.log("With these supplies, you simply wait out this zombie apocalypse.")
  console.log("\nCongratulations! You have won.");
  console.log("\nYou got the : Panic Room Ending");
}
else {
  console.log("Sorry, I didn't quite understand that.");
  return newsRoom();
}
}

//Normal Day scene
const normalRoom = function() {
return death("\nYou go about your day as usual, until zombies break into your house and eat you alive.");
}

//Weapon scene
const weaponRoom = function() {
console.log("\nAs you are about to leave, you decide that it might be a good idea to bring a weapon with you.");
console.log("\nYou find a Baseball Bat, Survival Knife, Paintball Marker, and the Infinity Gauntlet.");

//Player Prompt 3
  const choice = prompt
  ("\nWhich weapon will you take with you?");

//Player Input 3
  if (choice === "infinity gauntlet"){
      console.log("\nYou take the Infinity Gauntlet and snap your fingers to turn everything back to normal.");
      console.log("\nNo more COVID, no more wildfires, no more wars, no more poverty, and no more zombies.");
      console.log("\nHowever, you could not handle the power of the Infinity Gauntlet and suffered the same fate as Iron Man.");
      console.log("\nCongratulations! You have won.");
      console.log("\nYou got the: Ultimate Sacrifice Ending");
  }
  else if (choice === "baseball bat") {
    console.log("\nYou take the baseball bat.");
    return fightRoom();
  }
  else if (choice === "paintball marker") {
    console.log("\nYou take the paintball marker.");
    pbEquipped = true;
    return fightRoom();
  }
  else if (choice === "survival knife") {
    console.log("\nYou take the survival knife.");
    return fightRoom();
  }
  else {
  console.log("Sorry, I didn't quite understand that.");
  return (weaponRoom);
}
}

//Fight scene
const fightRoom = function() {
console.log("\nBAM! A zomie just broke down your front door.");

//Player Prompt 4
  const choice = prompt("\nWill you fight the zombie or run?");

//Player Choices 4
  if (choice === "run away") {
    console.log("\nThe zombie was faster than you. It pounced on top of you and bit you. If only you had gone on the treadmill a bit more.");
    return death();
  }
  else if (pbEquipped == false && choice === "fight it") {
    console.log("\nYou use your weapon of choice to bring the zombie down.");
    return carRoom();
  }
  }
  if (pbEquipped == true && choice === "fight it") {
    console.log("\nYou shot the zombie, but that hardly slowed him down. You shouldn't have picked something non-lethal.");
  }
  else {
  console.log("You got confused and the zombie bit you.");
  }

//Car scene
const carRoom = function() {
console.log("\nAfter surviving that encounter with the zombie, you run outside and start up your car.");

//Player prompt 5
const choice = prompt("\nWhere will you go? City, Military Base, or Rural?");

//Player Choices
  if (choice === "city") {
    console.log("\nDo I have to explain why this is a bad idea?");
    return death();
  }
  if (choice === "rural") {
    console.log("\nYou drive up to the rural area, and your car breaks down in the middle of nowhere.");
    console.log("\nThe second you get out of your car, you get ambushed by some thugs who want everything you have.");
    return robberyRoom();
  }
  if (choice === "military base") {
    console.log("\nYou drive to the military base. The guards stop you and search your vehicle.");
    console.log("\nThey confiscate whatever weapon you brought with you and place you under arrest.");
    return enlistmentRoom();
  }
}

//Enlistment scene
const enlistmentRoom = function() {
console.log("\nHowever, because of the outbreak, they offer to drop all charges as long as you join the military to help with the war against zombiekind.");

//Player prompt 6
const choice = prompt("\nWill you join the military or will you face the punishment for your crime?");

//Player Choices 6
  if (choice === "join the military") {
    console.log("\nYou join the military and become a hero in the fight against zombies.");
    console.log("\nCongratulations! You have won.");
    console.log("\nYou got the: War Hero Ending");
  }
if (choice === "face punishment") {
  console.log("\nYou go to prison for your crime, and the virus spreads to the prison you are in. You are one of the victims.");
  return death();
}
}

//Robbery scene
const robberyRoom = function() {
console.log("\nThere are much more of them than there are of you.")

//Player prompt 7
const choice = prompt("\nWill you let them take your stuff or will you fight?");

//Player Choices 7
  if (choice === "let them") {
    console.log("\nThey take everything you have, including your weapon. They then kidnap you for a ransom.");
    return death();
  }
  else if (choice === "fight back") {
    console.log("\nYou fight them, and by a miracle, you won.")
    console.log("\nAlthough you survived with multiple injuries, you got a doctor to treat you.");
    return afterRoom();
  }
}

//Aftermath scene
const afterRoom = function() {
console.log("\nAfter seeking treatment, you wonder what to do now that you're away from the zombies.");

//Player prompt 8
const choice = prompt("\nWhat will you do now that the zombie threat is gone? Will you start a new life in Rural or will you go back to fight the virus?");

//Player choices 8
  if (choice === "start a new life") {
    console.log("\nYou find someone that you love to start a family with and live peacefully with, never to worry about the zombie threat ever again.");
    console.log("\nYou and your family wait out the outbreak in your new home, and life will never be the same. But at least you survived and had beautiful children.");
    console.log("\nCongratulations! You have won.");
    console.log("\nYou got: the Good Ending :)");
  }
if (choice === "go back to fight") {
  console.log("\nYou go to the city to fight until your last breath.");
  console.log("\nAlthough you eventually succumbed to the virus yourself, you left your mark on history by being a major factor in taking back the City.");
  console.log("\nCongratulations! You have won... Kind of.");
  console.log("\Even though you died, you got: the Selfless Ending");
}
}

//Thank you for playing. I worked and thought very hard about this.

// Game starts in 3... 2... 1... GO!
start();

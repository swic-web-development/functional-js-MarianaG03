// Basic numbers array for example
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

//Understandin the modulu operator

5 % 2; //1
4 % 2; //0

//Putting Filters and Modulus Together
const oddNumbers = numbers.filter((number) => number % 2);
console.log(oddNumbers);
//Exercise
const players = [
	{ name: "DoomGuy", frags: 25, deaths: 0 },
	{ name: "Slayer", frags: 25, deaths: 1 },
	{ name: "Marine", frags: 12, deaths: 15 },
	{ name: "Noob", frags: 0, deaths: 25 },
];

const playersWithMoreFragsThanDeaths = players.filter(
	(player) => player.frags > player.deaths,
);
//Console will log the players with more frags than deaths useing the greater than operator to show more frage than deaths.
// If More frags boolean is true, the player will be logged.
console.log(playersWithMoreFragsThanDeaths);

//Reduce Method
// basically it is takin gthe sum of the first number and adding it to the next number in the array and so on.
//Reduce example with players array
//Will add up the total frags of all players in the array
const TotalFrags = players.reduce((total, player) => {
	return total + player.frags;
}, 0);
console.log(TotalFrags);

//usong the find method i learned this on wednesday!
const moreFragsThanDeaths = players.find(
	(player) => player.frags > player.deaths,
);
console.log(moreFragsThanDeaths);
//will sort through the array and find the first player with more frags than deaths.

//Some Method
const fragsPLayed = players.some((player) => player.frags);
console.log(fragsPLayed);
//Will return true if any player has frags, if not it will return false.

//Every Method
const playersWithMoreFraqsThanDeaths = players.every(
	(player) => player.frags > player.deaths,
);
console.log(playersWithMoreFraqsThanDeaths);
//Will return true if all players have more frags than deaths, if not it will return false.
// this is more general than the some method.

//sort method
const sortedPlayersbyFrags = players.sort((a, b) => b.frags - a.frags);
console.log(sortedPlayersbyFrags);
//Will sort the players by frags in descending order.

// Coding Challenge!!

//Coding Challenge 1

//Thought Proceess the first thing i did was to think of the formula that would get the Total cost of the Backpack. Then i went back through the array methods and found the reduce method that would be able to add up the total cost of the backpack. I then used the reduce method to add up the total cost of the backpack.
const backpackFullOfAmmo = [
	{ item: "bullets", quantity: 10, priceEa: 0.5 },
	{ item: "shotgun shells", quantity: 4, priceEa: 0.5 },
	{ item: "rockets", quantity: 1, priceEa: 5.0 },
	{ item: "energy cell units", quantity: 20, priceEa: 0.2 },
];
const totalCost = backpackFullOfAmmo.reduce(
	(total, item) => total + item.quantity * item.priceEa,
	0,
);
console.log(totalCost);

//Coding Challenge 2

//array
const monsters = [
	// Deals 10-60 damage per bite
	{ name: "Cacodemon", health: 400, damage: 35 },

	// Deals 15-75 damage per claw/fireball
	{ name: "Baron of Hell", health: 1000, damage: 45 },

	// Deals 20-200 damage per rocket
	{ name: "Cyberdemon", health: 4000, damage: 125 },

	// Deals 5-50 damage per bite
	{ name: "Hell Knight", health: 800, damage: 25 },

	// Deals 10-100 damage per bite
	{ name: "Imp", health: 200, damage: 20 },

	// Deals 5-25 damage per bite
	{ name: "Lost Soul", health: 100, damage: 10 },

	// Deals 5-50 damage per bite
	{ name: "Pinky", health: 300, damage: 15 },

	// Deals 10-100 damage per bite
	{ name: "Revenant", health: 500, damage: 30 },

	// Deals 5-50 damage per bite
	{ name: "Spectre", health: 200, damage: 20 },

	// Deals 5-50 damage per bite
	{ name: "Spider Mastermind", health: 2000, damage: 50 },

	// Deals 5-50 damage per bite
	{ name: "Vile", health: 1000, damage: 40 },

	// Deals 5-50 damage per bite
	{ name: "Zombie", health: 100, damage: 5 },

	// Deals 5-50 damage per bite
	{ name: "Zombieman", health: 200, damage: 10 },
];

// Use map to create an array of monster names
const monsterNames = monsters.map((monster) => monster.name);
console.log("Monster Names:", monsterNames);

//Filter Method to find monsters with more than 150 health
const strongMonsters = monsters.filter((monster) => monster.health > 150);
console.log("Strong Monsters:", strongMonsters);

//Reduce Methos For Total Damage
const totalDamage = monsters.reduce(
	(total, monster) => total + monster.damage,
	0,
);
console.log("Total Damage:", totalDamage);

// Use sort to arrange monsters from highest to lowest damage
const sortedByDamage = [...monsters].sort((a, b) => b.damage - a.damage);
console.log("Monsters Sorted by Damage (Highest to Lowest):", sortedByDamage);

var Monster = { name: "Kelly", 
				strength: 8, 
				dexterity: 7, 
				constitution: 10, 
				wisdom: 12, 
				intelligence: 18, 
				charisma: 15 }

console.log(Monster);

var Player = Object.create(Monster);
Player.playerClass = "";


console.log(Player);

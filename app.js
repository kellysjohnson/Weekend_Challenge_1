var Monster = { name:"Hamburgler",
				strength:8,
				dexterity:7,
				constitution:10,
				wisdom:12,
				intelligence:18,
				charisma:15 }

console.log(Monster);

var Hero = Object.create(Monster);
Hero.playerClass = "Cleric";

console.log(Hero);

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

/*
var addCharacter = document.getElementById("addMonster");
addCharacter.addEventListener("click", Player());

console.log(Player);

document.getElementById('addMonster').addEventListener('click', Player)
*/


function Player (name,strength,dexterity,constitution,wisdom,intelligence,charisma,playerClass) {
	this.name = name;
	this.strength = strength;
	this.dexterity = dexterity;
	this.constitution = constitution;
	this.wisdom = wisdom;
	this.intelligence = intelligence;
	this.charisma = charisma;
	this.playerClass = playerClass;
	this.Attack = function () {
		var role = randomNumber(1, 20);
		if (playerClass == undefined) {
			this.strength += role;
			alert(this.name + "s Charater Abilities are: \n" + this.strength + " for Strength \n" + this.dexterity + " for Dexterity \n" + this.constitution + " for Constitution\n" + this.wisdom + " for Wisdom\n" + this.intelligence + " for intelligence\n" + this.charisma + " for Charisma.");
		} else {
			alert("I have an ability!") 
			this.dexterity += role;
		} 
	};
}

document.getElementById("addMonster").addEventListener('click', addCharacter);

function addCharacter(){
	var nameInput = document.getElementById(name).value;
	var strengthInput = document.getElementById(strength).value;
	var dexterityInput = document.getElementById(dexterity).value;
	var constitutionInput = document.getElementById(constitution).value;
	var wisdomInput = document.getElementById(wisdom).value;
	var intelligenceInput = document.getElementById(intelligence).value;
	var charismaInput = document.getElementById(charisma).value;
	var playerClassInput = document.getElementById(playerClass).value;
}

playerArray = [];

if ()
playerArray = playerArray.push()


var character1 = new Player(addCharacter());
var character2 = new Player("Jim", 3, 5, 6, 21, 15, 12);


playerArray = [character1, character2];

console.log(playerArray);

console.log(character1.Attack());
*/

/*
Monster.prototype = {
	Attack: function () {
		var role = randomNumber(1,20);
		if (playerClass == "undefined") {
			this.strength += role;
			alert (this.name + " has " + this.strength + " for Strength \n" + this.dexterity + "		for Dexterity \n");
		} else {
			this.dexterity += role;
		} 
	};
}
*/








 










var Monster = { name: "", 
				strength: "", 
				dexterity: "", 
				constitution: "", 
				wisdom: "", 
				intelligence: "", 
				charisma: "" };

var Player = Object.create(Monster);
Player.playerClass = "";



function Player (name,strength,dexterity,constitution,wisdom,intelligence,charisma,playerclass) {
	this.name = name;
	this.strength = strength;
	this.dexterity = dexterity;
	this.constitution = constitution;
	this.wisdom = wisdom;
	this.intelligence = intelligence;
	this.charisma = charisma;

};

playerArray = [];



Monster.prototype = {
	Attack: function () {
		var role = randomNumber(1,20);
		if (playerClass) {
			this.strength += role;
			alert (characters.name + " has " + characters.strength + " for Strength \n" + characters.dexterity + "		for Dexterity \n");
		} else {
			this.dexterity += role;
		} 
	};
}

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);


var Monster = 








console.log(document.getElementById('addMonster').addEventListener('click', Player));

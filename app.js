
var Monster = {
	name:"",
	strength: "",
	dexterity: "",
	constitution: "",
	wisdom: "",
	intelligence: "",
	charisma: "" }

var Player = function() {
	Object.create(Monster);
	player.playerClass = playerClass;
}


function Player (name,strength,dexterity,constitution,wisdom,intelligence,charisma,playerclass) {
	this.name = name;
	this.strength = strength;
	this.dexterity = dexterity;
	this.constitution = constitution;
	this.wisdom = wisdom;
	this.intelligence = intelligence;
	this.charisma = charisma;

}

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
	}

}

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);


var Monster = 








document.getElementById('addMonster').addEventListener('click', <functionNameGoesHere>)
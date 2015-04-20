function add (){
	var a = 8;
	var b = 12;
	var c = a*b;
	var d = b-a;
	return c;
	return d;
}

console.log(add());


/*
var Monster = { name: "tryOut",
				strength: 8, 
				dexterity: 7, 
				constitution: 10, 
				wisdom: 12, 
				intelligence: 18, 
				charisma: 15 }

/*
var Player1 = new Player ("Kelly", 8, 6, 5, 10, 11, 13);
var Player2 = new Player ("Jim", 3, 5, 6, 21, 15, 12);


playerArray = [Player1, Player2];

console.log(playerArray);


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
	if (this.playerClass) {
		this.playerClass = playerClass;
	} 

};

console.log(Player);

/*
Monster.prototype = {
	Attack: function () {
		var role = randomNumber(1,20),
			this.strength += role;
			alert (playerArray.name + " has " + playerArray.strength + " for Strength \n" + playerArray.dexterity + "		for Dexterity \n");
		};
	}

console.log(Monster.Attack());


console.log()
*/

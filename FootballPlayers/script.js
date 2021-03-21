// Players constructor
function Players(name, lastName, age, dressNumber, position, picture){
	this.name = name;
	this.lastName = lastName;
	this.age = age;
	this.dressNumber = dressNumber;
	this.position = position;
	this.picture =  "./img/" + picture;
}

// Create players
var borjan = new Players("Milan", "Borjan", 30, 82, "Goalkeeper", "borjan.jpg");
var stojkovic = new Players("Filip", "Stojkovic", 26, 30, "Defender", "stojkovic.jpg");
var savic = new Players("Vujadin", "Savic", 29, 90, "Defender", "savic.jpg");
var gobelja = new Players("Marko", "Gobeljic", 27, 77, "Defender", "gobeljic.jpg");
var babic = new Players("Srdjan", "Babic", 23, 15, "Defender", "babic.jpg")
var jovicic = new Players("Branko", "Jovicic", 26, 3, "Midfielder", "jovicic.jpg");
var jovancic = new Players("Dusan", "Jovancic", 29, 29, "Midfielder", "jovancic.png");
var jevtovic = new Players("Milan", "Jevtovic", 26, 33, "Midfielder", "jevtovic.png");
var marin = new Players("Marko", "Marin", 30, 17, "Midfielder", "marin.png");
var pavkov = new Players("Milan", "Pavkov", 25, 9, "Forward", "pavkov.png");
var joveljic = new Players("Dejan", "Joveljic", 30, 28, "Forward", "joveljic.jpg");
var rodic = new Players("Milan", "Rodic", 28, 23, "Defender", "rodic.jpg");
var milunovic = new Players("Nemanja", "Milunovic", 31, 19, "Defender", "milunovic.png");
var hajdin = new Players("Stefan", "Hajdin", 25, 34, "Defender", "hajdin.png");
var gajic = new Players("Milan", "Gajic", 23, 2, "Midfielder", "gajic.png");

// Team object
var team = {
	teamLogo: "./img/logo.png",
	teamName: "Red Star",
	players: [borjan, stojkovic, savic, gobelja, babic, jovicic, jovancic, jevtovic, marin, pavkov, joveljic, rodic, milunovic, hajdin, gajic]
}



var firstSquad = document.getElementById("first-squad");
var substitute = document.getElementById("substitutes");

function addLogo() {
var logo = document.createElement("img");
var header = document.querySelector("header")
logo.setAttribute("src", team.teamLogo);
header.prepend(logo);

}
function addTitle() {
var title = document.createElement("h1");
var main = document.querySelector("main");
title.textContent = team.teamName;
title.setAttribute("src", team.teamLogo);
main.prepend(title);

}
function getRandomNumber(array) {
return Math.round(Math.random() * (array.length -1))
}
function addPlayers() {
while(team.players.length){
var randomPlayer = getRandomNumber(team.players);
var player = createPlayer(team.players[randomPlayer]);
var container = team.players.length > 4 ? firstSquad : substitutes;
container.appendChild(player);
team.players.splice(randomPlayer,1);
}

}

function createPlayer(playerData) {
var player = document.createElement("div");
var image = '<img src="' + playerData.picture + '">';
var name = '<span>Name:' + playerData.name + ' ' + playerData.lastName + '</span>';
player.innerHTML = image + name;
return player;

}
function makeSubstitutes() {
var firstSquadPlayers = firstSquad.querySelectorAll("div");
var substitutePlayers = substitute.querySelectorAll("div");

var firstPlayer = firstSquadPlayers[getRandomNumber(firstSquadPlayers)];
var substitutePlayer = substitutePlayers[getRandomNumber(substitutePlayers)];

var prevSubstitutePlayer = substitutePlayer.previousSibling;
var nextSubstitutePlayer = substitutePlayer.nextSibling;

firstPlayer.before(substitutePlayer);
prevSubstitutePlayer ? prevSubstitutePlayer.after(firstPlayer) : nextSubstitutePlayer.before(firstPlayer);


}
addLogo();
addTitle();
addPlayers();
setInterval(makeSubstitutes,5000)

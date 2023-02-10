let readlineSync = require("readline-sync");
var computerchoice = ['rock', 'paper', 'scissors'];
var computeroption = computerchoice[Math.floor(Math.random() * computerchoice.length)];
var playerName= readlineSync.question("What is your name: ")
console.log("hi "+ playerName )
console.log("choose any one from in rock paper scissors")
var playeroption = readlineSync.question("Which one you want to do? ");

if (computerchoice=='rock' && playeroption=="paper"){
    console.log("player won the game");
}
else if(computeroption=="rock" && playeroption=="scissor"){
    console.log("computer the won the game");
}
else if (computeroption=="scissor" && playeroption=="paper"){
    console.log("computer won the game");
}
else if (computeroption=="paper" && playeroption=="rock"){
    console.log("computer won the game");
}
else if (computeroption=="scissor" && playeroption=="rock"){
    console.log("player won the game");
}
else if (computeroption==playeroption){
    console.log("tie the game");
}else if (computeroption=="paper" && playeroption=="scissor"){
    console.log("player won the game");
}



console.clear();

// A) Refactoring #1 (Reducing Decision Tree to 1 Draw, 3 Wins and 1 Lose Conditionals)

// B) Refactoring #2 (Replacing Conditionals with Objects)
let choice = "ROCK";

// ROCK -> You chose Rock
// Conditional:
if ( choice === "ROCK" ){
  console.log( "You chose ROCK" );
}
// Object:
const o = {
  "ROCK" : "You chose ROCK"
}
console.log( o[choice] );

let theirChoice = "PAPER";

if ( choice === "ROCK" ){
  if ( theirChoice === "PAPER" ){
    console.log( "You lose!" ); 
  }
}

const o2 = {
  "ROCK" : {
    "PAPER" : "You lose!"
  } 
}

console.log( "o2[choice][theirChoice]", o2[choice][theirChoice] );

const o3 = {
  "ROCK" : {
    "ROCK" : "It's a draw",
    "PAPER" : "You lose!",
    "SCISSORS" : "You win!"
  } 
}

theirChoice = "SCISSORS";
console.log( "o3[choice][theirChoice]", o3[choice][theirChoice] );

const combinationsObj2 = {
  "ROCK"     : { 
    "ROCK": "DRAW", 
    "PAPER": "LOSE", 
    "SCISSORS" : "WIN" 
  },  
  "PAPER"    : { 
    "ROCK": "WIN",
    "PAPER": "DRAW",
    "SCISSORS": "LOSE" 
  },  
  "SCISSORS" : { 
    "ROCK": "LOSE",
    "PAPER": "WIN",
    "SCISSORS": "DRAW" 
  }   
}

console.log( combinationsObj2["ROCK"]["PAPER"] === "LOSE" );
console.log( combinationsObj2["PAPER"]["PAPER"] === "DRAW" );
console.log( combinationsObj2["PAPER"]["SCISSORS"] === "LOSE" );

// C) Refactoring #3 (Using an Array Matrix)

const ROCK     = 0;
const PAPER    = 1;
const SCISSORS = 2;

let score = 0;
const combinationsNum = [
//  R0  P1 S2 
  [ 0, -1, 1 ],  // R0
  [ 1, 0, -1 ],  // P1
  [ -1, 1, 0 ]   // S2
];

const WIN = 1; const LOSE = -1; const DRAW = 0;
// const combinationsNum = [ [ DRAW, LOST, WIN ], [ WIN, DRAW, LOSE ], [ LOSE, WIN, DRAW ] ];

console.log( score += combinationsNum[ROCK][PAPER] ); // LOSE
console.log( score += combinationsNum[PAPER][ROCK] ); // WIN
console.log( score += combinationsNum[SCISSORS][SCISSORS] ); // DRAW
console.log( score += combinationsNum[SCISSORS][PAPER] ); // WIN
console.log( score += combinationsNum[PAPER][SCISSORS] ); // LOSE
console.log( score += combinationsNum[ROCK][SCISSORS] ); // WIN
console.log( score += combinationsNum[ROCK][SCISSORS] ); // WIN
console.log({ score });

const res = [ "LOSE", "DRAW", "WIN" ];
console.log( res[combinationsNum[ROCK][PAPER]+1] ); // LOSE
console.log( res[combinationsNum[PAPER][ROCK]+1] ); // WIN
console.log( res[combinationsNum[SCISSORS][SCISSORS]+1] ); // DRAW
console.log( res[combinationsNum[SCISSORS][PAPER]+1] ); // WIN
console.log( res[combinationsNum[PAPER][SCISSORS]+1] ); // LOSE
console.log( res[combinationsNum[ROCK][SCISSORS]+1] ); // WIN
console.log( res[combinationsNum[ROCK][SCISSORS]+1] ); // WIN
console.log("<<<");

const combinations = [
  [ "DRAW", "LOSE", "WIN" ],  // ROCK
  [ "WIN", "DRAW", "LOSE" ],  // PAPER
  [ "LOSE", "WIN", "DRAW" ]   // SCISSORS
];

console.log( combinations[ROCK][PAPER] === "LOSE" );
console.log( combinations[PAPER][ROCK] === "WIN" );
console.log( combinations[SCISSORS][SCISSORS] === "DRAW" );
console.log( combinations[SCISSORS][PAPER] === "WIN" );
console.log( combinations[PAPER][SCISSORS] === "LOSE" );
console.log( combinations[ROCK][SCISSORS] === "WIN" );

const combinationsObj1 = {
  "ROCK"     : [ "DRAW", "LOSE", "WIN" ],  
  "PAPER"    : [ "WIN", "DRAW", "LOSE" ],  
  "SCISSORS" : [ "LOSE", "WIN", "DRAW" ]   
}

console.log( combinationsObj1["ROCK"][PAPER] === "LOSE" );
console.log( combinationsObj1["PAPER"][PAPER] === "DRAW" );
console.log( combinationsObj1["PAPER"][SCISSORS] === "LOSE" );

// Object: if key === "rock" --> return 0
// Objects are like an if statement with various conditions
const conditions = {
  a: 1,
  b: 2,
  c: 3
}
//-> Translates to:
if ( "key" === "a" ){
  1
} else if ( "key" === "b" ){
  2
} else if ( "key" === "c" ){
  3
}

console.log( conditions['a'] );

// Try it!
let key = "a";  // Try "b" and "c"

if ( key === "a" ){
  console.log( 1 );
} else if ( key === "b" ){
  console.log( 2 );
} else if ( key === "c" ){
  console.log( 3 );
}

// Now try it with an object!
console.log( conditions[key] ); // Try with "b" and "c"

let move = "paper";

if ( move === "paper" ){
  console.log( 0 );
} else if ( move === "rock" ){
  console.log( 1 );
} 

// Can we do the same with "Rock", "Paper", "Scissors" instead of a,b,c?
// PRACTICE TIME! (Make key -> move)
const playerMoves = {
  rock: 0,
  paper: 1
}
// playerMoves['rock'], playerMoves['paper'], playerMoves.scissors
// playerMoves[move]

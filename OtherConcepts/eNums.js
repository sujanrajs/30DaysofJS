const GAME_STATES = Object.freeze({
  NOT_STARTED: "Not Started",
  PLAYING: "Playing",
  FINISHED: "Finished",
});

// Object.freeze prevents default value associated with keys from changing or it stays same

GAME_STATES.NOT_STARTED = "Something else";
console.log(GAME_STATES.NOT_STARTED); // Not started, its still same 

//let gameState = "Not Started";
let gameState = GAME_STATES.NOT_STARTED;

// start the game
//gameState = "Playing";
gameState = GAME_STATES.PLAYING;

// Finish the game
//gameState = "Finished";
gameState = GAME_STATES.FINISHED;

// global constants
const clueHoldTime = 1000; //how long to hold each clue's light/soun
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
//Global Variables
let pattern = [];
let progress = 0; 
let gamePlaying = false;
let tonePlaying = false;
let volume = 0.5;  //must be between 0.0 and 1.0
let guessCounter = 0;

function randomize(){
  pattern = [];
  for(let i = 0; i < 8; i++){
    pattern.push(Math.floor(Math.random() * 4) + 1);
  }
  console.log(pattern);
}

function startGame(){
  //initializing
  progress = 0;
  gamePlaying = true;
  document.getElementById("startbtn").classList.add("hidden");
  document.getElementById("stopbtn").classList.remove("hidden");
  //starting the game
  randomize();
  playClueSequence();
}

function stopGame(){
  //initializing
  gamePlaying = false;
  
  document.getElementById("startbtn").classList.remove("hidden");
  document.getElementById("stopbtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 260,
  2: 358.6,
  3: 392,
  4: 466.2
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(()=>{
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}

function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
let AudioContext = window.AudioContext || window.webkitAudioContext 
let context = new AudioContext()
let o = context.createOscillator()
let g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("b"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("b"+btn).classList.remove("lit")
}

// playing clues
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

//winning conditions

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if(pattern[guessCounter] == btn){
    //correct
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        winGame();
      }else{
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }else{
    loseGame();
  }
}





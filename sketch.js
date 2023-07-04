var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var bluePlayer, redPlayer;
var bluePlayerImg, redPlayerImg;

function preload() {
  backgroundImage = loadImage("./assets/sprite_BackGround0.png");
  bluePlayerImg = loadImage("./assets/bluePC.png");
  redPlayerImg = loadImage("./assets/redPC.png");
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  //database = firebase.database();
  game = new Game();
  game.start();

}

function draw() {
  background(backgroundImage);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

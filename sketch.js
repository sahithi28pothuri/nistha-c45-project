var canvas, backgroundImage;

var gameState = 0;
var distance = 0
var playerage = 0;

var database;

var form, player, game;


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  

  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  background(24,96,125);

  form.display();

  if(playerId==1){
    gameState.update(1);
  }

}

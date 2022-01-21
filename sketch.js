var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var score=0

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");

}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost= createSprite(300,300)
  ghost.addImage("ghost", ghostImg)
  ghost.scale=0.5
  
  

  invisibleBlock= createSprite(300,600,600,10)
  invisibleBlock.visible=false
  
  doorsGroup=new Group();
  climbersGroup=new Group();
}









function draw() {
  background(200);
  text("Score:"+score,500,50)

  if(keyDown(LEFT_ARROW)){
    ghost.x=ghost.x-5
  }
  if(keyDown(RIGHT_ARROW)){
    ghost.x=ghost.x+5
  }
  if(keyDown("SPACE")){
    ghost.velocityY=-6
    
  }
  ghost.velocityY=ghost.velocityY+0.5
  
  ghost.collide(invisibleBlock)
  
  
  
  
  spawnDoors();
 spawnClimbers();
 
 


 

  if(tower.y > 400){
      tower.y = 300

    }
    
    drawSprites();
    if (doorsGroup.isTouching(ghost)){
      ghost.velocityY=0
      textSize(40)
      fill("blue")
      text("Game Over",300,300)
      

    }
}

function spawnDoors(){
  if (frameCount % 60 === 0){
    door=createSprite(Math.round(random(50,550)),-10)
  door.addImage("door",doorImg)
  door.velocityY=6;
  
  doorsGroup.add(door);
  door.lifetime=300
    
  }       

  
}
function spawnClimbers(){
  if (frameCount % 60 === 0){
    climber=createSprite(door.x,door.y+50)
  climber.addImage("climber",climberImg)
  climber.velocityY=6;
  
climbersGroup.add(climber);
climber.lifetime=300
    
  }
   
  
}

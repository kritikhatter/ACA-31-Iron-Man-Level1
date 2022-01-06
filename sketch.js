
var bg, backgroundImg;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
 ironmanImage=loadAnimation("images/iron.png");
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale=1.5
  ironman=createSprite(200,505,20,50)
  ironman.addAnimation("jumping",ironmanImage)
  ironman.scale=0.3
  ground=createSprite(200,585,400,10)
  ground.visible=false
}


function draw() {
  if(keyDown("left"))
  ironman.x-=4
  if (keyDown("right"))
  ironman.x+=4
  if(keyDown("space"))
    ironman.velocityY=-16
    ironman.velocityY+=0.5
ironman.collide(ground)
    drawSprites();
   
}


var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;

var resrartImg,restart;
var gm,gameOver;

var newImage;

function preload(){
   monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  createCanvas(600, 600);

  monkey = createSprite(50,540,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.18;
  
  ground = createSprite(300,580,1200,20);
  ground.velocityX = -5;
  
  
  ObstacleGroup = new Group();
  FoodGroup = new Group();
}

function draw(){
background("white");
  
  if (ground.x < 0){
    ground.x = ground.width/2;
   }
  
  if(keyDown("space")&& monkey.y > 170) {
    monkey.velocityY = -13;
  }
  
   monkey.velocityY = monkey.velocityY + 0.75;
   monkey.collide(ground);
  
if(ObstacleGroup.isTouching(monkey)){
   ground.velocityX = 0;
  monkey.velocityX = 0;
    ObstacleGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    ObstacleGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
   }
  
  
  
  
spawnFruits(); 
spawnObstacles();  
drawSprites();  
}


function spawnFruits() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var Fruits = createSprite(600,100,40,10);
    Fruits.addImage(bananaImage);
    Fruits.y = Math.round(random(200,400))
    Fruits.scale = 0.2;
    Fruits.velocityX = -5;
   
    //assigning lifetime to the variable
    Fruits.lifetime = 220
    
    //adjust the depth
    Fruits.depth = monkey.depth
    Fruits.depth = monkey.depth + 1;
   
  FoodGroup.add(Fruits);
  }
}


function spawnObstacles() {
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(600,540,40,10);
    obstacle.addImage(obstacleImage);
    
    obstacle.scale = 0.2;
    obstacle.velocityX = -5;
   
    //assigning lifetime to the variable
    obstacle.lifetime = 220
    
    
   
  ObstacleGroup.add(obstacle);
  }
}

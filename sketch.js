const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg;
var snow,snow_Img;
var music;
var girl,girlImg;
var snowman,snowmanImg,snowball,ballImg;

function preload(){
  bg = loadImage("Images/snow1.jpg");
  snow_Img = loadImage("Images/snow5.webp");
  music = loadSound("roa-music-snow-dancer.mp3");
  girlImg = loadImage("Images/Winter Girl 1.png");
  snowmanImg = loadImage("Images/snowMan.png");
  ballImg = loadImage("Images/Snow ball.png");
}

function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  music.play();
  
  base = new Ground(600,400,1200,10);
  snowball = new Snowball(100,100);
  girl = new Girl(1000,220,200,300);
  snowman = new Snowman(100,100,200,200);
  slingshot = new Sling(snowball.body,{x:900,y:300});
}

function draw() {
  background(bg);  
  Engine.update(engine);
   fill("black");
   textSize(30);
   text("Press enter key to get one more chance.",600,50);
  snowball.display();
  girl.display();
  slingshot.display();
  snowman.display();
  base.display();
}

function mouseDragged(){
  Matter.Body.setPosition(snowball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
 slingshot.fly();
}

function keyPressed(){
  if(keyCode===13){
    slingshot.attach(snowball.body);
  }
}
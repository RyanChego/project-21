
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
	}
	groundObj=new ground(width/2,670,width,20);
	leftSide=new ground(1100,600,20,120);

	ball=Matter.Bodies.circle(800,700,15,ball_options);
	World.add(ball,world);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  groundObj.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.Applyforce(ball,[x:0.7 y:0.1]);
	}
}


var ball;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground =new Ground(200,390,1300,10);
	right = new Ground(550,335,10,100);
	left = new Ground(700,335,10,100);

	ball=Bodies.circle(100,200,20);
	World.add(world,ball);
    fill("yellow");

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,20);
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0.05});	
	}
}


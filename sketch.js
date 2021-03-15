const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,rstick,cstick,lstick,ground;

function setup() {
	createCanvas(1200,600);

	engine = Engine.create();
	world = engine.world;

  ground = new stick(width/2,550,width,20);

  lstick = new stick(800,480,20,80);
  rstick = new stick(1000,480,20,80);
  cstick = new stick(900,530,220,20);

	ball = new trash(250,500,60);


	Engine.run(engine);
  
}


function draw() 
{
  background("blue");

  Engine.update(engine);

  fill("black");
  text("Press space to reset.",10,30,textSize(30));

  if(keyWentDown("up_arrow"))
  {
    Matter.Body.applyForce(ball.body, ball.body.position, {x:160, y:-150});
  }

  if(keyDown("space"))
  {
    Matter.Body.setPosition(ball.body, {x:250, y:500});
  }

  ellipseMode(CENTER);
  rectMode(CENTER)
  
  lstick.display();
  rstick.display();
  cstick.display();

  ground.display();

  ball.display();


  
 
}




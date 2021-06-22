
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint;
var ball1,b,chain1,ball2,chain2
var ball3,ball4,ball5,ball6,ball7
var chain3,chain4,chain5,chain6,chain7
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball1=new Bob(200,200,40,40)
ball2=new Bob(225,200,40,40)
ball3=new Bob(250,200,40,40)
ball4=new Bob(275,200,40,40)
ball5=new Bob(300,200,40,40)
ball6=new Bob(325,200,40,40)
ball7=new Bob(350,200,40,40)

b=new Ground(270,140,200,70)
chain1=new Chain(ball1.body,{x:200,y:140})
chain2=new Chain(ball2.body,{x:225,y:140})
chain3=new Chain(ball3.body,{x:250,y:140})
chain4=new Chain(ball4.body,{x:275,y:140})
chain5=new Chain(ball5.body,{x:300,y:140})
chain6=new Chain(ball6.body,{x:325,y:140})
chain7=new Chain(ball7.body,{x:350,y:140})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(150);
  Engine.update(engine)
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  ball7.display();
  b.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  chain6.display();
  chain7.display();
  //drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(ball7.body,ball7.body.position,{x:-50,y:-45});

  }
}



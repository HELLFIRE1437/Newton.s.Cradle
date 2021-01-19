
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	bobDiameter = 50

	rod = new staticBody(600,100,300,15);

	bob1 = new circularBody(500,350,25,"yellow");
	bob2 = new circularBody(550,350,25,"pink");
	bob3 = new circularBody(600,350,25,"orange");
	bob4 = new circularBody(650,350,25,"cyan");
	bob5 = new circularBody(700,350,25,"lightgreen");

	chain1 = new Chain(bob1.body,rod.body,-2*bobDiameter);
	chain2 = new Chain(bob2.body,rod.body,-1*bobDiameter);
	chain3 = new Chain(bob3.body,rod.body, 0*bobDiameter);
	chain4 = new Chain(bob4.body,rod.body,+1*bobDiameter);
	chain5 = new Chain(bob5.body,rod.body,+2*bobDiameter);

	Engine.run(engine);
  
}


function draw() {
	background(200);
	chain1.display();
	chain2.display();
	chain3.display();
	chain4.display();
	chain5.display();
	rod.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
}
function keyPressed(){
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:70,y:0});
	}
}





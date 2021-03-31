
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(200,350,100);
	bob2=new Bob(300,350,100);
	bob3=new Bob(400,350,100);
	bob4=new Bob(500,350,100);
	bob5=new Bob(600,350,100);
    roof1 = new Roof(400,100,300,40);
	Rope1= new Rope(bobObject1.body,roof0bject1.body,-bobDiameter*2,0);
	Rope3= new Rope(bobObject3.body,roof0bject1.body,-bobDiameter*2,0);
	Rope4= new Rope(bobObject4.body,roofObject1.body,bobDiameter*2,0);
	Rope5= new Rope(bobObject5.body,roofObject1.body,bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0)
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob3.display();
  bob4.display();
  bob5.display();

 roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
 
  keyPressed();
}
function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50}); } 
} 
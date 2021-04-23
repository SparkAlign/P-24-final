
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	Hammer=new hammer(100,100);
	ground = new Ground(600,height,1200,20)
	Eraser=new eraser(500,320,30,30);
	Stone = new stone(700,320,70,70);
	Sand1=new sand(200,320,5,5);
	Sand2=new sand(200,320,5,5);
	Sand3=new sand(200,320,5,5);
	Sand4=new sand(200,320,5,5);
	Sand5=new sand(200,320,5,5);
	Sand6=new sand(200,320,5,5);
	Sand7=new sand(200,320,5,5);
	Iron = new iron(300,320,70,40);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Hammer.display();
 ground.display();
 Eraser.display();
 Stone.display();
 Sand1.display();
 Sand2.display();
 Sand3.display();
 Sand4.display()
 Sand5.display();
 Sand6.display()
 Sand7.display()
 Iron.display();
}




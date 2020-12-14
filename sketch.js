
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy_Img, boy_Obj;
var stone,tree,slingshot;
var mango11,mango12,mango13,mango14,mango15,mango16,mango17,mango18,mango19,mango20;
var mango21,mango22,mango23,mango24,mango25,mango26,mango27,mango28,mango29,mango30;


function preload()
{
	boy_Img = loadImage("Plucking mangoes/boy.png")

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy_Obj = createSprite(180,590,50,50)
	boy_Obj.addImage(boy_Img)
	boy_Obj.scale=0.13

	stone = new Stone(110,500)

	tree = new Tree()

	mango11 = new Mango(480,370)
	mango12 = new Mango(720,303)
	mango13 = new Mango(690,280)
	mango14 = new Mango(510,385)
	mango15 = new Mango(530,257)
	mango16 = new Mango(550,354)
	mango17 = new Mango(570,244)
	mango18 = new Mango(590,388)
	mango19 = new Mango(610,304)
	mango20 = new Mango(630,260)
	mango21 = new Mango(650,256)
	mango22 = new Mango(670,352)
	mango23 = new Mango(690,346)
	mango24 = new Mango(710,402)
	mango25 = new Mango(730,353)
	mango26 = new Mango(589,405)
	mango27 = new Mango(666,359)
	mango28 = new Mango(699,375)
	mango29 = new Mango(596,312)
	mango30 = new Mango(604,288)

	slingshot= new Attacher(stone.body,{x:110, y:500});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine)
  stone.display();
  tree.display();

  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  mango15.display();
  mango16.display();
  mango17.display();
  mango18.display();
  mango19.display();
  mango20.display();
  mango21.display();
  mango22.display();
  mango23.display();
  mango24.display();
  mango25.display();
  mango26.display();
  mango27.display();
  mango28.display();
  mango29.display();
  mango30.display();

  elastic.display();

  drawSprites();
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
	elastic.fly();
   }

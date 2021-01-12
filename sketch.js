
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var boy,boyimg,chain1;

function preload()
{
	boyimg=loadImage("boy.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	stone1=new stone(250,530,40)
	boy1=createSprite(300,590,10,100)
	boy1.addImage("boymove",boyimg)
	boy1.scale=0.1

    ground1=new ground(800,650,1600,20)
	tree1=new tree(1200,250,300,400)
	mango1=new mango(1350,350,100,1)
	mango2=new mango(1250,400,100,1)
	mango3=new mango(1290,310,100,1)
	mango4=new mango(1400,370,100,1)
	mango5=new mango(1370,300,100,1)
	mango6=new mango(1300,390,100,1)
	mango7=new mango(1450,390,100,1)
	mango8=new mango(1230,350,100,1)
	chain1=new sling(stone1.body,{x:230,y:520})
	boy1.depth=stone1.depth
  stone1.depth=stone1.depth+1
 // tree1.setCollider("rectangle",0,0,tree1.width,tree1.height);
 // tree1.debug = false; 
}


function draw() {
  rectMode(CENTER);
  background(225);

  


  tree1.display();
  ground1.display();
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  chain1.display();
  detectcollision(stone1,mango1);
  detectcollision(stone1,mango2);
  detectcollision(stone1,mango3);
  detectcollision(stone1,mango4);
  detectcollision(stone1,mango5);
  detectcollision(stone1,mango6);
  detectcollision(stone1,mango7);
  detectcollision(stone1,mango8);
 
  
  drawSprites();

  
 
}
function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
	
	
	}
function mouseReleased(){
	chain1.fly()
 }


 function  detectcollision(a,b){
	  var d = dist(a.body.position.x,a.body.position.y,b.body.position.x,b.body.position.y)
	 if(d <= 50){Body.setStatic(b.body,false); } }

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone1.body,{x:250,y:530})
		chain1.attach(stone1.body);

	}
}
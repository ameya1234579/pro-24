
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var world;
var box1,box2,box3;
var ground;
var paper;
function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;	
	
	paper = new Paper(100,650,20);
	box1 = new Dustbin(540,660,230,12);
	box2 = new Dustbin(432,609,12,110);
	box3 = new Dustbin(648,609,12,110);
	ground = new Ground(400,673,800,10);
	
	Engine.run(engine);
  
}


function draw() {

  background(0);
   
  paper.display();
  box1.display();
  box2.display();
  box3.display();
  ground.display();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x: 55,y: -60})
	}
}


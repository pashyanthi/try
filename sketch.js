
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var cPaper,binpart1,binpart2,binpart3,ground,rope1;
function preload()
{
 	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	binpart1=new Dustbin(690,300,200,20);
	
//binpart2=new Dustbin(500,590,20,100)
//binpart3=new Dustbin(700,590,20,100);
	
	cPaper= new paper(80,600,70);
	ground=new Ground(150,660,2300,10)
	rope1 = new Rope(cPaper.body,{x:300 , y:550});

	Engine.run(engine);

}

function draw() {
	rectMode(CENTER);
  background("white");
  //Engine.update(engine);
  //strokeWeight(4)
 // binpart2.display();
 // binpart3.display();
  ground.display();
  binpart1.display();
  cPaper.display();
rope1.display();
  drawSprites();
}


//function keyPressed() {
	//if(keyCode === UP_ARROW){
	//	Matter.Body.applyForce(cPaper.body,cPaper.body.position,{x:167,y:-167});
	//}

//}

function mouseDragged(){
    Matter.Body.setPosition(cPaper.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    cPaper.fly();
    
}


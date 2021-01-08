const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundIMG;
var bg="light.png";

function preload(){
    //getBackgroundImage();
    
    backgroundIMG = loadImage("light.jpg");
    
  }



function setup(){
    createCanvas(1350,600);
   
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(675,560,1350,20);
    
    ground1 = new Ground(650,505,390,20);
    ground2 = new Ground(1140,285,290,20);

    
    box1 = new Box(650,250);
    
    box2 = new Box(650,320,50,30);
    box3 = new Box(700,320,50,30);
    box4 = new Box(600,320,50,30);
    
    box5 = new Box(650,390,50,30);
    box6 = new Box(700,390,50,30);
    box7 = new Box(600,390,50,30);
    box8 = new Box(750,390,50,30);
    box9 = new Box(550,390,50,30);
    
    box10 = new Box(650,460,50,30);
    box11 = new Box(700,460,50,30);
    box12 = new Box(750,460,50,30);
    box13 = new Box(600,460,50,30);
    box14 = new Box(550,460,50,30);
    box15 = new Box(500,460,50,30);
    box16 = new Box(800,460,50,30);

    
    box17 = new Box(1140,100,50,30);

    box18 = new Box(1140,170,50,30);
    box19 = new Box(1190,170,50,30);
    box20 = new Box(1090,170,50,30);
    
    box21 = new Box(1140,240,50,30);
    box22 = new Box(1190,240,50,30);
    box23 = new Box(1090,240,50,30);
    box24 = new Box(1240,240,50,30);
    box25 = new Box(1040,240,50,30);
    ball = new Ball(150,300,40)

    

    

    sling = new Slingshot(ball.body,{x : 150, y : 300});

    Engine.run(engine);
    
}

function draw(){
    Engine.update(engine);
    

    if(backgroundIMG){
        background(backgroundIMG);
      }
    
    

    sling.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    ball.display();

    ground.display();

    ground1.display();
    ground2.display();
  
    
    
    

}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    sling.fly();
}

function keyPressed (){
	if (keyCode === 32){
		sling.attach(ball.body);

	}
}
async function getBackgroundImage(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
 
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11, 13);
    //console.log(hour);
 
    if (hour >= 06 && hour <= 18) {
      bg = "light.jpg";
    } else {
      bg = "dark.jpg";
    }
 
    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
 }
 
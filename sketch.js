const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const World = Matter.World;
const Constraint = Matter.Constraint;
var engine, world;
var stand1,stand2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12;
var box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24;
var polygon;
var slingshot;


function setup(){
  engine = Engine.create();
  world = engine.world;
  stand1 = new Ground(350,380,135,20);
  stand2 = new Ground(590,270,135,20);
  box1 = new Box(310,355);
  box2 = new Box(330,355);
  box3 = new Box(350,355);
  box4 = new Box(370,355);
  box5 = new Box(390,355);
  box6 = new Box(318,322);
  box7 = new Box(338,322);
  box8 = new Box(358,322);
  box9 = new Box(378,322);
  box10 = new Box(325,292);
  box11 = new Box(345,292);
  box12 = new Box(365,292);
  box13 = new Box(550,245);
  box14 = new Box(570,245);
  box15 = new Box(590,245);
  box16 = new Box(610,245);
  box17 = new Box(630,245);
  box18 = new Box(558,215);
  box19 = new Box(578,215);
  box20 = new Box(598,215);
  box21 = new Box(618,215);
  box22 = new Box(565,185);
  box23 = new Box(585,185);
  box24 = new Box(605,185);
  polygon = new Polygon(100,320,50,50);
  slingshot = new Slingshot(polygon.body,{x:100,y:330});
  console.log(slingshot)
  
}


function draw(){
   var canvas = createCanvas(800,800);
   background(209,232,247);
   Engine.update(engine);
   stand1.display();
   stand2.display();
   fill(247,202,213);
   stroke(97,100,105);
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   fill(245,245,145);
   stroke(97,100,105);
   box6.display();
   box7.display();
   box8.display();
   box9.display();
   fill(115,214,115);
   stroke(97,100,105);
   box10.display();
   box11.display();
   box12.display();
   fill(197,148,195);
   stroke(97,100,105);
   box13.display();
   box14.display();
   box15.display();
   box16.display();
   box17.display();
   fill(115,192,196);
   stroke(97,100,105);
   box18.display();
   box19.display();
   box20.display();
   box21.display();
   fill(247,188,126);
   stroke(97,100,105);
   box22.display();
   box23.display();
   box24.display();
   polygon.display();
   slingshot.display();
   
   drawSprites();
}

function mouseDragged(){
Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
slingshot.fly();
  
}

function keyPressed(){
 if(keyCode === 32){
   slingshot.attach(polygon.body);
 }

}

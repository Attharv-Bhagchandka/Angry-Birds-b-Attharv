const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var Box1, Box2, Box3, Box4, Box5;
var bird, Platform, Level; 
var Pig1, Pig2;
var Log1, Log2, Log3, Log4;

function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;
  
  Level = new Ground(600, 390, 1200, 20);
  Platform = new Ground(150, 305, 300, 170)
  bird = new Bird(100, 100);

  Box1 = new Box(700, 320, 70, 70);
  Box2 = new Box(920, 320, 70, 70);
  Pig1 = new Pig(810, 350);
  Log1 = new Log(810, 260, 300, PI/2);

  Box3 = new Box(700, 240, 70, 70);
  Box4 = new Box(920, 240, 70, 70);
  Pig2 = new Pig(810, 220);
  Log2 = new Log(810, 180, 300, PI/2);
  
  Box5 = new Box(810, 160, 70, 70);
  Log3 = new Log(760, 120, 150, PI/7);
  Log4 = new Log(870, 120, 150, -PI/7);

  
}

function draw() {
  background('black');  
  Engine.update(engine)

  Box1.display();
  Box2.display();
  Pig1.display();
  Log1.display();

  Box3.display();
  Box4.display();
  Pig2.display();
  Log2.display();

  Log3.display();

  Box5.display();
  Log3.display();
  Log4.display();

  bird.display();
  Level.display();
  Platform.display();
  
}
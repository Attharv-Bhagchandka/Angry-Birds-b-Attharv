const world = Matter.World;
const engine = Matter.Engine;
const bodies = Matter.Bodies;

var Engine, World, Box1, Box2, Box3, Box4, Level, Pig1, Pig2, Log1, Log2, Log3;

function setup() {
  createCanvas(1200,400);

  Engine = engine.create();
  World = Engine.world;

  Box1 = new Box(700, 325, 70, 70);
  Box2 = new Box(900, 325, 70, 70);
  Pig1 = new Pig(800, 350);
  Log1 = new Log(800, 300, 300, 20, 0);

  Box3 = new Box(700, 175, 70, 70);
  Box4 = new Box(900, 175, 70, 70);
  Pig2 = new Pig(800, 200);
  Log2 = new Log(800, 150, 300, 20, 0);
  
  Level = new Ground(600, 390, 1200, 20);

}

function draw() {
  background('black');  
  engine.update(Engine)

  Box1.display();
  Box2.display();
  Pig1.display();
  Log1.display();

  Box3.display();
  Box4.display();
  Pig2.display();
  Log2.display();
  
  Level.display();
  
  

  drawSprites();
}
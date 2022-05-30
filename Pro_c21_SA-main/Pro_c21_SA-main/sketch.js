const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

var ball

var buttom_1
var buttom_2

function setup() 
{
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  buttom_1 = createImg("up.png")
  buttom_1.position(20,50)
  buttom_1.size(30,30)
  buttom_1.mouseClicked(Vforce)

  buttom_2 = createImg("right.png")
  buttom_2.position(350,50)
  buttom_2.size(30,30)
  buttom_2.mouseClicked(Hforce)

  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  var ball_options = {  

    restitution: 1,
    frictionAir: 0.01

  }
 
  ball = Bodies.circle(200,200,30,ball_options)
  World.add(world,ball)
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);

  ellipse(ball.position.x,ball.position.y,30)

  ground.show();
  top_wall.show();
  left.show();
  right.show();   
  Engine.update(engine);

}

function Hforce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});


}

function Vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05});


}


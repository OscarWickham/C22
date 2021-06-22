// name spacing 

const Engine= Matter.Engine // helps us create Physics Engine
const World= Matter.World  // helps create world following physics rules
const Bodies= Matter.Bodies // helps create objects residing in world 

var engine, world, ground ;
var ball;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world
  
  var options= {

    isStatic: true


  }

ground=Bodies.rectangle(200,390,400,20, options);
World.add(world,ground)
console.log(ground)
var ball_options={
  restitution:1
}
ball=Bodies.circle(200,100,20, ball_options);
World.add(world,ball)


}

function draw() {
  background(0);  
  Engine.update(engine)
  rectMode(CENTER)
  rect( ground.position.x,ground.position.y,400,50)

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20,20)
}


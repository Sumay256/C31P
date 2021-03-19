const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var man;
var rain=[];

//var trajectory=[];
function preload(){
    
}

function setup(){
  createCanvas(1000,700); 
  engine = Engine.create();
  world = engine.world;
  if(frameCount%100===0){ 
    for(var i=0;i<100;i++){
    rain.push(new Rain(random(0,1000),random(0,700)));
    
    }
  
}
man=new Man(500,570);
 // ground=new Ground(500,700,1000,20);
  Engine.run(engine);

}

function draw(){
  Engine.update(engine) ;
  background(10,0,20); 
  for(var i=0;i<100;i++){
  rain[i].display();
  rain[i].update();
  }
 man.display();
  //ground.display();
 
  
}


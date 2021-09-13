const Engine = Matter.Engine   
const World  = Matter.World
const  Bodies = Matter.Bodies
var ground,boll

function setup() {

  createCanvas(800,400);
bixuEngine=Engine.create()
 bixuworld=bixuEngine.world

var gOption={ 
isStatic:true

}


 ground= Bodies.rectangle(200,200,500,25,gOption)
 World.add(bixuworld,ground)

var boption={ 
restitution:2

}

 boll= Bodies.circle(400,20,25,boption)
World.add(bixuworld,boll)

console.log(boll)

}

function draw() {
  background("black");  
Engine.update(bixuEngine)
rect(ground.position.x,ground.position.y,500,25)
ellipse(boll.position.x,boll.position.y,25)



}
var car, wall;
var speed, weight;
var height = 400;



function setup() {
  createCanvas(1500,400);
  speed = random(55,90);
  weight = random(400,1500);
  wall = createSprite(1300, 200, 60, height/2);
  car = createSprite(50, 200, 50, 50);
  
}

function draw() {
  background(0);
  car.velocityX = speed;
  if (wall.x - car.x < (car.width + wall.width)/2) 
  {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if (deformation > 180) 
    {
      car.shapeColor=color(255,0,0);
    }

    if (deformation < 180 && deformation > 180 ) 
    {
      car.shapeColor=color(230,230,0);
    }

    if (deformation < 180) 
    {
      car.shapeColor=color(0,255,0);
    }


  }
    
  drawSprites();
}
var car ;
var wall ;
var speed ;
var weight ;
var boundary1;
var boundary2;
var boundary3;
var boundary4;

function setup() {
  createCanvas(1200,400);

speed=random(55,90);
weight=random(400,1500)

wall=createSprite(1100,200,60,height/2)

car=createSprite(50,200,50,50);
car.shapeColor=color(255,255,255)



}

function draw() {
  background("black"); 

  if (keyWentDown("space")) {
    car.velocityX=speed;
  }

  if (wall.x - car.x < car.width + wall.width/2) {

    car.collide(wall)
    var deformation=0.5 * weight * speed * speed / 22500;

    if (deformation > 180) {
      car.shapeColor=color(255,0,0)
    } 

    if (deformation < 180 && deformation > 100) {
      car.shapeColor=color(230,230,0)
    }

    if (deformation<100) {
      car.shapeColor=color(0,255,0)
    }

  }
  drawSprites();
}
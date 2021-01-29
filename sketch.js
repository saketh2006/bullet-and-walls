var wall,thickness;
var bullet, speed, weight;




function setup() {
  createCanvas(1600,400);
 bullet = createSprite(50, 200, 50, 50);
 wall = createSprite(1200, 200, thickness, height/2);

  
  speed = random(55,90)
  weight = random(400,1500)
  thickness = random(22,83);

}

function draw() {
  background(255,255,255);  
  bullet.velocityX = speed;
  if(wall.x - bullet.x < (bullet.width + wall.width)/2){

    bullet.velocityX = 0;
    var defo = 0.5*weight * speed * speed/(thickness*thickness*thickness);

    if(defo > 10){

      wall.shapeColor = color(255,0,0);
    } else if(defo < 10){

      wall.shapeColor = color(0,255,0);
    } 

  }
  drawSprites();
}
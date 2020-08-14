var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceoff(movingRect,fixedRect);

  
  drawSprites();
}
function bounceoff(m,f){

  if (m.x - f.x < f.width/2 + m.width/2
    && f.x - m.x < f.width/2 + m.width/2) {
  m.velocityX = m.velocityX * (-1);
  f.velocityX = f.velocityX * (-1);
}
if (m.y - f.y < f.height/2 + m.height/2
  && f.y - m.y < f.height/2 + m.height/2){
  m.velocityY = m.velocityY * (-1);
  f.velocityY = f.velocityY * (-1);
}
  


}
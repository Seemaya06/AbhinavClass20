var fixedRect, movingRect;



function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(400,400,80,30);
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";

}

function draw() {
  background("black");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2){
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  else
  {
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  drawSprites();
}
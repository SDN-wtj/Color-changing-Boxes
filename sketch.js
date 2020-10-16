var fixedRect, movingRect

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200,200,50,100);
  movingRect=createSprite(50,200,50,100)
  fixedRect.shapeColor="red";
  movingRect.shapeColor="green";
  fixedRect.debug=true;
  movingRect.debug=true;
}

function draw() {
  background(0,0,0);  
  drawSprites();
movingRect.x=mouseX;
movingRect.y=mouseY;
if(movingRect.x-fixedRect.x<fixedRect.width/2 + movingRect.width/2 && 
  fixedRect.x-movingRect.x<fixedRect.width/2 + movingRect.width/2 && 
  movingRect.y-fixedRect.y<fixedRect.height/2 + movingRect.height/2 && 
  fixedRect.y-movingRect.y<fixedRect.height/2 + movingRect.height/2 ){
fixedRect.shapeColor="white";
movingRect.shapeColor="blue";
  
}
else {
  fixedRect.shapeColor="red";
  movingRect.shapeColor="green";
}
}
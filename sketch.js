var fixed,moving;



function setup() {
  createCanvas(800,400);
 fixed= createSprite(400, 200, 50, 50);
 moving= createSprite(100,100, 50, 50);

}

function draw() {
  background(0);  

moving.y=mouseY;
moving.x=mouseX;

if(moving.x-fixed.x<=moving.width/2+fixed.width/2
  &&fixed.x-moving.x<=moving.width/2+fixed.width/2
  &&moving.y-fixed.y<=moving.height/2+fixed.height/2
  &&fixed.y-moving.y<=moving.height/2+fixed.height/2){
fixed.shapeColor="purple";
moving.shapeColor="yellow";
textSize(30);
text("collision is happening",300,300);

}
else{
  fixed.shapeColor="white";
moving.shapeColor="white";
textSize(30);
text("collision is not happening",300,300);
  
}
  drawSprites();
}
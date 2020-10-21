var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect.debug = true;

}

function draw() {
  background(2,25,25);
  textSize(20);
  fill("yellow")  
  text("FIXED RECT",50,20);
  text("x coordinate : "+fixedRect.x,50,40);
  text("width : "+fixedRect.width,50,60);
  


  fill("orange")
  text("MOVING RECT",250,20);
  text("x coordinate : "+ movingRect.x,250,40);
  text("width : "+movingRect.width,250,60);

  fill("red")
  text("COMPARISION",450,20);
  text("Dist bwn 2 rects :" +( movingRect.x - fixedRect.x),450,40);
  text("Dist when just touching : "+(fixedRect.width/2 +movingRect.width/2),450,60);
  
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  console.log(movingRect.x-fixedRect.x);
 
  



  drawSprites();
  stroke("white")
  line(fixedRect.x,fixedRect.y,fixedRect.x+fixedRect.width/2,fixedRect.y)
  line(movingRect.x,movingRect.y,movingRect.x-movingRect.width/2,movingRect.y)
}
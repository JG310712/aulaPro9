var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
}

function draw() 
{
  background(30);

  if(box.position.x >=30){
    if(keyIsDown(LEFT_ARROW)){
      box.position.x = box.position.x - 5;
    }
    
  }

  if(box.position.y >=30){
    if(keyIsDown(UP_ARROW)){
      box.position.y = box.position.y - 5;
    }
  }

  if(box.position.x <=370){
    if(keyIsDown(RIGHT_ARROW)){
      box.position.x = box.position.x + 5;
    }
  
  }

  if(box.position.y <=370){
    if(keyIsDown(DOWN_ARROW)){
      box.position.y = box.position.y + 5;
    }
  }



  



  drawSprites();

}





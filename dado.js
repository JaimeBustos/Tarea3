let dado;

function setup() {
  createCanvas(200, 200);
  }

function draw() {
  background(220);
  fill (255, 255, 255)
  square(200, 200, 200);       
  if (mouseIsPressed){
    dado = int(random(1, 6));
  }
  else if (dado == 1){
 

  fill (100, 100, 100);
  circle(100, 100, 50);
  }
  

  else if(dado == 2 ){

  fill (100, 100, 100);
  circle(100, 50, 50);
  circle(100, 150, 50);
  }
  else if(dado == 3){
  
  fill (100, 100, 100);
  circle(100, 50, 40);
  circle(100, 100, 40);
  circle(100, 150, 40);

  }
  
  else if(dado == 4){
  
  fill (100, 100, 100);
  circle(50, 50, 40);
  circle(150, 50, 40);
  circle(50, 150, 40);
  circle(150, 150, 40);
  }
  
  else if(dado == 5){
  
  fill (100, 100, 100);
  circle(50, 50, 40);
  circle(150, 50, 40);
  circle(100, 100, 40);
  circle(50, 150, 40);
  circle(150, 150, 40);
  }
  
  else if(dado == 6){
  
 fill (100, 100, 100);
 circle(50, 50, 40);
 circle(50, 100, 40);
 circle(50, 150, 40);
 circle(150, 50, 40);
 circle(150, 100, 40);
 circle(150, 150, 40);
  } 
  
}

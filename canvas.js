function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  
  diam = 200
  fill("rgba(255,0,0,0.5)")
  noStroke()
  circle(width/2,height/3,diam)
  
  fill("rgba(0,0,255,0.5)") 
  circle(width/3,height*2/3,diam)
  
  fill("rgba(0,255,0,0.5)")
  circle(width*2/3,height*2/3,diam)
 
  
}
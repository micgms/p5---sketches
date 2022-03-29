let Sketch3Img;

function preload() {
	Sketch3Img = loadImage('assets/Sketch 3 Version 2.png');
}
  

//SOME BASIC MOVEMENT EXAMPlES
let font;


function preload(){
	font = loadFont('assets/xirod.ttf');
 }

  
  let points;
  let bounds;


  function setup() {
	createCanvas(1000, 1000);
	angleMode(DEGREES)
	noStroke()

	
	//fill(255, 104, 204);
  
	


  }

function draw() {

	//stroke(9)


	

	
	beginShape()

	var randomRed = random(150);
		var randomGreen = random(90);
		var randomBlue = (255);
        
        background(255,140,0);
	
		//console.log("x is less than 1000")
		noFill(randomRed, randomGreen, randomBlue)
        stroke(randomRed, randomGreen, randomBlue)
        strokeWeight(15);
	//fill(255, 104, 204);
	points = font.textToPoints('H', mouseX,mouseY, 400);
    console.log(points)
	



	


	for(let i=0;i<points.length;i++) {
		vertex(points[i].x+random(-3,3), points[i].y+random(-3,3));
	}
	endShape()
	

}



function mousePressed() {
	saveCanvas("s1","png")
}
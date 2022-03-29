let Sketch3Img;

function preload() {
	Sketch3Img = loadImage('assets/s1 (36).png');
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

	
	fill(255, 104, 204);
  
	


  }

function draw() {

	//stroke(9)


	

	
	beginShape()

	var randomRed = random(255);
		var randomGreen = random(255);
		var randomBlue = (255);
        
        
	
		//console.log("x is less than 1000")
		noFill(randomRed, randomGreen, randomBlue)
        //stroke(randomRed, randomGreen, randomBlue)
		stroke(0, 0, 0)
        strokeWeight(4);
	    fill(randomRed,randomGreen,randomBlue);
	points = font.textToPoints('H', mouseX,mouseY, 150);
    console.log(points)
	



	


	for(let i=0;i<points.length;i++) {
		vertex(points[i].x+random(-1,1), points[i].y+random(-3,3));
	}
	endShape()
	

}



function mousePressed() {
	saveCanvas("s1","png")
}
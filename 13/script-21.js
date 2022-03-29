//SOME BASIC MOVEMENT EXAMPlES
let font;


function preload(){
	font = loadFont('assets/Movement.ttf');
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


	

	//background(255);
	beginShape()

	var randomRed = random(255);
		var randomGreen = random(255);
		var randomBlue = random(255);

		//console.log("x is less than 1000")
		fill(randomRed, randomGreen, randomBlue)
	//fill(255, 104, 204);
	points = font.textToPoints('H', mouseX,mouseY, 100);
    console.log(points)



	


	for(let i=0;i<points.length;i++) {
		vertex(points[i].x+random(-3,3), points[i].y+random(-3,3));
	}
	endShape()
	

	
}



function mousePressed() {
	saveCanvas("s1","png")
}

var fr = 0;

function setup() {
	createCanvas(1000,1000)

	var x = 0; //value of axis of sketch
	
	
	    while(x < 1000) {
	    var randomRed = random(255);
		var randomGreen = random(255);
		var randomBlue = random(255);

		console.log("x is less than 1000")
		fill(randomRed, randomGreen, randomBlue)
		circle(random(width), random(height), 10)
		x++;



	}
console.log("test")
}

function draw() {
circle(mouseX, mouseY, random(100));
	

	//randomY = height/2-200+random()*50

	//noiseY = height/2+200+noise(mouseX*0.1)*50

	//var circleRadius = 15+mouseX/4
	
//circle(mouseX, mouseY,circleRadius)

	
	//this circle's Y position is being determined randomly: line 14.  (the upper circle)
//	circle(mouseX,randomY, 5)
	
	
	//this circle's Y position is being determined by perlin noise:line 15.  (the upper circle)
//	circle(mouseX,noiseY, 5)


	
}



   var randomRed = random(255);
   var randomGreen = random(255);	
   var randomBlue = random(255);

strokeWeight();

fill(randomRed, randomGreen, randomBlue);
stroke(randomRed, randomGreen, randomBlue);
circle(mouseX, mouseY, random(100))





function mousePressed() {
	saveCanvas("s1","png")
}
let Sketch3Img;

function preload() {
	Sketch3Img = loadImage('assets/s1 (39).png');
}

function setup() {
	createCanvas(1500, 1500);
	stroke(0,0,100);
	fill(100,0,100);
	//console.log(arrowImg)

	// var xPos;
	// var yPos;





}


function draw() {
	background(0)


	push()
	translate(500,500)

	push()
	//rotate(frameCount/100)
	translate(-500,-500)
	for (xPos = 0;xPos < width; xPos=xPos+30) {
		for(yPos=0;yPos < height;yPos=yPos+30) {
			newFill = Sketch3Img.get(xPos,yPos);

			
			fill(newFill)

			var circleSize = map(sin(frameCount/100),-1,1,50,100);

			circleSize = 20;

			if (newFill != [10,10,10,10]) {


				circle(xPos+map(noise(frameCount/1000+10+yPos),0,1,-20,20),yPos+map(noise(frameCount/10+40+xPos),0,1,-10,10),circleSize);	
			}
			
		}
		

	}
	pop()
	pop()

	
}
let Sketch3Img;

function preload() {
	Sketch3Img = loadImage('assets/Sketch 3 Version 2.png');
}

function setup() {
	createCanvas(1000,1000);
	noStroke();
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

			var rectSize = map(sin(frameCount/1),-1,1,5,50);

			rectSize = 25;

			if (newFill != [0,0,0,0]) {


				rect(xPos+map(noise(frameCount/1000+40+yPos),0,1,-20,20),yPos+map(noise(frameCount/10+40+xPos),0,1,-10,10),rectSize);	
			}
			
		}
		

	}
	pop()
	pop()

	
}
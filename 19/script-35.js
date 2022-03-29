var ourFont; //create an empty global variable.

function preload() {
	ourFont = loadFont("assets/xirod.ttf")
}

let angle = 0;

let graphics; 

function setup () {
	createCanvas(1000,1000, WEBGL);

	var randomRed = random(255);
		var randomGreen = random(255);
		var randomBlue = random(255);

		console.log
		fill(randomRed, randomGreen, randomBlue)

	//graphics = createGraphics(300,300);
	//graphics.background(255);

	h = createGraphics (1500, 1500);
//	love.background(255,100);
	h.fill(randomRed, randomGreen, randomBlue);
	h.textAlign(CENTER);
	h.textSize(1000);
	h.textFont(ourFont)
	h.text('!-!',600,600);

}

function draw() {
	background(0);

	rotateX(angle);
	rotateY(angle * 1.3);
	rotateZ(angle * 0.7);

texture(h);
plane(600, 600);

	angle += 0.04;
}
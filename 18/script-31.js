let angle = 0;

let graphics; 

function setup () {
	createCanvas(1000,1000, WEBGL);
	//graphics = createGraphics(300,300);
	//graphics.background(255);

	h = createGraphics (200, 200);
//	love.background(255,100);
	h.fill(0,0,150);
	h.textAlign(CENTER);
	h.textSize(64);
	h.text('H',150,150);

}

function draw() {
	background(0);

	rotateX(angle);
	rotateY(angle * 1.3);
	rotateZ(angle * 0.7);

texture(h);
plane(300, 300);

	angle += 0.03;
}
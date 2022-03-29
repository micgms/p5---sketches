
var myFont;
function preload() {
	myFont = loadFont('assets/bBataMerah.ttf');

}


function setup(){
	createCanvas(windowWidth,windowHeight);


}

function draw(){
	background(220,88,42);


// gets mouse coordinates
	let x=winMouseX;
	let y = winMouseY;


	

//center text
	let cx = width/2;
	let cy = height/2;

//amount of shadow distance
	let hoff = 20;


//shadow offset
	let hx = map(x,0,width,-hoff,hoff);
	let hy = map(y,0,height, -hoff,hoff);


	let shadow=20;

	let sx = hx*-shadow;

	let sy =hy*-shadow;




    textFont(myFont);
	let word="H";


	push();

//ouputs text on center of screen
	textSize(500);
	textAlign(CENTER,CENTER);
	noStroke();

//shadow position of text
	fill(0,50,75,255);
	text(word,cx+sx,cy+sy);

//hoghlight
	fill(0,220,255,255);
	text(word,cx+hx,cy+hy);

// originall text on screen
	fill(0,0,0,255);
	text(word,cx,cy);
	pop();










}
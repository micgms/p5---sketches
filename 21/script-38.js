var randomRed;
var randomGreen;
var randomBlue;
var myFont;
var randomColor;
function preload() {
	myFont = loadFont('assets/yukarimobil.ttf');

}


function setup(){
	createCanvas(1000,1000);

	randomRed = random(255);
	randomGreen = random(255);
	randomBlue = random(255);
	//randomColor=color((randomRed,randomGreen,randomBlue));

	points1 = myFont.textToPoints("H",1060,900,100);
console.log(points1)

		console.log

	
		
}
   

function draw(){
	
	
	
    background(randomRed,randomGreen,randomBlue);
	

	
	//background(220,0,42);


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
	textSize(350);
	textAlign(CENTER,CENTER);
	noStroke();

//shadow position of text
	fill(0,50,randomGreen,255);
	text(word,cx+sx,cy+sy);

	//shadow position of text
	fill(0,50,randomGreen,150);
	text(word,cx+hx,cy+sy);



//hoghlight
	fill(0,220,255,255);
	text(word,cx+hx,cy+hy);

// originall text on screen
	fill(0,0,randomGreen,255);
	text(word,cx,cy);
	pop();











}
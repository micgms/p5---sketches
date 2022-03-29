var ourFont; //create an empty global variable.

//a reminder: in order to load external assets, you need to have a localserver running.
function preload() {
	//this loads the font data into a global variable	
	ourFont = loadFont("assets/xirod.ttf")
}

var points;

function setup() {
	createCanvas(1000,1000)
	textSize(500)
	
	//calling our font variable before loading the text
	textFont(ourFont)
	// text("hello",100,800)

	fill(255,55,0)
	stroke(0,0,0)

						//textToPoints doesn't draw the text on your canvas, instead it generates the data of your shape
						//here's a video tutorial of it: https://www.youtube.com/watch?v=wbDF6xcgvV8&t=725s&ab_channel=xinxin

	points = ourFont.textToPoints("h",100,800,800);
	

}


function draw() {
	background(255)

	{

		//stroke(9)
	
		
	
		background(50,140,50)
		beginShape()
		for(let i=1;i<points.length;i++) {
			vertex(points[i].x+random(-5,5), points[i].y+random(-5,5));
		}
		endShape()
		
		
		
	}
	


	//in an array you can call any entry by citing the entry number in the square brakets
	//uncomment the next line to see:
	//console.log(points[20])
	
	//each entry in this array is itself an OBJECT which is a more complex type of variable than an array...


	for(var i=0;i<points.length;i++) {
		
		var circleRad = random(2,10)
		//object entries have names as opposed to simply numbers. to call something in an object, you use the "." see below
		var xPos = points[i].x
		var yPos = points[i].y
		rect(xPos, yPos,circleRad)
	}
	
}

var ourFont; //create an empty global variable.

function preload() {
	ourFont = loadFont("assets/Movement.ttf")
}

function setup() {

createCanvas(1000,1000)
textSize(500)
textFont(ourFont)
//text("!",100,800)

fill(255,0,0)
stroke(50,255,0)

points = ourFont.textToPoints("!-!",200,700,800);
console.log(points)

}


function draw() {
	
background(0)
for(var i=0;i<points.length;i++) {

	var circleRad = random(2,10)
	circle(points[i].x, points[i].y,circleRad)
//can create a seperate folder for assets, that includes things like fonts.

//can use visual studio code

//click on golive

//text to points
}


}
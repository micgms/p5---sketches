
var ourFont; //create an empty global variable.

function preload() {
	ourFont = loadFont("assets/Movement.ttf")
}

function setup() {

createCanvas(1000,1000)
background(0,0,0)
textSize(500)
textFont(ourFont)
//text("!",100,800)

fill(0,0,0)
stroke(255,105,105)

//big
points = ourFont.textToPoints("h",400,400,600);
console.log(points)

//small
points1 = ourFont.textToPoints("h",10,500,100);
console.log(points1)

//medium
points2 = ourFont.textToPoints("h",400,700,300);
console.log(points2)



}


function draw() {
	
background(0)
for(var i=0;i<points.length;i++) {

	var circleRad = random(2,10)
	circle(points[i].x, points[i].y,circleRad)
}

for(var i=0;i<points1.length;i++) {

	var circleRad = random(2,10)
	circle(points1[i].x, points1[i].y,circleRad)
}


for(var i=0;i<points2.length;i++) {

	var circleRad = random(2,10)
	circle(points2[i].x, points2[i].y,circleRad)
}



	//can create a seperate folder for assets, that includes things like fonts.

//can use visual studio code

//click on golive

//text to points
}



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
stroke(190,240,215)

//big
points = ourFont.textToPoints("H",220,700,100);
console.log(points)

//points4
points4 = ourFont.textToPoints("H",220,600,100);
console.log(points4)

//small
points1 = ourFont.textToPoints("H",220,500,100);
console.log(points1)

//medium
points2 = ourFont.textToPoints("H",220,300,100);
console.log(points2)

//points3
points3 = ourFont.textToPoints("H",220,400,100);
console.log(points3)



//big
points5 = ourFont.textToPoints("H",751,700,100);
console.log(points)

//points4
points6 = ourFont.textToPoints("H",751,600,100);
console.log(points4)

//small
points7 = ourFont.textToPoints("H",751,500,100);
console.log(points1)

//medium
points8 = ourFont.textToPoints("H",751,300,100);
console.log(points2)

//points3
points9 = ourFont.textToPoints("H",751,400,100);
console.log(points3)




//small
points10 = ourFont.textToPoints("H",300,500,100);
console.log(points10)

//small
points11 = ourFont.textToPoints("H",390,500,100);
console.log(points11)

//small
points12 = ourFont.textToPoints("H",480,500,100);
console.log(points12)

//small
points13 = ourFont.textToPoints("H",570,500,100);
console.log(points13)

//small
points14 = ourFont.textToPoints("H",660,500,100);
console.log(points14)
}


function draw() {
	
background(0)
for(var i=0;i<points.length;i++) {

	var circleRad = random(2,10)
	rect(points[i].x, points[i].y,circleRad)
}

for(var i=0;i<points1.length;i++) {

	var circleRad = random(2,10)
	rect(points1[i].x, points1[i].y,circleRad)
}


for(var i=0;i<points2.length;i++) {

	var circleRad = random(2,10)
	rect(points2[i].x, points2[i].y,circleRad)
}

for(var i=0;i<points3.length;i++) {

	var circleRad = random(2,10)
	rect(points3[i].x, points3[i].y,circleRad)
}

for(var i=0;i<points3.length;i++) {

	var circleRad = random(2,10)
	rect(points4[i].x, points4[i].y,circleRad)
}





for(var i=0;i<points5.length;i++) {

	var circleRad = random(2,10)
	rect(points5[i].x, points5[i].y,circleRad)
}


for(var i=0;i<points6.length;i++) {

	var circleRad = random(2,10)
	rect(points6[i].x, points6[i].y,circleRad)
}

for(var i=0;i<points7.length;i++) {

	var circleRad = random(2,10)
	rect(points7[i].x, points7[i].y,circleRad)
}

for(var i=0;i<points8.length;i++) {

	var circleRad = random(2,10)
	rect(points8[i].x, points8[i].y,circleRad)
}

for(var i=0;i<points9.length;i++) {

	var circleRad = random(2,10)
	rect(points9[i].x, points9[i].y,circleRad)
}

for(var i=0;i<points10.length;i++) {

	var circleRad = random(2,10)
	rect(points10[i].x, points10[i].y,circleRad)
}

for(var i=0;i<points11.length;i++) {

	var circleRad = random(2,10)
	rect(points11[i].x, points11[i].y,circleRad)
}

for(var i=0;i<points12.length;i++) {

	var circleRad = random(2,10)
	rect(points12[i].x, points12[i].y,circleRad)
}

for(var i=0;i<points13.length;i++) {

	var circleRad = random(2,10)
	rect(points13[i].x, points13[i].y,circleRad)
}

for(var i=0;i<points14.length;i++) {

	var circleRad = random(2,10)
	rect(points14[i].x, points14[i].y,circleRad)
}


	//can create a seperate folder for assets, that includes things like fonts.

//can use visual studio code

//click on golive

//text to points
}



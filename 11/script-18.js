var ourFont; //create an empty global variable.

function preload() {
	ourFont = loadFont("assets/Movement.ttf")
}

function setup() {

createCanvas(1500,1500)
background(0,0,0)
textSize(500)
textFont(ourFont)
//text("!",100,800)

fill(0,100,0)
stroke(100,0,100)

//big
points17 = ourFont.textToPoints("H",1060,900,100);
console.log(points17)

//big
points16 = ourFont.textToPoints("H",510,900,100);
console.log(points16)

//big
points15 = ourFont.textToPoints("H",500,800,100);
console.log(points15)

//big
points = ourFont.textToPoints("H",490,700,100);
console.log(points)

//points4
points4 = ourFont.textToPoints("H",470,600,100);
console.log(points4)

//small
points1 = ourFont.textToPoints("H",460,500,100);
console.log(points1)

//medium
points2 = ourFont.textToPoints("H",440,300,100);
console.log(points2)

//points3
points3 = ourFont.textToPoints("H",460,400,100);
console.log(points3)

//big
points5 = ourFont.textToPoints("H",1030,700,100);
console.log(points)

//points4
points6 = ourFont.textToPoints("H",1010,600,100);
console.log(points4)


//small
points7 = ourFont.textToPoints("H",1000,500,100);
console.log(points1)

//medium
points8 = ourFont.textToPoints("H",980,300,100);
console.log(points2)

//points3
points9 = ourFont.textToPoints("H",1000,400,100);
console.log(points3)

//medium
points18 = ourFont.textToPoints("H",1040,800,100);
console.log(points2)



//small
points10 = ourFont.textToPoints("H",910,500,100);
console.log(points10)

//small
points11 = ourFont.textToPoints("H",820,500,100);
console.log(points11)

//small
points12 = ourFont.textToPoints("H",730,500,100);
console.log(points12)

//small
points13 = ourFont.textToPoints("H",640,500,100);
console.log(points13)

//small
points14 = ourFont.textToPoints("H",550,500,100);
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

for(var i=0;i<points15.length;i++) {

	var circleRad = random(2,10)
	rect(points15[i].x, points15[i].y,circleRad)
}

for(var i=0;i<points16.length;i++) {

	var circleRad = random(2,10)
	rect(points16[i].x, points16[i].y,circleRad)
}

for(var i=0;i<points16.length;i++) {

	var circleRad = random(2,10)
	rect(points17[i].x, points17[i].y,circleRad)
}


for(var i=0;i<points18.length;i++) {

	var circleRad = random(2,10)
	rect(points18[i].x, points18[i].y,circleRad)
}
	//can create a seperate folder for assets, that includes things like fonts.

//can use visual studio code

//click on golive

//text to points
}





var fr = 0;

function setup() {

	stroke(50)
	noFill()
	strokeWeight(2)

	createCanvas(1000,1000)
	background(20,10,20)
	//stroke(0,255,0)
	//noStroke(0,0,0)
	//rect(50,50,400,20) //x, y, width, height
	//rect(80,50,400,20)
	//rect(110,50,400,20)
	//rect(140,50,400,20)
	//ellipse(500,100,300,300)
	//ellipse(900,600,300,300)
	//ellipse(700,900,300,300)
	//ellipse(900,500,260,260)
	//ellipse(900,500,250,250)
	//rect(900,500,5,100)
	//rect(900,500,70,5)
    //fill (255,0,0)
    //ellipse(904,500,5,5)
    //noStroke()
    //fill(200,0,200)
    //rect(250,250,30,390)
    //rect(650,250,30,390)
    //rect(250,400,420,30)

    //rect(250,750,10,190)
    //rect(350,750,10,90)


    console.log("test")

}




function draw() {
//console.log(test)
	//test = test = 1

	fill(255,215,0)
	stroke(255,215,0)
var circleRadius = 15+mouseX/4
	
circle(mouseX, mouseY,circleRadius)

//can also do circleRadius instead of a number 



}





function mousePressed() {
	saveCanvas("s1","png")


}
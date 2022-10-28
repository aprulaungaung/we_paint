
let color = "";

$(".container").click(function(){
color = $(this).css("background-color");

});

const canvas1 = document.getElementById("canvas1");

const ctx1 = canvas1.getContext("2d");



function circle(x, y,a,b, r){
  ctx1.moveTo(x,y)
  ctx1.arc(a,b,r,0,2 * Math.PI);
  ctx1.strokeStye = "black";
  ctx1.stroke();
}

function line(x,y,a,b){
  ctx1.beginPath();
  ctx1.moveTo(x,y);
  ctx1.lineTo(a,b);
  ctx1.strokeStyle = "black"
  ctx1.stroke();
}

function ellipse(sx,sy, x,y, a,b,orientation, size,side){
  ctx1.moveTo(sx,sy)
  ctx1.ellipse(x,y,a,b,Math.PI/orientation, 0, size * Math.PI, side)
  ctx1.strokeStyle = "black";
  ctx1.stroke();
}


// bird (head, eyes, body) creation///////////////////////////////////////////////////////////////////


let bird1 = new Path2D();

bird1.ellipse(200,170, 20, 15, Math.PI, 0, 2 * Math.PI);

let bird2 = new Path2D(bird1);
bird2.moveTo(100,200)

bird2.ellipse(150,200, 50,35, Math.PI, 0, 1 * Math.PI, true);

let bird3 = new Path2D(bird2);

bird3.ellipse(150,200, 50,25, Math.PI, 0, 1 * Math.PI, false)
ctx1.fillStyle= "#BCCEF8";
ctx1.fill(bird3);

circle(210,165,210,165,5);

// tail creation///////////////////////////////////////////////////////

line(102,190,40,170);
line(40,170,70,190);
line(70,190,60,200);
line(60,200,102,195);

ctx1.beginPath();
ctx1.strokeStyle = "green";
ctx1.moveTo(102,190);
ctx1.lineTo(50, 178);
ctx1.stroke();

ctx1.beginPath();
ctx1.strokeStyle = "yellow";
ctx1.moveTo(102,190);
ctx1.lineTo(67, 190);
ctx1.stroke();

ctx1.beginPath();
ctx1.strokeStyle = "red";
ctx1.moveTo(105,192);
ctx1.lineTo(67, 192);
ctx1.stroke();

// wings creation////////////////////////////////////////////////////////

ellipse(180,195, 150,195, 30,25,1, 1,true);
line(130,200,170,200);
line(135,205,165,205);
line(140,210,160,210);
line(145,215,155,215);
ellipse(180,195, 150,195, 30,5,1, 1,false);

// beak creation /////////////////////////////////////////////////////////////
// beak upper helf;
ctx1.fillStyle = "red";
ctx1.moveTo(235,155)
ctx1.lineTo(215,160);
ctx1.lineTo(220,170);
ctx1.fill();
// beak lower helf
ctx1.moveTo(230,175)
ctx1.lineTo(220,170);
ctx1.lineTo(217,180);
ctx1.fill();

// bird's legs creation/////////////////////////////////////////////////////////////
// left leg**************
ctx1.beginPath();
ctx1.strokeStyle= "red";
ctx1.moveTo(145,235);
ctx1.lineTo(145,250);
ctx1.moveTo(145,250);
ctx1.lineTo(140,255);
ctx1.moveTo(145,250);
ctx1.lineTo(160,253);
ctx1.moveTo(145,250);
ctx1.lineTo(150,255);
ctx1.stroke();

// Right leg**************

ctx1.beginPath();
ctx1.strokeStyle= "red";
ctx1.moveTo(155,235);
ctx1.lineTo(155,250);
ctx1.moveTo(155,250);
ctx1.lineTo(145,255);
ctx1.moveTo(155,250);
ctx1.lineTo(165,253);
ctx1.moveTo(155,250);
ctx1.lineTo(160,255);
ctx1.stroke();

canvas1.addEventListener("click",function(e){
  let isPointInPath = ctx1.isPointInPath(bird3, e.offsetX, e.offsetY);

  ctx1.fillStyle = isPointInPath? color : "#BCCEF8";

  ctx1.clearRect(0,0, canvas1.width, canvas1.height);

  ctx1.fill(bird3);

circle(210,165,210,165,5);
  // tail creation///////////////////////////////////////////////////////

  line(102,190,40,170);
  line(40,170,70,190);
  line(70,190,60,200);
  line(60,200,102,195);

  ctx1.beginPath();
  ctx1.strokeStyle = "green";
  ctx1.moveTo(102,190);
  ctx1.lineTo(50, 178);
  ctx1.stroke();

  ctx1.beginPath();
  ctx1.strokeStyle = "yellow";
  ctx1.moveTo(102,190);
  ctx1.lineTo(67, 190);
  ctx1.stroke();

  ctx1.beginPath();
  ctx1.strokeStyle = "red";
  ctx1.moveTo(105,192);
  ctx1.lineTo(67, 192);
  ctx1.stroke();

  // wings creation////////////////////////////////////////////////////////

  ellipse(180,195, 150,195, 30,25,1, 1,true);
  line(130,200,170,200);
  line(135,205,165,205);
  line(140,210,160,210);
  line(145,215,155,215);
  ellipse(180,195, 150,195, 30,5,1, 1,false);

  // beak creation /////////////////////////////////////////////////////////////
  // beak upper helf;
  ctx1.fillStyle = "red";
  ctx1.moveTo(235,155)
  ctx1.lineTo(215,160);
  ctx1.lineTo(220,170);
  ctx1.fill();
  // beak lower helf
  ctx1.moveTo(230,175)
  ctx1.lineTo(220,170);
  ctx1.lineTo(217,180);
  ctx1.fill();

  // bird's legs creation/////////////////////////////////////////////////////////////
  // left leg**************
  ctx1.beginPath();
  ctx1.strokeStyle= "red";
  ctx1.moveTo(145,235);
  ctx1.lineTo(145,250);
  ctx1.moveTo(145,250);
  ctx1.lineTo(140,255);
  ctx1.moveTo(145,250);
  ctx1.lineTo(160,253);
  ctx1.moveTo(145,250);
  ctx1.lineTo(150,255);
  ctx1.stroke();

  // Right leg**************

  ctx1.beginPath();
  ctx1.strokeStyle= "red";
  ctx1.moveTo(155,235);
  ctx1.lineTo(155,250);
  ctx1.moveTo(155,250);
  ctx1.lineTo(145,255);
  ctx1.moveTo(155,250);
  ctx1.lineTo(165,253);
  ctx1.moveTo(155,250);
  ctx1.lineTo(160,255);
  ctx1.stroke();


})


// canvas 2 ( car creation )/////////////////////////////////////////////////////////////////////


const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");

function outerCircle(mtX,mtY,x, y, r){
  ctx2.beginPath();
  ctx2.moveTo(mtX, mtY);
  ctx2.arc(x,y,r, 0, 2 * Math.PI);
  ctx2.fillStyle = "black";
  ctx2.fill();
}

function innerCircle(mtX,mtY,x, y, r){
  ctx2.beginPath();
  ctx2.moveTo(mtX, mtY);
  ctx2.arc(x,y,r, 0, 2 * Math.PI);
  ctx2.fillStyle = "white";
  ctx2.fill();
}

function door(mtX, mtY, x,y, width, height){

  ctx2.beginPath();
  ctx2.moveTo(mtX,mtY);
  ctx2.rect(x,y, width,height);
  ctx2.strokeStyle = "blue";
  ctx2.stroke();
}

function ellipseC2(mtX, mtY, x, y,orientation,startAngle,ratio, side){
  ctx2.beginPath();
  ctx2.moveTo(mtX,mtY);
  ctx2.ellipse(mtX,mtY, x,y,Math.PI/orientation,startAngle, ratio * Math.PI, side);
  ctx2.fillStyle = "#E0144C";
  ctx2.fill();
}

function lineC2(mtX, mtY,a,b){
  ctx2.beginPath();
  ctx2.moveTo(mtX, mtY)
  ctx2.lineTo(a,b);
  ctx2.strokeStyle = "blue";
  ctx2.stroke();
}

let car1 = new Path2D();

car1.rect(30, 100, 200,100);

let car2 = new Path2D(car1);

car2.rect(230,125, 70, 73);

let car3 = new Path2D(car2);

car3.rect(300, 148, 50, 50);

let car4 = new Path2D(car3);

car4.rect(350,188,15,10);

ctx2.fillStyle = "#BCCEF8";
ctx2.fill(car4);

// wheels creation/////////////////////////////////////////////////////////////////

outerCircle( 75,225, 75, 225, 25);
outerCircle( 200,225, 200, 225, 25);
outerCircle( 325,225, 325, 225, 25);

innerCircle(75,225,75, 225, 10);
innerCircle(200,225,200, 225, 10);
innerCircle( 325,225, 325, 225, 10);

// doors creation/////////////////////////////////////////////////////////////////

door(50, 125, 50,125, 150, 55);
door(245, 145, 245,145, 20, 40);
door(290, 128, 290,128, 10, 23)

// head-light creation ////////////////////////////////////////////////////////////////////

ellipseC2(365, 175, 8, 13,2,0,1);
lineC2(362, 182, 362,188);

// line creation ///////////////////////////////////////////////////////////////////

lineC2(315, 165,315,180)
lineC2(320, 165,320,180)
lineC2(325, 165,325,180)
lineC2(330, 165,330,180)
lineC2(335, 165,335,180)
lineC2(340, 165,340,180)

canvas2.addEventListener("click", function(e){

let isPointInPathC2 = ctx2.isPointInPath(car4, e.offsetX, e.offsetY);

ctx2.fillStyle = isPointInPathC2 ? color : "#BCCEF8";


ctx2.clearRect(0,0, canvas2.width, canvas2.height);
ctx2.fill(car4);

// wheels creation/////////////////////////////////////////////////////////////////

outerCircle( 75,225, 75, 225, 25);
outerCircle( 200,225, 200, 225, 25);
outerCircle( 325,225, 325, 225, 25);

innerCircle(75,225,75, 225, 10);
innerCircle(200,225,200, 225, 10);
innerCircle( 325,225, 325, 225, 10);

// doors creation/////////////////////////////////////////////////////////////////

door(50, 125, 50,125, 150, 55);
door(245, 145, 245,145, 20, 40);
door(290, 128, 290,128, 10, 23)

// head-light creation ////////////////////////////////////////////////////////////////////

ellipseC2(365, 175, 8, 13,2,0,1);
lineC2(362, 182, 362,188);

})

// canvas3 (umbrella) creation////////////////////////////////////////////////////////////////////

const canvas3 = document.getElementById("canvas3");
const ctx3 = canvas3.getContext("2d");

function lineC3(x,y, a,b){
  ctx3.beginPath();
  ctx3.moveTo(x,y);
  ctx3.lineTo(a,b);
  ctx3.lineWidth = 1;
  ctx3.strokeStyle="black";
  ctx3.stroke();
}

ctx3.beginPath();
ctx3.moveTo(150, 100);
let umbrella1 = new Path2D();
umbrella1.ellipse(150,100, 65, 30, Math.PI/1.10, 0, 2 * Math.PI);

ctx3.fillStyle ="#BCCEF8" ;
ctx3.fill(umbrella1)

// umbrella head creation/////////////////////////////////////////////////////////////

ctx3.beginPath();
ctx3.moveTo(140,60);
ctx3.lineTo(145,100);
ctx3.lineTo(154,95);
ctx3.fillStyle = "#CD104D";
ctx3.fill();

//  frame creation////////////////////////////////////////////////////////////////

lineC3(150,95, 97,130)
lineC3(150,95, 90,120)
lineC3(150,95, 88,110)
lineC3(150,95, 92,100)
lineC3(150,95, 101,90)
lineC3(150,95, 116,80)
lineC3(150,95, 130,75)

lineC3(150,95, 150,68)
lineC3(150,95, 160,66)
lineC3(150,95, 170,66)
lineC3(150,95, 180,66)
lineC3(150,95, 190,68)
lineC3(150,95, 200,70)
lineC3(150,95, 210,75)
lineC3(150,95, 213,83)
lineC3(150,95, 214,90)
lineC3(150,95, 208,100)
lineC3(150,95, 199,110)
lineC3(150,95, 183,120)
lineC3(150,95, 165,126)
lineC3(150,95, 150,130)
lineC3(150,95, 133,135)
lineC3(150,95, 115,134)

// sterm creation////////////////////////////////////////////////////////
ctx3.beginPath();
ctx3.lineWidth = 5
ctx3.moveTo(158,130)
ctx3.lineTo(167,175);
ctx3.strokeStyle = "black";
ctx3.stroke();

// handle creation /////////////////////////////////////////////////////////

ctx3.beginPath();
ctx3.moveTo(190,175);
ctx3.arc(177, 175, 10, 0, 1 * Math.PI, false);
ctx3.lineWidth = 5;
ctx3.strokeStyle = "red";
ctx3.stroke();

canvas3.addEventListener("click", function(e){
  let isPointInPathC3 = ctx3.isPointInPath(umbrella1, e.offsetX, e.offsetY);

  ctx3.fillStyle = isPointInPathC3 ? color : "#BCCEF8";
  ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
  ctx3.fill(umbrella1);

  // umbrella head creation/////////////////////////////////////////////////////////////

  ctx3.beginPath();
  ctx3.moveTo(140,60);
  ctx3.lineTo(145,100);
  ctx3.lineTo(154,95);
  ctx3.fillStyle = "#CD104D";
  ctx3.fill();

  //  frame creation////////////////////////////////////////////////////////////////

  lineC3(150,95, 97,130)
  lineC3(150,95, 90,120)
  lineC3(150,95, 88,110)
  lineC3(150,95, 92,100)
  lineC3(150,95, 101,90)
  lineC3(150,95, 116,80)
  lineC3(150,95, 130,75)

  lineC3(150,95, 150,68)
  lineC3(150,95, 160,66)
  lineC3(150,95, 170,66)
  lineC3(150,95, 180,66)
  lineC3(150,95, 190,68)
  lineC3(150,95, 200,70)
  lineC3(150,95, 210,75)
  lineC3(150,95, 213,83)
  lineC3(150,95, 214,90)
  lineC3(150,95, 208,100)
  lineC3(150,95, 199,110)
  lineC3(150,95, 183,120)
  lineC3(150,95, 165,126)
  lineC3(150,95, 150,130)
  lineC3(150,95, 133,135)
  lineC3(150,95, 115,134)

  // sterm creation////////////////////////////////////////////////////////
  ctx3.beginPath();
  ctx3.lineWidth = 5
  ctx3.moveTo(158,130)
  ctx3.lineTo(167,175);
  ctx3.strokeStyle = "black";
  ctx3.stroke();

  // handle creation //////////////////////////////////////////////////////////////////////////////

  ctx3.beginPath();
  ctx3.moveTo(190,175);
  ctx3.arc(177, 175, 10, 0, 1 * Math.PI, false);
  ctx3.lineWidth = 5;
  ctx3.strokeStyle = "red";
  ctx3.stroke();

})

// canvas4 (flower) creation //////////////////////////////////////////////////////////////////////

const canvas4 = document.getElementById("canvas4");

const ctx4 = canvas4.getContext("2d");

ctx4.beginPath();


let petal1 = new Path2D();

petal1.ellipse(100,120, 70, 20, Math.PI/1, 0, 2 * Math.PI);

let petal2 = new Path2D(petal1);

petal2.moveTo(100,120);
petal2.ellipse(100,120, 20, 70, Math.PI/1, 0, 2 * Math.PI);

let petal3 = new Path2D(petal2);

petal3.moveTo(100,120);
petal3.ellipse(100,120, 70, 20, Math.PI/4, 0, 2 * Math.PI);

let petal4 = new Path2D(petal3);
petal4.moveTo(100,120);
petal4.ellipse(100, 120, 70,20, Math.PI/1.30, 0, 2 * Math.PI);

ctx4.fillStyle = "#BCCEF8";
ctx4.fill(petal4);


// pollen creation ///////////////////////////////////////////////////////////////////////////////////

ctx4.beginPath();
ctx4.moveTo(100,120);
ctx4.arc(100,120, 30, 0, 2 * Math.PI);

ctx4.fillStyle="#FCE700";
ctx4.fill();

// sterm creation///////////////////////////////////////////////////////

ctx4.beginPath();
ctx4.moveTo(100, 250);
ctx4.lineWidth = 5;

ctx4.ellipse(135, 210, 50, 10, Math.PI/2.5, 0 , 1 * Math.PI);
ctx4.strokeStyle = "green";
ctx4.stroke();

// leaf creation///////////////////////////////////////////////

ctx4.beginPath();
ctx4.lineWidth = 1;
let leaf1 = new Path2D();
leaf1.moveTo(170,190);
leaf1.ellipse(170,190, 50, 15, Math.PI/1.5, 0, 2 * Math.PI);
ctx4.stroke(leaf1);

ctx4.beginPath();
ctx4.moveTo(150,225);
ctx4.lineTo(140, 240);
ctx4.stroke();

canvas4.addEventListener("click", function(e){
  let isPointInPathC4 = ctx4.isPointInPath(petal4, e.offsetX, e.offsetY);
  ctx4.fillStyle = isPointInPathC4 ? color : "#BCCEF8";

  ctx4.clearRect(0, 0, canvas4.width, canvas4.height);
  ctx4.fill(petal4);

  // pollen creation ///////////////////////////////////////////////////////////////////////////////////

  ctx4.beginPath();
  ctx4.moveTo(100,120);
  ctx4.arc(100,120, 30, 0, 2 * Math.PI);

  ctx4.fillStyle="#FCE700";
  ctx4.fill();

  // sterm creation///////////////////////////////////////////////////////

  ctx4.beginPath();
  ctx4.moveTo(100, 250);
  ctx4.lineWidth = 5;

  ctx4.ellipse(135, 210, 50, 10, Math.PI/2.5, 0 , 1 * Math.PI);
  ctx4.strokeStyle = "green";
  ctx4.stroke();

  // leaf creation///////////////////////////////////////////////

  ctx4.beginPath();
  ctx4.lineWidth = 1;
  let leaf1 = new Path2D();
  leaf1.moveTo(170,190);
  leaf1.ellipse(170,190, 50, 15, Math.PI/1.5, 0, 2 * Math.PI);
  ctx4.stroke(leaf1);

  ctx4.beginPath();
  ctx4.moveTo(150,225);
  ctx4.lineTo(140, 240);
  ctx4.stroke();
})

// canvas5 (house) creation///////////////////////////////////////////////////////////////////////////

const canvas5 = document.getElementById("canvas5");

const ctx5 = canvas5.getContext("2d");

function houseDoor(x,y,width,height){
  ctx5.beginPath();
  ctx5.rect(x,y, width,height)
  ctx5.lineWidth = 0.2;
  ctx5.strokeStyle = "red";
  ctx5.stroke();
}

function houseLine(x,y,a,b){
  ctx5.beginPath();
  ctx5.moveTo(x,y);
  ctx5.lineTo(a,b);
  ctx5.lineWidth = 0.2;
  ctx5.strokeStyle = "red";
  ctx5.stroke();
}

let house1 = new Path2D();

house1.moveTo(100,80);
house1.lineTo(50, 120);
house1.lineTo(100,120);

let house2 = new Path2D(house1);
house2.rect(100,80, 250, 130);

let house3 = new Path2D(house2);
house3.moveTo(300,50);
house3.lineTo(250,80);
house3.lineTo(350,80);

let house4 = new Path2D(house3);
house4.moveTo(350, 100);
house4.lineTo(350,130);
house4.lineTo(450,130);

let house5 = new Path2D(house4);

house5.rect(350,130,70,70);
ctx5.fillStyle= "#BCCEF8";
ctx5.fill(house5);

// house door creation/////////////////////////////////////////////////////////////////

houseDoor(120,130,30,35);
houseDoor(190,130,30,65);

ctx5.beginPath();
ctx5.strokeStyle = "black";
ctx5.lineWidth = 0.2;
ctx5.rect(265,100,65,105);
ctx5.stroke();
houseDoor(360,135,30,35);

houseLine(120,147,150,147)
houseLine(135,130,135,165)
houseLine(375,135,375,170)
houseLine(360,152.5,390,152.5)
houseLine(205,130,205,195)

canvas5.addEventListener("click", function(e){
  let isPointInPathC5 = ctx5.isPointInPath(house5, e.offsetX, e.offsetY);

  ctx5.fillStyle = isPointInPathC5 ? color :  "#BCCEF8";

  ctx5.clearRect(0,0, canvas5.width, canvas5.height);
  ctx5.fill(house5);

  // house door creation/////////////////////////////////////////////////////////////////

  houseDoor(120,130,30,35);
  houseDoor(190,130,30,65);

  ctx5.beginPath();
  ctx5.strokeStyle = "black";
  ctx5.lineWidth = 0.2;
  ctx5.rect(265,100,65,105);
  ctx5.stroke();
  houseDoor(360,135,30,35);

  houseLine(120,147,150,147);
  houseLine(135,130,135,165);
  houseLine(375,135,375,170);
  houseLine(360,152.5,390,152.5);
  houseLine(205,130,205,195);

});


// Glass creation/////////////////////////////////////////////////////////////////////////////////////////

const canvas6 = document.getElementById("canvas6");

const ctx6 = canvas6.getContext("2d");

function glassLine(x,y,a,b){
  ctx6.beginPath();
  ctx6.moveTo(x,y);
  ctx6.lineTo(a,b);
  ctx6.stroke();
}

let glass1 = new Path2D();

glass1.ellipse(150,160, 40, 10, Math.PI/1, 0, 2 * Math.PI);

let glass2 = new Path2D(glass1);
glass2.moveTo(110,160);
glass2.lineTo(125,250);

let glass3 = new Path2D(glass2);
glass3.moveTo(190,160);
glass3.lineTo(175,250);

let glass4 = new Path2D(glass3);

glass4.ellipse(150,250,25,6, Math.PI/1, 0, 2 * Math.PI);
ctx6.fillStyle = "#BCCEF8";
ctx6.fill(glass4);

ctx6.beginPath();
ctx6.ellipse(150, 130, 50, 12, Math.PI/1 , 0, 2 * Math.PI );
ctx6.strokeStyle = "black";
ctx6.stroke();

glassLine(100,130,125,250);
glassLine(200,130,175,250);

canvas6.addEventListener("click", function(e){
  let isPointInPathC6 = ctx6.isPointInPath(glass4, e.offsetX, e.offsetY);

ctx6.fillStyle = isPointInPathC6 ? color : "#BCCEF8";
ctx6.clearRect(0,0, canvas6.width, canvas6.height);

ctx6.fill(glass4);

ctx6.beginPath();
ctx6.ellipse(150, 130, 50, 12, Math.PI/1 , 0, 2 * Math.PI );
ctx6.stroke();

glassLine(100,130,125,250);
glassLine(200,130,175,250);




})

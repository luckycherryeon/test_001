let angle =0; //각도 하나 주기 
let slider0;
let slider1;

function setup() {
createCanvas(400,400);
angleMode(DEGREES);
slider0 = createSlider(1,10,1); // createSlider(최소값, 최대값, 기본값);
slider1 = createSlider(1,10,1);
slider0.position(50,5); //위치
slider1.position(50,25);
slider0.style("width","80px"); //길이 줄어듬 
slider1.style("width","80px");
}

function draw() {
background(220);
beginShape();
let value0=slider0.value(); 
let value1=slider1.value();
for(let i =0; i<360; i=i+1) {
angle=i;
let x = sin(angle*value0) * 100+ 200  //마우스 값 대신 
let y = sin(angle*value1) * 100 + 200
vertex(x,y); 
}
endShape(CLOSE); text("X:" +value0,20,20);
text("Y:" +value1,20,40);
}

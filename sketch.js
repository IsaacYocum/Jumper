let body;

function setup() {
    createCanvas(400, 400);
    body = new Body(100, 100, 50 , 50);
}


function draw() {
    background(220);
    // weirdShape();
    body.show();

}

function weirdShape() {
    beginShape();
    vertex(20, 20);
    vertex(40, 20);
    vertex(40, 40);
    vertex(60, 40);
    vertex(60, 60);
    vertex(20, 60);
    endShape(CLOSE);
    // body.show();

}

function mousePressed() {
    body.jump();
    
}
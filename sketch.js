let ground;
let body;

function setup() {
    createCanvas(1000, 400);
    ground = new Ground(0, height - 50, width, height - 50);
    body = new Body(100, 100, 50, 50);

}

function draw() {
    background(220);
    ground.show();
    body.update()
    body.show();

    if (keyIsDown(65)) {
        body.move('left');
    } else if (keyIsDown(68)) {
        body.move('right');
    }
}

function keyPressed() {
    if (key === ' ' && body.onGround()) {
        body.jump();
    }
}
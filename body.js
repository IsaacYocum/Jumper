class Body {
    constructor(x_, y_, w_) {
        this.x = x_;
        this.y = y_;
        this.w = w_;
        
        this.ground = true;
        this.gravity = 0.5;
        this.lift = -10;
        this.velocity = 0;
    }

    update() {
        this.velocity += this.gravity;
        this.y += this.velocity;

        // On ground
        if (this.y + 150 >= height - 50) {
            this.y = height - 50 - 150;
            this.velocity = 0;
            this.ground = true;
        }

        // Hits ceiling
        if (this.y - this.w/2 <= 0) {
            this.y = this.w/2;
            this.velocity = 0;
        }

        // Left wall
        if (this.x - 40 <= 0) {
            this.x = 40;
        }

        // Right wall
        if (this.x + 40 >= width) {
            this.x = width - 40;
        }
    }

    show() {
        // console.log(this.x, this.y)
        beginShape();

            // Torso
            line(this.x, this.y, this.x, this.y + 100);

            // Arms
            line(this.x, this.y + 50, this.x - 40, this.y + 40);
            line(this.x, this.y + 50, this.x + 40, this.y + 40);

            // Legs
            line(this.x, this.y + 100, this.x - 30, this.y + 150);
            line(this.x, this.y + 100, this.x + 30, this.y + 150);

            // Head
            circle(this.x, this.y, 50);

        endShape(CLOSE);
    }

    /************************************************************************
                                    MOVEMENTS
    ************************************************************************/
    onGround() {
        return this.ground;
    }

    jump() {
        this.velocity += this.lift;
        this.ground = false;
    }

    move(direction) {
        if (direction === 'left') {
            this.x -= 20;
        } else if (direction === 'right') {
            this.x += 20;
        }
    }
}

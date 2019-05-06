class Ground {
    constructor(x1_, y1_, x2_, y2_) {
        this.x1 = x1_;
        this.x2 = x2_;
        this.y1 = y1_;
        this.y2 = y2_;
    }

    getHeight() {
        return this.y2;
    }

    getWidth() {
        return this.x2;
    }

    show() {
        line(this.x1, this.y1, this.x2, this.y2);
    }
}
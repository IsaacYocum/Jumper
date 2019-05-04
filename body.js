class Body {
    constructor(x_, y_, w_, h_) {
        this.x = x_;
        this.y = y_;
        this.w = w_;
        this.h = h_;
    }

    show() {
        // console.log(this.x, this.y)
        ellipse(this.x, this.y, this.w, this.h);
    }

    jump() {
        // this.y -= 50;
        // setTimeout(function() {
        // }, 5);
        // this.y += 60;
        for (var i = 0; i < 50; i++) {
            this.wait(5)
            this.y -= 1;

        }
        // for (var i = 0; i < 50; i++) {
        //     if (i % 1000 == 0) {
        //         this.y += 1;
        //     }
        // }

        console.log(true)

        // this.y += 50;
    }

    delay(n) {
        n = n || 2000;
        return new Promise(done => {
            setTimeout(() => {
                done();
            }, n);
        });
    }

    wait(ms) {
        var start = Date.now(),
            now = start;
        while (now - start < ms) {
          now = Date.now();
        }
    }
}

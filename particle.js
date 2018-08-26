class Particle {

    constructor(x, y, s, r, g, b) {
        this.x = x;
        this.y = y;
        this.s = s;
        this.r = r;
        this.g = g;
        this.b = b;

        this.location = createVector(this.x, this.y);
        this.velocity = createVector(this.x, this.y);
        this.acceleration = 0;
        this.target = 0;
        this.targetX = random(0, windowWidth);
        this.targetY = random(0, windowHeight);
        this.changeTime = random(0, 60);
        this.detectedTouch = false;
        this.mouseIsNear = false;
        this.changeRate = Math.floor(Math.random() * Math.floor(20));
    }
    change(mx, my) {
        if (this.detectedTouch === true && dist(mouseX, mouseY, this.getX(), this.getY()) < 200) {
            this.mouseIsNear = true;
            this.targetX = mx;
            this.targetY = my;

        } else {
            this.mouseIsNear = false;
            if (new Date().getSeconds() % this.changeRate === 0) {
                this.targetX = random(0, windowWidth);
                this.targetY = random(0, windowHeight);
            } else {
                this.targetX = random(0, windowWidth);
                this.targetY = random(0, windowHeight);
            }
        }
    }

    move() {
        this.target = createVector(this.targetX, this.targetY);
        if (this.mouseIsNear === true) {
            this.acceleration = p5.Vector.sub(this.location, this.target);

        } else {
            this.acceleration = p5.Vector.sub(this.target, this.location);
        }
        this.acceleration.setMag(0.1);
        this.velocity.add(this.acceleration);
        this.velocity.limit(2);
        this.location.add(this.velocity);
        this.x = this.location.x;
        this.y = this.location.y;

    }



    setDetectedTouch(isTouch) {
        this.detectedTouch = isTouch;
    }

    getX() {

        return this.x;
    }
    getY() {

        return this.y;
    }

    getSize() {
        return this.s;
    }

    getColor() {
        return [this.r, this.g, this.b];
    }


}
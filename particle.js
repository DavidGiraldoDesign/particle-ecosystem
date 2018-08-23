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
    }

    move() {
        this.x++;
        this.target = createVector(this.targetX, this.targetY);
        this.acceleration = p5.Vector.sub(this.target, this.location);
        this.acceleration.setMag(0.1);
        this.velocity.add(this.acceleration);
        // Limit the velocity by topspeed
        this.velocity.limit(2);
        // Location changes by velocity
        this.location.add(this.velocity);
        this.x = this.location.x;
        this.y = this.location.y;

    }

    change(mx, my) {
        if (this.detectedTouch === true) {
            this.targetX = mx;
            this.targetY = my;
        } else {
            if (new Date().getSeconds() % 10 === 0) {
                this.targetX = random(0, windowWidth);
                this.targetY = random(0, windowHeight);
            }
        }
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
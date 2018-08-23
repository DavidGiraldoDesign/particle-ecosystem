class Particle {
    
    //velocity;
    constructor(x, y, s, r, g, b) {
        this.x = x;
        this.y = y;
        this.s = s;
        this.r = r;
        this.g = g;
        this.b = b;
        
        //this.location = createVector(this.x,this.y);
        //this.velocity = createVector(this.x,this.y);
    }

    move() {
        this.x++;
    }

    getX() {

        return this.x;
    }
    getY() {

        return this.y;
    }

    getColor() {
        return [this.r, this.g, this.b];
    }


}
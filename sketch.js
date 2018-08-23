let canvas;
let particles = [];

function windowResized() {
    resideCanvas(windowWidth, windowHeight);
}

function setup() {

    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');

    for (let i = 0; i < 100; i++) {
        particles[i] = new Particle(random(0,windowWidth), random(0,windowHeight), 20, 255, 0, 0);
    }
    particles.forEach(p => {
        console.log(p.getColor());
    });
}

function draw() {
    background(0);
    newCursor();
    particles.forEach(p => {
        displayParicles(p.getX(), p.getY(), p.getColor(), false, true);
        //p.move();

    });
}

function newCursor() {
    noStroke();
    fill(255);
    ellipse(pmouseX, pmouseY, 10, 10);
}

function displayParicles(x, y, rgb, hasStroke, hasFill) {

    if (hasStroke == true) {
        stroke(color(rgb[0], rgb[1], rgb[2]));
    } else {
        noStroke();
    }
    if (hasFill == true) {
        fill(color(rgb[0], rgb[1], rgb[2]));
    } else {
        noStroke();
    }
    ellipse(x, y, 20, 20);
}
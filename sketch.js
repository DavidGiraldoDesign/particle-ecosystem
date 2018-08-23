let canvas;
let particles = [];

function setup() {

    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');

    for (let i = 0; i < 500; i++) {
        particles[i] = new Particle(random(0, windowWidth), random(0, windowHeight), 5, 255, 0, 0);
    }
}

function draw() {
    background(0);
    newCursor();
    particles.forEach(p => {
        displayParicles(p.getX(), p.getY(), p.getSize(), p.getColor(), false, true);
        p.move();
        p.change(mouseX,mouseY);

    });
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

function newCursor() {
    noStroke();
    fill(255);
    ellipse(pmouseX, pmouseY, 10, 10);
}

function displayParicles(x, y, s, rgb, hasStroke, hasFill) {

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
    ellipse(x, y, s, s);
}

function mousePressed() {
    particles.forEach(p => {
        p.setDetectedTouch(true);
    });
}

function mouseReleased() {
    particles.forEach(p => {
        p.setDetectedTouch(false);
    });
}
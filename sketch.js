let canvas;
let particles = [];

function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
   canvas.style('z-index', '0');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');

    for (let i = 0; i < 1500; i++) {
        particles[i] = new Particle(random(0, windowWidth), random(0, windowHeight), 3, 255, 255, 255);
    }
}

function draw() {
    
    //clear();
    background(0,60);
    newCursor();
    //console.log(int(dist(mouseX, mouseY, 0, 0)));
    particles.forEach((p,i) => {
        displayParicles(p.getX(), p.getY(), p.getSize(), p.getColor(), false, true);
        p.change(mouseX,mouseY);
        p.move();
        
        // particles.forEach((o,j)=>{
        //      if(i!=j){
        //          p.avoidOther(o.getX(),o.getY());
        //      }
            
        // });
        

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
    rect(x, y, s, s);
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

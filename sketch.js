let canvas;
let particles = [];

let divs = [];


function setup() {
    frameRate(60);

    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    /*-------------------------------------------------*/

    for (let i = 0; i < 10; i++) {
        divs[i] = document.createElement('div');
        divs[i].className = 'e';
        divs[i].style.backgroundImage = "url('https://instagram.fclo1-1.fna.fbcdn.net/vp/c993e515f43505b1b1a6e89cca383ed7/5BFE028E/t51.2885-15/e35/22352532_142189573062985_510759147222859776_n.jpg')"
        //divs[i].src = 'https://instagram.fclo1-1.fna.fbcdn.net/vp/c993e515f43505b1b1a6e89cca383ed7/5BFE028E/t51.2885-15/e35/22352532_142189573062985_510759147222859776_n.jpg';
        divs[i].innerHTML = '';
        console.log("div" + divs[i]);
        document.querySelector("body").appendChild(divs[i]);
    }

    /*-------------------------------------------------*/
    for (let i = 0; i < 10; i++) {
    
        particles[i] = new Particle(random(0, windowWidth), random(0, windowHeight), 50, 255, 255, 255);
        particles[i].setDetectedTouch(true);
    }
}

function draw() {
    background(0,50);
    newCursor();
    /*console.log(int(dist(mouseX, mouseY, 0, 0)));
    divs.forEach((d)=>{
        d.style.top = mouseY+"px";
    });*/
    particles.forEach((p, i) => {
        displayParicles(p.getX(), p.getY(), p.getSize(), p.getColor(), false, true);
        //p.change(mouseX, mouseY);
        p.change(windowWidth/2, windowHeight/2);
     divs[i].style.top = p.getY() + "px";
    divs[i].style.left = p.getX() + "px";
        p.move();


        particles.forEach((o, j) => {
            if (i != j) {
                p.avoidOther(o.getX(), o.getY());
            }

        });


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
    ellipse(x+(s/2), y+(s/2), s, s);
}



function mousePressed() {
    particles.forEach(p => {
       // p.setDetectedTouch(true);
    });
}



function mouseReleased() {
    particles.forEach(p => {
        // p.setDetectedTouch(false);
    });
}
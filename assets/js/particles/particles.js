var canvas;
var particles = [];
var colors;
p5.disableFriendlyErrors = true;

function setup() {
    canvas = createCanvas(document.body.offsetWidth, windowHeight - document.querySelector('#mastheadDiv').offsetHeight);
    canvas.position(0, document.querySelector('#mastheadDiv').offsetHeight);
    canvas.style("z-index", "-9999");
    colors = [color(86, 159, 232, 10), color(161, 96, 235, 10), color(237, 166, 235, 10), color(166, 237, 218, 10)];

    for (let i = 0; i < 100; i++) {
        particles.push(new Particle(random(width), random(height)));
    }
}

function draw() {
    clear();

    for (let i = 0; i < particles.length; i++) {
        p = particles[i];
        if (p.time / p.speed <= 1) {
            p.time += (0.01 + p.moveSpeed) * deltaTime;

            if (p.time / p.speed <= .5) {
                p.moveSpeed = lerp(0, p.maxSpeed, p.time / p.speed);
            } else {
                p.moveSpeed = lerp(p.maxSpeed, 0, p.time / p.speed);
            }

            p.x = lerp(p.ox, p.v.x, p.time / p.speed);
            p.y = lerp(p.oy, p.v.y, p.time / p.speed);
        } else {
            p.v = newGoal();
            p.ox = p.x;
            p.oy = p.y;
            p.time = 0;
            p.maxSpeed = random(0.1, 2);
            p.moveSpeed = 0;
        }

        stroke(p.color);
        strokeWeight(10);
        point(p.x, p.y);
        strokeWeight(8);
        point(p.x, p.y);
        strokeWeight(4);
        point(p.x, p.y);
        strokeWeight(2);
        point(p.x, p.y);
    }
}

function newGoal() {
    return new p5.Vector(random(width), random(height));
}

class Particle {
    constructor(_x, _y) {
        this.x = _x;
        this.y = _y;
        this.v = newGoal();
        this.ox = _x;
        this.oy = _y;
        this.speed = 2000;
        this.time = 0;
        this.color = random(colors);
        this.maxSpeed = random(0.1, 2);
        this.moveSpeed = 0;
    }
}

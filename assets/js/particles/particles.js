var canvas;
var particles;
var colors;
var slider;
var parts = 100;

p5.disableFriendlyErrors = true;

function setup() {
    canvas = createCanvas(document.body.offsetWidth, document.documentElement.scrollHeight - document.querySelector('#mastheadDiv').offsetHeight - document.querySelector('#footer').offsetHeight);
    canvas.position(0, document.querySelector('#mastheadDiv').offsetHeight);
    canvas.style("z-index", "-9999");
    colors = [ color(86, 159, 232, 10), color(161, 96, 235, 10), color(237, 166, 235, 10), color(166, 237, 218, 10) ];

    slider = document.querySelector("#particles");

    var cookieParts = getCookie("cookieParts");

    // Double tilde drops any decimal and casts string to int
    if (!isNaN(cookieParts) && cookieParts != "") {
        slider.value = ~~cookieParts;
        parts = slider.value;
    }

    slider.oninput = function () {
        parts = this.value;
        resetSketch();
    }

    resetSketch();
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

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function resetSketch() {
    setCookie("cookieParts", parts, 60);
    particles = [];
    for (let i = 0; i < parts; i++) {
        particles.push(new Particle(random(width), random(height)));
    }
}

function newGoal() {
    return new p5.Vector(random(width), random(height));
}

function windowResized() {
    resizeCanvas(document.body.getBoundingClientRect().width, document.documentElement.scrollHeight - document.querySelector('#mastheadDiv').offsetHeight - document.querySelector('#footer').offsetHeight);
    canvas.position(0, document.querySelector('#mastheadDiv').offsetHeight);
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

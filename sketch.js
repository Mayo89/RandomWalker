var walker;

function setup() {
    createCanvas(640, 360);
    background(127);

    walker = new Walker();
}

function draw() {
    walker.step();
    walker.render();
}

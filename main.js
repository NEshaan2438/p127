function preload() {
    trackA = loadSound("track1.mp3");
    trackB = loadSound("track2.mp3");
}

function setup() {
    canvas = createCanvas(540, 450);
    canvas.position(860, 270);

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 540, 450);
}
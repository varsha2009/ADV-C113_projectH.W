function preload(){
}
function setup(){
    canvas = createCanvas(560 , 500);
    canvas.position(410 , 95);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    stroke('blue');
    strokeWeight(10);
    rect(45, 50, 450, 400);

    fill('lightblue');
    circle(55, 55, 75);
    circle(485, 55, 75);
    circle(485, 440, 75);
    circle(55, 440, 75);

    image(video,95,100,350,300)
}
function take_snapshot(){
    save('my-profile.png');
}
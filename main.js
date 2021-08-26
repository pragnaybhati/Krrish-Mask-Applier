nose_x = 0;
nose_y = 0;

function preload() {
   krrish_mask = loadImage("https://i.postimg.cc/JzG7VkKj/R0ed464b2dda6cbfac0b58a0914789ae3.png");
}

function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(280, 280);
    video.hide();

    poseNet = ml5.poseNet(video, modal_loaded);
    poseNet.on("pose", gotPoses)
}

function modal_loaded() {
    console.log("Pose Net is Linked");
}

function gotPoses(results) {
    console.log(results);

    if (results.length > 0) {
        console.log("Nose - x =" + results[0].pose.nose.x);
        console.log("nose - y =" + results[0].pose.nose.y);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
    }
}

function draw() {
    image(video, 0, 0, 280, 280);
   // fill("red");
    //stroke("red");
    //circle(nose_x, nose_y, 30);
    image(krrish_mask , nose_x-40 , nose_y-55 , 90 , 90);
}

function Take_Snapshot() {
    save("Me_as_Krrish.png");
}
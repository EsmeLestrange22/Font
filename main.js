nose_x = 0;
nose_y = 0;
difference = 0;
left_w_X = 0;
right_w_X = 0;
//no Y positions are required because wrists are only moving horizontally
function setup() {
    canvas = createCanvas(330, 280)
    canvas.position(200, 400)

    video = createCapture(VIDEO);
    video.size(350, 340);
    video.position(870, 350);

    //posenet starts here
    posenet = ml5.poseNet(video, modelLoaded);
    //posenet.on('pose', getPoses)
}

function modelLoaded() {
    console.log("Posnet Loaded")
}
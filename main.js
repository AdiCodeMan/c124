function setup() {
    console.log("setup function is working")
    video = createCapture(VIDEO);
    video.size(500,500);  

    canvas = createCanvas(550, 550);
    canvas.position(560,190);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}

function draw() {
    background('#ADD8E6');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results); 
    }
}
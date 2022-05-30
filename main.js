status = "";

function setup()
{
    canvas = createCanvas(420, 420);
    canvas.center;
 
    video = createCapture(VIDEO);
    video.size();
}

function start()
{
    object_detector= ml5.objectDetector('cocossd', modelLoaded);
 document.getElementById("status").innerHTML = "Status: Detecting Objects";
    objectname = document.getElementById("object").value;
}

function modelLoaded()
{
    console.log("Model Loaded");
    status = true;
}

function draw()
{
    image(video, 0, 0, 420, 420);

}
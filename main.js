function setup(){
    canvas = createCanvas(640,480);//store canvas in var to manipulate 
    canvas.position(430,280);//positioning the canvas
    video = createCapture(VIDEO);//access the Webcam
    video.hide();//hide extra component
    tint_color = "";
}

function draw(){
    image(video,0,0,640,480);//place image , taking entire area of canvas
    tint(tint_color);
}

function take_snapshot(){
    save('student_name.png');//download img
}

function filter_tint(){
    tint_color = document.getElementById("color_name").value;
}
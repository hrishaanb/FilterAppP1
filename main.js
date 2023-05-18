var lipstick = "off";
var mustache = "off";

function preload () {
}

function setup () {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw () {
}

function mustacheOnOrOff () {
    if (mustache == "off") {
        mustache = "on";
        document.getElementById("mustacheBtn").style.background = "green";
        document.getElementById("mustacheBtn").style.borderColor = "green";
        document.getElementById("mustacheBtn").innerHTML = "Mustache: On";
    }
    else if (mustache == "on") {
        mustache = "off";
        document.getElementById("mustacheBtn").style.background = "red";
        document.getElementById("mustacheBtn").style.borderColor = "red";
        document.getElementById("mustacheBtn").innerHTML = "Mustache: Off";
    }
}
function lipstickOnOrOff () {
    if (lipstick == "off") {
        lipstick = "on";
        document.getElementById("lipstickBtn").style.background = "green";
        document.getElementById("lipstickBtn").style.borderColor = "green";
        document.getElementById("lipstickBtn").innerHTML = "Lipstick: On";
    }
    else if (lipstick == "on") {
        lipstick = "off";
        document.getElementById("lipstickBtn").style.background = "red";
        document.getElementById("lipstickBtn").style.borderColor = "red";
        document.getElementById("lipstickBtn").innerHTML = "Lipstick: Off";
    }
}
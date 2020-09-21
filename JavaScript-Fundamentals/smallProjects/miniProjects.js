
//-----------------     HTML5 Editing       --------------------
function edit()
{
    var tagToEdit = document.getElementById("editableTag");
    tagToEdit.contentEditable = true;
    tagToEdit.focus();
}

function finishEditing()
{
    var tagToEdit = document.getElementById("editableTag");
    tagToEdit.contentEditable = false;

    alert("This was added: \n" + tagToEdit.innerHTML);
}

document.getElementById("start").onclick = function() {
    edit();
}

document.getElementById("finish").onclick = function() {
    finishEditing();
}


//--------------        Drawing with JavaScript     -----------------
document.getElementById("drawingPad").onclick = function() {
    var canvas = document.getElementById("drawingPad");
    var lineStroke = canvas.getContext("2d");      // Type of dimension: 2-D, 3-D, etc.

    // Shadow of first line.
    lineStroke.shadowColor = '#111111';
    lineStroke.shadowOffsetX = 0;
    lineStroke.shadowOffsetY = 50;
    lineStroke.shadowBlur = 15;


    // Setting the stroke width and color.
    lineStroke.lineWidth = 20;
    lineStroke.strokeStyle = "rgb(10,10,70)";

    // First line details.
    lineStroke.moveTo(15,20);  // (x,y)
    lineStroke.lineTo(275,80);
    lineStroke.lineCap = "round";
    lineStroke.stroke();

    // Shadow of second line.
    lineStroke.shadowColor = '#111111';
    lineStroke.shadowOffsetX = 0;
    lineStroke.shadowOffsetY = 50;

    // Second line details.
    lineStroke.lineWidth = 20;
    lineStroke.strokeStyle = "#acacac";
    lineStroke.beginPath();
    lineStroke.moveTo(15,80);
    lineStroke.lineTo(275,30);
    lineStroke.lineCap = "round";
    lineStroke.stroke();
}


//-----------------       Simple Animation        -------------------
var live = true;

// Function to get a light color.
function getLightColor()
{
    var possibleValues = '0123456789ABCDEF'.split('');  // Splits string into array.
    var lightColor = '#';   // Setting up light color in hex system.

    // Randomly selecting a value to complete hex color value.
    for(var i=0; i < 6; i++)
    {
        lightColor += possibleValues[Math.floor(Math.random()*16)];
    }

    return lightColor;
}

// Function that runs the show.
function theShow()
{
    var danceRoom = document.getElementById("room");
    var floor = danceRoom.getContext("2d");

    var varyPosition = Math.floor((Math.random()*349) + 1);     // 350 max due to canvas height.
    var color = getLightColor();

    floor.lineWidth = 10;
    floor.strokeStyle = color;
    floor.moveTo(10,varyPosition); // Vertical position is changing.
    floor.lineTo(290, varyPosition);
    floor.lineCap = "round";
    floor.stroke();

    document.getElementById("lightsColor").innerHTML = color;
}

// Starting and Ending the show using onclick.
var animation;

document.getElementById("startShow").onclick = function() {
    if(live)
    {
        animation = setInterval(theShow, 100);      // Starts animation.
        live = false;       // Prevents starting the show if it already started.
    }
    else
    {
        alert("The show is live already!");
    }
}

document.getElementById("endShow").onclick = function() {
    clearInterval(animation);       // Ends animation.
    live = true;        // Allows the show to start if stopped.
}
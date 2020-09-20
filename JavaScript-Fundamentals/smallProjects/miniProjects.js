
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

//----------------        index.html JavaScript       -------------------------

// Basic function structure.
function firstFunction()         // message is an argument
{
    alert("First function created.");
    prompt("Enter your name", "Your name ..");
}

// Adding argument into our function.
function firstFunction2(message)         // message is an argument
{
    alert(message);
    prompt("Enter your name", "Your name ..");
}

function startFunc()
{
    alert("We are live boys! " + new Date());
}



//-------------------      eventHandler.html JS        ------------------------

function windowChange()
{
    console.log("The window changed size!");        // Using console to track events in website.
}

function inputCheck()
{
    alert("Submitted!");
}

function newHandler() 
{
    console.log("Modifying our event handlers.")
}

// ----------  CLEANING OUR CODE   -----------
// Button3 event handler.
document.getElementById("button3").onclick = function() {
    newHandler();
}

//--------------------       Variables       -----------------------

var playerName;     // Upper/lowercase letters, numbers, underscore, and $ are allowed. CASE SENSITIVE. 
playerName = "Juan";

var playerNumber = 24;

var player = playerName + " " + playerNumber;


alert(player);


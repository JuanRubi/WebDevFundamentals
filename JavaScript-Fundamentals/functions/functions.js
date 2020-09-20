
//-------------     Useful built-in functions       -------------

var webAddress = "www.google.com";
var inAddress = webAddress.indexOf("com");      // Searches webAddress for index of com

console.log(inAddress);

var age = 24;
var name = "Juan";

console.log(isNaN(age));
console.log(isNaN(name));

var stringWithNumber = "12 people";
console.log(parseInt(stringWithNumber));

//----------        Conditionals        -----------

if(age < 30)        // Checks to see if age is less than 30.
{
    console.log("Still young!");    // If it is, then this code runs.
}
else
{
    alert("Starting to get old.");      // Otherwise, this code runs.
}


function insideOrNot()
{
    var string = "Seeing if string contains an item."
    var result = string.indexOf(".");       // Returns -1 if . is not contained in string
    console.log(result);

    if(result == -1)
    {
        console.log("Not contained in string.");
    }
    else
    {
        console.log("The item is contained in the string.")
    }
}


function check()
{
    var item = document.getElementById("test");
    var textInItem = item.innerHTML;        // Gets whatever is inside the selected tag in html.
    console.log(textInItem);
}

document.getElementById("tryIt").onclick = function() {
    check();
}


//-----------------     More Advanced Functions     -------------------

function reuseExample(buttonSide)
{
    var button = document.getElementById(buttonSide);
    button.innerHTML = "Clicked!";
    console.log(button.value);
}

document.getElementById("rightButton").onclick = function() {
    reuseExample(this.id);
}

document.getElementById("leftButton").onclick = function() {
    reuseExample(this.id);
}

// Return from functions.
function calculate(answerLocation) {
    var sum = 5 + 15;
    return sum;         // The function returns the value of sum after it has finished.
}

document.getElementById("answer").onclick = function() {
    this.innerHTML = calculate(this.id);
}

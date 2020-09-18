
//------------------        Working with loops      ---------------------

// Testing while loop.
function repeat()
{
    var count = 10;

    while(count > 0)        // While count is bigger than zero
    {
        console.log(count);     // This code executes.
        if(count == 1)
        {
            console.log("Blast off!!!")
            
        }
        count--;        // Each pass we decrease count by one.
    }
}

document.getElementById("tryIt").onclick = function() {
    this.style.color = "royalblue";     // This changes the color of the button.
    repeat();
}


// Testing innerHTML.
function secondRepeat()
{
    var sum = 5;

    while(sum < 10)
    {
        var variable = document.getElementById("try");
        variable.innerHTML = "Sum: " + sum + "<br>" + variable.innerHTML;
        sum++;
    }
}

document.getElementById("try").onclick = function() {
    secondRepeat();
}


// Testing for loop.
function forTest()
{
    var counter = 5;

    for(var i=0; i < counter; i++)
    {
        var replaceText = document.getElementById("textToChange");
        replaceText.innerHTML = "Counter: " + i + "<br>" + replaceText.innerHTML;
    }

    var button = document.getElementById("for");
    button.innerHTML = "Done!";
}

document.getElementById("for").onclick = function() {
    forTest();
}


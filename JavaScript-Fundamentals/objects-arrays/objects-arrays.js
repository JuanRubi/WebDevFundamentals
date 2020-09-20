
//alert(document.title);

//--------------------      Arrays      -----------------------

document.getElementById("dogTypes").onclick = function() {
    var dogBreeds = ["German Shepherd", " Siberian Huskies", " Chihuahua"];

    document.getElementById("display").innerHTML = dogBreeds;  
}

// Length property of arrays.
document.getElementById("numOfDogTypes").onclick = function() {
    var dogBreeds = ["German Shepherd", " Siberian Huskies", " Chihuahua"];

    document.getElementById("numBreeds").innerHTML = dogBreeds.length;
}

//--------   Array Methods  ----------

// sort()
document.getElementById("sortDogs").onclick = function() {
    var dogBreeds = [" German Shepherd", " Siberian Huskies", " Chihuahua"];
    document.getElementById("sort").innerHTML = dogBreeds.sort();  
}

// push()
var dogs = ["German Shepherd", " Siberian Huskies", " Chihuahua"];
dogs.push("Labrador Retriver");
console.log(dogs);


//------------------        Using the DOM       -------------------

// Adding HTML using innerHTML.

/*function usingTheDom()
{
    var textToAdd = "This was added using the DOM in JS."
    var locationToAdd = document.getElementById("domInsert");
    locationToAdd.innerHTML = locationToAdd.innerHTML + textToAdd;
}

document.getElementById("useDom").onclick = function() {
    usingTheDom();
}*/

// Adding HTML using DOM manipulation methods.
function usingDomMethods()
{
    // 1. Create tag
    var newParagraph = document.createElement("p");     // Creates a p tag.

    // 2. Create content to put inside.
    var newText = document.createTextNode("This was added using DOM manipulation methods.");   // Creates text. 
    newParagraph.appendChild(newText);      // Add text (child tag) into paragraph (parent tag).

    //3. Add tag to location desired.
    var locationToAdd = document.getElementById("domInsert");
    locationToAdd.appendChild(newParagraph);
}

document.getElementById("useDom").onclick = function() {
    usingDomMethods();
}

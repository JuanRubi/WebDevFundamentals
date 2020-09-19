
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

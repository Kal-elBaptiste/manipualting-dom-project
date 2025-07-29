// Button Refs
let pButton = document.getElementById("p-button");
let imgButton = document.getElementById("img-button");
let nothingButton = document.getElementById("nothing-button");

// Counters
let pCount = 0;
let imgCount = 0;
let nothingCount = 0;

// All divs in Object
let allDivs = {
    "p-div" : document.getElementById("p-div"),
    "img-div" : document.getElementById("img-div"),
    "nothing-div" : document.getElementById("nothing-div"),
}

let counterDiv = document.getElementById("counter-div");

// p counter
let pCountText = document.createElement("p");
pCountText.innerHTML = "p Count:", pCount;

counterDiv.appendChild(pCountText);

// img counter
let imgCountText = document.createElement("p");
imgCountText.innerHTML = "img Count:", imgCount;

counterDiv.appendChild(imgCountText);

// Nothing counter
let nothingCountText = document.createElement("p");
nothingCountText.innerHTML = "Nothing Count:", nothingCount;

counterDiv.appendChild(nothingCountText);


pButton.onclick = function() {

    // Hide other divs 
    for (let value of Object.values(allDivs)){
        value.style.display = "none"
    }
    
    // Show this div
    allDivs["p-div"].style.display = "block";

    // Create new paragraph
    let newP = document.createElement("p");
    newP.style.backgroundColor = "#6495ed";
    newP.innerHTML = "PLACEHOLDER";

    // Append new paragraph to div
    allDivs["p-div"].appendChild(newP);

    // Increment paragraph Counter && Updating innerHTML
    pCount++;

    pCountText.innerHTML = "p Count: " + pCount;
    console.log(pCount);
}

imgButton.onclick = function() {

    // Hide other divs 
    for (let value of Object.values(allDivs)){
        value.style.display = "none"
    }
    
    // Show this div
    allDivs["img-div"].style.display = "block";

    // Create new image 
    let newIMG = document.createElement("img");
    newIMG.src = "adventurer.png";

    // Append new paragraph to div
    allDivs["img-div"].appendChild(newIMG);

    // Increment Image Count && Updating innerHTML
    imgCount++;

    imgCountText.innerHTML = "img Count: " + imgCount;
    console.log(imgCount);
}

nothingButton.onclick = function() {

    // Hide other divs 
    for (let value of Object.values(allDivs)){
        value.style.display = "none"
    }
    
    // Show this div
    allDivs["nothing-div"].style.display = "block";

    // Increment Nothing Counter && Updating innerHTML
    nothingCount++;
    nothingCountText.innerHTML = "Nothing Count: " + nothingCount;
    console.log(nothingCount);
}
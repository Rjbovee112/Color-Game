alert("CONNECTED!");

var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickedColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i]


    //add click listeners to squares

    squares[i].addEventListener("click", function () {
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again"
        }
    });

}

function changeColors(color) {
    //loop through all colors
    for (var i = 0; i < squares.length; i++) {
        //change colors to match write answer
        squares[i].style.backgroundColor = color;
    }

}

function pickedColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var aar = []
    //repeat num times
    for(var i = 0; i < num; i ++){
        //get random color and push into arr

    }
    //then return
    return arr;
}

function randomColor(){
    //pick a "red" from 0-255
    Math.floor(Math.random() * 256)
    //pick a "green" form 0-255
    //pick a "blue" from 0-255

}
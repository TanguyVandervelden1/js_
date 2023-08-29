
const redBox = document.querySelector(".red");
const yellowBox = document.querySelector(".yellow");
const greenBox = document.querySelector(".green");

const delayInSeconds = 2000;

setRed();


function setRed() {
    redBox.style.backgroundColor = "red";
    yellowBox.style.backgroundColor = "white";
    greenBox.style.backgroundColor = "white";
    setInterval(setYellow, delayInSeconds);
   

}

function setYellow() {
    redBox.style.backgroundColor = "white";
    yellowBox.style.backgroundColor = "yellow";
    greenBox.style.backgroundColor = "white";
    setInterval(setGreen, delayInSeconds);

}

function setGreen() {
    redBox.style.backgroundColor = "white";
    yellowBox.style.backgroundColor = "white";
    greenBox.style.backgroundColor = "green";
    setInterval(setYellow2, delayInSeconds);

}

function setYellow2() {
    redBox.style.backgroundColor = "white";
    yellowBox.style.backgroundColor = "yellow";
    greenBox.style.backgroundColor = "white";
    setInterval(setRed, delayInSeconds);

}
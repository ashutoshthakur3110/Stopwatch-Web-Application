let hr1 = document.querySelector("#hr1 h1");
let hr2 = document.querySelector("#hr2 h1");
let min1 = document.querySelector("#min1 h1");
let min2 = document.querySelector("#min2 h1");
let sec1 = document.querySelector("#sec1 h1");
let sec2 = document.querySelector("#sec2 h1");

let startButton = document.querySelector("#start");
let stopButton = document.querySelector("#stop");
let resetButton = document.querySelector("#reset");
let lapButton = document.querySelector("#lap");

let interval;
let running = false;
let hours = 0, minutes = 0, seconds = 0;

startButton.addEventListener("click", () => {
    if (!running) {
        running = true;
        interval = setInterval(startTimer, 1000);
    }
});

stopButton.addEventListener("click", () => {
    running = false;
    clearInterval(interval);
});

resetButton.addEventListener("click", () => {
    running = false;
    clearInterval(interval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
    document.querySelector("#laps").innerHTML = '';
});

lapButton.addEventListener("click", () => {
    let lapTime = `${hr1.innerHTML}${hr2.innerHTML}:${min1.innerHTML}${min2.innerHTML}:${sec1.innerHTML}${sec2.innerHTML}`;
    let lapDiv = document.createElement("div");
    lapDiv.textContent = lapTime;
    document.querySelector("#laps").appendChild(lapDiv);
});

function startTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    let hrs = hours.toString().padStart(2, '0');
    let mins = minutes.toString().padStart(2, '0');
    let secs = seconds.toString().padStart(2, '0');

    hr1.innerHTML = hrs[0];
    hr2.innerHTML = hrs[1];
    min1.innerHTML = mins[0];
    min2.innerHTML = mins[1];
    sec1.innerHTML = secs[0];
    sec2.innerHTML = secs[1];
}
let btn = document.querySelector("#button")
let body = document.querySelector("body")
let currMode = "light";

btn.addEventListener("click", () => {
    if (currMode === "light") {
        document.querySelector("body").style.backgroundColor="black";
        document.querySelector("#box").style.backgroundColor="black";
        document.querySelector("h1").style.color="white"
        currMode="dark"
        
}
else if(currMode === "dark"){
    document.querySelector("body").style.backgroundColor="white";
    document.querySelector("h1").style.color="black"
    document.querySelector("#box").style.backgroundColor="white";
    currMode="light"
}
});
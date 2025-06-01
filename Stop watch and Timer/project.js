const box_time = document.querySelector(".timeBox");
const start_btn = document.getElementById("start");
const stop_btn = document.getElementById("stop");
const reset_btn = document.getElementById("reset");
const getTime_btn = document.getElementById("getTime");
const clearTime_btn = document.getElementById("clear");

let startCount = 0;
let intervalID;
let i = 1;

const startTimer = () => {
    intervalID = setInterval(() => {
        box_time.innerText = startCount++;
    }, 1000);
    
};

const stopTimer = () =>{
    clearInterval(intervalID);
};

const resetAll = () => {
    startCount = 0;
    box_time.innerText = startCount;
    clearInterval(intervalID);
};


const gettime = () =>{
    const data = document.querySelector(".data");
    const currentStopTime = startCount;
    const newPara = document.createElement("p");
    newPara.innerText = `${i++}. The Stop Time is ${currentStopTime-1}`;
    newPara.style.color = "white";
    data.append(newPara);
};

const getcurrTime = () => {
    let currTime = new Date().toLocaleTimeString();
    box_time.innerText = currTime;
};

const clearTime = () => {
    box_time.innerText = "";
    const data = document.querySelector(".data");
    data.innerHTML = "";
    startCount = 0;
    box_time.innerText = startCount;
    i=1;
    getcurrTime();
};


start_btn.addEventListener("click",startTimer);
stop_btn.addEventListener("click",stopTimer);
reset_btn.addEventListener("click",resetAll);
getTime_btn.addEventListener("click",gettime);
clearTime_btn.addEventListener("click",clearTime);
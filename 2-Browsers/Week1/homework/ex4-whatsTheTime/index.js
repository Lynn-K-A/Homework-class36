'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
window.addEventListener("load", () => setInterval(function addCurrentTime(){
  const timeDiv = document.createElement("div");
document.body.appendChild(timeDiv);
timeDiv.id = "clock";
const date = new Date();
const hh = date.getHours();
const mm = date.getMinutes();
const ss = date.getSeconds();
const HH = hh.toString().padStart(2, '0');
const MM = mm.toString().padStart(2, '0');
const SS = ss.toString().padStart(2, '0');
const time = HH + ":" + MM + ":" + SS;
document.getElementById("clock").textContent = time;
}, 1000));

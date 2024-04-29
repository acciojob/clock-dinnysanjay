//your JS code here. If required.
var timerElement = document.getElementById("timer");

// Function to update date and time
let currentDate = new Date();
setInterval(function(){
    currentDate = new Date();
    timerElement.innerHTML = currentDate.toLocaleString();
}, 1000);
//your JS code here. If required.
// Get reference to the paragraph tag
var timerElement = document.getElementById("timer");

// Function to update date and time
function updateTime() {
    var currentDate = new Date();
    timerElement.innerHTML = currentDate;
}

// Call updateTime function every 1000 milliseconds (1 second)
setInterval(updateTime, 1000);
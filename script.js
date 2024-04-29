//your JS code here. If required.
// Get reference to the paragraph tag
var timerElement = document.getElementById("timer");

// Function to update date and time
let currentDate=new Date();
setInterval(function(){
	currentDate=new Date;
	timerElememt.innerHTML=currentDate.toLocalString();
},1000
})

//assiging a global variable
var A = 200;

//using the global variable in a function
function global() {
    var B = 30;
    document.getElementById("result").innerHTML = "This uses global variables, and the result is: " + (A/B);
}
global();

//using unavailable local variable from the previous function and debugging with console.log
function local() {
    var C = 15;
    document.getElementById("result2").innerHTML = (B/C);
    console.log(B/C);
}
local();

//using js Date Method
function get_Time() {
    if (new Date().getMinutes() < 25) {
        document.getElementById("cond1").innerHTML = "You have a lot of this hour left!";
    } else {
        document.getElementById("cond1").innerHTML = "This hour is soon over, better hurry up!";
    }
}

//conditional statement with an input
function fitness() {
    var Fit = document.getElementById("pull").value;
    if (Fit >= 5) {
        document.getElementById("pull-ups").innerHTML = "That's a lot of pulls, you're very fit!";
    } else if (Fit < 5 & Fit > 0) {
        document.getElementById("pull-ups").innerHTML = "That's great, keep going!";
    } else 
        document.getElementById("pull-ups").innerHTML = "Let's start training today!";
}
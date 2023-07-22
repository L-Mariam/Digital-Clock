changeButtonText() // so that the onclick event handler activates once page loads
changeButtonText(); //to cancel out the first calling and display Standard Time

// creating a function to get and display the current time, session in the right format
function currentTime() {
    date = new Date(); //creating a new date object using new Date() constructor
    // saving the hours, minutes and seconds using date 
    hrs = date.getHours();
    mins = date.getMinutes();
    secs = date.getSeconds();
    session = "";

    var format = document.getElementById("button");
    mins = (mins < 10) ? "0" + mins : mins;
    secs = (secs < 10) ? "0" + secs : secs;
    hrs = (hrs < 10) ? "0" + hrs : hrs;



    if (format.innerHTML === "Military Time") {
        //using if condition to change string session to "PM" if after noon
        if (hrs > 12) {
            session = "PM";
        } else {
            session = "AM";
        }

        //foramtting: using React JS conditional operators to add 0 before numbers less than 10.
        //Syntax: condition ? <expression if true> : <expression if false>
        hrs = (hrs > 12) ? hrs - 12 : hrs;
    }

    time = hrs + ":" + mins + ":" + secs + " " + session;
    document.getElementById("time").innerText = time;

    // to run every second		  
    setTimeout(currentTime, 1000);
}

function changeButtonText() // no ';' here
{
    var format = document.getElementById("button");
    if (format.innerHTML == "Standard Time") format.innerHTML = "Military Time";
    else format.innerHTML = "Standard Time";
    //return format.innerHTML;
}

//calling the function
currentTime();

function myFunction() {
    var element = document.body;
    element.classList.toggle("light-mode");
    var x = document.getElementById("theme");
    if (x.innerHTML === "Dark Mode") {
        x.innerHTML = "Light Mode";
    } else {
        x.innerHTML = "Dark Mode";
    }
}
myFunction();
myFunction();
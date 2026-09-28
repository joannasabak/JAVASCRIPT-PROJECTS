function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        counter.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            counter.innerHTML = "";
        }
    }
    tick();
}

// slideshow section

let slideIndex = 0; //create a variable to track the current slide
let timer; //adds id to the timer so it can be cancelled on dot click later
showSlides(); //calls the function to start the slideshow

function showSlides() {
    let i;  //declares the loop counter that both for loops will use

    //collects all the HTML slides and dot elements into array-like list 
    // so we can use length method and pick items by array index
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");

    //loop from 0 up to the last slide and hide each one 
    // - resets slides so only one is visible at the time
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    //increment the slide number
    slideIndex++;

    //if we run out of slides, go back to 1st one
    if (slideIndex > slides.length) { slideIndex = 1 }

    //loop through dots and unassign active class
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }

    //show the current slide - img display as block
    slides[slideIndex - 1].style.display = "block";

    //appends active to dot's class string
    dots[slideIndex - 1].className += " active";

    //schedules timing as 2s
    timer = setTimeout(showSlides, 2000);

}

function changeSlide(n) {
    clearTimeout(timer); //cancels the automatic slideshow
    //slideshow allways starts on slideIndex++ so to land on slide n, 
    // the counter needs to be on the step before
    slideIndex = n-1; 
    showSlides();
}

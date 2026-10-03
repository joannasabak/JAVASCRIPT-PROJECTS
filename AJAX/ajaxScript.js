function getMsg() {
    //step1 set up the xml http request object

    let ajaxRequest = new XMLHttpRequest();

    //get input name
    let inputVal = document.getElementById("fullName").value;

    //display user input value
    ajaxRequest.onload = function () {
        document.getElementById("tkuMsg").innerHTML = "Thank you " + inputVal + " for signing up!";
    }

    //step2 prepare request and what to do
    ajaxRequest.open("GET", "response.html", true);

    //step 3 defines ajax response callback method that establishes wheather
    // the response was successful and where the data should be displayed
    ajaxRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById('content').innerHTML = ajaxRequest.responseText;
        }
    }

    // step 4 send the request
    ajaxRequest.send();

}


function getNew() {
    let ajaxRequest = new XMLHttpRequest(); //request object
    // prepare the request and point to the HTML file to fetch content 
    ajaxRequest.open("GET", "content.html", true);

    // ajax response callback method
    ajaxRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById('replace').innerHTML = ajaxRequest.responseText;
        }
    }

    // send the request
    ajaxRequest.send();


}

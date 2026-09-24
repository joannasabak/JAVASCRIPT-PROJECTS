var Text = "What a nice sunny day!";
window.alert(Text);


document.write("Last night I had so many dreams about coding" 
    + " so I woke up quite tired!"+ "<br>");

// document.write("Hello World");

// var B = "<br>" + "Concatenated" + " String";
// document.write(B)

var snack = "nuts", breakfast = "porridge", lunch = "salad", dinner = "sushi";

// document.write(3*3);

function firstFunction() { //creating a function and giving it a name
    var str = "This is the button text!"; //variable with a string value
    document.getElementById("Button_Text").innerHTML = str; //value of the var is placed in the HTML element chosed by Button_Text id/
}

//essentially what this does is find the element with a given id and tells HTML what to do with it;
//in the HTML file we create a button that has an initial value Click me. it also has an onClick event handler which executes fristFunction in javascript
//as they share an id, innerHTML can then replace the str value by variable assigned in the function.

var Sent1 = "This is the beginning of the string";
var Sent2 = " and this is the end of the string";

document.write(Sent1 + Sent2);

//expression:

console.log(3*3);
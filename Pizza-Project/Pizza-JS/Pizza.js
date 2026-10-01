function getReceipt() {
    //write on the receipt:
    var text1 = "<h3>You Ordered:</h3>";

    //declare total and size vars
    var runningTotal = 0;
    var sizeTotal = 0;

    //collect all the elements of class size
    var sizeArray = document.getElementsByClassName("size");

    //loop through them to collect the choice
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>"
        }
    }

    //assign value to selected choice
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 12;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 14;
    }

    //pass the value to the runningTotal
    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text 1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    getPremium(runningTotal, text1);

};

//adds another section for premium items as they cost double
function getPremium(runningTotal, text1) {
    var premiumTotal = 0;
    var selectedPremium = [];
    var premiumArray = document.getElementsByClassName("premium");

    for (var m = 0; m < premiumArray.length; m++) {
        if (premiumArray[m].checked) {
            selectedPremium.push(premiumArray[m].value);
            console.log("selected premium item: (" + premiumArray[m].value + ")");
            text1 = text1 + premiumArray[m].value + "<br>"
        }
    }

    var premiumCount = selectedPremium.length;
    premiumTotal = premiumCount * 2;
    runningTotal = (runningTotal + premiumTotal);
    console.log(selectedPremium + " = $" + premiumTotal + ".00");
    console.log("premium text 1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    getTopping(runningTotal, text1);
};

//count the toppings, discount one and get the total price of the pizza
function getTopping(runningTotal, text1) {
    //declare topping vars
    var toppingTotal = 0;
    var selectedTopping = []
    //collect toppings into an array if selected
    var toppingArray = document.getElementsByClassName("toppings");

    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value); //create a new array of selected toppings
            console.log("selected topping item: (" + toppingArray[j].value + ")");
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }

    var toppingCount = selectedTopping.length; //count how many toppings selected
    //one topping is discounted
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    
    //calculate total of the pizza
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: " + "$" + ".00");
    document.getElementById("show-text").innerHTML = text1;
    document.getElementById("total-price").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
}

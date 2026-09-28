//function for counting to 10 with while loop
function callLoop() {
    var Digit = "";
    var X = -10;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("loop").innerHTML = Digit;
}

//string lenght method
function stringLen() {
    let text = "I love cats";
    let len = text.length;
    document.getElementById("string").innerHTML = len;
}

//for loop example
var Food = ["pizza", "sushi", "cabbage", "potato", "parsnip"];
function hungry() {
    let Include = "";
    for (var Eat = 0; Eat < Food.length; Eat++) {
        Include += Food[Eat] + "<br>";
    }
    document.getElementById("to-eat").innerHTML = Include;

}

// constant
function constantFunction() {
    const Instrument = { type: "guitar", brand: "Fender", color: "black" };
    Instrument.color = "blue";
    Instrument.price = "£850";
    document.getElementById("constant").innerHTML = "The cost of the " +
        Instrument.type + " was " + Instrument.price;

    Instrument.brand = "Gibson";
    Instrument.price = "£999";
    Instrument.condition = "excellent";
    document.getElementById("constant").innerHTML = "We also have other guitars like " +
        Instrument.brand + " that cost " + Instrument.price + ". This one is in "
        + Instrument.condition + " condition.";
}

//let
function letExample() {
    let greeting = "Hello World";
    console.log(greeting); // this should print "Hello World"

    if (true) {
        let greeting = "Hello Instructor";
        console.log(greeting); // this should print "Hello Instructor"
    }

    console.log(greeting);// this should print "Hello World"
}

letExample();

//return statement
function numberSurprise() {
    var X = document.getElementById("first-nr").value;
    var Y = document.getElementById("second-nr").value;

    var result = operate(X, Y)
    function operate(a, b) {
        return a * b - (a / b);
    }
    document.getElementById("new-nr").innerHTML = result;
}

// object with properties and function
let dinner = {
    type: "Homemade",
    difficulty: "medium",
    recipe: "Quinoa salad",
    health_score: "30",
    cooking_time: "25",
    time_vs_effort: function () {
        if (this.difficulty == "easy" && this.cooking_time < 30) {
            return "Great recipe with low time and effort."
        } else if
            (this.difficulty == "easy" && this.cooking_time >= 30) {
            return "Good recipe but not quick."
        } else if
            (this.difficulty == "medium" && this.cooking_time < 30) {
            return "Not too complicated and quick!"
        } else if
            (this.difficulty == "medium" && this.cooking_time >= 30) {
            return "Might take a bit of time and effort."
        } else if
            (this.difficulty == "hard" && this.cooking_time < 30) {
            return "Not too long but pretty complicated"
        } else
            return "You'll be in the kitchen for a looong time."
    }

};
document.getElementById("recipe").innerHTML = dinner.type + " " + dinner.recipe;
document.getElementById("cooking").innerHTML = dinner.time_vs_effort();


// break
for (let day = 0; day < 7; day++) {
    if (day === (new Date().getDay())) {
        break;
    }
    document.getElementById("which-day").innerHTML = "Today is day number " + (day + 1) + " of this week."
}

//continue
var Year = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let Names = "";
for (let month = 0; month < Year.length; month++) {
    if (month === (new Date().getMonth())) {
        continue;
    }
    Names += Year[month] + "<br>";

    document.getElementById("skip-month").innerHTML = "Current month is not included in the list below: <br>" + Names;
}

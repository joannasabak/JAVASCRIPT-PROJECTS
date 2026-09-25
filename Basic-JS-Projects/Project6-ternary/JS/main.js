function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride";
}

function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("age").value;
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote";
}

//constructors example
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

//adding a new instance of the Vehicle object

var Joanna = new Vehicle("Honda", "Civic", 2005, "Silver");

//calling and displaying the new object
function another() {
    document.getElementById("New_and_This").innerHTML = "Joanna drives a " + Joanna.Vehicle_Color + "-colored " + Joanna.Vehicle_Model + " manufactured in " + Joanna.Vehicle_Year;
}

//new contstructor
function climbingShoes(Brand, Mod, Col) {
    this.climbingShoes_Brand = Brand;
    this.climbingShoes_Mod = Mod;
    this.climbingShoes_Col = Col;
}

//new object instance of the climbingShoes constructor
var Guillaume = new climbingShoes("La Sportiva", "Skwama", "Black and Yellow");

function constructor_call() {
    document.getElementById("shoes").innerHTML = "Guillaume wears " + Guillaume.climbingShoes_Brand + " " + Guillaume.climbingShoes_Mod + ". These are his favourite all-round shoes.";
}

//nested function
function nested_out() {
    document.getElementById("Nested_Function").innerHTML = nested_in();
    function nested_in() {
        var start = 0;
        function decrement() {start--;}
        decrement();
        return start;
    }
}


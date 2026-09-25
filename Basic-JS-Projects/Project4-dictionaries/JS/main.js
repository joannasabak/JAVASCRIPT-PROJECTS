//function containing some KVP, one is deleted and then called by getElementbyId to return as undefined

function dict() {
    var climbingGear = {
        Type: "Rope",
        Color: "Orange",
        Length: 80,
        Condition: "new"
    };
    delete climbingGear.Color;
    document.getElementById("Dictionary").innerHTML = climbingGear.Color;
}
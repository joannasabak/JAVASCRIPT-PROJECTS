//document write method
document.write(typeof "vegetable");

//type of
document.getElementById("type_of").innerHTML = typeof("potato");

//coercion
document.getElementById("coerce").innerHTML = (10 + "5");

//is a number, infinity, not a number
function isANr() {
    document.getElementById("not_nr").innerHTML = 0 / 0;
    document.getElementById("check").innerHTML = isNaN("13");
    document.getElementById("check2").innerHTML = isNaN("Friday");
    document.getElementById("infinite").innerHTML = 1 / 0;
}
isANr();

//boolean operations
document.getElementById("b_false").innerHTML = (24 > 25);
document.getElementById("b_true").innerHTML = (50 > 13);

//console results
console.log(15*2);
console.log(34>76);

//comparison bool
console.log((12+17)==29);
console.log((34/9)==7);

//comparison with type
A = "Sunny"
B = "Sunny"
C = 100
D = "hundred"
E = "100"
//same data same type
console.log(A===B);
//different data different type
console.log(C===D);
//different data same value
console.log(C===E);
//same type diff value
console.log(A===D);

//AND operator
console.log(15>2 && A===B);
console.log(15>2 && B===C);
//OR operator
console.log(C==E || 15<2);
console.log(C===E || 15<2);
//NOT operator
console.log(!(C===E));
console.log(!(A===B));
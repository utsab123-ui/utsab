

let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");

let boxone = document.getElementById("boxone");
let boxtwo = document.getElementById("boxtwo");
let boxthree = document.getElementById("boxthree");
let boxfour = document.getElementById("boxfour");

function hideAllBoxes() {
    boxone.style.opacity = "0";
    boxtwo.style.opacity = "0";
    boxthree.style.opacity = "0";
    boxfour.style.opacity = "0";
}



one.addEventListener("click", function () {


    if (boxone.style.opacity == "0") {
        hideAllBoxes();
        boxone.style.opacity = "1";

    }
    else { boxone.style.opacity = "0"; }







});
two.addEventListener("click", function () {
    if (boxtwo.style.opacity == "0") {
        hideAllBoxes();
        boxtwo.style.opacity = "1";

    }
    else { boxtwo.style.opacity = "0"; }






})
three.addEventListener("click", function () {
    if (boxthree.style.opacity == "0") {
        hideAllBoxes();
        boxthree.style.opacity = "1";

    }
    else { boxthree.style.opacity = "0"; }






})
four.addEventListener("click", function () {
    if (boxfour.style.opacity == "0") {
        hideAllBoxes();
        boxfour.style.opacity = "1";

    }
    else { boxfour.style.opacity = "0"; }






})


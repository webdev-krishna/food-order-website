// function showHiddenStarters(){
//     var starters = document.getElementById("starters");
//     starters.classList.remove("hidden");
// }

// function showHiddenSoups(){
//     var soups = document.getElementById("soups");
//     soups.classList.remove("hidden");
// }

// function showHiddenSalads(){
//     var salads = document.getElementById("salads");
//     salads.classList.remove("hidden");
// }
function showHiddenStarters(){
    var menuHiddenDivs = document.querySelectorAll("#menu .hidden");
    menuHiddenDivs[0].style.display = "block";
    menuHiddenDivs[1].style.display = "none";
    menuHiddenDivs[2].style.display = "none";
    console.log(menuHiddenDivs.length);
    // for(var i=0; i<=)

}
function showHiddenSoups(){
    var menuHiddenDivs = document.querySelectorAll("#menu .hidden");
    menuHiddenDivs[0].style.display = "none";
    menuHiddenDivs[1].style.display = "block";
    menuHiddenDivs[2].style.display = "none";

}function showHiddenSalads(){
    var menuHiddenDivs = document.querySelectorAll("#menu .hidden");
    menuHiddenDivs[0].style.display = "none";
    menuHiddenDivs[1].style.display = "none";
    menuHiddenDivs[2].style.display = "block";
}
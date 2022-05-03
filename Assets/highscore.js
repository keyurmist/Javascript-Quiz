var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");

// Event listener to clear scores 
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// Retreives local stroage 
var allResultsFromLS = localStorage.getItem("allResults");
allResults = JSON.parse(allResults);

if (allResults !== null) {

    for (var i = 0; i < allResults.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = allResults[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);

    }
}
// Event listener to move to index page
goBack.addEventListener("click", function () {
    window.location.replace(url("./index.html"));
});
var score = 0;
var wins = 0;
var losses = 0;

// computer number needs to be between 19 - 120
var targetNumber = Math.floor(Math.random() * 102) + 19;

// global array of crystal values
var crystalVaribles;

function resetGame() {
    // reset target
    targetNumber = Math.floor(Math.random() * 102) + 19;
    console.log(targetNumber);
    //writing target number into html
    $("#targetNumber").text(targetNumber);

    score = 0;
    // reset crystals, generate 4 random values
    // crystal values are between 1 -12
    crystalVaribles = [
        Math.floor(Math.random() * 11) + 1, // 1st crystal's value
        Math.floor(Math.random() * 11) + 1, // 2nd crystal's value
        Math.floor(Math.random() * 11) + 1, // 3rd crystal's value
        Math.floor(Math.random() * 11) + 1 // 4th crystal's value
    ];
    console.log(crystalVaribles);



}

// reset the game now to initialize crystal values
resetGame();

//on click crystal function
$("#firstCrystal").on("click", function() {

    // add the value of the 1st crystal to the score
    score = score + crystalVaribles[0]; // 0 index is 1st crystal

    // update the html to show the new score
    $("#score").text(score);

});

$("#secondCrystal").on("click", function() {
    // add the value of the 1st crystal to the score
    score = score + crystalVaribles[1]; // 0 index is 1st crystal
    // update the html to show the new score
    $("#score").text(score);

});

$("#thirdCrystal").on("click", function() {
    // add the value of the 1st crystal to the score
    score = score + crystalVaribles[1]; // 0 index is 1st crystal
    // update the html to show the new score
    $("#score").text(score);

});

$("#fourthCrystal").on("click", function() {
    // add the value of the 1st crystal to the score
    score = score + crystalVaribles[1]; // 0 index is 1st crystal
    // update the html to show the new score
    $("#score").text(score);

});

// conditionals
$(".allCrystals").on("click", function() {
    console.log("Score:" + score);
    console.log("Turget number:" + targetNumber);
    if (score === targetNumber) {
        wins++;
        $("#wins").text(wins);
        console.log(wins);
        resetGame();

    }
    else if (score > targetNumber) {

        losses++;
        $("#losses").text(losses);
        resetGame();
    }
});

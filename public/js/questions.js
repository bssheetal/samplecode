
var film = "https://opentdb.com/api.php?amount=11&category=14&difficulty=easy&type=multiple";
var tv = "https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple";
var sports = "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";
var compSci = "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";

$("#film").on("click", function () {
    
    $("#displayTrivia").empty();
    generateTrivia(film);
});

$("#tv").on("click", function () {
    $("#displayTrivia").empty();
    generateTrivia(film);
});

$("#sports").on("click", function () {
    $("#displayTrivia").empty();
    generateTrivia(film);
});

$("#compSci").on("click", function () {
    $("#displayTrivia").empty();
    generateTrivia(film);
});

//pull questions and answers from trivia API
function generateTrivia(selection) {
    $.ajax({
        type: "GET",
        url: selection,
        dataType: "json",
    }).then(function (response) {

        console.log(response);
        var results = response.results;

        for (var i = 0; i < results.length; i++) {
            var col = $("<div>").addClass("col s6");
            var card = $("<div>").addClass("card blue-grey darken-1");
            var body = $("<div>").addClass("card-content");

            var m1 = $("<p>").addClass("card-content").text("a. " + results[i].incorrect_answers[0]);
            var m2 = $("<p>").addClass("card-content").text("b. " + results[i].incorrect_answers[1]);
            var m3 = $("<p>").addClass("card-content").text("c. " + results[i].incorrect_answers[2]);
            var m4 = $("<p>").addClass("card-content").text("d. " + results[i].correct_answer);


            col.append(card.append(body.append(results[i].question, m1, m2, m3, m4)));
            $("#displayTrivia").append(col);
        }
        console.log(results[0].question)



    })






};



//});

var seconds = document.getElementById("countdown").textContent;
var countdown = setInterval(function () {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown);
}, 1000);
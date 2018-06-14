$(document).ready(function(){
    var targetScore = Math.floor(Math.random() * (120 - 19) + 19);
    var currentScore = 0, wins = 0, losses = 0;
    $("#target-score").html(`<h1>${targetScore}</h1>`);

    var random1 = Math.floor(Math.random() * 12) + 1;
    var random2 = (Math.floor(Math.random() * 6)) * 2 + 1;
    var random3 = Math.floor(Math.random() * 12) + 1;
    var random4 = (Math.floor(Math.random() * 6)) * 2 + 2;

    function checkScore(){
        if(currentScore === targetScore){
            $("#current-message").html(`<h1>You won! Play again!!</h1>`);
            wins++;
            $("#total-score").html(`<p><span id="wins">Wins : ${wins} </span><span id="losses">Losses : ${losses} </span></p>`);
            resetGame();
        } else if(currentScore > targetScore){
            $("#current-message").html(`<h1>You Lost! Play again!!</h1>`);
            losses++;
            $("#total-score").html(`<p><span id="wins">Wins : ${wins} </span><span id="losses">Losses : ${losses} </span></p>`);
            resetGame();
        }
    }

    function resetGame(){
        targetScore = Math.floor(Math.random() * (120 - 19) + 19);
        $("#target-score").html(`<h1>${targetScore}</h1>`);
        currentScore = 0;
        $("#current-score").html(`<h1>Your score : ${currentScore}</h1>`);
        random1 = Math.floor(Math.random() * 12) + 1;
        random2 = (Math.floor(Math.random() * 6)) * 2 + 1;
        random3 = Math.floor(Math.random() * 12) + 1;
        random4 = (Math.floor(Math.random() * 6)) * 2 + 2;
    }

    $("#crystal-1").on("click",function(){
        $("#current-message").html(`<h1></h1>`);
        console.log(random1);
        currentScore += random1;
        $("#current-score").html(`<h1>Your score : ${currentScore}</h1>`);
        checkScore();
    });
    $("#crystal-2").on("click",function(){
        $("#current-message").html(`<h1></h1>`);
        currentScore += random2;
        $("#current-score").html(`<h1>Your score : ${currentScore}</h1>`);
        checkScore();
    });
    $("#crystal-3").on("click",function(){
        $("#current-message").html(`<h1></h1>`);
        currentScore += random3;
        $("#current-score").html(`<h1>Your score : ${currentScore}</h1>`);
        checkScore();
    });
    $("#crystal-4").on("click",function(){
        $("#current-message").html(`<h1></h1>`);
        currentScore += random4;
        $("#current-score").html(`<h1>Your score : ${currentScore}</h1>`);
        checkScore();
    });
});
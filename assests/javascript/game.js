$(document).ready(function () {

    load();


    // Global Variables

    var questionslist = {};
    var trivia = {};

    var questions;
    var answers = ["B", "D", "A", "B", "D", "A"];

    var intervalID;

    console.log(answers);

    function load() {
        // happens on page load
        $(".question-block").empty();
        $(".start").show();
        $(".reset, .results").hide();
        $(".done, .question-block").hide();
    }



    // Create the questions

    function startTrivia() {
        questionslist = resetQuestions();
        trivia = resetTrivia();

        showQuestions();

    }

    function resetTrivia() {
        return {
            correct: 0,
            incorrect: 0,
            blank: 0,
        }
    }

    function resetQuestions() {
        return {
            q0: {
                question: "The most common currency in the sixth world is called?",
                A: "Dollar",
                B: "Nuyen",
                C: "CorpBucks",
                D: "ShadowCents",
            },
            q1: {
                question: "The entity that gives the runners a job usually goes by what alias?",
                A: "Mr. Richard",
                B: "Mr. Doe",
                C: "Mr. John",
                D: "Mr. Johnson",
            },
            q2: {
                question: "The event that happened that caused magic to come back to the planet is refered as what?",
                A: "The Awakening",
                B: "The Change",
                C: "The Coming of age",
                D: "The Happening",
            },
            q3: {
                question: "After the internet was destroyed in the Crash of 2029, what is the world wide web network that is used now called?",
                A: "Internet 2.0",
                B: "The Matrix",
                C: "The United Systems Network",
                D: "Secured Tranfer Networking",
            },
            q4: {
                question: "The souls connection to the body is also called what?",
                A: "Catatonics",
                B: "Minds Power",
                C: "Spiritual Relay",
                D: "Essence",
            },
            q5: {
                question: "Instead of social security numbers, we now use what for identification purposes?",
                A: "Sin",
                B: "Idfg",
                C: "Numb",
                D: "Trigger",
            },

        }
    }

    function showQuestions() {
        questions = Object.keys(questionslist);
        for (var i = 0; i < questions.length; i++) {
            var questiontitle = questions[i];
            var question = questionslist[questiontitle];
            var questionblocks = createQuestions(question, questiontitle);
            $(".question-block").append(questionblocks).show();
        }
    }

    function createQuestions(question, key) {
        var block = $("<div class='question' name='" + key + "'>" + question.question + "" +
            "<ul>" +
            "<li><input type='radio' name='" + key + "' value='A'><label>" + question.A + "</label></li>" +
            "<li><input type='radio' name='" + key + "' value='B'><label>" + question.B + "</label></li>" +
            "<li><input type='radio' name='" + key + "' value='C'><label>" + question.C + "</label></li>" +
            "<li><input type='radio' name='" + key + "' value='D'><label>" + question.D + "</label></li>" +
            "</ul>");

        return block;
    }

    function score() {

        var playeranswers = [$("input:radio[name='q0']:checked").val(),
            $("input:radio[name='q1']:checked").val(),
            $("input:radio[name='q2']:checked").val(),
            $("input:radio[name='q3']:checked").val(),
            $("input:radio[name='q4']:checked").val(),
            $("input:radio[name='q5']:checked").val(),
        ];

        console.log(playeranswers);
        console.log(answers);

        for (k = 0; k < questions.length; k++) {
            if (playeranswers[k] === undefined) {
                trivia.blank++;
            } else if (playeranswers[k] === answers[k]) {
                trivia.correct++;
            } else {
                trivia.incorrect++;
            }

        }

        $("#correct").text("Correct: " + trivia.correct);
        $("#incorrect").text("Incorrect: " + trivia.incorrect);
        $("#unanswered").text("Unanswered: " + trivia.blank);

        console.log(trivia.correct);
        console.log(trivia.incorrect);
        console.log(trivia.blank);
    }


    //Create the Timer 
    var timer = {

        time: 120,

        start: function () {
            $("#timer-display").text("02:00");
            intervalID = setInterval(timer.countdown, 1000);
        },

        countdown: function () {

            timer.time--;
            var currentTime = timer.timeConverter(timer.time);
            $("#timer-display").text(currentTime);

            if (timer.time === 0) {
                $("#timer-display").text("Time's Up!");
                clearInterval(intervalID);
                $(".done, .question-block").hide();
                score();
                $(".results, .reset").show();
            } else {

            }
        },

        reset: function () {
            timer.time = 120;
            $("#timer-display").text("02:00");
            clearInterval(intervalID);

        },

        timeConverter: function (t) {
            var minutes = Math.floor(t / 60);
            var seconds = t - (minutes * 60);

            if (seconds < 10) {
                seconds = "0" + seconds;
            }

            if (minutes === 0) {
                minutes = "00";
            } else if (minutes < 10) {
                minutes = "0" + minutes;
            }

            return minutes + ":" + seconds;
        },

    };



    // rest happens on button click

    $(".start").on("click", function () {
        $(".start").hide();
        startTrivia();
        timer.start();
        $(".done").show();

    });

    $(".done").on("click", function () {
        score();
        $(".done, .question-block").hide();
        timer.reset();
        $(".results, .reset").show();
    });

    $(".reset").on("click", function () {
        $(".question-block").empty();
        $(".start").show();
        $(".reset, .results").hide();
        timer.reset();
    });
});
var questionslist = {};
var trivia = {};

var questions;
var answers = ["B", "D", "A", "B", "D", "A", "B", "D"];

var intervalID;


// Create timer
timer = {

	time: 120,

	start: function () {
			$("#timer-display").text("02:00");
			intervalID = setInterval(timer.countdown, 1000);
	},

	countdown: function () {
			/*console.log("countdown");*/
			timer.time--;
			var currentTime = timer.timeConverter(timer.time);
			/*console.log(currentTime);*/
			$("#timer-display").text(currentTime);

			if (timer.time === 0) {
					$("#timer-display").text("Time's Up!");
					clearInterval(intervalID);
					$(".done, .question-block").hide();
					/*$(".question-block").hide();*/
					score();
					$(".results, .reset").show();
			} else {

			}
	},

	reset: function () {
			timer.time = 120;
			$("#timer-display").text("02:00");
			clearInterval(intervalID);
			/*console.log("Reset");*/
	},

	timeConverter: function (t) {
			var minutes = Math.floor(t / 60);
			var seconds = t - (minutes * 60);

			if (seconds < 10) {
					seconds = "0" + seconds;
			}

			if (minutes === 0) {
					minutes = "00";
			}

			else if (minutes < 10) {
					minutes = "0" + minutes;
			}

			return minutes + ":" + seconds;
	},

};


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
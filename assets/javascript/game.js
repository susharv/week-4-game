// Define Variables
var randNum = 0;
var sum = 0;
var firstCrystalValue = 0;
var secondCrystalValue = 0;
var thirdCrystalValue = 0;
var fourthCrystalValue = 0;
var tempCrystalVal = 0;
var flagSuccess1 = 0;
var flagSuccess2 = 0;
var flagSuccess3 = 0;
var flagSuccess4 = 0;
var wins = 0;
var loses = 0;
var flagWL = 0;

// Function for Random Number Generator by the Computer (number range from 19 to 120)
function crystalCompareTtl() {
	randNum = Math.floor(Math.random()*102)+19;
	$("#randNumTtl").html(randNum);
}	

// Function to track User Score and Wins and Loses throughout the game period
function print_sum(crystalVal) {

// Crystal 1 - Random number generator (number range from 1 to 12)
	if ((crystalVal == "crystal1") && (flagSuccess1 == 0)) {
		firstCrystalValue = Math.floor(Math.random()*12)+1;
		flagSuccess1 = 1;
	}
// Crystal 1 - store the first value generated into a temporary placeholder
	if ((crystalVal == "crystal1") && (flagSuccess1 == 1)) {
		tempCrystalVal = firstCrystalValue;
	}

// Crystal 2 - Random number generator (number range from 1 to 12)
	if ((crystalVal === "crystal2") && (flagSuccess2 === 0)) {
		secondCrystalValue  = Math.floor(Math.random()*12)+1;
		flagSuccess2 = 1;
	}
// Crystal 2 - store the first value generated into a temporary placeholder
	if ((crystalVal === "crystal2") && (flagSuccess2 === 1)) {
		tempCrystalVal = secondCrystalValue;
	}

// Crystal 3 - Random number generator (number range from 1 to 12)
	if ((crystalVal == "crystal3") && (flagSuccess3 ==0)) {
		thirdCrystalValue  = Math.floor(Math.random()*12)+1;
		flagSuccess3 = 1;
	}
// Crystal 3 - store the first value generated into a temporary placeholder
	if ((crystalVal == "crystal3") && (flagSuccess3 == 1)) {
		tempCrystalVal = thirdCrystalValue;
	}

// Crystal 4 - Random number generator (number range from 1 to 12)
	if ((crystalVal == "crystal4") && (flagSuccess4 == 0)) {
		fourthCrystalValue  = Math.floor(Math.random()*12)+1;
		flagSuccess4 = 1;
	}
// Crystal 4 - store the first value generated into a temporary placeholder
	if ((crystalVal == "crystal4") && (flagSuccess4 == 1)) {
		tempCrystalVal = fourthCrystalValue;
	}

// Calculates the total score from each click of the crystals from the temporary placeholder value
	sum = sum + tempCrystalVal;
	$("#userTtl").html(sum);

// Alerts the user if they accidentally hit the crystals without getting the initial computer generated random number
	if (randNum === 0) {
		window.alert("Click to get Your Lucky Number First!");
		tempCrystalVal = 0;
		sum = 0;
		$("#userTtl").html(sum);
	}

// Tracks the wins and increments by 1 if the User wins.
	if ((sum == randNum) && (randNum != 0)) {
		wins++;
		$("#wins").html("<b>Wins: </b>" + wins);
		flagWL = 1;
	}	

// Tracks the loses and increments by 1 if the User loses.
	else if (sum > randNum) {
		loses++;
		$("#loses").html("<b>Loses: </b>" + loses);
		flagWL = 1;
	}

// Flag to reset the variables on start of a new game after the win or loss.
	if (flagWL ==1) {
		randNum = 0;
		$("#randNumTtl").html(randNum);
		sum = 0;
		$("#userTtl").html(sum);
		flagSuccess1 = 0;
		flagSuccess2 = 0;
		flagSuccess3 = 0;
		flagSuccess4 = 0;
	}

// Reset of the last flag.
	flagWL = 0;
}

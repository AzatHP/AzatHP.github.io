//var location1 = 3;
//var location2 = 4;
//var location3 = 5;
var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
    guess = prompt("Готов, прицелься! (введите число от 0 до 6):");
    if (guess < 0 || guess > 6) {
        alert("пожалуйста введите правильное число!");
    } else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            alert("HIT!");
            hits = hits + 1;
            if (hits == 3) {
                isSunk = true;
                alert("Ты потопил мой линкор!");
            }
        } else {
            alert("Промах");
        }
    }
}

var stats = "Ты взял " + guesses + "догадки потопить линкор, " +
    " значит ваша точность стрельбы была " + (3 / guesses);
alert(stats);
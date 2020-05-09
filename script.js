var first = Math.floor(Math.random() * 6) + 1;
var second = Math.floor(Math.random() * 6) + 1;
if (first < second)
	document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
else if (first > second)
	document.querySelector("h1").textContent =  "🚩 Player 1 Wins!";
else
	document.querySelector("h1").textContent = "Draw!";
document.querySelector("img.player_one_dice").setAttribute("src", "img/dice" + first + ".png");
document.querySelector("img.player_two_dice").setAttribute("src", "img/dice" + second + ".png");
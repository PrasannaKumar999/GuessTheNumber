let message = document.querySelector(".message").textContent;
let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector(".number").textContent = "?";

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "enter some number";
  } else if (guess == secretNumber) {
    document.querySelector(".message").textContent = "correct number";
    document.querySelector("body").style.backgroundColor = "green";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore1").textContent = highscore;
    }
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "you entered high";
    score--;
    document.querySelector(".score1").textContent = score;
    if (score < 1) {
      document.querySelector(".score1").textContent = 0;
      document.querySelector(".message").textContent = "you lost the game";
    }
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "you entered low";
    score--;
    document.querySelector(".score1").textContent = score;
    if (score < 1) {
      document.querySelector(".score1").textContent = 0;
      document.querySelector(".message").textContent = "you lost the game";
    }
  }
});

document.querySelector(".reset").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Hint:";
  document.querySelector(".score1").textContent = score;
  document.querySelector(".highscore1").textContent = highscore;
  document.querySelector(".guess").value = "";
});

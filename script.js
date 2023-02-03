/*Shake*/
// document.querySelector(".rock").addEventListener("click", "shake");
// document.querySelector(".paper").addEventListener("click", "shake");
// document.querySelector(".scissors").addEventListener("click", "shake");
// const player1 = document.querySelector("#player1");
// const player2 = document.querySelector("#player2");

// player1.classList.add("shake");
// player2.classList.add("shake");

/*Spil Sten saks papir */
function play(choice) {
  console.log(play);

  var player1 = document.getElementById("player1");
  var player2 = document.getElementById("player2");
  var lose = document.getElementById("lose");
  var win = document.getElementById("win");
  var draw = document.getElementById("draw");

  var options = ["rock", "paper", "scissors"];
  var computerChoice = options[Math.floor(Math.random() * options.length)];

  /*User Choice*/
  player1.classList.add(choice);

  /*Computer Choice*/
  player2.classList.add(computerChoice);

  if ((choice === "rock" && computerChoice === "scissors") || (choice === "paper" && computerChoice === "rock") || (choice === "scissors" && computerChoice === "paper")) {
    win.classList.remove("hidden");
  } else if (choice === computerChoice) {
    draw.classList.remove("hidden");
  } else {
    lose.classList.remove("hidden");
  }

  /*Restart*/
  setTimeout(function () {
    console.log(setTimeout);
    player1.classList.remove(choice);
    player2.classList.remove(computerChoice);
    lose.classList.add("hidden");
    win.classList.add("hidden");
    draw.classList.add("hidden");
  }, 2000);
}

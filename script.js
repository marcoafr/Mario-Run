"use strict";

//Setting variables
let score = 0;
const scoreboard = document.querySelector(".score");
const highscoreboard = document.querySelector(".highscore");
const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const button = document.querySelector(".btn");

//Creating the jump animation function by adding (and removing) the jump class!
const jump = function () {
  mario.classList.add("jump");
  setTimeout(function () {
    mario.classList.remove("jump");
  }, 500); //500 is the exact jump time
};

//Attaching the function to the keydown or click
document.addEventListener("keydown", jump);
// document.addEventListener("click", jump);

//Setting the counter (score)

//Setting a loop to be checked each 10ms
const loop = setInterval(function () {
  const pipePosition = pipe.offsetLeft;
  const cloudsPosition = clouds.offsetLeft;
  const marioPosition = Number(
    window.getComputedStyle(mario).bottom.replace("px", "")
  );

  score = score + 1;
  scoreboard.textContent = `Score: ${score}`;

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition <= 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;
    mario.src = "game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "47px";

    clouds.style.animation = "none";
    clouds.style.left = `${cloudsPosition}px`;

    if (highscoreboard.textContent < score) {
      highscoreboard.textContent = `${score}`;
    }

    clearInterval(loop);
  }
}, 10);

//Setting the new game function:
// button.addEventListener("click", function () {
//   score = 0;
//   scoreboard.textContent = `Score: ${score}`;
//   pipe.style.left = `100%`;
//   pipe.style.animation = "pipe-animation 1.5s infinite linear";
// });

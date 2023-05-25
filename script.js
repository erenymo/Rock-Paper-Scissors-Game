'use strict';

// SELECTING ELEMENTS
const paperEl = document.querySelector('.paper');
const rockEl = document.querySelector('.rock');
const scissorEl = document.querySelector('.scissors');
const scoreEl = document.querySelector('.score');
const btnRulesEl = document.querySelector('.rules-btn');
const rulesModalEl = document.querySelector('.rules-modal');
const overlayEl = document.querySelector('.overlay');
const btnCloseEl = document.querySelector('.close-button');
const selectEl = document.querySelectorAll('.select');
const pickingScreenEl = document.querySelector('.picking-screen');
const pickedScreenEl = document.querySelector('.picked-screen');
const userPaperSelectedEl = document.querySelector('.user-paper-selected');
const userRockSelectedEl = document.querySelector('.user-rock-selected');
const userScissorsSelectedEl = document.querySelector(
  '.user-scissors-selected'
);
const houseScissorsSelectedEl = document.querySelector(
  '.house-scissors-selected'
);
const housePaperSelectedEl = document.querySelector('.house-paper-selected');
const houseRockSelectedEl = document.querySelector('.house-rock-selected');

const gameLoseTextEl = document.querySelector('.game-lose-text');
const gameWinTextEl = document.querySelector('.game-win-text');
const gameDrawTextEl = document.querySelector('.game-draw-text');
const btnPlayAgain = document.querySelector('.play-again-btn');

let score = 0;
scoreEl.textContent = score;

// CHANGE SCREEN
const changeScreen = function () {
  pickingScreenEl.classList.toggle('hidden');
  pickedScreenEl.classList.toggle('hidden');
};

// Score + 1
const scoreWin = function () {
  score += 1;
  scoreEl.textContent = score;
};

// Score - 1
const scoreLose = function () {
  score -= 1;
  scoreEl.textContent = score;
};

// SHOW MODAL
btnRulesEl.addEventListener('click', function () {
  rulesModalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');

  btnCloseEl.addEventListener('click', function () {
    rulesModalEl.classList.add('hidden');
    overlayEl.classList.add('hidden');
  });

  overlayEl.addEventListener('click', function () {
    rulesModalEl.classList.add('hidden');
    overlayEl.classList.add('hidden');
  });
});

// GAME FLOW

// selected = 0(paper) , 1(scissors), 2(rock)
let userSelected;
let houseSelected;

for (let i = 0; i < selectEl.length; i++) {
  selectEl[i].addEventListener('click', function () {
    // User Picking
    if (selectEl[i].classList.contains('paper')) {
      userSelected = 0;
    } else if (selectEl[i].classList.contains('scissors')) {
      userSelected = 1;
    } else {
      userSelected = 2;
    }

    // House picking
    houseSelected = Math.floor(Math.random() * 3);

    // User Picked
    changeScreen();

    if (userSelected === 0) {
      userPaperSelectedEl.classList.remove('hidden');
    } else if (userSelected === 1) {
      userScissorsSelectedEl.classList.remove('hidden');
    } else {
      userRockSelectedEl.classList.remove('hidden');
    }

    // House Picked
    if (houseSelected === 0) {
      housePaperSelectedEl.classList.remove('hidden');
    } else if (houseSelected === 1) {
      houseScissorsSelectedEl.classList.remove('hidden');
    } else {
      houseRockSelectedEl.classList.remove('hidden');
    }

    // Winner
    if (userSelected === houseSelected) {
      // DRAW
      gameDrawTextEl.classList.remove('hidden');
    } else if (userSelected === 0) {
      // user-paper vs house-picked
      if (houseSelected === 1) {
        scoreLose();
        gameLoseTextEl.classList.remove('hidden');
      } else {
        scoreWin();
        gameWinTextEl.classList.remove('hidden');
      }
    } else if (userSelected === 1) {
      // user-scissors vs house-picked
      if (houseSelected === 0) {
        scoreWin();
        gameWinTextEl.classList.remove('hidden');
      } else {
        scoreLose();
        gameLoseTextEl.classList.remove('hidden');
      }
    } else {
      // user-rock vs house-picked
      if (houseSelected === 0) {
        scoreLose();
        gameLoseTextEl.classList.remove('hidden');
      } else {
        scoreWin();
        gameWinTextEl.classList.remove('hidden');
      }
    }
  });
}

// Play Again
btnPlayAgain.addEventListener('click', function () {
  userSelected = null;
  houseSelected = null;
  //user reset
  if (!userPaperSelectedEl.classList.contains('hidden'))
    userPaperSelectedEl.classList.add('hidden');
  if (!userRockSelectedEl.classList.contains('hidden'))
    userRockSelectedEl.classList.add('hidden');
  if (!userScissorsSelectedEl.classList.contains('hidden'))
    userScissorsSelectedEl.classList.add('hidden');

  //house reset
  if (!housePaperSelectedEl.classList.contains('hidden'))
    housePaperSelectedEl.classList.add('hidden');
  if (!houseRockSelectedEl.classList.contains('hidden'))
    houseRockSelectedEl.classList.add('hidden');
  if (!houseScissorsSelectedEl.classList.contains('hidden'))
    houseScissorsSelectedEl.classList.add('hidden');

  //Win text reset
  if (!gameDrawTextEl.classList.contains('hidden'))
    gameDrawTextEl.classList.add('hidden');
  if (!gameWinTextEl.classList.contains('hidden'))
    gameWinTextEl.classList.add('hidden');
  if (!gameLoseTextEl.classList.contains('hidden'))
    gameLoseTextEl.classList.add('hidden');
  changeScreen();
});

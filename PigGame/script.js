'use strict';

let player0E1 = document.querySelector('.player--0');
let player1E1 = document.querySelector('.player--1');
let score0El = document.querySelector('#score--0');
let score1El = document.getElementById('score--1');
let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');

let diceEl = document.querySelector('.dice');
let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');

let scores, currenScore, activePlayer, playing;

let init = function () {

    scores = [0, 0];
    currenScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0E1.classList.remove('player--winner');
    player1E1.classList.remove('player--winner');
    player1E1.classList.add('player--active');
    player1E1.classList.remove('player--active');
}

init();

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currenScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0E1.classList.toggle('player--active');
    player1E1.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
    if (playing) {



        let dice = Math.trunc(Math.random() * 6) + 1;

        diceEl.classList.remove('hidden')
        diceEl.src = `dice-${dice}.png`;

        if (dice !== 1) {
            currenScore = +dice;
            document.getElementById(`current--${activePlayer}`).textContent =
                currenScore;
            current0El.textContent = currenScore;
        } else {
        }
    }
});

btnHold.addEventListener('click', function () {
    if (playing) {
        scores[activePlayer] += currenScore;
        // scores[1] = scores[1] + currenScore;
        document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer];

        if (scores[activePlayer] >= 20) {
            playing = false;
            diceEl.classList.add('hidden');
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add('player--winner');
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove('player--active');
        } else {
            switchPlayer();
        }
    }
});

btnNew.addEventListener('click', init);

'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 15;
// document.querySelector('.score').textContent = 20;


// document.querySelector('.guess').value = 50;
// console.log(document.querySelector('.guess').value);


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);


    if (!guess) {
        // document.querySelector('.message').textContent =
        //     '⛔ لا يوجد رقم';
        displayMessage('⛔ لا يوجد رقم');

    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent =
        //     '✨ الرقم صحيح';
        displayMessage('✨ الرقم صحيح');

        document.querySelector('.number').textContent =
            secretNumber;

        document.querySelector('body').style.
            backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '12rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent =
            //     guess > secretNumber ? 'الرقم مرتفع' : 'الرقم منخفض';
            displayMessage(guess > secretNumber ? 'الرقم مرتفع' : 'الرقم منخفض');
            score--;
            document.querySelector('.score').textContent =
                score;
        } else {
            // document.querySelector('.message').textContent
            //     = 'خسرت اللعبة';

            displayMessage('خسرت اللعبة');
            document.querySelector('.score').textContent = 0;
        }
    }

    // } else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent =
    //             'الرقم مرتفع';
    //         score--;
    //         document.querySelector('.score').textContent =
    //             score;
    //     } else {
    //         document.querySelector('.message').textContent
    //             = 'خسرت اللعبة';
    //     }
    // } else if (guess < secretNumber) {
    //     document.querySelector('.message').textContent =
    //         'الرقم منخفض';
    //     score--;
    //     document.querySelector('.score').textContent =
    //         score;
    // }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // document.querySelector('.message').textContent = 'ابدأ التوقع..';
    displayMessage('ابدأ التوقع..');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('number').style.width = '6rem';
});


let play = confirm('Do you want to play a game?');
let range = 8;
let min = 0;
let max = 8;
let prizewin = 0;
let firstprize = 100;
let secondprize = 50;
let thirdprize = 25;
let amount1 = 0;
let totalprize = 0;
let addition = 2;
let addition2 = 4;


if (play === true) {

    for (let attempts = 3; attempts > 0; attempts--) {

        let randominput =
            prompt(
                 'Choose a roulette pocket number from 0 to' +
                max + '\nAttempts left: ' + attempts +
                '\nTotal prize: $'+ totalprize + '\nPossible prize on current attempt: $' +
                totalprize, '');

        let randomfigure = Math.floor(Math.random() * (max - min) + min);
        if (randomfigure === randominput) {
            amount1 = firstprize + amount1;
            totalprize = amount1;
            alert(`Congratulations, you won! Your prize is ${totalprize}$.`)
            if (attempts > 1) {
                play = confirm('Do you want to continue')
            } else {
                alert(`Thank you for your participation. Your prize is: ${totalprize}$.`);
                break;
            }

            if (play === true) {
                firstprize = firstprize * addition;
                max = max + addition2;
            } else if (play === false) {
                alert(`Thank you for your participation. Your prize is:${totalprize}`);
                break;
            }
        } else if (randomfigure !== randominput || randomfigure === null) {
            alert(`Thank you for your participation. Your prize is:${totalprize}`);
            totalprize = totalprize / addition;
            while (attempts < 1) {
                play = confirm('Do you want to continue?');
            }
            if (play === false) {
                alert(`Thank you for your participation. Your prize is:${totalprize}`);
                break;
            }
        }
    }


} else {
    alert('You did not become a billionare, but can.');
}
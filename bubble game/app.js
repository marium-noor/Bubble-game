let timer = 60;
let score = 0;
let hitrn = 0;

function makeBubbles() {
    let bub = "";

    for (let i = 0; i <= 76; i++) {
        const num = Math.floor(Math.random() * 10);
        bub += `<div class="bubble">${num}</div>`;
    }

    document.querySelector(".pbtm").innerHTML = bub;
}

function runTimer() {
    var timerInt = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerInt);
            document.querySelector('.pbtm').innerHTML = `<h1>Game over</h1> <h4>Your score was ${score}</h4>`;
        }
    }, 1000);
}

function makeHit() {
    hitrn = Math.floor(Math.random() * 10)
    document.querySelector("#hitval"). textContent = hitrn;
}

function increaseScore() {
    score += 1;
    document.querySelector('#scoreval').textContent = score;
}

document.querySelector('.pbtm').addEventListener('click', function(details) {
    let clickedNum = Number(details.target.innerHTML);
    if (clickedNum === hitrn) {
        increaseScore()
        makeBubbles();
        makeHit();
    }
});

makeBubbles();
runTimer();
makeHit();
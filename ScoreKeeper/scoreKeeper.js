var coinButton = document.querySelector("#coin");
var resetButton = document.querySelector("#reset");
var headDisplay = document.querySelector("#headDisplay");
var tailDisplay = document.querySelector("#tailDisplay");
var tossDisplay = document.querySelector("#tossDisplay")
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var headScore = 0
var tailScore = 0
var gameOver = false;
var winningScore = 5;
var n = 1;
var heads = 0;
var tails = 0;


coinButton.addEventListener("click", function () {
    for (var i = 0; i < n; i++) {

        if (Math.random() < 0.50) {
            heads++;
            tossDisplay.textContent = "Heads!";
            if (!gameOver) {
                headScore++;
                if (headScore === winningScore) {
                    gameOver = true;
                    headDisplay.classList.add("winner")
                    coinButton.classList.add("disabled")
                    document.querySelector("#coin").disabled = true;
                    tossDisplay.textContent = "Heads Won.";
                }
                headDisplay.textContent = headScore;
            }
        } else {
            tails++;
            tossDisplay.textContent = "Tails!";
            if (!gameOver) {
                tailScore++;
                if (tailScore === winningScore) {
                    gameOver = true;
                    tailDisplay.classList.add("winner")
                    coinButton.classList.add("disabled")
                    document.querySelector("#coin").disabled = true;
                    tossDisplay.textContent = "Tails Won.";
                }
                tailDisplay.textContent = tailScore;
            }
        }

    }
});

resetButton.addEventListener("click", function () {
    headScore = 0;
    tailScore = 0;
    headDisplay.textContent = headScore;
    tailDisplay.textContent = tailScore;
    headDisplay.classList.remove("winner");
    tailDisplay.classList.remove("winner");
    coinButton.classList.remove("disabled")
    gameOver = false;
    document.querySelector("#coin").disabled = false;
    tossDisplay.textContent = "Toss The Coin!";
});

function reset() {
    headScore = 0;
    tailScore = 0;
    headDisplay.textContent = headScore;
    tailDisplay.textContent = tailScore;
    headDisplay.classList.remove("winner");
    tailDisplay.classList.remove("winner");
    coinButton.classList.remove("disabled")
    gameOver = false;
    document.querySelector("#coin").disabled = false;
    tossDisplay.textContent = "Toss The Coin!";
}

numInput.addEventListener("change", function () {
    winningScoreDisplay.textContent = numInput.value;
    winningScore = Number(numInput.value);
    reset();
});
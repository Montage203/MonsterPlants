
// script.js
let diamondCount = 20;
let seedLevel = 1;
let growthTime = 0;

document.getElementById("buy-seed").addEventListener("click", function () {
    if (diamondCount >= 5) {
        diamondCount -= 5;
        seedLevel = 1;
        growthTime = 0;
        updateGameUI();
    }
});

document.getElementById("plant-seed").addEventListener("click", function () {
    if (growthTime === 0) {
        growthTime = seedLevel * 5; // Temps de croissance en secondes
        updateGameUI();
        setTimeout(growPlant, growthTime * 1000);
    }
});

document.getElementById("reproduce-seed").addEventListener("click", function () {
    if (seedLevel < 7) {
        seedLevel++;
        growthTime = 0;
        updateGameUI();
    }
});

function growPlant() {
    if (seedLevel < 7) {
        seedLevel++;
        updateGameUI();
    }
}

function updateGameUI() {
    document.getElementById("diamond-count").textContent = diamondCount;
    document.getElementById("seed-level").textContent = seedLevel;
    document.getElementById("growth-time").textContent = growthTime;
    document.getElementById("plant-seed").disabled = growthTime > 0;
    document.getElementById("reproduce-seed").disabled = seedLevel === 7;
}

window.onload = function () {
    diamondCount = 20;
    seedLevel = 1;
    growthTime = 0;
    updateGameUI();
};

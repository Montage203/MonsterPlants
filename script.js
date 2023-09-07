// script.js

let level = 1;
let credits = 0;
let upgradeCost = 10;

const levelElement = document.getElementById("level");
const creditsElement = document.getElementById("credits");
const plantButton = document.getElementById("plant-button");
const upgradeButton = document.getElementById("upgrade-button");

plantButton.addEventListener("click", function () {
    credits += level;
    updateGameUI();
});

upgradeButton.addEventListener("click", function () {
    if (credits >= upgradeCost) {
        level++;
        credits -= upgradeCost;
        upgradeCost *= 2; // Coût d'amélioration doublé à chaque fois
        updateGameUI();
    }
});

function updateGameUI() {
    levelElement.textContent = level;
    creditsElement.textContent = credits;
    upgradeButton.textContent = `Amélioration (${upgradeCost} crédits)`;
}

// Mettre à jour l'interface au chargement de la page
window.onload = function () {
    updateGameUI();
};

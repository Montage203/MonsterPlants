// script.js

let level = 1;
let credits = 0;
let upgradeCost = 10;
let resetCost = 100; // Coût de la réinitialisation au niveau 1

const levelElement = document.getElementById("level");
const creditsElement = document.getElementById("credits");
const plantButton = document.getElementById("plant-button");
const upgradeButton = document.getElementById("upgrade-button");
const resetButton = document.getElementById("reset-button");
const upgradeList = document.getElementById("upgrade-list");

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

resetButton.addEventListener("click", function () {
    if (level >= 7 && credits >= resetCost) {
        credits -= resetCost;
        level = 1;
        resetCost *= 2; // Coût de réinitialisation doublé à chaque fois
        // Ajoutez le bonus de réinitialisation ici
        updateGameUI();
    }
});

// Fonction pour ajouter une amélioration
function addUpgrade(name, cost, increment) {
    const upgradeItem = document.createElement("div");
    upgradeItem.innerHTML = `<button>${name} (${cost} crédits)</button>`;
    upgradeList.appendChild(upgradeItem);

    upgradeItem.querySelector("button").addEventListener("click", function () {
        if (credits >= cost) {
            credits -= cost;
            // Appliquez l'effet de l'amélioration ici (par exemple, augmentation automatique des crédits)
            updateGameUI();
        }
    });
}

// Mettre à jour l'interface au chargement de la page
window.onload = function () {
    updateGameUI();
    // Ajoutez des améliorations ici (exemple: addUpgrade("Amélioration 1", 20, 1);)
};

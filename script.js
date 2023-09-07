// script.js

let plants = 0;
let credits = 0;
let clickValue = 1;
let autoClickers = 0;
let grandmas = 0;

const plantContainer = document.getElementById("plant-container");
const plantButton = document.getElementById("plant-button");
const upgradeList = document.getElementById("upgrade-list");

// Fonction pour générer un nombre aléatoire entre min (inclus) et max (exclus)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Fonction pour gérer les événements aléatoires
function handleRandomEvent() {
    const eventChance = getRandomNumber(1, 101); // Un nombre entre 1 et 100 inclus

    // Exemple d'événement aléatoire : Chance de doubler les crédits
    if (eventChance <= 10) {
        const bonus = getRandomNumber(1, 4); // Un multiplicateur de crédits aléatoire (entre 1 et 4)
        credits += plants * clickValue * bonus;
        updateGameUI();
        alert(`Événement aléatoire ! Vos plantes ont rapporté ${plants * clickValue * bonus} crédits.`);
    }

    // Autre exemple : Chance d'obtenir des plantes gratuites
    if (eventChance <= 5) {
        const freePlants = getRandomNumber(1, 10); // Un nombre aléatoire de plantes gratuites (entre 1 et 10)
        plants += freePlants;
        updateGameUI();
        alert(`Événement aléatoire ! Vous avez trouvé ${freePlants} plantes gratuites.`);
    }

    // Vous pouvez ajouter plus d'événements aléatoires ici
}

// Fonction pour ajouter une amélioration
function addUpgrade(name, cost, increase) {
    if (credits >= cost) {
        const upgradeItem = document.createElement("div");
        upgradeItem.innerHTML = `<button>${name} (${cost} crédits)</button>`;
        upgradeList.appendChild(upgradeItem);

        upgradeItem.querySelector("button").addEventListener("click", function () {
            credits -= cost;
            if (name === "Auto-Clicker") {
                autoClickers++;
            } else if (name === "Granny") {
                grandmas++;
            } else {
                clickValue += increase;
            }
            updateGameUI();
        });
    }
}

function updateGameUI() {
    plantContainer.textContent = `Plantes: ${plants}`;
    plantButton.textContent = `Planter une plante (+${clickValue})`;

    // Efface toutes les améliorations affichées
    upgradeList.innerHTML = "";

    // Ajoute des améliorations si vous avez suffisamment de crédits
    addUpgrade("Amélioration 1", 10, 1);
    addUpgrade("Amélioration 2", 50, 5);
    addUpgrade("Amélioration 3", 100, 10);
    addUpgrade("Amélioration 4", 500, 50);
    addUpgrade("Auto-Clicker", 200, 1);
    addUpgrade("Amélioration 5", 1000, 100);
    addUpgrade("Amélioration 6", 5000, 500);
    addUpgrade("Amélioration 7", 10000, 1000);
    addUpgrade("Granny", 50000, 5000);
    addUpgrade("Amélioration 8", 100000, 10000);

    document.getElementById("credits").textContent = `Crédits: ${credits}`;
    document.getElementById("auto-clickers").textContent = `Auto-Clickers: ${autoClickers}`;
    document.getElementById("grandmas").textContent = `Grannies: ${grandmas}`;
}

// Mettre à jour l'interface au chargement de la page
window.onload = function () {
    updateGameUI();

    // Gestion des événements aléatoires
    setInterval(handleRandomEvent, 30000); // Un événement aléatoire toutes les 30 secondes (30000 millisecondes)
};

// Fonction pour gérer la production automatique
function autoClick() {
    credits += autoClickers * clickValue;
    updateGameUI();
}

// Appel de la fonction d'auto-clic toutes les secondes
setInterval(autoClick, 1000); // Toutes les 1000 millisecondes (1 seconde)

// Gestion du clic sur le bouton "Planter une plante"
plantButton.addEventListener("click", function () {
    plants += clickValue;
    updateGameUI();
});

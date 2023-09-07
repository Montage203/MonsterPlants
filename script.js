// script.js

let plants = 0;
let credits = 0;
let clickValue = 1;
let autoClickers = 0;
let grandmas = 0;
let level = 1;

const plantContainer = document.getElementById("plant-container");
const plantButton = document.getElementById("plant-button");
const upgradeList = document.getElementById("upgrade-list");
const levelDisplay = document.getElementById("level");

// Fonction pour générer un nombre aléatoire entre min (inclus) et max (exclus)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Fonction pour gérer les événements aléatoires
function handleRandomEvent() {
    const eventChance = getRandomNumber(1, 101); // Un nombre entre 1 et 100 inclus

    // Événement aléatoire 1 : Chance de doubler les crédits
    if (eventChance <= 10) {
        const bonus = getRandomNumber(1, 4); // Un multiplicateur de crédits aléatoire (entre 1 et 4)
        credits += plants * clickValue * bonus;
        updateGameUI();
        alert(`Événement aléatoire ! Vos plantes ont rapporté ${plants * clickValue * bonus} crédits.`);
    }

    // Événement aléatoire 2 : Chance d'obtenir des plantes gratuites
    if (eventChance <= 5) {
        const freePlants = getRandomNumber(1, 10); // Un nombre aléatoire de plantes gratuites (entre 1 et 10)
        plants += freePlants;
        updateGameUI();
        alert(`Événement aléatoire ! Vous avez trouvé ${freePlants} plantes gratuites.`);
    }

    // Événement aléatoire 3 : Chance d'augmenter le clickValue
    if (eventChance <= 2) {
        const bonus = getRandomNumber(1, 5); // Un multiplicateur de clickValue aléatoire (entre 1 et 5)
        clickValue += bonus;
        updateGameUI();
        alert(`Événement aléatoire ! Votre clickValue a été augmenté de ${bonus}.`);
    }
}

// Fonction pour ajouter une amélioration
function addUpgrade(name, cost, increase) {
    const upgradeItem = document.createElement("div");
    upgradeItem.innerHTML = `<button>${name} (${cost} crédits)</button>`;
    
    // Vérifier si vous avez suffisamment de crédits pour acheter l'amélioration
    if (credits >= cost) {
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
    } else {
        // Si vous n'avez pas suffisamment de crédits, désactivez le bouton
        upgradeItem.querySelector("button").disabled = true;
    }
    
    upgradeList.appendChild(upgradeItem);
}

function updateGameUI() {
    plantContainer.textContent = `Plantes: ${plants}`;
    plantButton.textContent = `Planter une plante (+${clickValue})`;
    levelDisplay.textContent = `Niveau: ${level}`;

    document.getElementById("credits").textContent = `Crédits: ${credits}`;
    document.getElementById("auto-clickers").textContent = `Auto-Clickers: ${autoClickers}`;
    document.getElementById("grandmas").textContent = `Grannies: ${grandmas}`;
}

// Mettre à jour l'interface au chargement de la page
window.onload = function () {
    updateGameUI();

    // Gestion des événements aléatoires
    setInterval(handleRandomEvent, 30000); // Un événement aléatoire toutes les 30 secondes (30000 millisecondes)

    // Ajout des améliorations initiales
    addUpgrade("Amélioration 1", 10, 1);
    addUpgrade("Amélioration 2", 50, 5);
    addUpgrade("Amélioration 3", 100, 10);
    addUpgrade("Amélioration 4", 500, 50);
    addUpgrade("Auto-Clicker", 200, 1);
    addUpgrade("Amélioration 5", 1000, 100);
};

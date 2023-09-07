// Variables pour suivre l'état du jeu
let seeds = 0;
let plants = [];
let credits = 0;

// Fonction pour acheter une graine de niveau 1
document.getElementById("buy-seed").addEventListener("click", function () {
    seeds++;
    updateGameUI();
});

// Fonction pour planter une graine
document.getElementById("plant-container").addEventListener("click", function (event) {
    const target = event.target;
    if (target.classList.contains("plant")) {
        const plantIndex = target.getAttribute("data-index");
        if (seeds > 0 && !plants[plantIndex].planted) {
            seeds--;
            plants[plantIndex].planted = true;
            updateGameUI();
            setTimeout(growPlant, 30 * 60 * 60 * 1000, plantIndex); // 30 heures en millisecondes
        }
    }
});

// Fonction pour faire pousser une plante
function growPlant(plantIndex) {
    plants[plantIndex].planted = false;
    credits += plants[plantIndex].creditReward;
    updateGameUI();
}

// Fonction pour évoluer une plante avec la potion magique
document.getElementById("credits").addEventListener("click", function () {
    if (credits >= 20) {
        credits -= 20;
        seeds += 4;
        updateGameUI();
    }
});

// Fonction pour mettre à jour l'interface du jeu
function updateGameUI() {
    document.getElementById("seeds-count").textContent = seeds;
    document.getElementById("credits-count").textContent = credits;

    const plantContainer = document.getElementById("plant-container");
    plantContainer.innerHTML = "";

    for (let i = 0; i < plants.length; i++) {
        const plant = plants[i];
        const plantElement = document.createElement("div");
        plantElement.classList.add("plant");
        if (plant.planted) {
            plantElement.classList.add("planted");
        }
        plantElement.setAttribute("data-index", i);
        plantContainer.appendChild(plantElement);
    }
}

// Initialisation du jeu
function initializeGame() {
    for (let i = 0; i < 5; i++) {
        plants.push({ planted: false, creditReward: 0 });
    }
    updateGameUI();
}

// Appel de la fonction d'initialisation du jeu au chargement de la page
window.onload = initializeGame;

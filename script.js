// script.js

window.onload = function () {
    // Le contenu de l'article
    const articleContent = `
        <h2>C'est quoi les Monsterplants ?</h2>
        <p>Les Monsterplants sont des plantes que nous faisons pousser à l'aide d'une graine que l'on peut trouver dans le catalogue dans la catégorie "Rares". Le but est d'atteindre les graines niveau 7 pour obtenir une plante niveau 20 ou 21.</p>

        <h2>À quoi servent-ils ?</h2>
        <p>Quand ta plante atteint le niveau 20, elle va se mettre à cracher des diamants entre 10 à 200 diamants à chaque heure durant 15 à 30 jours. Donc ça te permettra de gagner des diamants, entre 50k à 100k durant les 15-30 jours.</p>

        <h2>Comment ça fonctionne ?</h2>
        <p>Il faudra tout d'abord te procurer des graines (il te faudra bien plus qu'une seule graine si tu veux atteindre le niveau 20). Une fois que tu as tes graines, dépose les dans un appart et clique sur "Planter" pour pouvoir les planter. Une fois qu'elles sont plantées, ne te préoccupe pas de leur niveau, ça n'a aucune importance (les niveaux de plante ne monteront jamais).</p>

        <p>Afin d'obtenir d'autres graines, il faudra les accoupler. Il est important d'accoupler deux plantes de même niveau de graine pour avoir la chance d'avoir une graine du niveau supérieur. Tu as 75% de chances d'obtenir une graine de niveau supérieur et 25% de chances d'obtenir une graine du même niveau.</p>

        <p>Et ça continue jusqu'à obtenir une graine niveau 7. La graine de niveau 7 a 33% de chances de faire naître une plante de niveau 20 ou 21.</p>

        <p>Tout est basé sur de la chance, donc il peut y avoir des personnes qui peuvent dépenser 5k et gagner 100k grâce aux plantes comme il peut y avoir des personnes qui peuvent dépenser 100k et gagner que 50k avec les plantes.</p>

        <h2>Les potions</h2>
        <p>- Potion de recroisement: Comme une plante ne peut s'accoupler qu'une seule fois, cette potion permet de refaire s'accoupler une plante, uniquement si elles ont un niveau de graine maximum de 5.</p>
        <p>- Potion de résurrection: Les plantes ont besoin d'être traitée dans une durée définie, si on ne le fait pas, alors elles meurent. Une fois morte, il est possible de les faire revivre avec cette potion.</p>
        <p>- Potion de croissance rapide: Une fois la graine semée, une plante a besoin d'une certaines durée allant de quelques minutes à quelques heures pour devenir adulte pour ensuite l'accoupler et ainsi de suite, cette potion permet de rendre adulte ses plantes de manière instantané.</p>

        <h2>Les pièces</h2>
        <p>- Une fois la plante de niveau 20 acquise, elle crachera des diamants sous forme de pièces de 10. Elles peuvent vite s'accumuler, nous vous conseillons de les convertir au fur et à mesure sous peine de se retrouver avec des milliers de pièces de diamants. Il existe une commande :convertdiamonds permettant de convertir tous les magots en monnaie, cependant elle a été désactivée.</p>
        
        <h2>Quelques renseignements :</h2>
        <p>Vous pouvez raviver votre plante, la faire grandir plus rapidement ou encore redonner l'opportunité à votre plante de se reproduire avec l'aide d'une potion.</p>
        <p>Une fois que votre plante arrête de cracher des diamants, elle n'en crachera plus et elle meurt uniquement si vous ne la traitez pas.</p>
        <p>Une fois que la plante s'est reproduite, elle ne sert plus à rien à part si elle est de niveau 20 ou si vous voulez faire une collection de plantes.</p>
        <p>Pour l'instant, nos amis ne peuvent pas traiter nos plantes.</p>
        <p>Pour se débarrasser des plantes, il suffit de les ramasser un par un et de faire :emptypets oui.</p>
        <p>Vous pouvez vendre et acheter des graines.</p>
        <p>Vous pouvez vendre et acheter des plantes via le marché des appartements.</p>
        <p>Si vous mettez votre plante dans l'inventaire, elle risque quand même de mourir vu que vous ne la traitez pas.</p>
        <p>Pour cracher des diamants, votre plante doit être dans un appartement.</p>
    `;

    // Afficher le contenu de l'article
    document.getElementById("article").innerHTML = articleContent;
};

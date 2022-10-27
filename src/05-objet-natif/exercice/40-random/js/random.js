/**
 * Exercice - random
 *
 * Consignes:
 *  Créer le fichier js/random.js à partir du code suivant.
 *  Compléter le code manquant pour affiché sur la console le Array resultat contenant les valeurs du Array initial dans un ordre aléatoire.
 */
'use strict'

const initial = [1, 2, 3, 4, 5, 6]
const resultat = []

// Compléter le code pour remplir le Array resultat dans un ordre aléatoire
const temp = initial.sort(() => Math.random() - 0.5)
temp.forEach((element, index) => {
    // resultat[index] = initial.sort(() => Math.random() - 0.5).pop()
    resultat[index] = element
})
console.log('Résultat', resultat)

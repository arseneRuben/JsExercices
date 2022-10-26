/**
 * Exercice - chaine-caractere
 *
 * Utiliser les fonctions JavaScript pour le traitement des chaines de caractères.
 *
 * Consignes:
 *  Créer le fichier js/chaine-caractere.js à partir du code suivant.
 *  Compléter le code manquant pour obtenir le résultat de la maquette.
 *
 * Note: Seulement l'objet console est nécessaire, pas d'itération ou autre structure de contrôle
 */
'use strict'

const SENTENCE = 'The strength of JavaScript is that you can do anything. The weakness is that you will.'
console.log('La phrase entière ', SENTENCE)
console.log('La longueur de la chaine de caractères : ', SENTENCE.length)
console.log('La position du mot JavaScritp : ', SENTENCE.indexOf('JavaScript'))
console.log('La position du dernier is : ', SENTENCE.lastIndexOf('is'))
console.log('La dernière phrase seulement: ', SENTENCE.split('.')[1])
console.log('Les 10 carateres a partir du 17iem caractere: ', SENTENCE.substring(16, 26))
console.log('Combien de mots dans la phrase: ', SENTENCE.split(' ').length)
console.log('Le 61iem caractere: ', SENTENCE[60])
const sentence = SENTENCE.replace('/you/g', 'I')
const sentence2 = SENTENCE.replaceAll('you', 'I')
console.log('Remplacer \'you\' par \'I\' dans toute la phrase: ', sentence)
console.log('Remplacer \'you\' par \'I\' dans toute la phrase: ', sentence2)

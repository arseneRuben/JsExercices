/**
 * Exercice - total
 *
 * Consignes:
 *  Créer le fichier js/total.js à partir du code suivant.
 *  Compléter le code manquant pour obtenir le résultat de la maquette.
 */
'use strict'

const MONTHS = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre']

const SALES = [120, 500, 350, 400, 600, 890, 450, 100, 250, 300, 650, 450]
// Traitement de l'affichage vertical
const htmlSubTitleVerticalArray = '<h2>Affichage vertical</h2>'
let htmlCodeVertivalArray = '<table>'
let total = 0
MONTHS.forEach((month, index) => {
    htmlCodeVertivalArray += '<tr><td>' + month + '</td>' + '<td>' + SALES[index] + '</td></tr>'
    total += SALES[index]
})
htmlCodeVertivalArray += '<tr><td><strong>Total</strong></td><td><strong>' + total + ' $</strong></td></tr>'
htmlCodeVertivalArray += '</table>'

document.write(htmlSubTitleVerticalArray)
document.write(htmlCodeVertivalArray)

// Traitement de l'affichage horizontal

const htmlSubTitleHorizontalArray = '<h2>Affichage horizontal</h2>'
let htmlCodeHorizontalArray = '<table><tr>'
MONTHS.forEach((month) => {
    htmlCodeHorizontalArray += '<td>' + month + '</td>'
})
htmlCodeHorizontalArray += '<td><strong>Total</strong></td></tr><tr>'
SALES.forEach((sale) => {
    htmlCodeHorizontalArray += '<td>' + sale + '</td>'
})
htmlCodeHorizontalArray += '<td><strong>' + total + ' $</strong></tr>'
document.write(htmlSubTitleHorizontalArray)
document.write(htmlCodeHorizontalArray)

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
let htmlSubTitle = '<h2>Affichage vertical</h2>'
let htmlCode = '<table>'
let total = 0
MONTHS.forEach((month, index) => {
    htmlCode += '<tr><td>' + month + '</td>' + '<td>' + SALES[index] + '</td></tr>'
    total += SALES[index]
})
htmlCode += '<tr><td><strong>Total</strong></td><td><strong>' + total + ' $</strong></td></tr>'
htmlCode += '</table>'

document.write(htmlSubTitle)
document.write(htmlCode)

// Traitement de l'affichage horizontal

htmlSubTitle = '<h2>Affichage horizontal</h2>'
htmlCode = '<table><tr>'
MONTHS.forEach((month) => {
    htmlCode += '<td>' + month + '</td>'
})
htmlCode += '<td><strong>Total</strong></td></tr><tr>'
SALES.forEach((sale) => {
    htmlCode += '<td>' + sale + '</td>'
})
htmlCode += '<td><strong>' + total + ' $</strong></tr>'
document.write(htmlSubTitle)
document.write(htmlCode)

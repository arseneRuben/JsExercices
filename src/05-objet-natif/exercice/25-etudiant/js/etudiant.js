/**
 * Exercice - etudiant
 *
 * Consignes:
 *  Créer le fichier js/etudiant.js à partir du code suivant.
 *  Compléter le code manquant pour obtenir le résultat de la maquette.
 *
 *  Note1: Le parcours de la collection 'resultats' doit s'arrêter aussitôt que nous avons trouvé la note de l'étudiant. (IMPORTANT)
 *  Note2: Si la note n'est pas trouvée, l'étudiant aura 0
 */
'use strict'

const etudiants = [
    { id: 12, name: 'Martin' },
    { id: 20, name: 'Pierre' },
    { id: 15, name: 'Julie' },
    { id: 32, name: 'Patrick' },
    { id: 43, name: 'Claude' },
    { id: 13, name: 'Judith' }
]

const resultats = [
    { id: 20, total: 56 },
    { id: 13, total: 34 },
    { id: 43, total: 98 },
    { id: 50, total: 67 },
    { id: 67, total: 90 },
    { id: 15, total: 65 },
    { id: 23, total: 78 },
    { id: 70, total: 88 },
    { id: 88, total: 95 }
]

let htmlCode = ''
etudiants.forEach((student, index) => {
    let resultIndex = 0
    let tableRow = '<tr><td>' + student.id + '</td>' + '<td>' + student.name + '</td>'
    while (resultIndex < resultats.length && student.id !== resultats[resultIndex].id) {
        resultIndex++
    }
    if (resultIndex === resultats.length) {
        tableRow += '<td>0</td>'
    } else {
        tableRow += '<td>' + resultats[resultIndex].id + '</td>'
    }
    tableRow += '</tr>'
    htmlCode += tableRow
})
document.write(htmlCode)

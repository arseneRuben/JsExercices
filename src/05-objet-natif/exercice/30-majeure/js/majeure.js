'use strict'

// Age de la majorité
const MAJOR = 18

// Les âges de 4 groupes de personne
const AGES = [
    [25, 39, 51, 22, 15, 44],
    [25, 39, 51, 22, 55, 44],
    [25],
    [15]
]

AGES.forEach((groupe, index) => {
    let result
    let i = 0
    let item = groupe[i]
    while (item >= MAJOR && i <= groupe.length) {
        i++
        item = groupe[i]
    }
    if (i === groupe.length) {
        result = 'sont tous adultes'
    } else {
        result = 'ne sont pas tous adultes'
    }

    document.write('<tr><td> groupe ' + index + '</td><td>' + result + '</td></tr>')
})

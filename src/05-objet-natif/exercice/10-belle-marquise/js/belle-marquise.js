'use strict'
const VIRGULE = ', '
const tableau = [
    'belle Marquise',
    'vos beaux yeux',
    'me font mourir',
    'd\'amour'
]
function createItem (item) {
    return '<li>' + item + '</li>'
}

function createTheLists (tableauItem) {
    let chaineEnSortie = '<ul>'

    chaineEnSortie += createItem(tableauItem[0] + VIRGULE + tableauItem[1] + VIRGULE + tableauItem[2] + VIRGULE + tableauItem[3])
    chaineEnSortie += createItem(tableauItem[1] + VIRGULE + tableauItem[0] + VIRGULE + tableauItem[2] + VIRGULE + tableauItem[3])
    chaineEnSortie += createItem(tableauItem[3] + VIRGULE + tableauItem[2] + VIRGULE + tableauItem[0] + VIRGULE + tableauItem[1])
    chaineEnSortie += createItem(tableauItem[2] + VIRGULE + tableauItem[0] + VIRGULE + tableauItem[3] + VIRGULE + tableauItem[2])

    return chaineEnSortie + '</ul>'
}

document.write(createTheLists(tableau))

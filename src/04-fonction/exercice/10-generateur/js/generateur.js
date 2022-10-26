'use strict'

function createItem (item) {
    return '<li>' + item + '</li>'
}

function createList (tableauItem) {
    let chaineEnSortie = '<ul>'

    tableauItem.forEach(element => {
        chaineEnSortie += createItem(element)
    })
    return chaineEnSortie + '</ul>'
}

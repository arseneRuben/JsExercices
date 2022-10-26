'use strict'

function createItem (item) {
    return '<li>' + item + '</li>'
}

function createList (tab) {
    let str = '<ul>'

    tab.forEach(element => {
        str += createItem(element)
    })
    return str + '</ul>'
}

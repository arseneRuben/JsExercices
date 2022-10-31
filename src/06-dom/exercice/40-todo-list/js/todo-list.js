'use strict'
const uListe = document.getElementById('liste')

function addNewLiElement () {
    const item = document.getElementById('textBox').value
    const liElement = document.createElement('li')
    const node = document.createTextNode(item)
    liElement.appendChild(node)
    uListe.appendChild(liElement)
}

function deleteLastLiElement () {
    if (uListe.children.length) {
        uListe.removeChild(uListe.lastChild)
    }
}

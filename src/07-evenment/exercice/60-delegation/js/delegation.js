'use strict'

window.addEventListener('DOMContentLoaded', function loaded (event) {
    window.removeEventListener('DOMContentLoaded', loaded, false)

    const listContainer = document.getElementById('listContainer')
    const divOutput = document.getElementById('output')

    for (let counter = 0; counter < 10000; counter++) {
        const liElement = document.createElement('li')
        liElement.setAttribute('id', 'product_no_' + counter)
        liElement.appendChild(document.createTextNode('Produit numéro: ' + counter))
        listContainer.appendChild(liElement)
    }
    listContainer.addEventListener('click', onClick)

    function onClick (event) {
        const id = event.target.id.split('_')[2]
        divOutput.innerHTML = 'Produit numero: ' + id + ' (ID=' + event.target.id + ')'
    }
}, false)

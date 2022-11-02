/**
 * Exercice - delegation
 *
 * Consignes:
 *  Créer le fichier js/delegation.js à partir du code suivant.
 *  Compléter le code manquant pour obtenir le résultat des maquettes.
 *
 * Note: Le DIV avec le id="output" utilisée pour l'affichage du résultat doit être recherché une seule fois dans le document et être passé en paramètre à la fonction qui écoute l'événement.
 */
'use strict'

window.addEventListener('DOMContentLoaded', function loaded (event) {
    window.removeEventListener('DOMContentLoaded', loaded, false)

    const listContainer = document.getElementById('listContainer')

    for (let counter = 0; counter < 10000; counter++) {
        const liElement = document.createElement('li')
        liElement.setAttribute('id', 'product_no_' + counter)
        liElement.appendChild(document.createTextNode('Produit numéro: ' + counter))
        listContainer.appendChild(liElement)
    }
}, false)

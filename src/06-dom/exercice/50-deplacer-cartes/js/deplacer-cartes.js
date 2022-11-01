'use strict'
const cartes = document.getElementById('cartes')

function tournerGauche () {
    let carte1 = cartes.firstElementChild
    cartes.removeChild(carte1)
    cartes.appendChild(carte1)
    carte1 = cartes.firstElementChild
    cartes.removeChild(carte1)
    cartes.appendChild(carte1)
}

function tournerDroite () {
    const lastCart = cartes.lastElementChild
    const carte1 = cartes.firstElementChild
    cartes.removeChild(lastCart)
    cartes.insertBefore(lastCart, carte1)
}

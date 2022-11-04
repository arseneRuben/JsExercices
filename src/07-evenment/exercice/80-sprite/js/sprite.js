'use strict'
// Largeur d'une seul image
const IMAGE_WIDTH = 587
// Largeur de tout le fichier spritesheet.png
const SPRITE_WIDTH = 35220
let i = 1
window.addEventListener('DOMContentLoaded', function loaded (event) {
    window.removeEventListener('DOMContentLoaded', loaded, false)
    const knight = document.getElementById('knight')

    const intervalID = setInterval(setBackgroundImage, 250)
    function setBackgroundImage () {
        knight.style.backgroundImage = 'url(js/spritesheet.png)'
        knight.style.backgroundPosition = 'top 0px left ' + IMAGE_WIDTH * i++ + 'px'

        if (i === 10) i = 1
    }
}, false)

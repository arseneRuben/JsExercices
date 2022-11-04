'use strict'
// Largeur d'une seul image
const IMAGE_WIDTH = 587
// Largeur de tout le fichier spritesheet.png
const SPRITE_WIDTH = 35220
let i = 1
window.addEventListener('load', function loaded (event) {
    window.removeEventListener('load', loaded, false)
    const knight = document.getElementById('knight')

    setInterval(setBackgroundImage, 100)
    function setBackgroundImage () {
        knight.style.backgroundPosition = 'top 0px left ' + (IMAGE_WIDTH * i) + 'px'

        if (i === SPRITE_WIDTH / IMAGE_WIDTH) {
            i = 1
        } else {
            i += 1
        }
    }
}, false)

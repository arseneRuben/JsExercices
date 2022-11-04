'use strict'
// Largeur d'une seul image
const IMAGE_WIDTH = 587
// Largeur de tout le fichier spritesheet.png
const SPRITE_WIDTH = 35220

window.addEventListener('DOMContentLoaded', function loaded (event) {
    window.removeEventListener('DOMContentLoaded', loaded, false)
    const knight = document.getElementById('knight')

    const intervalID = setInterval(setBackgroundImage, 500)
    let i = 1
    function setBackgroundImage () {
        // console.log("url(decodeURI('../freeknight/png/Jump (" + (i++) + ").png'))")
        knight.style.backgroundImage = "url(decodeURI('../freeknight/png/Jump (" + (i++) + ").png'))"

        if (i === 10) i = 1
    }
}, false)

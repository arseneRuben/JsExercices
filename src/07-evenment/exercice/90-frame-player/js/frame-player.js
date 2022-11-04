'use strict'
// Largeur d'une seul image
const IMAGE_WIDTH = 587
// Largeur de tout le fichier spritesheet.png
const SPRITE_WIDTH = 35220

window.addEventListener('DOMContentLoaded', function loaded (event) {
    window.removeEventListener('DOMContentLoaded', loaded, false)
    const frameImage = document.getElementById('frameImage')

    const intervalID = setInterval(setImage, 500)
    let i = 1
    function setImage () {
        // console.log("url(decodeURI('../freeknight/png/Jump (" + (i++) + ").png'))")
        frameImage.src = 'img0001-min.jpg'

        if (i === 10) i = 1
    }
}, false)

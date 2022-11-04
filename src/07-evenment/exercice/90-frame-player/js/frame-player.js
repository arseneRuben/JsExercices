'use strict'

window.addEventListener('load', function loaded (event) {
    window.removeEventListener('load', loaded, false)
    const frameImage = document.getElementById('frameImage')
    const frameRange = document.getElementById('frameRange')
    const stopButton = document.getElementById('stopButton')
    const playButton = document.getElementById('playButton')

    const IMAGE_NUMBER = 36
    let intervalID
    let i = 1
    function setImage () {
        const image = (i < 10) ? 'img000' + (i) + '-min.jpg' : 'img00' + (i) + '-min.jpg'
        frameImage.src = ('image/' + image)
        frameRange.value = i
        if (i === IMAGE_NUMBER) {
            i = 1
        } else {
            i++
        }
    }

    stopButton.addEventListener('click', function () {
        clearInterval(intervalID)
    })
    playButton.addEventListener('click', function () {
        intervalID = setInterval(setImage, 100)
    })
}, false)

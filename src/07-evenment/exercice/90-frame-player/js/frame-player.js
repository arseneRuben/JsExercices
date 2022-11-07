'use strict'

window.addEventListener('load', function loaded (event) {
    window.removeEventListener('load', loaded, false)
    const frameImage = document.getElementById('frameImage')
    const frameRange = document.getElementById('frameRange')
    const stopButton = document.getElementById('stopButton')
    const playButton = document.getElementById('playButton')

    const IMAGE_NUMBER = 36
    let intervalID
    let i = frameRange.value
    let image = 'img' + (i + '').padStart(4, '0') + '-min.jpg'

    function setImage () {
        image = 'img' + (i + '').padStart(4, '0') + '-min.jpg'
    }
    function playImage () {
        // const image = (i < 10) ? 'img000' + (i) + '-min.jpg' : 'img00' + (i) + '-min.jpg'
        setImage()

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
        intervalID = setInterval(playImage, 200)
    })
    frameRange.addEventListener('input', function () {
        setImage()
        frameImage.src = ('image/' + image)
    })
}, false)

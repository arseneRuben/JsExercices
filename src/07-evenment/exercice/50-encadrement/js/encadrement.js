'use strict'

window.addEventListener('DOMContentLoaded', function loaded (event) {
    window.removeEventListener('DOMContentLoaded', loaded, false)
    const inputs = document.querySelectorAll('form div input')

    function onSelect (event) {
        const inputValue = event.target.value
        const galleryDivs = document.querySelectorAll('div.gallery>div')
        galleryDivs.forEach(div => {
            div.style.backgroundImage = "url('image/" + inputValue + ".png')"
        })
    }

    inputs.forEach(input => {
        input.addEventListener('input', onSelect)
    })
}, false)

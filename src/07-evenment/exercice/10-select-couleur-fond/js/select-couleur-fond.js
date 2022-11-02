'use strict'
const selectElement = document.getElementById('colorSelect')
selectElement.addEventListener('change', setbackgroundColor)

function setbackgroundColor (event) {
    console.log(event.target.value)
    document.body.style.backgroundColor = event.target.value
}

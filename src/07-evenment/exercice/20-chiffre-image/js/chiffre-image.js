'use strict'
const selectElement = document.getElementById('numberInput')
selectElement.addEventListener('change', setImage)
function setImage (event) {
    const image = document.getElementById('numberDiv').children[0]
    //    / console.log('image/' + event.target.value + '.jpg')
    image.src = 'image/' + event.target.value + '.jpg'
}

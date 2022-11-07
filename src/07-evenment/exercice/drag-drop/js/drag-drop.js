'use strict'

window.addEventListener('DOMContentLoaded', function loaded (event) {
    window.removeEventListener('DOMContentLoaded', loaded, false)

    function dragstartHandler (ev) {
        ev.dataTransfer.setData('text/plain', ev.target.innerText)
        ev.dataTransfer.effectAllowed = 'move'
    }

    function dragoverHandler (ev) {
        ev.preventDefault()

        // ev.dataTransfer.dropEffect = 'move'
    }
    function dropHandler (ev) {
        ev.preventDefault()
        console.log(ev.dataTransfer)
        const divElemt = document.createElement('div')
        divElemt.draggable = true
        divElemt.classList.add('item')
        divElemt.innerHTML = ev.dataTransfer.getData('text/plain')

        ev.target.appendChild(divElemt)
    }
    /*

     function dragoverHandler (ev) {
        ev.preventDefault()
        ev.dataTransfer.dropEffect = 'move'
    }
*/
    const draggableItems = document.querySelectorAll("[draggable='true']")
    const dropArea = document.getElementById('dropArea')

    draggableItems.forEach(draggableItem => {
        draggableItem.addEventListener('dragstart', dragstartHandler)
    })
    dropArea.addEventListener('dragover', dragoverHandler)
    dropArea.addEventListener('ondrop', dropHandler)
}, false)

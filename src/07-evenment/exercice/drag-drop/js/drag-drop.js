'use strict'

window.addEventListener('load', function loaded (event) {
    window.removeEventListener('load', loaded, false)

    function dragstartHandler (ev) {
        // Add the target element's id to the data transfer object
        console.log(ev.target.innerText)
        ev.dataTransfer.setData('application/my-app', ev.target.innerText)
        ev.dataTransfer.dropEffect = 'move'
    }
    function dragoverHandler (ev) {
        ev.preventDefault()
        ev.dataTransfer.dropEffect = 'move'
    }
    function dropHandler (ev) {
        ev.preventDefault()
        // Get the id of the target and add the moved element to the target's DOM
        const data = ev.dataTransfer.getData('application/my-app')
        ev.target.appendChild(document.getElementById(data))
    }

    const draggableItems = document.querySelectorAll("[draggable='true']")

    draggableItems.forEach(draggableItem => {
        draggableItem.addEventListener('dragstart', dragstartHandler)
    })

    /* const dropArea = document.getElementById('dropArea')
    dropArea.ondrop = dropHandler(event)
    dropArea.ondragover = dragoverHandler(event) */
}, false)

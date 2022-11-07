'use strict'

window.addEventListener('load', function loaded (event) {
    window.removeEventListener('load', loaded, false)

    function dragstart_handler (ev) {
        // Add the target element's id to the data transfer object
        console.log(ev.target.innerText)
        ev.dataTransfer.setData('application/my-app', ev.target.innerText)
        ev.dataTransfer.dropEffect = 'move'
    }
    function dragover_handler (ev) {
        ev.preventDefault()
        ev.dataTransfer.dropEffect = 'move'
    }
    function drop_handler (ev) {
        ev.preventDefault()
        // Get the id of the target and add the moved element to the target's DOM
        const data = ev.dataTransfer.getData('application/my-app')
        ev.target.appendChild(document.getElementById(data))
    }

    const draggableItems = document.querySelectorAll("[draggable='true']")

    draggableItems.forEach(draggableItem => {
        draggableItem.addEventListener('dragstart', dragstart_handler)
    })

    const dropArea = document.getElementById('dropArea')
    dropArea.ondrop = drop_handler(event)
    dropArea.ondragover = dragover_handler(event)
}, false)

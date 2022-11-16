'use strict'

window.addEventListener('DOMContentLoaded', function loaded (event) {
    window.removeEventListener('DOMContentLoaded', loaded, false)

    const name = 'task'
    const taskInput = document.getElementById('taskInput')
    taskInput.setSelectionRange(0, 0)
    taskInput.focus()
    taskInput.addEventListener('keyup', taskInputChangeHandler)
    taskInput.addEventListener('change', onSubmitHandler)

    const addButton = document.getElementById('addButton')
    const taskList = document.getElementById('taskList')
    const taskTotal = document.getElementById('taskTotal')
    const deleteButton = document.getElementById('deleteButton')

    function taskInputChangeHandler (event) {
        if (!(event.target.value.length === 0)) {
            addButton.disabled = false
        } else {
            addButton.disabled = true
        }
    }

    addButton.addEventListener('click', onSubmitHandler)

    function onSubmitHandler (event) {
        const liElement = document.createElement('li')
        const checkBoxElement = document.createElement('input')
        checkBoxElement.setAttribute('type', 'checkbox')
        checkBoxElement.setAttribute('name', name)
        checkBoxElement.setAttribute('id', taskInput.value)
        checkBoxElement.setAttribute('value', taskInput.value)
        checkBoxElement.addEventListener('input', checkBoxInputHandler)
        const labelElement = document.createElement('label')
        labelElement.setAttribute('for', taskInput.value)
        labelElement.appendChild(document.createTextNode(taskInput.value))

        liElement.appendChild(checkBoxElement)
        liElement.appendChild(labelElement)
        taskList.appendChild(liElement)
        taskInput.value = null
        addButton.disabled = true
        taskTotal.innerHTML = '(' + taskList.children.length + ')'
    }

    function checkBoxInputHandler (event) {
        deleteButton.disabled = false
        deleteButton.addEventListener('click', dropLiElement)
    }

    function dropLiElement (event) {
        const checkedItems = taskList.querySelectorAll('input:checked')
        checkedItems.forEach(item => item.parentNode.remove())
        deleteButton.disabled = true
    }
    // pform.addEventListener('submit', treatment)
}, false)

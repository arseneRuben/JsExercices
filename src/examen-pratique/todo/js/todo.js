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
        if (!(event.target.value.trim().length === 0)) {
            addButton.disabled = false
        } else {
            addButton.disabled = true
        }
    }

    addButton.addEventListener('click', onSubmitHandler)

    function onSubmitHandler (event) {
        if (!(event.target.value.trim().length === 0)) {
            const liElement = document.createElement('li')
            const checkBoxElement = document.createElement('input')
            checkBoxElement.setAttribute('type', 'checkbox')
            checkBoxElement.setAttribute('name', name)
            checkBoxElement.setAttribute('id', taskInput.value.trim())
            checkBoxElement.setAttribute('value', taskInput.value.trim())
            const labelElement = document.createElement('label')
            labelElement.setAttribute('for', taskInput.value.trim())
            liElement.addEventListener('click', checkBoxInputHandler)

            liElement.appendChild(checkBoxElement)
            labelElement.appendChild(document.createTextNode(taskInput.value.trim()))

            liElement.appendChild(labelElement)
            taskList.appendChild(liElement)
            taskInput.value = null
            addButton.disabled = true
            taskTotal.innerHTML = '(' + taskList.children.length + ')'
        }
    }

    function checkBoxInputHandler (event) {
        if (event.target.tagName === 'INPUT') {
            event.target.nextSibling.classList.toggle('strike-task')
            deleteButton.addEventListener('click', dropLiElement)
            const checkedItems = taskList.querySelectorAll('input:checked')

            if (checkedItems.length === 0) {
                deleteButton.disabled = true
                taskInput.setSelectionRange(0, 0)
                taskInput.focus()
            } else {
                deleteButton.disabled = false
            }
        }
    }

    function dropLiElement (event) {
        const checkedItems = taskList.querySelectorAll('input:checked')

        checkedItems.forEach(item => item.parentNode.remove())
        deleteButton.disabled = true
        taskTotal.innerHTML = '(' + taskList.children.length + ')'
    }
    // pform.addEventListener('submit', treatment)
}, false)

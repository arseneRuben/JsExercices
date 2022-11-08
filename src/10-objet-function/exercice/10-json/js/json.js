'use strict'

window.addEventListener('DOMContentLoaded', function loaded (event) {
    window.removeEventListener('DOMContentLoaded', loaded, false)

    const firstName = document.getElementById('firstName')
    const lastName = document.getElementById('lastName')
    const old = document.getElementById('age')

    const output = document.getElementById('output')
    const form = document.getElementsByTagName('form')[0]
    form.addEventListener('submit', treatment)

    function treatment (event) {
        event.preventDefault()
        const user = {
            firstname: firstName.value,
            lastname: lastName.value,
            age: old.value
        }
        output.innerHTML = JSON.stringify(user, null, '  ')
    }
}, false)

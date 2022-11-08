'use strict'

window.addEventListener('DOMContentLoaded', function loaded (event) {
    window.removeEventListener('DOMContentLoaded', loaded, false)

    const firstName = document.getElementById('firstName')
    const lastName = document.getElementById('lastName')
    const old = document.getElementById('age')

    const output = document.getElementById('output')
    const form = document.getElementsByTagName('form')[0]
    form.addEventListener('submit', treatment)

    /**
     * processing of values submitted via the form
     * @param {*} event
     */
    function treatment (event) {
        event.preventDefault()
        // form values
        const user = {
            firstname: firstName.value,
            lastname: lastName.value,
            age: old.value
        }
        // Show JSON object in pre tag
        output.innerHTML = JSON.stringify(user, null, '  ')
    }
}, false)

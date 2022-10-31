'use strict'

function readForm () {
    const output = document.getElementById('output')
    // Retrive the input values
    const lastName = document.getElementById('lastName').value
    const firstName = document.getElementById('firstName').value
    // Create the p-elements
    const pLastName = document.createElement('p')
    pLastName.innerHTML = lastName
    const pFirstName = document.createElement('p')
    pFirstName.innerHTML = firstName
    // Add the p-elelemts in the output tag
    output.appendChild(pLastName)
    output.appendChild(pFirstName)
}

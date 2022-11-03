'use strict'

const PRODUCT_NUMBER_REQUIRED = 'Le numéro du produit est un champ obligatoire'
const PRODUCT_NUMBER_LENGTH = 'Le numéro de produit doit être constitué de 5 caractères maximum'
const PRODUCT_PRICE_REQUIRED = 'Le prix du produit est un champ obligatoire'

const form = document.getElementsByTagName('form')[0]
const validationMessages = document.getElementById('validation_message')

form.addEventListener('submit', (event) => {
    freeErrorMessage()
    const numberErrors = validateNumber(); const priceErrors = validatePrice()
    if (numberErrors.length > 0 || priceErrors.length > 0) {
        if (numberErrors.length > 0) {
            numberErrors.forEach(error => {
                const liElement = document.createElement('li')
                const liText = document.createTextNode(error)
                liElement.appendChild(liText)
                validationMessages.appendChild(liElement)
            })
        }
        if (priceErrors.length > 0) {
            priceErrors.forEach(error => {
                const liElement = document.createElement('li')
                const liText = document.createTextNode(error)
                liElement.appendChild(liText)
                validationMessages.appendChild(liElement)
            })
        }
    } else {
        event.preventDefault()
        alert('Sounission du formulaire')
    }
})

/**
 * Deletes any messages that may be present in the list
 */
function freeErrorMessage () {
    while (validationMessages.firstChild) {
        validationMessages.removeChild(validationMessages.firstChild)
    }
}

function validateNumber () {
    const liElements = []
    const submitedNumber = document.getElementById('productNumber').value

    // ajouter la validation nécessaire pour créer la collection de LI contenant les messages
    if (submitedNumber.length === 0) {
        liElements.push(PRODUCT_NUMBER_REQUIRED)
    }
    if (submitedNumber.length > 5) {
        liElements.push(PRODUCT_NUMBER_LENGTH)
    }
    return liElements
}

function validatePrice () {
    const liElements = []
    const productPrice = document.getElementById('productPrice').value
    // ajouter la validation nécessaire pour créer la collection de LI contenant les messages
    if (productPrice.length === 0) {
        liElements.push(PRODUCT_PRICE_REQUIRED)
    }
    return liElements
}

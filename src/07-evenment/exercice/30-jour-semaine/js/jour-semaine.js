'use strict'

const JOURS_FR = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
const JOURS_EN = ['Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday', 'Sunday']

window.addEventListener('DOMContentLoaded', function loaded (event) {
    window.removeEventListener('DOMContentLoaded', loaded, false)

    const checkBoxElement = document.getElementById('language')

    function changeLanguage (event, jours) {
        if (checkBoxElement.checked) {
            jours = JOURS_EN
        } else {
            jours = JOURS_FR
        }
    }

    const rangeElement = document.getElementById('dayNumber')

    let jours
    checkBoxElement.addEventListener('change', function (event) {
        changeLanguage(event, jours)
    })
    console.log(jours)
}, false)

'use strict'

const JOURS_FR = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
const JOURS_EN = ['Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday', 'Sunday']

window.addEventListener('DOMContentLoaded', function loaded (event) {
    window.removeEventListener('DOMContentLoaded', loaded, false)

    const checkBoxElement = document.getElementById('language')
    const dayNumber = document.getElementById('dayNumber')
    const dayLabel = document.querySelector('div>div:nth-child(2)')

    // By default
    let jours = JOURS_FR
    checkBoxElement.addEventListener('change', function (event) {
        changeLanguage(event)
    })

    function changeLanguage (event) {
        if (checkBoxElement.checked) {
            jours = JOURS_EN
        } else {
            jours = JOURS_FR
        }
    }

    dayNumber.addEventListener('mousemove', function (event) {
        changeDayLabel(event)
    })

    function changeDayLabel (event) {
        dayLabel.children[0].innerHTML = jours[event.target.value]
    }
}, false)

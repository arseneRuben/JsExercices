const countrySelect = document.getElementById('country_id')
const citySelect = document.getElementById('city_id')

// Build a option list of countries

Object.keys(COUNTRIES).forEach(country => {
    countrySelect.appendChild(updateComponent(country))
})

countrySelect.addEventListener('input', updateCitySelect)

/**
 * Build a option list of cities of a selected country
 * @param {*} component
 * @returns
 */
function updateCitySelect (event) {
    const country = event.target.value
    citySelect.innerHTML = null
    COUNTRIES[country].forEach(city => {
        citySelect.appendChild(updateComponent(city))
    })
}

citySelect.addEventListener('input', updateOutput)

/**
 * Build a option of a select  whether it is countries or cities
 * @param {*} component
 * @returns
 */

function updateComponent (component) {
    const optionElement = document.createElement('option')
    optionElement.value = component
    const textNode = document.createTextNode(component)
    optionElement.appendChild(textNode)
    return optionElement
}

/**
 * Update the div#output with the selected city
 * @param {} event
 */
function updateOutput (event) {
    const output = document.getElementById('output')
    output.innerHTML = event.target.value
}

const countrySelect = document.getElementById('country_id')
const citySelect = document.getElementById('city_id')

// Build a option list of countries

Object.keys(COUNTRIES).forEach(country => {
    countrySelect.appendChild(createOption(country))
})

countrySelect.addEventListener('input', updateCitySelect)

/**
 * Build a option list of cities of a selected country
 */
function updateCitySelect (event) {
    const country = event.target.value
    citySelect.innerHTML = null
    COUNTRIES[country].forEach(city => {
        citySelect.appendChild(createOption(city))
    })
}

citySelect.addEventListener('input', updateOutput)

/**
 * Build a option of a select  whether it is countries or cities
 * @param {*} content
 * @returns
 */

function createOption (content) {
    const optionElement = document.createElement('option')
    optionElement.value = content
    const textNode = document.createTextNode(content)
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

const countrySelect = document.getElementById('country_id')
const citySelect = document.getElementById('city_id')

Object.keys(COUNTRIES).forEach(country => {
    const optionElement = document.createElement('option')
    optionElement.value = country
    const textNode = document.createTextNode(country)
    optionElement.appendChild(textNode)
    countrySelect.appendChild(optionElement)
})

countrySelect.addEventListener('input', updateCitySelect)

function updateCitySelect (event) {
    const country = event.target.value
    citySelect.innerHTML = null
    COUNTRIES[country].forEach(city => {
        const optionElement = document.createElement('option')
        optionElement.value = city
        const textNode = document.createTextNode(city)
        optionElement.appendChild(textNode)
        citySelect.appendChild(optionElement)
    })
}
function updateComponent (component) {
    const optionElement = document.createElement('option')
    optionElement.value = component
    const textNode = document.createTextNode(component)
    optionElement.appendChild(textNode)
    citySelect.appendChild(optionElement)
}
citySelect.addEventListener('input', updateOutput)

function updateOutput (event) {
    const output = document.getElementById('output')
    output.innerHTML = event.target.value
}

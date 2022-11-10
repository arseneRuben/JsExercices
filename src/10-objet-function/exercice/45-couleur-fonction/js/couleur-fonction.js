
(function () {
    'use strict'

    const SPAN_WITDTH = '75px'
    function readRgbValues () {
        const red = document.getElementById('rgb_red').value
        const green = document.getElementById('rgb_green').value
        const blue = document.getElementById('rgb_blue').value
        return { red, green, blue }
    }

    function readHslValues () {
        const hue = document.getElementById('hsl_hue').value
        const saturation = document.getElementById('hsl_saturation').value
        const lightness = document.getElementById('hsl_lightness').value
        return { hue, saturation, lightness }
    }

    function setRgbBackgroundColors () {
        const rgbDisplay = document.getElementById('rgb_display')
        rgbDisplay.style.width = SPAN_WITDTH
        rgbDisplay.style.height = SPAN_WITDTH

        rgbDisplay.style.backgroundColor = 'rgb(' + readRgbValues().red + ',' + readRgbValues().green + ',' + readRgbValues().blue + ')'
    }
    function setHslBackgroundColors () {
        const hslDisplay = document.getElementById('hsl_display')
        hslDisplay.style.width = SPAN_WITDTH
        hslDisplay.style.height = SPAN_WITDTH
        hslDisplay.style.backgroundColor = 'hsl(' + readHslValues().hue + ',' + readHslValues().saturation + '%,' + readHslValues().lightness + '%)'
    }

    function printValue (event) {
        event.target.nextElementSibling.appendChild(document.createTextNode(event.target.value))
    }

    function onChange (event) {
        printValue(event)
        if (event.target.id === 'rgb_red' || event.target.id === 'rgb_green' || event.target.id === 'rgb_blue') {
            setRgbBackgroundColors()
        }
        if (event.target.id === 'hsl_hue' || event.target.id === 'hsl_saturation' || event.target.id === 'hsl_lightness') {
            setHslBackgroundColors()
        }
    }

    const inputs = Array.from(document.getElementsByTagName('input'))

    inputs.forEach(input => {
        input.addEventListener('change', function (event) {
            onChange(event)
        })
    })
})()


(function () {
    'use strict'

    const SPAN_WITDTH = '85px'
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
        const rgb = readRgbValues()
        rgbDisplay.style.width = SPAN_WITDTH
        rgbDisplay.style.height = SPAN_WITDTH

        rgbDisplay.style.backgroundColor = 'rgb(' + rgb.red + ',' + rgb.green + ',' + rgb.blue + ')'
    }
    function setHslBackgroundColors () {
        const hslDisplay = document.getElementById('hsl_display')
        const hsl = readHslValues()
        hslDisplay.style.width = SPAN_WITDTH
        hslDisplay.style.height = SPAN_WITDTH
        hslDisplay.style.backgroundColor = 'hsl(' + hsl.hue + ',' + hsl.saturation + '%,' + hsl.lightness + '%)'
    }

    function printValue (event) {
        event.target.nextElementSibling.innerHTML = ' ' + event.target.value
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
        input.addEventListener('input', function (event) {
            onChange(event)
        })
    })
})()

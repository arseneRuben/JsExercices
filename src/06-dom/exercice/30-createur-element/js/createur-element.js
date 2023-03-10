'use strict'
const output = document.getElementById('output')

function createWithInnerHTML () {
    const elementType = document.getElementById('elementType').value
    const elementContent = document.getElementById('elementContent').value

    output.innerHTML += '<' + elementType + ' class="inner-html">' + elementContent + '</' + elementType + '>'
}

function createWithCreateElement () {
    const elementType = document.getElementById('elementType').value
    const elementContent = document.getElementById('elementContent').value

    const element = document.createElement(elementType)
    element.classList.add('create-element')
    const textNode = document.createTextNode(elementContent)
    element.appendChild(textNode)
    output.appendChild(element)
}

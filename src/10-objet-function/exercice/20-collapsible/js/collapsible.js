'use strict'

function Collapsible (selector) {
    this.selector = selector
    //

    this.init = function (param) {
        param.classList.add(this.selector)
    }
}

const collapsibleH2 = new Collapsible('collapsible-h')
const collapsibleOpen = new Collapsible('collapsible-open')
const collapsibleClose = new Collapsible('collapsible-close')
const h2Elmts = document.getElementsByTagName('h2')

for (const element of h2Elmts) {
    // Addition of the collapsible-h CSS class on each of the headers
    collapsibleH2.init(element)
    // Addition of the collapsible-open or collapsible-close CSS class on each header when opening or closing
    element.addEventListener('click', onClickHandler)
}

function onClickHandler (event) {
    const state = true
    if (state) {
        collapsibleOpen.init(event.target)
    } else {
        collapsibleClose.init(event.target)
    }
}

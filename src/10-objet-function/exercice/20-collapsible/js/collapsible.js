
// eslint-disable-next-line no-unused-vars
const Collapsible = (function (newClass) {
    'use strict'

    function onClickOpenCloseHandler (event) {
        const contains = event.target.classList.contains('collapsible-open')

        event.target.classList.toggle('collapsible-open')
        event.target.classList.toggle('collapsible-close')

        if (contains) {
            event.target.nextElementSibling.style.display = 'none'
        } else {
            event.target.nextElementSibling.style.display = 'block'
        }
    }
    /**
     * Displays each collapsible div
     * @param {*} collapsible
     */
    function initCollapsible (collapsible) {
        collapsible.children[0].classList.add('collapsible-h', 'collapsible-open')
        collapsible.children[1].classList.add('collapsible-div')
        collapsible.children[0].addEventListener('click', onClickOpenCloseHandler)
    }

    return {
        init: function (param) {
            const collapsibles = document.getElementsByClassName(param.className)

            for (const element of collapsibles) {
                initCollapsible(element)
            }
        }
    }
})()

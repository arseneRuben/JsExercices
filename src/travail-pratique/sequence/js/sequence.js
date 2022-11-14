
const Sequence = (function () {
    'use strict'

    const privateProp = 'allo'

    function displayComponents (param) {
        console.log(param)
        // return privateProp + ' ' + param
    }

    return {
        init: function (param) {
            return displayComponents(param)
        }
    }
})()

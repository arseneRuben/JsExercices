'use strict'

function execute (operateur, a, b) {
    function add (a, b) {
        return a + b
    }
    function sub (a, b) {
        return a - b
    }

    function mul (a, b) {
        return a * b
    }
    let result
    if (typeof (operateur) === 'string') {
        switch (operateur) {
        case 'ADD':
            result = add(a, b)
            break
        case 'SUB':
            result = sub(a, b)
            break
        case 'MUL':
            result = mul(a, b)
            break
        default:
            result = "Nom de l'operation inconnu"
            break
        }
    } else if (typeof (operateur) === 'function') {
        result = operateur(a, b)
    } else {
        result = "Type de l'operation inconnu"
    }

    return result
}

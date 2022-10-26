'use strict'

function execute (op, a, b) {
    function add (a, b) {
        return a + b
    }
    function sub (a, b) {
        return a - b
    }

    function mul (a, b) {
        return a * b
    }

    switch (typeof op) {
    case 'string':
        switch (op) {
        case 'ADD':
            return add(a, b)
        case 'SUB':
            return sub(a, b)
        case 'MUL':
            return mul(a, b)
        default:
            return "Nom de l'operation inconnu"
        }

    case 'number':
        return "Type de l'operation inconnu"
    case 'function':
        return op(a, b)
    default:
        return "Nom de l'operation inconnu"
    }
}

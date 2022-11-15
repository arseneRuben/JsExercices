
const Level = {
    NORMAL: 'NORMAL',
    DIFFICULT: 'DIFFICULT'
}
const Sequence = (function () {
    'use strict'

    class Menu {
        constructor (param) {
            this.param = param
        }

        display () {
            // At the opening of the game
            const difficulty = document.getElementById(this.param.difficultyId)

            const btnStart = document.getElementById(this.param.startId)
            const btnStop = document.getElementById(this.param.stopId)
            //      The number of successful sequences for the current game is 0
            const total = document.getElementById(this.param.totalId)
            const totalPoint = 0
            total.innerHTML = '' + totalPoint
            //      The maximum number of sequences having been successful during one of the previous games is: Record 0
            const record = document.getElementById(this.param.recordId)
            const recordPoint = 0
            record.innerHTML = '' + recordPoint

            let round
            btnStart.addEventListener('click', function (event) {
                if (difficulty.value === '0') {
                    round = new Round(Level.NORMAL)
                } else {
                    round = new Round(Level.DIFFICULT)
                }
                round.start()
                // btnStop takes place of btnStart
                btnStart.style.display = 'none'
                btnStop.style.display = 'block'
            })

            btnStop.addEventListener('click', function (event) {
                round.stop()
                // btnStart returns to btnStop
                btnStart.style.display = 'block'
                btnStop.style.display = 'none'
            })
        }
    }
    class Step {
        constructor (label) {
            this.label = label
        }
    }

    class Sequence {
        constructor (values) {
            this.values = values
        }
    }

    class Round {
        constructor (level = Level.NORMAL) {
            this.level = level
        }

        setLevel (level = Level.NORMAL) {

        }

        start () {
            console.log('debut de round')
        }

        stop () {
            console.log('fin de round')
        }
    }

    function displayComponents (param) {
        const number1To4Id = document.getElementById(param.numbers.number1To4Id)
        const number5To8Id = document.getElementById(param.numbers.number5To8Id)
        const messageBlock = document.getElementById(param.status.messageId)
        // Default dispositions
        number5To8Id.style.display = 'none' // normal level
        messageBlock.innerHTML = param.status.messages.intro
        const menu = new Menu(param.menus)
        menu.display()
    }

    return {
        init: function (param) {
            return displayComponents(param)
        }
    }
})()

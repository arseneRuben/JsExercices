
const Sequence = (function () {
    'use strict'

    let number1To4Id
    let number5To8Id
    let messageBlock
    const SIZE = 4
    const SHOW_TIME = 500
    const levels = {
        NORMAL: 'NORMAL',
        DIFFICULT: 'DIFFICULT'
    }

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
                const sequence = new Sequence([])
                if (difficulty.value === '0') {
                    round = new Round(levels.NORMAL, sequence)
                } else {
                    round = new Round(levels.DIFFICULT, sequence)
                }
                round.playSequence()
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
        // we assume that the steps a collected in an array
        constructor (steps) {
            this.steps = steps
        }

        addStep (newStep) {
            this.steps.push(newStep)
        }
    }

    class Round {
        constructor (level = levels.NORMAL, sequence) {
            this.level = level
            this.sequence = sequence
        }

        goodNumberSeriesChildren (level) {
            return (this.level === levels.NORMAL) ? Array.from(number1To4Id.children) : Array.from(number1To4Id.children).concat(Array.from(number5To8Id.children))
        }

        extendSequence () {
            let max
            let newStep
            let times = 0
            // A revoire
            if (this.level === levels.NORMAL) {
                max = SIZE
            } else {
                max = SIZE * 2
            }
            console.log(SHOW_TIME)

            if (this.sequence.steps.length < max) {
                let result = false
                do {
                    newStep = Math.floor(Math.random() * max)
                    if (this.sequence.steps.indexOf(newStep) === -1) {
                        this.sequence.addStep(newStep)

                        result = true
                    }
                } while (!result)
            }
            times++
            if (times > SIZE) return 0
        }

        playSequence () {
            return setInterval(this.extendSequence(), SHOW_TIME)
        }

        setLevel (level = levels.NORMAL) {
            this.level = level
        }

        showStepts () {
            this.sequence.steps.forEach(step => {
                this.goodNumberSeriesChildren(this.level)[step].querySelector('div').style.backgroundColor = 'pink'
            })
        }

        stop () {
            console.log('fin de round')
        }
    }

    function displayComponents (param) {
        number1To4Id = document.getElementById(param.numbers.number1To4Id)
        number5To8Id = document.getElementById(param.numbers.number5To8Id)
        messageBlock = document.getElementById(param.status.messageId)
        // Default dispositions
        number5To8Id.style.display = 'none' // normal level
        messageBlock.innerHTML = param.status.messages.intro
        const menu = new Menu(param.menus)
        // menu.display()
        setInterval(console.log(menu), 40)
        // new Party
    }

    return {
        init: function (param) {
            return displayComponents(param)
        }
    }
})()

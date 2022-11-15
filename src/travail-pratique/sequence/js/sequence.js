
const Sequence = (function () {
    'use strict'

    let number1To4Id
    let number5To8Id
    let messageBlock
    const SIZE = 4
    const SHOW_TIME = 2000
    // Round's levels
    const levels = {
        NORMAL: 'NORMAL',
        DIFFICULT: 'DIFFICULT'
    }

    // Different possible states of the steps
    const stepStates = {
        CHOOSEN: 'CHOOSEN',
        SHOWED: 'SHOWED',
        WAITING: 'WAITING',
        COMPLETED: 'COMPLETED'
    }

    /**
     * Returns the correct list of number items according to the level, either the first 4 items (normal level) or all 8 (difficult level)
     */
    function goodNumberSeriesChildren (level) {
        let output = Array.from(number1To4Id.children)
        if (level === levels.NORMAL) {
            output = output.concat(Array.from(number5To8Id.children))
        }
        return output
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
        constructor (label, state) {
            this.label = label
            this.state = state
            if (state === stepStates.CHOOSEN) {
                this.show()
            }
        }

        show () {
            goodNumberSeriesChildren()[this.label].querySelector('div').style.backgroundColor = 'pink'
        }

        hide () {
            goodNumberSeriesChildren()[this.label].querySelector('div').style.backgroundColor = 'white'
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

        extendSequence () {
            let max
            let newStep
            let times = 0
            if (this.level === levels.NORMAL) {
                max = SIZE
            } else {
                max = SIZE * 2
            }
            if (this.sequence.steps.length < max) {
                // A revoire

                let result = false
                do {
                    newStep = new Step(Math.floor(Math.random() * max), stepStates.CHOOSEN)
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
            this.intervalId = setInterval(this.extendSequence.bind(this), SHOW_TIME)
        }

        setLevel (level = levels.NORMAL) {
            this.level = level
        }

        showStepts () {
            this.sequence.steps.forEach(step => {
                goodNumberSeriesChildren(this.level)[step].querySelector('div').style.backgroundColor = 'pink'
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
        menu.display()
        // setInterval(console.log(menu), 40)
        // new Party
    }

    return {
        init: function (param) {
            return displayComponents(param)
        }
    }
})()

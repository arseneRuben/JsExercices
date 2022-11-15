
const Sequence = (function () {
    'use strict'

    let number1To4Id
    let number5To8Id
    let messageBlock
    let difficulty

    const SIZE = 4
    const SHOW_TIME = 1000
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
        if (level === levels.DIFFICULT) {
            output = output.concat(Array.from(number5To8Id.children))
        }
        return output
    }

    function setNumberIdHandler () {
        console.log('display')
        if (difficulty.value === '1') {
            number5To8Id.style.display = 'block'
        }
    }

    class Menu {
        constructor (param) {
            this.param = param
        }

        display () {
            // At the opening of the game
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
            difficulty = document.getElementById(this.param.difficultyId)

            difficulty.addEventListener('change', setNumberIdHandler)

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

    /**
     * memory state of steps
     */
    class Step {
        constructor (label, state, level) {
            this.label = label
            this.state = state
            this.roundLevel = level
            this.show()
        }

        show () {
            // console.log(goodNumberSeriesChildren(this.roundLevel), this.label)
            goodNumberSeriesChildren(this.roundLevel)[this.label - 1].querySelector('div').style.backgroundColor = 'pink'
        }

        hide () {
            goodNumberSeriesChildren(this.roundLevel)[this.label - 1].querySelector('div').style.backgroundColor = 'white'
        }

        toString () {
            return `Step ${this.label}  ${this.state}   ${this.roundLevel} `
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
        #currentLabelList = []
        #max

        constructor (level = levels.NORMAL, sequence) {
            this.level = level
            this.sequence = sequence

            if (this.level === levels.NORMAL) {
                this.#max = SIZE
            } else {
                this.#max = SIZE * 2
            }
            for (let i = 1; i <= this.#max; i++) {
                this.#currentLabelList.push(i)
            }
        }

        extendSequence () {
            let newStep
            let newPosition

            let times = 0

            if (this.sequence.steps.length < this.#max) {
                // A revoire
                newPosition = Math.floor(Math.random() * (this.#max - this.sequence.steps.length))

                newStep = this.#currentLabelList[newPosition]
                // console.log(newStep)
                this.#currentLabelList.splice(newPosition, 1)
                // console.log(this.#currentLabelList)
                this.sequence.addStep(new Step(newStep, stepStates.CHOOSEN, this.level))
            }
            times++
            if (times > SIZE * 2) return 0
        }

        playSequence () {
            this.intervalId = setInterval(this.extendSequence.bind(this), SHOW_TIME)
        }

        setLevel (level = levels.NORMAL) {
            this.level = level
        }

        showStepts () {
            this.sequence.steps.forEach(step => {
                goodNumberSeriesChildren(this.level)[step - 1].querySelector('div').style.backgroundColor = 'pink'
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

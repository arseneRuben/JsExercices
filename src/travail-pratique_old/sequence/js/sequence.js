
const Sequence = (function () {
    'use strict'

    let progressIntervalId
    let number1To4Id
    let number5To8Id
    let messageBlock
    let difficulty
    let times = 0
    let total
    let record
    let sequencePresentationMessage
    let yourTurnMessage
    let progress

    const progressIncrement = 6
    const SIZE = 4
    const STEP_SHOW_TIME = 2000
    const USER_TIME = 1000
    // Round's levels
    const levels = {
        NORMAL: 'NORMAL',
        DIFFICULT: 'DIFFICULT'
    }

    // Different possible states of the steps
    const stepStates = {
        NEW: 'NEW', // by the game
        CHOOSEN: 'CHOOSEN', // by user
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

    /**
     * new round
     */

    function newRound () {
        let round
        const sequence = new Sequence([])
        if (difficulty.value === '0') {
            round = new Round(levels.NORMAL, sequence)
        } else {
            round = new Round(levels.DIFFICULT, sequence)
        }
        return round
    }
    /**
     * adds the second list of numbers in case of difficult level
     */
    function setNumberIdHandler () {
        if (difficulty.value === '1') {
            number5To8Id.style.display = 'block'
        }
    }

    /**
     * changes the progress bar
     */
    function runProgress () {
        clearInterval(progressIntervalId)
        progressIntervalId = setInterval(evolve, 1)

        function evolve () {
            if (progress.value === progress.max) {
                clearInterval(progressIntervalId)
            } else {
                progress.value += progressIncrement
            }
        }
    }
    /**
     *Menu Class
     */
    class Menu {
        constructor (param) {
            this.param = param
        }

        display () {
            // At the opening of the game
            const btnStart = document.getElementById(this.param.startId)
            const btnStop = document.getElementById(this.param.stopId)

            //      The number of successful sequences for the current game is 0
            total = document.getElementById(this.param.totalId)
            const totalPoint = 0
            total.innerHTML = '' + totalPoint
            //      The maximum number of sequences having been successful during one of the previous games is: Record 0
            record = document.getElementById(this.param.recordId)
            const recordPoint = 0
            record.innerHTML = '' + recordPoint

            let round
            difficulty = document.getElementById(this.param.difficultyId)

            difficulty.addEventListener('change', setNumberIdHandler)

            btnStart.addEventListener('click', function (event) {
                round = newRound()
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

        static updateStatistic (total, record) {
        }
    }

    /**
     * memory state of steps
     */
    class Step {
        constructor (label, state = stepStates.NEW, level) {
            this.label = label
            this.state = state
            this.roundLevel = level
            this.show()
        }

        show () {
            this.getDivCell().style.backgroundColor = 'pink'
        }

        hide () {
            this.getDivCell().style.backgroundColor = 'white'
        }

        select () {
            this.getDivCell().style.backgroundColor = 'aqua'
        }

        // Returns the reference to the div cell that this state represents
        getDivCell () {
            return goodNumberSeriesChildren(this.roundLevel)[this.label - 1].querySelector('div')
        }

        toString () {
            return `Step ${this.label}  ${this.state}   ${this.roundLevel} `
        }

        setState (state) {
            if (state === stepStates.WAITING) {
                this.hide()
            }

            if (state === stepStates.COMPLETED) {
                this.select()
            }

            if (state === stepStates.CHOOSEN) { // by user
                this.show()
            }
        }
    }
    /**
     * memory state of Sequence
     */
    class Sequence {
        // we assume that the steps a collected in an array
        constructor (steps, pendingStepIndex = 0) {
            this.steps = steps
            this.pendingStepIndex = pendingStepIndex
        }

        addStep (newStep) {
            this.steps.push(newStep)
        }

        clearSteps () {
            this.steps.forEach(step => step.setState(stepStates.WAITING))
            this.clearSteps = 0
        }

        resetSteps () {
            this.steps.forEach(step => {
                step.setState(stepStates.NEW)
            })
        }
    }

    /**
     * memory state of Round
     */
    class Round {
        // for automatic selection of new steps
        #currentLabelList = []
        #maxSize

        constructor (level = levels.NORMAL, sequence) {
            this.level = level
            this.sequence = sequence

            // Sets the maximum number of stes depending on the difficulty level of the round
            function maxSize (round) {
                let output = SIZE
                if (round.level === levels.DIFFICULT) {
                    output = SIZE * 2
                }
                return output
            }

            // either 4 or 8 depending on the level
            this.#maxSize = maxSize(this)
            for (let i = 1; i <= this.#maxSize; i++) {
                this.#currentLabelList.push(i)
            }
        }

        nextPendingStepIndex () {
            if (this.sequence.pendingStepIndex < this.sequence.length) {
                this.sequence.pendingStepIndex++
            } else {
                this.sequence.pendingStepIndex = 0
            }
        }

        extendSequence () {
            let newStep
            let newPosition

            times++

            // Stop  and wait
            if (times > this.sequence.label) {
                this.intervalId = setTimeout(this.readSequence.bind(this), USER_TIME)
                times = 0
                return 0
            }
            if (this.sequence.steps.length < this.#maxSize) {
                newPosition = Math.floor(Math.random() * (this.sequence.length - this.sequence.steps.length))
                newStep = this.#currentLabelList[newPosition]
                this.#currentLabelList.splice(newPosition, 1)
                this.sequence.addStep(new Step(newStep, stepStates.CHOOSEN, this.level))
            }

            // recursif call
        }

        nextStepOnClickHandler (event) {
            console.log(event.target)
            /*  if (this.checkStep(step)) {
                currentRound.nextPendingStepIndex()
                console.log(currentRound.sequence.pendingStepIndex, currentRound.#maxStep)
                step.setState(stepStates.COMPLETED)
                if (currentRound.sequence.pendingStepIndex === currentRound.#maxStep) {
                    currentRound.nextPendingStepIndex()
                    currentRound.extendSequence()
                }
            } else {
                alert('echec')
            } */
        }

        playSequence () {
            // Firstly add a maxStep of sequences
            this.extendSequence()
            const round = this
            // console.log(round.sequence)
            setTimeout(function () {
                round.sequence.steps.forEach(step => {
                    step.setState(stepStates.WAITING)
                    step.getDivCell().addEventListener('click', round.nextStepOnClickHandler)
                })
            }, STEP_SHOW_TIME)
            setTimeout(runProgress, STEP_SHOW_TIME)
            // The following message is displayed during the presentation of a random sequence: Presentation of the sequence
            messageBlock.innerHTML = sequencePresentationMessage
        }

        setLevel (level = levels.NORMAL) {
            this.level = level
        }

        showStepts () {
            this.sequence.steps.forEach(step => {
                step.show()
            })
        }

        stop () {
            this.sequence.clearSteps()
        }

        // Check if the step chosen by the player is in its correct position in the sequence
        checkStep (step) {
            return this.sequence.steps.indexOf(step) === this.sequence.pendingStepIndex
        }

        readSequence () {
            const currentRound = this

            // The following message is displayed when the sequence presentation ends: Your turn to play the sequence
            messageBlock.innerHTML = yourTurnMessage
        }
    }
    3
    return {
        init: function (param) {
            number1To4Id = document.getElementById(param.numbers.number1To4Id)
            number5To8Id = document.getElementById(param.numbers.number5To8Id)
            messageBlock = document.getElementById(param.status.messageId)
            progress = document.getElementById(param.status.timeoutId)
            // Default dispositions
            number5To8Id.style.display = 'none' // normal level
            messageBlock.innerHTML = param.status.messages.intro
            sequencePresentationMessage = param.status.messages.playFirst
            yourTurnMessage = param.status.messages.read
            const menu = new Menu(param.menus)
            menu.display()
        }
    }
})()

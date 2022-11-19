
const Sequence = (function () {
    'use strict'

    // Round's levels
    const levels = {
        NORMAL: '0',
        DIFFICULT: '1'
    }

    // Different possible states of the steps
    const stepStates = {
        NEW: 'NEW', // by the game
        CHOOSEN: 'CHOOSEN', // by user
        WAITING: 'WAITING',
        COMPLETED: 'COMPLETED'
    }

    let menu
    let status
    let numbers
    const sequence = []

    const showStepsUnitTime = 1000
    let showingStepsInterval
    let currentStepIndex = 0
    let storageIndex = 0
    let verificationStepIndex = 0 // helps to check if the choice of the player is well sequenced

    function generate (maxSize = 4) {
        const selectedIndex = Math.floor(Math.random() * maxSize)
        sequence.push(new Step(selectedIndex, menu.getLevel(), storageIndex++))

        return sequence
    }

    function round () {
        status.setProgressValue(0)
        let size = 4
        verificationStepIndex = 0

        if (menu.getLevel() === levels.DIFFICULT) {
            size = 8
        }

        generate(size)
        showSequence()
        //  setTimeout(status.runProgress.bind(status), showStepsUnitTime * sequence.length)
        setTimeout(function () {
            status.runProgress(showStepsUnitTime)
        }, showStepsUnitTime * sequence.length)
    }

    function showSteps () {
        if (currentStepIndex === sequence.length) {
            clearInterval(showingStepsInterval)
            setTimeout(hideSequence, showStepsUnitTime * sequence.length)
            return 0
        }
        sequence[currentStepIndex].setState(stepStates.CHOOSEN)

        currentStepIndex++
    }

    function hideSequence () {
        sequence.forEach(step => step.setState(stepStates.WAITING))
    }

    function showSequence () {
        currentStepIndex = 0

        showingStepsInterval = setInterval(showSteps, showStepsUnitTime)

        //
        //  readSequence()
    }

    function readSequence (maxSize = 4) {
        let current = 0// indice du step en cours
        const selectedIndex = Math.floor(Math.random() * maxSize) // index que choisi le joueur
        console.log(current, sequence)
        while (selectedIndex === sequence[current].getLabel()) {
            current++
            if (current >= sequence.length) {
                generate()
            }
        }
        if (current === 0) {
            return false
        }
    }

    // checks if the analyze step is at the good check position in the player's click sequence
    function checkStep (step) {
        return sequence.indexOf(step) === verificationStepIndex
    }

    function resetSteps () {
        sequence.forEach(step => {
            step.setState(stepStates.NEW)
        })
    }

    /**
     * memory state of steps
     */
    class Step {
        constructor (label, level, index, state = stepStates.NEW) {
            this.label = label
            this.state = state
            this.roundLevel = level
            this.index = index // storage index in the sequence table (different from the label)
            // this.show()
        }

        getLabel () {
            return this.label
        }

        getIndex () {
            return this.index
        }

        getState () {
            return this.state
        }

        getLevel () {
            return this.length
        }

        show () {
            this.getDivCell().style.backgroundColor = 'pink'
            this.getDivCell().setAttribute('data-index', this.index)// storage index
        }

        hide () {
            this.getDivCell().style.backgroundColor = 'white'
        }

        select () {
            this.getDivCell().style.backgroundColor = 'aqua'
        }

        // Returns the reference to the div cell that this state represents
        getDivCell () {
            return Numbers.goodNumberSeriesChildren(this.roundLevel)[this.label].querySelector('div')
        }

        toString () {
            return `Step ${this.label}  ${this.state}   ${this.roundLevel} `
        }

        setState (state) {
            if (state === stepStates.WAITING) {
                this.hide()
                this.getDivCell().addEventListener('click', onClickHandler)
            }
            if (state === stepStates.NEW) {
                this.hide()
            }

            if (state === stepStates.COMPLETED) {
                this.select()
            }

            if (state === stepStates.CHOOSEN) { // by user
                this.show()
            }
            function onClickHandler (event) {
                const step = sequence[event.target.getAttribute('data-index')]
                step.setState(stepStates.COMPLETED)
                if (checkStep(step)) {
                    // round()
                    verificationStepIndex++
                    if (verificationStepIndex === sequence.length) {
                        round()
                    }
                }
            }
        }
    }

    class Status {
        constructor (param, presentationQuatumTime = 100) {
            this.progress = document.getElementById(param.timeoutId)

            this.messageBlock = document.getElementById(param.messageId)
            this.progressIntervalId = 0
            this.progressIncrement = 100
            this.readMessage = param.messages.read
            this.presentationQuatumTime = presentationQuatumTime
        }

        runProgress (time) {
            clearInterval(this.progressIntervalId)
            this.progressIntervalId = setInterval(evolve.bind(this), this.presentationQuatumTime)

            function evolve () {
                setTimeout(this.setMessage(this.readMessage), time * sequence.length)
                if (this.progress.value === this.progress.max) {
                    clearInterval(this.progressIntervalId)
                } else {
                    this.progress.value += this.progressIncrement
                }
            }
        }

        getPresentationQuatumTime () {
            return this.presentationQuatumTime
        }

        setPresentationQuatumTime (time) {
            this.presentationQuatumTime = time
        }

        setProgressValue (val) {
            this.progress.value = val
        }

        getProgress () {
            return this.progress
        }

        getMessageBlock () {
            return this.messageBlock
        }

        setMessage (message) {
            this.messageBlock.innerHTML = message
        }
    }

    class Menu {
        constructor (param) {
            this.btnStart = document.getElementById(param.startId)
            this.btnStop = document.getElementById(param.stopId)
            this.difficultyInput = document.getElementById(param.difficultyId)
            this.recordInput = document.getElementById(param.recordId)
            this.totalInput = document.getElementById(param.totalId)
        }

        getBtnStart () {
            return this.btnStart
        }

        getBtnStop () {
            return this.btnStop
        }

        getDifficultyInput () {
            return this.difficultyInput
        }

        getRecordInput () {
            return this.recordInput
        }

        getTotalInput () {
            return this.totalInput
        }

        getLevel () {
            return this.getDifficultyInput().value
        }

        setTotal (total) {
            this.totalInput.value = total
        }

        setRecord (record) {
            this.recordInput.value = record
        }
    }

    class Numbers {
        constructor (param) {
            this.number1To4Id = document.getElementById(param.number1To4Id)
            this.number5To8Id = document.getElementById(param.number5To8Id)
        }

        static goodNumberSeriesChildren (level) {
            let output = Array.from(numbers.number1To4Id.children)
            if (level === levels.DIFFICULT) {
                output = output.concat(Array.from(numbers.number5To8Id.children))
            }
            return output
        }

        setDifficultyLevel (level) {
            if (level === levels.DIFFICULT) {
                this.number5To8Id.style.display = 'block'
            } else {
                this.number5To8Id.style.display = 'none'
            }
        }
    }

    return {
        init: function (param) {
            const messageBlock = document.getElementById(param.status.messageId)
            // Default dispositions
            messageBlock.innerHTML = param.status.messages.intro
            menu = new Menu(param.menus)
            status = new Status(param.status)
            numbers = new Numbers(param.numbers)

            menu.getBtnStart().addEventListener('click', function (event) {
                round()
                // round.playSequence()
                // btnStop takes place of btnStart
                event.target.style.display = 'none'
                menu.getBtnStop().style.display = 'block'
                status.setMessage(param.status.messages.playFirst)
            })

            menu.getBtnStop().addEventListener('click', function (event) {
                // btnStart returns to btnStop
                menu.getBtnStart().style.display = 'block'
                event.target.style.display = 'none'
                status.setProgressValue(0)
            })

            menu.getDifficultyInput().addEventListener('change', function (event) {
                numbers.setDifficultyLevel(event.target.value)
            })
        }
    }
})()

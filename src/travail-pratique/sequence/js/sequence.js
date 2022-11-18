// Round's levels
const levels = {
    NORMAL: '0',
    DIFFICULT: '1'
}

const Sequence = (function () {
    'use strict'

    let menu
    let status
    let numbers
    const sequence = []
    const availaibleSteps = [1, 2, 3, 4]
    const quantum = 100

    function generate (maxSize = availaibleSteps.length) {
        if (availaibleSteps.length > 0) {
            const selectedIndex = Math.floor(Math.random() * (maxSize - sequence.length))
            sequence.push(availaibleSteps[selectedIndex])
            availaibleSteps.splice(selectedIndex, 1)
        }
        return sequence
    }

    function round () {
        generate()
        showSequence()
    }

    function showSequence () {
        console.log(sequence)
        readSequence()
    }

    function readSequence (maxSize = 4) {
        let current = 0
        const selectedIndex = Math.floor(Math.random() * maxSize)
        while (selectedIndex === sequence[current]) {
            current++
            if (current > sequence.length) {
                generate()
            }
        }
        if (current === 0) {
            return false
        }
    }

    class Status {
        constructor (param) {
            this.progress = document.getElementById(param.timeoutId)

            this.messageBlock = document.getElementById(param.messageId)
            this.progressIntervalId = 0
            this.progressIncrement = 100
            this.readMessage = param.messages.read
        }

        runProgress () {
            clearInterval(this.progressIntervalId)
            this.progressIntervalId = setInterval(evolve.bind(this), quantum)

            function evolve () {
                if (this.progress.value === this.progress.max) {
                    clearInterval(this.progressIntervalId)
                    this.setMessage(this.readMessage)
                } else {
                    this.progress.value += this.progressIncrement
                }
            }
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

        goodNumberSeriesChildren (level) {
            let output = Array.from(this.number1To4Id.children)
            if (level === levels.DIFFICULT) {
                output = output.concat(Array.from(this.number5To8Id.children))
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
                status.runProgress()
            })

            menu.getBtnStop().addEventListener('click', function (event) {
                // btnStart returns to btnStop
                menu.getBtnStart().style.display = 'block'
                event.target.style.display = 'none'
            })

            menu.getDifficultyInput().addEventListener('change', function (event) {
                numbers.setDifficultyLevel(event.target.value)
            })
        }
    }
})()

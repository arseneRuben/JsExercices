const FormBuilder = (function () {
    'use strict'

    class FieldBuilder {
        constructor (field) {
            this.id = field.id
            this.label = field.label
            this.type = field.type
            this.required = field.required
        }

        build () {
            const divElement = document.createElement('div')
            const labelElement = document.createElement('label')
            labelElement.classList.add('label-text')
            labelElement.for = this.id
            labelElement.innerHTML = this.label
            divElement.appendChild(labelElement)
            return divElement
        }
    }
    class InputFieldBuilder extends FieldBuilder {
        constructor (field) {
            super(field)
            this.maxlength = field.maxlength
            this.minlength = field.minlength
            this.min = field.min
            this.max = field.max
        }

        build () {
            const build = super.build()
            const inputElement = document.createElement('input')
            inputElement.type = this.type
            build.appendChild(inputElement)
            return build
        }
    }
    class TextAreaFieldBuilder extends FieldBuilder {
        constructor (field) {
            super(field)
            this.required = field.required
        }

        build () {
            const build = super.build()
            const inputElement = document.createElement('textarea')
            build.appendChild(inputElement)
            return build
        }
    }
    function displayElements (inputs, outputContainer) {
        const loginForm = document.getElementById(inputs.id)

        // Addition of the different form entries
        inputs.fields.forEach(field => {
            if (field.type === 'textarea') {
                loginForm.appendChild(new TextAreaFieldBuilder(field).build())
            } else {
                loginForm.appendChild(new InputFieldBuilder(field).build())
            }
        })

        // Addition of update button
        const update = document.createElement('button')
        const t = document.createTextNode('Update')
        update.appendChild(t)
        loginForm.appendChild(update)
    }

    return {
        init: function (FORM, container) {
            displayElements(FORM, container)
        }
    }
})()

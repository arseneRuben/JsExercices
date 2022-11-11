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
            build.querySelector('label').classList.add('label-text')
            const inputElement = document.createElement('input')
            inputElement.type = this.type
            build.appendChild(inputElement)
            // console.log(build)
            return build
        }
    }
    class TextAreaFieldBuilder extends FieldBuilder {
        constructor (field) {
            super(field)
            this.required = field.required
        }
    }
    function displayElements (inputs, outputContainer) {
        const userNameDiv = new InputFieldBuilder(inputs.fields[0])
        const passwordDiv = new InputFieldBuilder(inputs.fields[1])
        const container = document.getElementById(inputs.id)
        inputs.fields.forEach(field => {
            if (field.type === 'textarea') {
                container.appendChild(new TextAreaFieldBuilder(field).build())
            } else {
                container.appendChild(new InputFieldBuilder(field).build())
            }
        })
        //  container.appendChild(userNameDiv.build())
        // container.appendChild(passwordDiv.build())
    }

    return {
        init: function (FORM, container) {
            displayElements(FORM, container)
        }
    }
})()

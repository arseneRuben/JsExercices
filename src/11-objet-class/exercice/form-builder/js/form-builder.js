const FormBuilder = (function () {
    'use strict'

    class FieldBuilder {
        constructor (field) {
            this.field = field
        }

        build () {
            const divElement = this.createElement('div', [])
            const labelElement = this.createElement('label', [])
            labelElement.classList.add('label-text')
            labelElement.for = this.field.id
            labelElement.innerHTML = this.field.label
            divElement.appendChild(labelElement)
            return divElement
        }

        createElement (tagName, attributes) {
            const element = document.createElement(tagName)
            attributes.forEach(att => {
                const [key, value] = att
                console.log(key, value)
            })
            return element
        }

        createFieldElement (tagName, attributes) {
            const element = this.createElement(tagName, attributes)
            element.name = attributes.id
            return element
        }
    }

    class InputFieldBuilder extends FieldBuilder {
        build () {
            const build = super.build()
            const inputElement = super.createElment('input', [])
            build.appendChild(inputElement)
            return build
        }
    }

    class TextAreaFieldBuilder extends FieldBuilder {
        build () {
            const build = super.build()
            const textareaElement = super.createElement('textarea', [])
            build.appendChild(textareaElement)
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

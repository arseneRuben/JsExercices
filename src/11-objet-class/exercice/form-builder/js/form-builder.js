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
            const element = document.createElement(tagName, attributes)

            Object.keys(attributes).forEach(name => {
                element.setAttribute(name, attributes[name])
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
            const inputElement = super.createFieldElement('input', this.field)

            build.appendChild(inputElement)

            return build
        }
    }

    class TextAreaFieldBuilder extends FieldBuilder {
        build () {
            const build = super.build()
            const textareaElement = super.createElement('textarea', this.field)
            build.appendChild(textareaElement)
            return build
        }
    }

    function chooseElementType (field) {
        let output

        switch (field.type) {
        case 'text':
        case 'password':
        case 'date':
        case 'number':
            output = new InputFieldBuilder(field)
            break
        case 'textarea':
            output = new TextAreaFieldBuilder(field)
            break

        default:
            throw new Error('Unknown type')
        }

        return output
    }

    function displayElements (inputs, outputContainer) {
        const loginForm = document.getElementById(inputs.id)

        // Addition of the different form entries
        inputs.fields.forEach(field => {
            loginForm.appendChild(chooseElementType(field).build())
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

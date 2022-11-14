const FormBuilder = (function () {
    'use strict'

    class FieldBuilder {
        constructor (field) {
            this.field = field
        }

        build () {
            const divElement = this.createElement('div', [])
            const labelElement = this.createElement('label', [])
            labelElement.classList.add('label-' + this.field.type) // a revoire
            labelElement.setAttribute('for', this.field.id)
            labelElement.innerHTML = this.field.label
            divElement.appendChild(labelElement)

            return divElement
        }

        createElement (tagName, attributes) {
            const element = document.createElement(tagName, attributes)
            Object.keys(attributes).forEach(name => {
                if (name !== 'label') {
                    element.setAttribute(name, attributes[name])
                }
            })
            return element
        }

        createFieldElement (tagName, attributes) {
            const element = this.createElement(tagName, attributes)
            element.name = attributes.id

            return element
        }

        // cette classe parent a 3 methodes
    }

    class InputFieldBuilder extends FieldBuilder {
        // chaque classe field a sa methode build, qui construit de facon specifique l'input correspondant
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
            const textareaElement = super.createFieldElement('textarea', this.field)
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
            // si le type est un de ces cas, on choisi
            output = new InputFieldBuilder(field) // deux classe Javascript
            break
        case 'textarea':
            output = new TextAreaFieldBuilder(field)
            break
        default:
            throw new Error('Unknown type')
        }

        return output
    }

    /**
     * processing of values submitted via the form
     * @param {*} event
     */
    function treatment (event, param) {
        event.preventDefault()
        // Build an object with submited values comming from loginForm
        const userData = {}
        Array.from(event.target.children).forEach(field => {
            userData[(field.querySelector('input')?.id)] = field.querySelector('input')?.value
        })

        // Show JSON object in pre tag

        param.output.innerHTML = JSON.stringify(userData, null, '  ')
    }

    function displayElements (inputs, outputContainer) {
        const loginForm = document.getElementById(inputs.id)

        // Addition of the different form entries

        // pour chauqe champ du formulaire, je cree la section correspondante
        inputs.fields.forEach(field => {
            loginForm.appendChild(chooseElementType(field).build())
        })

        // Addition of update button
        const update = document.createElement('button')
        const t = document.createTextNode('Update')
        update.appendChild(t)
        loginForm.appendChild(update)
        loginForm.action = 'index.php'
        loginForm.addEventListener('submit', function (event) {
            treatment(event, { output: outputContainer, formId: inputs.id })
        })
    }

    return {
        init: function (FORM, container) {
            // il est donc question de creer ce formulaire et afficher
            displayElements(FORM, container)
        }
    }
})()

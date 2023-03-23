import {Modal} from "./modal.js"

import * as input from "./vars.js"

function IMC (weight, height) {
    return (weight / ((height /100) ** 2 )).toFixed(2)
}

function handleSubmit (event) {
    event.preventDefault()

    const weight = input.weight.value
    const height = input.height.value

    const result = IMC(weight,height)
    const message = `Seu IMC é de ${result}`
    Modal.message.innerText = message

    Modal.open()
    
}

input.form.onsubmit = handleSubmit



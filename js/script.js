import {Modal} from "./modal.js"
import { alertBox } from "./alert.js"
import * as input from "./vars.js"
import * as util from "./utils.js"

function handleSubmit (event) {
    event.preventDefault()

    const weight = input.weight.value
    const height = input.height.value

    const weightOrHeightIsNotANumber = util.notNumber(weight) || util.notNumber(height)

    if(weightOrHeightIsNotANumber){
        alertBox.open()
        return
    }

    alertBox.close()
    
    const result = util.IMC(weight,height)

    util.displayResultMessage(result)
}

input.form.oninput = () => alertBox.close()

input.form.onsubmit = handleSubmit



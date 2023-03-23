
const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")


const Modal = {
    wrapper:document.querySelector(".modalWrapper"),

    message:document.querySelector(".modalWrapper h2"),

    button:document.querySelector("#exitButton"),

    open() {
        this.wrapper.classList.add("open")
    },
    closed() {
        this.wrapper.classList.remove("open")
    }
}

function IMC (weight, height) {
    return (weight / ((height /100) ** 2 )).toFixed(2)
}


function handleSubmit (event) {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const result = IMC(weight,height)
    const message = `Seu IMC é de ${result}`
    Modal.message.innerText = message

    Modal.open()
    
}



Modal.button.onclick = () => {Modal.closed()}

form.onsubmit = handleSubmit



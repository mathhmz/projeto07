export const Modal = {
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

Modal.button.onclick = () => {Modal.closed()}

window.addEventListener("keydown", handleKeydown)

function handleKeydown(event) {
    if(event.key === "Escape"){
        Modal.closed()
    }
}
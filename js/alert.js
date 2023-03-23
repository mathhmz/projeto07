import * as input from "./vars.js"

export const  alertBox = {
    element: document.querySelector(".alertBox"),

    open(){
        alertBox.element.classList.add("open")
    },
    close(){
        alertBox.element.classList.remove("open")
    }

}


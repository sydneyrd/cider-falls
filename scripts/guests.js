import { getGuests } from "./database.js"
let guestList = getGuests()

// const services = getServices ()
export const guestHTML = () => {
    let guestHTMLString = ""
    for (const guest of guestList) {
        guestHTMLString += `<div class="serve" id="guest--${guest.id}">${guest.name}</div>`
    }
    return guestHTMLString 
}




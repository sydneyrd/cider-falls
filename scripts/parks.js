import { getParks } from "./database.js";
import { getParkServices } from "./database.js";
import { getServices } from "./database.js";
import { getGuests } from "./database.js";
// write  function that iterates through parks and displays them by name 
//  correlate services to park 
let guests = getGuests()
let parks = getParks()

export const parkListHTML = () => {
    
    let htmlString = `
    <section class="parks__list">
      ${parkCard()}
    </section>
    `
    return htmlString
}
const parkServices = getParkServices()
const Parks = getParks()
const parkCard = () => {
    let parkCardHTML = ``
    for ( const park of Parks) {
        let parkId = park.id
        parkCardHTML += `
        <div class="park-card">
            <h3 class="park-name" id="park--${park.id}">${park.name}</h3>
            <h4>Services</h4>
            <ul class="destination-card-service-list">
                ${serviceHTML(parkId)}
            </ul>
        </div>
        `
    }
    return parkCardHTML
    }




const services = getServices ()
  const serviceHTML = (parkId) => {
     let serviceHTMLString = ""
     for ( const parkService of parkServices) {
        if (parkId === parkService.parkId) {
            let serviceId = parkService.serviceId
            for (const service of services) {
                if (service.id === parkService.serviceId) {
                    serviceHTMLString += `<div id="service--${service.id}">${service.serviceType}</div>`
        }
             
        }
    }
}
return serviceHTMLString 
}


const guestCounter = (parkId) => {
    let guestList = 0
    for (const guest of guests) {
        if (parkId === guest.currentPark) {
            guestList++
        }
    } return guestList
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("park")) {
            const [,parkId] = itemClicked.id.split("--") 
            for (const park of parks) {
                if (park.id === parseInt(parkId)) {
                     let guestList = guestCounter(park.id)
                    window.alert(`There are currently ${guestList} guests visiting ${park.name}`)
                }
            }
        }
        
    }
)


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")
            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    const assignments = filterWalkerCitiesByWalker(walker)
                    const cities = assignedCityNames(assignments)
            
                    window.alert(`${walker.name} services ${cities}`)
                }
            }
        }
    }
)

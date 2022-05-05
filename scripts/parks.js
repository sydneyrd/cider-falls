import { getParks } from "./database.js";
import { getParkServices } from "./database.js";
import { getServices } from "./database.js";
// write  function that iterates through parks and displays them by name 
//  correlate services to park 

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
            <h3 class="park-name" id="park--${park.name}">${park.name}</h3>
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



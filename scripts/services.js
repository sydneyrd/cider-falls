import { getServices } from "./database.js";
import { getParkServices } from "./database.js";
// create function 
// parameter park 
// for service of services 
// if serviceid = parkService.serviceId ${service.name}
//  
const parkServices = getParkServices()
const services = getServices ()
 export const serviceHTML = () => {
for (const service of services) {
   let serviceHTMLString = ""
    for ( const parkService of parkServices) {
        if (service.id === parkService.serviceId) {
             serviceHTMLString += `<div>${service.serviceType}</div>`
        }
    }
    return serviceHTMLString
}
}


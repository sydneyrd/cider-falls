import { getParks } from "./database.js";
import { getParkServices } from "./database.js";
import { getServices } from "./database.js";
// write  function that iterates through parks and displays them by name 
//  correlate services to park 

export const parkList = () => {
    
    
}
const parkServices = getParkServices()
const parks = getParks()




const services = getServices ()
 export const serviceHTML = (parkId) => {
     let serviceHTMLString = ""
     for ( const parkService of parkServices) {
        if (parkId === parkService.parkId) {
            let serviceId = parkService.serviceId
            for (const service of services) {
                if (service.id === parkService.serviceId) {
                    serviceHTMLString += `<div>${service.serviceType}</div>`
        }
             
        }
    }
}
return serviceHTMLString 
}



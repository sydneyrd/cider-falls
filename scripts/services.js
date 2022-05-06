import { getServices } from "./database.js";
import { getParkServices } from "./database.js";
// create function 
// 
// let hmtl= "
// for service of services 
//  html+= <li>${service.name}</li
// 

const services = getServices()
export const servicesListHTML = () => {
    let serviceListHTMLString = '<section class=services>'
    for (const service of services) {
        serviceListHTMLString += `<div> ${service.serviceType}</div>`

    }
    serviceListHTMLString += '</section>'
    return serviceListHTMLString
}
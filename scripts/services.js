import { getServices } from "./database.js";
import { getParkServices } from "./database.js";
// create function 
// 
// let hmtl= "
// for service of services 
//  html+= <li>${service.name}</li
// 
const parkServices = getParkServices()
const services = getServices()
export const servicesListHTML = () => {
    let serviceListHTMLString = '<section class=services>'
    for (const service of services) {
        serviceListHTMLString += `<div class="services" id="service--${service.id}"> ${service.serviceType}</div>`

    }
    serviceListHTMLString += '</section>'
    return serviceListHTMLString
}
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("service")) {
            const [,serviceid] = itemClicked.id.split("--")
            for (const service of services) {
            if (service.id === parseInt(serviceid)) {
            let serviceArr = getServiceArray(service, parkServices)
            let popText = makeString(serviceArr)
            window.alert (`${service.serviceType} is available at ${popText}`)
            }
        }
    }
}

     
 )

//;hi hi hi //


const getServiceArray = (service, parkArray) => {
    let parkList = []
    for (const park of parkArray) {
       
        if (service.id === park.serviceId) {
            parkList.push(park)

        }
         
    }return parkList
}


const makeString = (parkListArr) => {
    let makeserviceString = ""
    if (parkListArr.length === 1) {
        makeserviceString += `${parkListArr[0].parkName}.`
    } else if (parkListArr.length === 2) {
        makeserviceString += `${parkListArr[0].parkName} and ${parkListArr[1].parkName}.`
    }
    else if (parkListArr.length === 3) {
        makeserviceString += `${parkListArr[0].parkName}, ${parkListArr[1].parkName}, and ${parkListArr[2].parkName}.`
    } else if (parkListArr.length === 4) {
        makeserviceString += `${parkListArr[0].parkName}, ${parkListArr[1].parkName}, ${parkListArr[2].parkName}, ${parkListArr[3].parkName}.`
    } else if (parkListArr.length === 5) {
        makeserviceString += `${parkListArr[0].parkName}, ${parkListArr[1].parkName}, ${parkListArr[2].parkName}, ${parkListArr[3].parkName}, and ${parkListArr[4].parkName}.}`
    }
    return makeserviceString
}




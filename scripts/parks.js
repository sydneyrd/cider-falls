import { getParks } from "./database.js";
import { getParkServices } from "./database.js";

// write  function that iterates through parks and displays them by name 
//  correlate services to park 

export const parkList = () => {
    const parks = getParks()
    const parkServices = getParkServices()


}


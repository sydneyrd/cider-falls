const database = {
    guests: [
        {
            id: 1,
            name: "Connor Lopshire",
            currentPark: 1,
        },
        {
            id: 2,
            name: "Wes Harllee",
            currentPark: 3,
        },
        {
            id: 3,
            name: "Mary Stevens",
            currentPark: 2,
        },
        {
            id: 4,
            name: "Smokey the Bear",
            currentPark: 2,
        },
        {
            id: 5,
            name: "JFK",
            currentPark: 4,
        },
        {
            id: 6,
            name: "BTK",
            currentPark: 5,
        }
    ],

    parks: [
        {
            id: 1,
            name: "Chamfort River",
        },
        {
            id: 2,
            name: "Lost Wolf Hiking Trail",
        },
        {
            id: 3,
            name: "The Lodge",
        },
        {
            id: 4,
            name: "Gander River",
        },
        {
            id: 5,
            name: "Campgrounds",
        },
        {
            id: 6,
            name: "Pine Bluffs Trail"
        }
    ],

    services: [
        {
            id: 1,
            serviceType: "Rafting",
        },
        {
            id: 2,
            serviceType: "Canoeing",
        },
        {
            id: 3,
            serviceType: "Fishing",
        },
        {
            id: 4,
            serviceType: "Hiking",
        },
        {
            id: 5,
            serviceType: "Picnicking",
        },
        {
            id: 6,
            serviceType: "Rock Climbing",
        },
        {
            id: 7,
            serviceType: "Lodging",
        },
        {
            id: 8,
            serviceType: "Parking",
        },
        {
            id: 9,
            serviceType: "Information",
        },
        {
            id: 10,
            serviceType: "Zip-Lining",
        },
    ],
    parkServices: [
        {
            id: 1,
            serviceId: 1,
            parkId: 1,
            parkName: "Chamfort River",
        },
        {
            id: 2,
            serviceId: 2,
            parkId: 1,
            parkName: "Chamfort River",
        },{
            id: 3,
            serviceId: 3,
            parkId: 1,
            parkName: "Chamfort River",
        },{
            id: 4,
            serviceId: 4,
            parkId: 2,
            parkName: "Lost Wolf Hiking Trail",
        },{
            id: 5,
            serviceId: 5,
            parkId: 2,
            parkName: "Lost Wolf Hiking Trail",
        },{
            id: 6,
            serviceId: 6,
            parkId: 2,
            parkName: "Lost Wolf Hiking Trail",
        },{
            id: 7,
            serviceId: 7,
            parkId: 3,
            parkName: "The Lodge",
        },{
            id: 8,
            serviceId: 8,
            parkId: 3,
            parkName: "The Lodge",
        },{
            id: 9,
            serviceId: 9,
            parkId: 3,
            parkName: "The Lodge",
        },{
            id: 10,
            serviceId: 5,
            parkId: 3,
            parkName: "The Lodge",
        },{
            id: 11,
            serviceId: 3,
            parkId: 4,
            parkName: "Gander River",
        },{
            id: 12,
            serviceId: 4,
            parkId: 4,
            parkName: "Gander River",
        },{
            id: 13,
            serviceId: 9,
            parkId: 5,
            parkName: "Campgrounds",
        },{
            id: 14,
            serviceId: 7,
            parkId: 5,
            parkName: "Campgrounds",
        },{
            id: 15,
            serviceId: 8,
            parkId: 5,
            parkName: "Campgrounds",
        },{
            id: 16,
            serviceId: 4,
            parkId: 6,
            parkName: "Pine Bluffs Trail",
           
        },{
            id: 17,
            serviceId: 5,
            parkId: 6,
            parkName: "Pine Bluffs Trail",
        },{
            id: 18,
            serviceId: 10,
            parkId: 6,
            parkName: "Pine Bluffs Trail",
        }

    ]
}

export const getGuests = () => {
    return database.guests.map(guest => ({ ...guest }))
}

export const getParks = () => {
    return database.parks.map(park => ({ ...park }))
}

export const getServices = () => {
    return database.services.map(service => ({ ...service }))
}

export const getParkServices = () => {
    return database.parkServices.map(parkService => ({ ...parkService }))
}
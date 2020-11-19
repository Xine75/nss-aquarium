// Creating a fishObject Array

const fishCollection = [
    {
        name : "Birdie",
        species : "goldfish",
        length : 4,
        location : "neighbor's backyard pond",
        food : "flies",
        image : "goldfish.png"
    },

    {
        name : "Dolours",
        species : "Irish Eel",
        length : 21,
        location : "Irish Sea",
        food : "insect larvae",
        image : "IrishEel.png"

    },

    {
        name : "Bart",
        species : "Japanese fighting fish",
        length : 5,
        location : "Sea of Japan",
        food : "crustaceans",
        image : "bart.png"

    }

]

export const useFish = () => {
    return fishCollection.slice()
}

// // Ch 15 - Filtering Out Holy and Soldier fish
// Separate the fish by type; (here)
// List fish by type; (fishList)
// 1 Holy fish
// 2 soldiers
// 3 regularFish







export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of fishCollection) {
        if (fish.length % 3 === 0){
            holyFish.push(fish)
        }
    }

    return holyFish
}

export const soldierFish = () => {
    const soldiers = []
    // 5, 10, 15, 20, 25, etc... fish
    for (const fish of fishCollection){
        if (fish.length % 5 === 0  && fish.length % 3 !== 3) {
            soldiers.push(fish)
        }
    }
    return soldiers
}

export const nonHolyFish = () => {
    const regularFish = []
    // Any fish not a multiple of 3 or 5
    for (const fish of fishCollection) {
        if (fish.length % 5 !== 0 && fish.length % 3 !== 0){
            regularFish.push(fish)
        }
    }
    return regularFish
}
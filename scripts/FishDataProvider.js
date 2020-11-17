
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
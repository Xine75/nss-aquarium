const locationCollection = [
    {
        name: "Great Barrier Reef",
        description: "One of Australia’s most remarkable natural gifts, the Great Barrier Reef is blessed with the breathtaking beauty of the world’s largest coral reef. The reef contains an abundance of marine life and comprises of over 3000 individual reef systems and coral cays and literally hundreds of picturesque tropical islands with some of the worlds most beautiful sun-soaked, golden beaches.",
        url: "https://greatbarrierreef.org/",
        urlName: "Great Barrier Reef",
        image: "greatbarrierreef.png",
    },

    {
        name: "Irish Sea",
        description: "The Irish Sea runs between the island of Ireland and that of the rest of the UK, and contains 12 smaller islands.  Though it is primarily a shipping channel, it is a great spot for harvesting fish!",
        url: "https://en.wikipedia.org/wiki/Irish_Sea",
        urlName: "Irish Sea",
        image: "IrishSea.png",
    },

   
]

export const useLocation = () => {
    return locationCollection.slice()
}
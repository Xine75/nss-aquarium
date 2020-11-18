
const quoteCollection = [
    {
        text: "Just Keep Swimming!",
        author: "Dory",
    },

    {
        text: "Many men go fishing all their lives without knowing that it is not fish they are after.",
        author: "Henry David Thoreau",
    },

    {
        text: "The sea, once it casts its spell, holds one in its net of wonder forever.",
        author: "Jacques Cousteau",
    }
]

export const useQuote = () => {
    return quoteCollection.slice()
}
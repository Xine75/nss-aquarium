

const tipCollection = [
    {
        text: "For the first few months of your saltwater aquarium, you will need to keep a <strong>strict water change schedule</strong>. When you first set up a tank and get it cycled, it will take some time for all your trophic levels to balance out. This is the balance between the new fish you just added, any invertebrates, such as corals or shrimp, and your biological filtration. Once your tank is fully cycled, you may still have a few hiccups over the first 6-8 months. Regular water changes will help keep these from becoming a bigger problem later. This is especially true if you plan to keep adding live elements."
    },  

    {
        text: "If you can't harvest natural salt water from the sea, be sure to use a good product to create a healthy environment for your fish."
    }, 

    {
        text: "Keep your water temperature nice and cozy, between 75-80 degrees Fahrenheit."
    }
]

export const useTip = () => {
    return tipCollection.slice()
}
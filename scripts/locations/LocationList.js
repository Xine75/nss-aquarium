import { useLocation } from "./LocationDataProvider.js"
import { Location } from "./Location.js"

export const LocationList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".container--left")
    const allTheLocations = useLocation()

      // Generate all of the HTML for all of the fish
      let quoteHTMLRepresentations = ""
      for (const locationObject of allTheLocations) {
          console.log("one location!", locationObject)
          const locationHTMLRepresentations = Location(locationObject)
          
        contentElement.innerHTML += locationHTMLRepresentations
      }
    }
/**
 *  FishList which renders individual fish objects as HTML
 */



import { useFish } from "./FishDataProvider.js"
import { Fish } from "./Fish.js"

export const FishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".container--left")
    const allTheFish = useFish()

      // Generate all of the HTML for all of the fish
      let fishHTMLRepresentations = ""
      for (const fishObject of allTheFish) {
          console.log("one fish!", fishObject)
          const fishHTMLRepresentations = Fish(fishObject)
          
        contentElement.innerHTML += fishHTMLRepresentations
}
}
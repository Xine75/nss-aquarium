import { useTip } from "./TipDataProvider.js"
import { Tip } from "./Tip.js"

export const TipList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".container--right")
    const allTheTips = useTip()

      // Generate all of the HTML for all of the fish
      let tipHTMLRepresentations = ""
      for (const tipObject of allTheTips) {
          console.log("one tip!", tipObject)
          const tipHTMLRepresentations = Tip(tipObject)
          
        contentElement.innerHTML += tipHTMLRepresentations
      }
    }
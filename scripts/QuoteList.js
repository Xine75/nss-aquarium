
import { useQuote } from "./QuoteDataProvider.js"
import { Quote } from "./Quote.js"

export const QuoteList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".container--left")
    const allTheQuotes = useQuote()

      // Generate all of the HTML for all of the fish
      let quoteHTMLRepresentations = ""
      for (const quoteObject of allTheQuotes) {
          console.log("one quote!", quoteObject)
          const quoteHTMLRepresentations = Quote(quoteObject)
          
        contentElement.innerHTML += quoteHTMLRepresentations
      }
    }
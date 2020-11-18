/**
 *  Fish which renders individual tip objects as HTML
 */

export const Tip = (tip) => {
    return `
        <section class="tip card">
            <ul>
            <li>
        <div class="tip__text">${tip.text}</div>
             </li>
         
        </ul> 
           
          
        </section>
    `
}
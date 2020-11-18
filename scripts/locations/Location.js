/**
 *  Fish which renders individual fish objects as HTML
 */

export const Location = (location) => {
    return `
        <section class="location card">

            <div><img  class="location__image image--card" src="images/${location.image}" /></div>
            <div class="location__name"><a href =${location.url}>${location.name}</a></div>
            <div class="location__description">${location.description}</div>
           
           
          
        </section>
    `
}
// import { serviceHTML } from "./services.js";
import { parkListHTML } from "./parks.js";
import { guestHTML } from "./guests.js";
import { header } from "./header.js";
import { footer } from "./footer.js";



const applicationHTMLString = //`${header()}
`<article class="main">
<h2 class="parks__header">Parks and Services</h2>
    
        
        ${parkListHTML()}

    <section class="main__guest">
        <h2>Guests</h2>
        ${guestHTML()}
    </section>
    
</article>`
//${footer()}




const parentHTMLElement = document.querySelector("#container")

parentHTMLElement.innerHTML = applicationHTMLString
// import { serviceHTML } from "./services.js";
import { parkListHTML } from "./parks.js";
import { guestHTML } from "./guests.js";
import { header } from "./header.js";



const applicationHTMLString = `${header()}
<article class="main">
    <section class="main--column list main__parkList">
        <h2>Parks and Services</h2>
        ${parkListHTML()}
    </section>
    <section class="main--column list mains__guestList">
        <h2>Guests</h2>
        ${guestHTML()}
    </section>
    
</article>
`



const parentHTMLElement = document.querySelector("#container")

parentHTMLElement.innerHTML = applicationHTMLString
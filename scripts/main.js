// import { serviceHTML } from "./services.js";
import { parkListHTML } from "./parks.js";
import { guestHTML } from "./guests.js";
import { header } from "./header.js";
import { servicesListHTML } from "./services.js";


const applicationHTMLString = //`${header()}
`${servicesListHTML()}
<article class="main">
<h2 class="parks__header"></h2>


${parkListHTML()}

<section class="main__guest">
<h2 class="park-name">Guests</h2>
${guestHTML()}
</section>

</article>`
//${footer()}




const parentHTMLElement = document.querySelector("#container")

parentHTMLElement.innerHTML = applicationHTMLString
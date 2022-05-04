// import { serviceHTML } from "./services.js";
import { parkListHTML } from "./parks.js";

const parkHTMLString = parkListHTML()

const parentHTMLElement = document.querySelector("#container")

parentHTMLElement.innerHTML = parkHTMLString

// import { serviceHTML } from "./services.js";
import { serviceHTML } from "./parks.js";

const serviceHTMLString = serviceHTML ()

const parentHTMLElement = document.querySelector(".services")

parentHTMLElement.innerHTML = serviceHTMLString
console.log(serviceHTML(3))
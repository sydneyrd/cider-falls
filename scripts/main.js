import { serviceHTML } from "./services.js";

const serviceHTMLString = serviceHTML ()

const parentHTMLElement = document.querySelector(".services")

parentHTMLElement.innerHTML = serviceHTMLString
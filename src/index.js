import "./style.css";
import {DOMController} from "./domController"

const domController = new DOMController();

const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const contactButton = document.querySelector('#contact');

domController.displayHomePage();

homeButton.onclick = domController.displayHomePage;
menuButton.onclick = domController.displayMenuPage;
contactButton.onclick = domController.displayContactPage;


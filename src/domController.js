import { home } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";

class DOMController {

    displayHomePage() {
        home();
    }

    displayMenuPage() {
        menu()
    }

    displayContactPage() {
        contact()
    }

}


export {DOMController};
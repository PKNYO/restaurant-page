class DOMController {
    #elements = {
        'content' : document.querySelector('#content'),
        'titleDiv' : document.createElement('div'),
        'presentSect' : document.createElement('div'),
        'markertingThing' : document.createElement('div'),
        'p' : document.createElement('p'),
        'img' : document.createElement('img')
    }

    populateMainPage() {
        const pText = 'Aquí vendemos las mejores arepas del mundo entero. Sin broma, ponte a buscar por todas las ciudades del mundo si quieres y el restaurante se encarga de reembolsarte todos los pagos de tu vida si encuentras mejor. Ya ven a comer aquí. Te esperamos parcerito.';
        const markertingText = 'Hoy todo es mucho mas barato ya ven!';
        const titleText = 'Arepas Hermosas';

        this.#elements.content.innerHTML = '';

        this.#elements.titleDiv.classList.add('title-div');
        this.#elements.presentSect.classList.add('present-sect');
        this.#elements.markertingThing.classList.add('marketing-thing');

        this.#elements.content.appendChild(this.#elements.titleDiv);
        this.#elements.content.appendChild(this.#elements.presentSect);
        this.#elements.content.appendChild(this.#elements.markertingThing);

        this.#elements.presentSect.appendChild(this.#elements.p);
        this.#elements.presentSect.appendChild(this.#elements.img);

        this.#elements.p.textContent = pText;
        this.#elements.markertingThing.textContent = markertingText;
        this.#elements.titleDiv.textContent = titleText;

        this.#elements.img.setAttribute('alt', 'arepas-image');
        this.#elements.img.src = './images/arepas.jpg';
    }

}






export {DOMController};
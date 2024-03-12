
function home() {
    let elements = {
        'content' : document.querySelector('#content'),
        'titleDiv' : document.createElement('div'),
        'presentSect' : document.createElement('div'),
        'markertingThing' : document.createElement('div'),
        'p' : document.createElement('p'),
        'img' : document.createElement('img')
    }

    const pText = 'Aquí vendemos las mejores arepas del mundo entero. Sin broma, ponte a buscar por todas las ciudades del mundo si quieres y el restaurante se encarga de reembolsarte todos los pagos de tu vida si encuentras mejor. Ya ven a comer aquí. Te esperamos parcerito.';
    const markertingText = 'Hoy todo es mucho mas barato ya ven!';
    const titleText = 'Arepas Hermosas';

    elements.content.innerHTML = '';

    elements.titleDiv.classList.add('title-div');
    elements.presentSect.classList.add('present-sect');
    elements.markertingThing.classList.add('marketing-thing');

    elements.content.appendChild(elements.titleDiv);
    elements.content.appendChild(elements.presentSect);
    elements.content.appendChild(elements.markertingThing);
    elements.presentSect.appendChild(elements.p);
    elements.presentSect.appendChild(elements.img);

    elements.p.textContent = pText;
    elements.markertingThing.textContent = markertingText;
    elements.titleDiv.textContent = titleText;

    elements.img.setAttribute('alt', 'arepas-image');
    elements.img.src = './images/arepas.jpg';
}

export {home};
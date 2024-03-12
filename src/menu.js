import familyImage from './images/menu-familia.jpeg';
import infantilImage from './images/menu-infantil.jpeg';
import golosoImage from './images/menu-goloso.jpeg';

function menu() {
    let elements = {
        'content' : document.querySelector('#content'),
        'menuContainer' : document.createElement('div'),
        'familiaMenu' : document.createElement('div'),
        'infantilMenu' : document.createElement('div'),
        'golosoMenu' : document.createElement('div'),
        'familiaImg' : document.createElement('img'),
        'familiaTitle' : document.createElement('h2'),
        'familiaDescr' : document.createElement('p'),
        'familiaPrice' : document.createElement('p'),
        'infantilImg' : document.createElement('img'),
        'infantilTitle' : document.createElement('h2'),
        'infantilDescr' : document.createElement('p'),
        'infantilPrice' : document.createElement('p'),
        'golosoImg' : document.createElement('img'),
        'golosoTitle' : document.createElement('h2'),
        'golosoDescr' : document.createElement('p'),
        'golosoPrice' : document.createElement('p')
    }

    const titles = {
        'familia' : 'Menu Familia',
        'infantil' : 'Menu Infantil',
        'goloso' : 'Menu Goloso'
    }
    const descriptions = {
        'familia' : 'Un menú para que pueden todos disfrutar des las mejores arepas del mundo, y a voluntad.',
        'infantil' : 'Este menú hará que sus niños podran comer también las mejores arepas del mundo.',
        'goloso' : 'Este menú es pensaso para todos los amantes de las arepas, es a voluntad y estará super lleno mor.'
    };
    const prices = {
        'familia' : '35€',
        'infantil' : '7€',
        'goloso' : '14€'
    };

    elements.content.innerHTML = '';

    elements.menuContainer.classList.add('menu-container');
    elements.familiaMenu.classList.add('menu-card');
    elements.infantilMenu.classList.add('menu-card');
    elements.golosoMenu.classList.add('menu-card');
    elements.familiaDescr.classList.add('description');
    elements.infantilDescr.classList.add('description');
    elements.golosoDescr.classList.add('description');
    elements.familiaPrice.classList.add('price');
    elements.infantilPrice.classList.add('price');
    elements.golosoPrice.classList.add('price');

    elements.content.appendChild(elements.menuContainer);
    elements.menuContainer.appendChild(elements.familiaMenu);
    elements.menuContainer.appendChild(elements.infantilMenu);
    elements.menuContainer.appendChild(elements.golosoMenu);
    elements.familiaMenu.appendChild(elements.familiaImg);
    elements.familiaMenu.appendChild(elements.familiaTitle);
    elements.familiaMenu.appendChild(elements.familiaDescr);
    elements.familiaMenu.appendChild(elements.familiaPrice);
    elements.infantilMenu.appendChild(elements.infantilImg);
    elements.infantilMenu.appendChild(elements.infantilTitle);
    elements.infantilMenu.appendChild(elements.infantilDescr);
    elements.infantilMenu.appendChild(elements.infantilPrice);
    elements.golosoMenu.appendChild(elements.golosoImg);
    elements.golosoMenu.appendChild(elements.golosoTitle);
    elements.golosoMenu.appendChild(elements.golosoDescr);
    elements.golosoMenu.appendChild(elements.golosoPrice);

    elements.familiaTitle.textContent = titles.familia;
    elements.infantilTitle.textContent = titles.infantil;
    elements.golosoTitle.textContent = titles.goloso;
    elements.familiaDescr.textContent = descriptions.familia;
    elements.infantilDescr.textContent = descriptions.infantil;
    elements.golosoDescr.textContent = descriptions.goloso;
    elements.familiaPrice.textContent = prices.familia;
    elements.infantilPrice.textContent = prices.infantil;
    elements.golosoPrice.textContent = prices.goloso;

    elements.familiaImg.setAttribute('alt', 'familia');
    elements.infantilImg.setAttribute('alt', 'infantil');
    elements.golosoImg.setAttribute('alt', 'goloso');

    elements.familiaImg.src = familyImage;
    elements.infantilImg.src = infantilImage;
    elements.golosoImg.src = golosoImage;

}

export {menu};
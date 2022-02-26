import getMenu from './menu'
import getHome from './home';
import './style.css';

function navigation() {
    const content = document.getElementById('content');
    const header = document.createElement('header');
    const logo = document.createElement('div');
    logo.classList.add('logo');
    logo.textContent = 'Odin Restaurant'
    const nav = document.createElement('nav');

    const main = document.createElement('main');
    main.setAttribute('id', 'main')

    const homeButton = document.createElement('button');
    homeButton.classList.add('home-button');
    homeButton.textContent = 'Home';
    homeButton.addEventListener('click', (e) => {
        // e.preventDefault()
        if(e.target.classList.contains('home-button'))
        getHome()
    })

    const menuButton = document.createElement('button');
    menuButton.classList.add('nav-button');
    menuButton.textContent = 'menu-b';
    menuButton.addEventListener('click', (e) => {
        // e.preventDefault()
        if(e.target.classList.contains('nav-button'))
        getMenu()
    })

    const contactButton = document.createElement('button');
    contactButton.classList.add('nav-button');
    contactButton.textContent = 'contact-b';


    nav.appendChild(homeButton)
    nav.appendChild(menuButton)
    nav.appendChild(contactButton)
    header.appendChild(logo);
    header.appendChild(nav);
    
    
    content.appendChild(header)
    content.appendChild(main);

    return content
}

export default navigation;

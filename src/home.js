function loadHome() {
    const div = document.createElement('div');
    div.classList.add('home');
    const h1 = document.createElement('h1');
    h1.textContent = 'Welcome to our Restaurant';
    const image = document.createElement('img');
    image.setAttribute('src', './images/welcome-hand.png');

    div.appendChild(image);
    div.appendChild(h1);

    return div;
}

function getHome() {
    const main = document.getElementById('main');
    main.textContent = ''
    main.appendChild(loadHome());
}

export default getHome;
import './style.css';
function createMenu() {
    const card = document.createElement('div');
    card.classList.add('menu-card');
    card.appendChild(createMenuItem('margherita', '$5', 'margherita.jpg', 'margherita.jpg'));
    card.appendChild(createMenuItem('gluteen free veg pizza', '$5', 'gluten-free.webp'));
    card.appendChild(createMenuItem('dominos', '$5', 'dominos.jpeg', 'dominos.jpeg'));
    card.appendChild(createMenuItem('chicken pizza', '$5', 'chicken.jpg', 'chicken.jpg'));
    card.appendChild(createMenuItem('margherita', '$5', 'margherita.jpg', 'margherita.jpg'));
    card.appendChild(createMenuItem('gluteen free veg pizza', '$5', 'gluten-free.webp'));
    card.appendChild(createMenuItem('dominos', '$5', 'dominos.jpeg', 'dominos.jpeg'));
    card.appendChild(createMenuItem('chicken pizza', '$5', 'chicken.jpg', 'chicken.jpg'));
    return card;
}

function createMenuItem(item, price, image) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    let foodName = document.createElement('h3');
    foodName.textContent = item;

    let itemPrice = document.createElement('p');
    itemPrice.textContent = price;

    const foodImage = document.createElement('img');
    foodImage.src = `./images/${image}`;

    menuItem.appendChild(foodName);
    menuItem.appendChild(itemPrice);
    menuItem.appendChild(foodImage);

    return menuItem
}

function getMenu() {
    const main = document.getElementById('main');
    main.textContent = ''
    main.appendChild(createMenu());
}


export default getMenu;
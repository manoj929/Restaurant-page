import './style.css';
function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.appendChild(createMenuItem('margherita', '$5', 'margherita.jpg', 'margherita.jpg'));
    menu.appendChild(createMenuItem('Veg pizza', '$5', 'gluten-free.webp'));
    menu.appendChild(createMenuItem('dominos', '$5', 'dominos.jpeg', 'dominos.jpeg'));
    menu.appendChild(createMenuItem('chicken pizza', '$5', 'chicken.jpg', 'chicken.jpg'));
    menu.appendChild(createMenuItem('margherita', '$5', 'margherita.jpg', 'margherita.jpg'));
    menu.appendChild(createMenuItem('veg pizza', '$5', 'gluten-free.webp'));
    menu.appendChild(createMenuItem('dominos', '$5', 'dominos.jpeg', 'dominos.jpeg'));
    menu.appendChild(createMenuItem('chicken pizza', '$5', 'chicken.jpg', 'chicken.jpg'));
    return menu;
}

function createMenuItem(item, price, image) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const itemInfo = document.createElement('div')
    itemInfo.classList.add('item-details');

    let foodName = document.createElement('h3');
    foodName.textContent = item;

    let itemPrice = document.createElement('p');
    itemPrice.textContent = price;

    const itemImage = document.createElement('div');
    itemImage.classList.add('item-image');
    const foodImage = document.createElement('img');
    foodImage.src = `./images/${image}`;

    itemInfo.appendChild(foodName);
    itemInfo.appendChild(itemPrice);
    menuItem.appendChild(itemInfo);
    itemImage.appendChild(foodImage)
    menuItem.appendChild(itemImage);

    return menuItem
}

function getMenu() {
    const main = document.getElementById('main');
    main.textContent = ''
    main.appendChild(createMenu());
}


export default getMenu;
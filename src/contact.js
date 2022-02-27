function loadContact() {
    const div = document.createElement('div');
    div.classList.add('contact');
    const h1 = document.createElement('h1');
    h1.textContent = 'Contact Us';
    
    const ph = document.createElement('h2');
    ph.textContent = '+91 630 430 320';

    const mail = document.createElement('p')
    mail.textContent = 'abc@example.com';

    div.appendChild(h1);
    div.appendChild(ph);
    div.appendChild(mail);

    return div;
}

function getContact() {
    const main = document.getElementById('main');
    main.textContent = ''
    main.appendChild(loadContact())
}

export default getContact;


function createElement() {
    const header = document.createElement('header');
    const nav = document.createElement('nav')
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.innerText = 'manoj'

    li.appendChild(a);
    ul.appendChild(li)
    nav.appendChild(ul)
    header.appendChild(nav);

    const content = document.getElementById('content').appendChild(header)

    return content
}

export default createElement;

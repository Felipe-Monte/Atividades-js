
const itens = [
    { tag: 'p', texto: 'Carlos Felipe' },
    { tag: 'div', texto: 'texto 2' },
    { tag: 'section', texto: 'texto 3' },
    { tag: 'footer', texto: 'texto 4' }
]

const section = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < itens.length ; i++) {
    const {tag , texto } = itens[i]

    const getTag = document.createElement(tag)
    getTag.innerText = texto

    div.appendChild(getTag)
}

section.appendChild(div)











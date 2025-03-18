function adicionar() {
    inputNome = document.getElementById('nome').value;
    inputUrl = document.getElementById('url-img').value;
    itemGroup = document.getElementById('item-group');

    const item = document.createElement('div');
    item.classList.add('item');
    itemGroup.appendChild(item);

    const imagem = document.createElement('img');
    imagem.setAttribute('src', inputUrl);
    item.appendChild(imagem);

    const h3 = document.createElement('h3');
    h3.textContent = inputNome;
    item.appendChild(h3);
}
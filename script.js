function azul(){
    document.body.classList.remove('azul','vermelho', 'verde');
    document.body.classList.add('azul');
}

function vermelho(){
    document.body.classList.remove('azul','vermelho', 'verde');
    document.body.classList.add('vermelho');
}

function verde(){
    document.body.classList.remove('azul','vermelho', 'verde');
    document.body.classList.add('verde');
}

// função simplificada

function mudaCor(cor){
    document.body.classList.remove('azul','vermelho', 'verde');
    document.body.classList.add(cor);
}

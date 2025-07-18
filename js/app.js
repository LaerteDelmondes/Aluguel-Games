function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if(imagem.classList.contains('dashboard__item__img--rented')) {

        let confirmar = confirm("Você realmente quer devolver este jogo?");
        if (!confirmar) return;
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
    }
    imprimirJogosAlugados();
}

function imprimirJogosAlugados() {
    let alugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    console.log(`Quantidade de jogos alugados: ${alugados}`);
}
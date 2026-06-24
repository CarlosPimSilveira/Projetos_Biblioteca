const btnTema = document.querySelector('.btnTema');
btnTema.addEventListener('click', mudarTema);

function mudarTema() {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        btnTema.innerText = '🌙';
    } else {
        btnTema.innerText = '🌞';
    }
}

let livros = [
    {
        titulo: "O Hobbit"
    }
];

const divPrin = document.querySelector('.divPrinc');
const divResp = document.createElement('div');
divResp.classList.add('divResp');

const p = document.createElement('p');
divResp.appendChild(p);
divPrin.appendChild(divResp);

function pesquisar() {
    const txtLivro = document.querySelector('.txtLivro');
    const valorBusca = txtLivro.value.toLowerCase();

    const resultado = livros.find(livro =>
        livro.titulo.toLowerCase() === valorBusca
    );

    criaResposta(resultado, txtLivro);

    txtLivro.value = '';
    txtLivro.focus();
}

function criaResposta(resultado, txtLivro) {
    if (resultado) {
        p.innerText = resultado.titulo;
    } else {
        p.innerText = `${txtLivro.value} não encontrado!`;
    }
}
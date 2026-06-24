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

function pesquisar() {
    const txtLivro = document.querySelector('.txtLivro')

    const resultado = livros.find( livro => livro.titulo.toLocaleLowerCase() === txtLivro.value);

    if (resultado) {
        criaResposta(true, txtLivro)
    } else {
        criaResposta(false, txtLivro)
    }

    txtLivro.value = '';
    txtLivro.focus()
}

// Pega elementos
const divPrin = document.querySelector('.divPrinc')
// Cria elementos
const divResp = document.createElement('div')
const p = document.createElement('p')

function criaResposta(valor, txtLivro) {
    divResp.innerText = ''

    if (valor === true) {
        divResp.classList.add('divResp')
        divPrin.appendChild(divResp)
        p.innerText = livros.value
        divResp.appendChild(p)
    } else {
        divResp.classList.add('divResp')
        divPrin.appendChild(divResp)
        p.innerText = `${txtLivro.value} não encontrado!`
        divResp.appendChild(p)
    }
}

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
    const livro = {
        titulo: txtLivro.value
    }

    livros.find( livro => livro.toLowerCase() === livros.titulo  ) 
    txtLivro.value = '';
    txtLivro.focus()
    console.log(livro)
    
    criaResposta()
}

//const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5)

function criaResposta() {
    // Pega elementos
    const divPrin = document.querySelector('.divPrinc')
    // Cria elementos
    const divResp = document.createElement('div')
    const p = document.createElement('p')


    divResp.classList.add('divResp')
    divPrin.appendChild(divResp)
    p.innerText = livros.value
    divResp.appendChild(p)
}

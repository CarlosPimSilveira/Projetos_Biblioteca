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

let livros = [];

function pesquisar() {
    const txtLivro = document.querySelector('.txtLivro')
    const livro = {
        titulo: txtLivro.value
    }

    livros.push( livro ) 
    txtLivro.value = '';
    txtLivro.focus()
    console.log(livros)
}

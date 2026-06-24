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

function pesquisar() {
    console.log('teste')
}

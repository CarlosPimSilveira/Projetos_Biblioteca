// Conecta ao outro js!
import { livros } from './controleLivros.js';

// Conecta para uso de mudança de tema
import { initTema } from './comandosGlobais.js';
initTema();

const btnCadastro = document.querySelector('.btnCadLivro');
const btnNovoLivro = document.querySelector('.btnNovoLivro')

const txtId = document.querySelector('.txtId');
txtId.disabled = true;
btnCadastro.disabled = true;

btnNovoLivro.addEventListener('click', cadNovoLivro)
function cadNovoLivro() {
    btnCadastro.disabled = false;
    btnNovoLivro.disabled = true;
    const ultimoID = Math.max(...livros.map(livro => livro.id)) + 1;
    txtId.value = ultimoID;
}

btnCadastro.addEventListener('click', cadastrar);
function cadastrar() {
    btnNovoLivro.disabled = false;
    btnCadastro.disabled = true;

    txtId.value = ''
}



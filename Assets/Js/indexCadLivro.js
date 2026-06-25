// Conecta ao outro js!
import { livros } from './controleLivros.js';

// Conecta para uso de mudança de tema
import { initTema } from './comandosGlobais.js';
initTema();

const btnCadastro = document.querySelector('.btnCadLivro');
const txtId = document.querySelector('.txtId');

const ultimoID = Math.max(...livros.map(livro => livro.id)) + 1;
txtId.value = ultimoID;
txtId.disabled = true;

btnCadastro.addEventListener('click', cadastrar);

function cadastrar() {
    console.log('teste');
}



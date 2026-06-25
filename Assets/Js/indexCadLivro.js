// Conecta ao outro js!
import { livros } from './controleLivros.js';

// Conecta para uso de mudança de tema
import { initTema } from './comandosGlobais.js';
initTema();

const btnCadastro = document.querySelector('.btnCadastro');
btnCadastro.addEventListener('click', cadastrar);

const txtId = document.querySelector('.txtId')

function cadastrar() {
    console.log('teste')
}

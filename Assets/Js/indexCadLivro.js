// Conecta ao outro js!
import { obterLivros, salvarLivros } from './controleLivros.js';

let livros = obterLivros();

// Conecta para uso de mudança de tema
import { initTema } from './comandosGlobais.js';
initTema();

const btnCadastro = document.querySelector('.btnCadLivro');
const btnNovoLivro = document.querySelector('.btnNovoLivro');
const txtTituloLivro = document.querySelector('.txtTituloLivro')
const txtId = document.querySelector('.txtId');
const txtAutorLivro = document.querySelector('.txtAutorLivro')
const txtQtdLivro = document.querySelector('.txtQtdLivro')

function desativarItem() {
    //Desativa Edit
    txtId.disabled = true;
    txtTituloLivro.disabled = true;
    txtAutorLivro.disabled = true;
    txtQtdLivro.disabled = true;
    //Desativa BTN
    btnCadastro.disabled = true;
    btnNovoLivro.disabled = false;
} desativarItem()

function ativaItem() {
    //Desativa Edit
    txtId.disabled = false;
    txtTituloLivro.disabled = false;
    txtAutorLivro.disabled = false;
    txtQtdLivro.disabled = false;
    //Desativa BTN
    btnCadastro.disabled = false;
    btnNovoLivro.disabled = true;
}

btnNovoLivro.addEventListener('click', cadNovoLivro)

function cadNovoLivro() {
    ativaItem()
    const ultimoID = Math.max(...livros.map(livro => livro.id)) + 1;
    txtId.value = ultimoID;
    txtTituloLivro.focus()
}

btnCadastro.addEventListener('click', cadastrar);

function cadastrar() {
    const novoLivro = {
        id: Number(txtId.value),
        titulo: txtTituloLivro.value,
        autor: txtAutorLivro.value,
        emprestado: 0,
        qtd: Number(txtQtdLivro.value)
    }

    adicionaLivro(novoLivro)
    limpaCampos()
    desativarItem()    
}

function adicionaLivro(novoLivro) {
    livros.push(novoLivro);
    salvarLivros(livros);
}

function limpaCampos() {
    txtId.value = ''
    txtTituloLivro.value = ''
    txtAutorLivro.value = ''
    txtQtdLivro.value = ''
}



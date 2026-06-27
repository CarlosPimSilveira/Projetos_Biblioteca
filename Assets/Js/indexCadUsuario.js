// Conecta para uso de mudança de tema
import { initTema } from './comandosGlobais.js';
initTema();

const tel = document.querySelector('.txtTelUsuario');
const btnNovoUsuario = document.querySelector('.btnNovoUsuario')
const txtNomeUsuario = document.querySelector('.txtNomeUsuario')
const btnCadUsuario = document.querySelector('.btnCadUsuario')
const txtIdUsuario = document.querySelector('.txtIdUsuario')
const txtTelUsuario = document.querySelector('.txtTelUsuario')
const txtDataNascimento = document.querySelector('.txtDataNascimento')

//Aplica mascara para o telefone!
tel.addEventListener('input', (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, ''); // remove tudo que não for número
    value = value.replace(/(\d{2})(\d)/, '($1) $2');
    value = value.replace(/(\d{5})(\d)/, '$1-$2');
    e.target.value = value;
});

function ativaCampos() {
    txtNomeUsuario.disabled = false;
    btnCadUsuario.disabled = false;
    txtTelUsuario.disabled = false;
    txtDataNascimento.disabled = false;
}

function desativaCampos() {
    txtNomeUsuario.disabled = true;
    btnCadUsuario.disabled = true;
    txtTelUsuario.disabled = true;
    txtDataNascimento.disabled = true;
}

function limpaCampos() {
    txtNomeUsuario.value = ''
    btnCadUsuario.value = ''
    txtTelUsuario.value = ''
    txtDataNascimento.value = ''
}

desativaCampos()

btnNovoUsuario.addEventListener('click', novoCadastroUsuario)
btnCadUsuario.addEventListener('click', salvarCadastro)

function novoCadastroUsuario() {
    ativaCampos()
    btnNovoUsuario.disabled = true;
    txtNomeUsuario.focus()
}

function salvarCadastro() {
    btnNovoUsuario.disabled = false

    limpaCampos()
    desativaCampos()
}
// Conecta para uso de mudança de tema
import { initTema } from './comandosGlobais.js';
initTema();

//Aplica mascara para o telefone!
const tel = document.querySelector('.txtTelUsuario');
tel.addEventListener('input', (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, ''); // remove tudo que não for número
    value = value.replace(/(\d{2})(\d)/, '($1) $2');
    value = value.replace(/(\d{5})(\d)/, '$1-$2');
    e.target.value = value;
});

const txtIdUsuario = document.querySelector('.txtIdUsuario')
txtIdUsuario.disabled = true;
const txtNomeUsuario = document.querySelector('.txtNomeUsuario')
const btnCadUsuario = document.querySelector('.btnCadUsuario')

function ativaCampos() {
    txtNomeUsuario.disabled = false
    btnCadUsuario.disabled = false;
}

function desativaCampos() {
    txtNomeUsuario.disabled = true
    btnCadUsuario.disabled = true;
}

desativaCampos()

const btnNovoUsuario = document.querySelector('.btnNovoUsuario')
btnNovoUsuario.addEventListener('click', novoCadastroUsuario)

function novoCadastroUsuario() {
    ativaCampos()
    txtNomeUsuario.focus()
}
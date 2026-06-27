// Conecta para uso de mudança de tema
import { initTema } from './comandosGlobais.js';
initTema();

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
const tel = document.querySelector('.txtTelUsuario');
const btnNovoUsuario = document.querySelector('.btnNovoUsuario')
const txtNomeUsuario = document.querySelector('.txtNomeUsuario')
const btnCadUsuario = document.querySelector('.btnCadUsuario')
const txtIdUsuario = document.querySelector('.txtIdUsuario')
const txtTelUsuario = document.querySelector('.txtTelUsuario')
const txtDataNascimento = document.querySelector('.txtDataNascimento')
const txtIdadeUsuario = document.querySelector('.txtIdadeUsuario')

btnNovoUsuario.addEventListener('click', novoCadastroUsuario)
btnCadUsuario.addEventListener('click', salvarCadastro)
txtDataNascimento.addEventListener("blur", calcIdade);

desativaCampos()

//Aplica mascara para o telefone!
tel.addEventListener('input', (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, ''); // remove tudo que não for número
    value = value.replace(/(\d{2})(\d)/, '($1) $2');
    value = value.replace(/(\d{5})(\d)/, '$1-$2');
    e.target.value = value;
});

function calcIdade() {
    const hoje = new Date();
    const nascimento = new Date(txtDataNascimento.value);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mesAtual = hoje.getMonth();
    const mesNascimento = nascimento.getMonth();

    if (
        mesAtual < mesNascimento ||
        (mesAtual === mesNascimento && hoje.getDate() < nascimento.getDate())
    ) {
        idade--;
    }

    txtIdadeUsuario.value = idade;
}

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
    txtIdadeUsuario.value = ''
}

function novoCadastroUsuario() {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const ultimoID = usuarios.length > 0
        ? Math.max(...usuarios.map(u => u.id)) + 1
        : 1;

    txtIdUsuario.value = ultimoID;

    ativaCampos();
    btnNovoUsuario.disabled = true;
    txtNomeUsuario.focus();
}

function salvarCadastro() {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const novoUsuario = {
        id: Number(txtIdUsuario.value),
        nome: txtNomeUsuario.value,
        telefone: txtTelUsuario.value,
        dataNascimento: txtDataNascimento.value,
        idade: Number(txtIdadeUsuario.value)
    };

    usuarios.push(novoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    console.log("Usuário salvo com sucesso!", novoUsuario);

    btnNovoUsuario.disabled = false;

    limpaCampos();
    desativaCampos();
}
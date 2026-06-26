// Conecta ao outro js!
import { obterLivros } from './controleLivros.js';

let livros = obterLivros();

// Conecta para uso de mudança de tema
import { initTema } from './comandosGlobais.js';
initTema();

// Faz a mudança de tema!
/*
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
*/
// Cria ou conecta as divs e p
const divPrin = document.querySelector('.divPrinc');
const divResp = document.createElement('div');
const p = document.createElement('p');
const btnExcluir = document.createElement('button')

btnExcluir.classList.add('btnExcluirLivro') 
btnExcluir.innerText = 'Excluir'
btnExcluir.disabled = true;

// Adiciona elas ao seus respectivos pais!
divResp.classList.add('divResp');
divResp.appendChild(p);
divResp.appendChild(btnExcluir)
divPrin.appendChild(divResp);

// "ouvindo" o evento!
const btnPesquisar = document.querySelector('.Enviar');
btnPesquisar.addEventListener('click', pesquisar);

btnExcluir.addEventListener('click', excluirLivro)

// Aqui pega o valor digitado usando o tolowercase para caso tenha letras maiusculas ou minusculas.
// busca no controleLivro.js o titulo do livro e compara com a informação digitada
function pesquisar() {
    livros = obterLivros();

    const txtLivro = document.querySelector('.txtLivro');
    const valorBusca = txtLivro.value.toLowerCase();

    const resultado = livros.find(livro =>
        livro.titulo.toLowerCase() === valorBusca
    );

    criaResposta(resultado, txtLivro);

    txtLivro.value = '';
    txtLivro.focus();
}

// da a resposta se o livro ta ou não cadastrado 
function criaResposta(resultado, txtLivro) {
    if (resultado) {
        let emprestado = ''
        if (resultado.emprestado === 1) {
            emprestado = 'Emprestado'
        } else {
            emprestado = 'Disponivel'
        }
        p.innerHTML = `
            <div class="cardLivro">
                <p class="idLivroExcluir"><strong>ID:</strong> ${resultado.id}</p>
                <p><strong>Livro:</strong> ${resultado.titulo}</p>
                <p><strong>Autor:</strong> ${resultado.autor}</p>
                <p><strong>Status:</strong> ${resultado.emprestado === 1 ? 'Emprestado' : 'Disponível'}</p>
            </div>`;
            btnExcluir.disabled = false;
    } else {
        p.innerHTML = `${txtLivro.value} não encontrado!`;
    }
}
//const idLivroExcluir = document.querySelector('.idLivroExcluir')
function excluirLivro() {
    const idLivroExcluir = Number(
    document.querySelector('.idLivroExcluir')
        .innerText
        .replace('ID: ', '')
    )

    const resultado = livros.findIndex(livro => livro.id === idLivroExcluir)
    const cardLivro = document.querySelector('.cardLivro')

    if (resultado >= 0) {
        livros.splice(resultado, 1)
        cardLivro.innerHTML = ''
        localStorage.setItem("livros", JSON.stringify(livros));
    }
    btnExcluir.disabled = true;
}

const input = document.querySelector('.txtLivro');
const sugestoes = document.querySelector('.sugestoes');

input.addEventListener('input', mostrarSugestoes);

function mostrarSugestoes() {
    livros = obterLivros();

    const valor = input.value.toLowerCase();

    if (valor === '') {
        sugestoes.innerHTML = '';
        return;
    }

    const filtrados = livros.filter(livro =>
        livro.titulo.toLowerCase().includes(valor)
    );

    renderSugestoes(filtrados);
}

function renderSugestoes(lista) {
    sugestoes.innerHTML = '';

    lista.forEach(livro => {
        const div = document.createElement('div');
        div.classList.add('itemSugestao');
        div.innerText = livro.titulo;

        div.addEventListener('click', () => {
            input.value = livro.titulo;
            sugestoes.innerHTML = '';
        });

        sugestoes.appendChild(div);
    });
}
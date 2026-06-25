// Conecta ao outro js!
import { livros } from './controleLivros.js';

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

// Adiciona elas ao seus respectivos pais!
divResp.classList.add('divResp');
divResp.appendChild(p);
divPrin.appendChild(divResp);

// "ouvindo" o evento!
const btnPesquisar = document.querySelector('.Enviar');
btnPesquisar.addEventListener('click', pesquisar);

// Aqui pega o valor digitado usando o tolowercase para caso tenha letras maiusculas ou minusculas.
// busca no controleLivro.js o titulo do livro e compara com a informação digitada
function pesquisar() {
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
                <p><strong>ID:</strong> ${resultado.id}</p>
                <p><strong>Livro:</strong> ${resultado.titulo}</p>
                <p><strong>Autor:</strong> ${resultado.autor}</p>
                <p><strong>Status:</strong> ${resultado.emprestado === 1 ? 'Emprestado' : 'Disponível'}</p>
            </div>`;
    } else {
        p.innerHTML = `${txtLivro.value} não encontrado!`;
    }
}

const input = document.querySelector('.txtLivro');
const sugestoes = document.querySelector('.sugestoes');

input.addEventListener('input', mostrarSugestoes);

function mostrarSugestoes() {
    console.log('teste')
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
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

import { livros } from './controleLivros.js';

console.log(livros);

const divPrin = document.querySelector('.divPrinc');
const divResp = document.createElement('div');
divResp.classList.add('divResp');

const p = document.createElement('p');
divResp.appendChild(p);
divPrin.appendChild(divResp);

const btnPesquisar = document.querySelector('.Enviar');

btnPesquisar.addEventListener('click', pesquisar);

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
const email = document.querySelector('#email');
const senha = document.querySelector('#senha');

function verificarDados() {
  if ((email.value === 'tryber@teste.com') && (senha.value === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

const confirmar = document.getElementById('botao');
confirmar.addEventListener('click', verificarDados);

const informacao = document.querySelector('#agreement');
const botaoEnviar = document.querySelector('#submit-btn');

function habilitaBotao(event) {
  const botaoSubmete = event.target.checked;
  botaoEnviar.disabled = !botaoSubmete;
}

informacao.addEventListener('click', habilitaBotao);

/* consultado o link https://pt.stackoverflow.com/questions/113089/contador-de-caracteres-digitados-em-um-textarea */
const textoArea = document.querySelector('#textarea');
const informaCounter = document.querySelector('#counter');
const limite = 500;

function counterTextoArea() {
  const caracteres = this.value.length;
  const restaArea = limite - caracteres;
  informaCounter.innerHTML = restaArea;
}

textoArea.addEventListener('keyup', counterTextoArea);

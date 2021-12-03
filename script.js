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

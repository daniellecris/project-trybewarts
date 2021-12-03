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

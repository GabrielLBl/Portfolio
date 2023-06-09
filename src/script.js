const barrasBotao = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

function ativarBotao() {
  navList.classList.toggle('show');
}

barrasBotao.addEventListener('click', ativarBotao);

function enviarEmail() {
    alert('E-mail enviado com sucesso! Muito obrigado por acessar meu Portfólio.');
}

window.addEventListener('scroll', function() {
  var button = document.getElementById('btnVoltarTopo');
  if (window.scrollY > 500) 
      button.classList.add('show');
  else 
      button.classList.remove('show');
  
});

var button = document.getElementById('btnVoltarTopo');
button.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
console.log("JavaScript carregado com sucesso!");

// Ativa o tema quando o switch for clicado
document.addEventListener('change', (e) => {
  if (e.target.matches('#tema-switch')) {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('tema', 'escuro');
    } else {
      localStorage.setItem('tema', 'claro');
    }
  }
});

// Carrega o tema salvo ao abrir o site
if (localStorage.getItem('tema') === 'escuro') {
  document.body.classList.add('dark-mode');
}

// Atualiza o ano no footer quando ele existir
document.addEventListener("DOMContentLoaded", () => {
  const ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();
});


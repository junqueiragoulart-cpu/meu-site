console.log("JavaScript carregado com sucesso!");

/* APRENDENDO JS */
const botaoTema = document.getElementById("tema-btn");
// Trocar o texto automaticamente
// const botaoTema = document.getElementById("tema-btn");

/*
if (botaoTema) {
    botaoTema.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            botaoTema.textContent = "🌙 Modo escuro";            
        } else {
            botaoTema.textContent = "☀️ Modo claro";
        }
    });
}
*/
document.addEventListener("DOMContentLoaded", () => {
  const temaSwitch = document.getElementById("tema-switch");

  if (temaSwitch) {
      temaSwitch.addEventListener("change", function() {
         document.body.classList.toggle("dark-mode");

         if (document.body.classList.contains("dark-mode")) {
             localStorage.setItem("tema", "escuro");
         } else {
             localStorage.setItem("tema", "claro");
         }
      });

      if (localStorage.getItem("tema") === "escuro") {
          document.body.classList.add("dark-mode");
          temaSwitch.checked = true;
      }
  }
}); 
document.addEventListener("DOMContentLoaded", () => {
    const ano = document.getElementById("ano");
    if (ano) ano.textContent = new Date().getFullYear();
});
document.addEventListener('click', (e) => {
  if (e.target.matches('#modo-toggle')) {
    document.body.classList.toggle('dark');
  }
});
function inicializarModoEscuro() {
  const toggle = document.getElementById('modo-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
}

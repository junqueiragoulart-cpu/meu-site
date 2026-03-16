console.log("JavaScript carregado com sucesso!");

/* APRENDENDO JS */
const botaoTema = document.getElementById("tema-btn");
// Trocar o texto automaticamente
// const botaoTema = document.getElementById("tema-btn");

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

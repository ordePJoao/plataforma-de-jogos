const botaoMenu = document.getElementById("botaoMenu");
const menuLateral = document.getElementById("abrir-menu");

// Abrir - Passar mouse no botão
botaoMenu.addEventListener("mouseenter", () => {
  abrirMenu();
});

// Fechar - Mouse fora do menu
menuLateral.addEventListener("mouseleave", () => {
  fecharMenu();
});

// Fechar menu ao clicar fora dele
window.addEventListener("click", (event) => {
  const clicouFora = !menuLateral.contains(event.target) && !botaoMenu.contains(event.target);
  const clicouNoBotao = botaoMenu.contains(event.target);
  if (clicouFora) {
    fecharMenu();
  }

  if(clicouNoBotao){
    fecharMenu();
  }


});

// Abrir menu
function abrirMenu() {
  menuLateral.classList.remove("menu-lateral-fechado");
  menuLateral.classList.add("menu-lateral-aberto");
  botaoMenu.innerHTML = "MENU ▲"; // seta pra cima
}

// Fechar menu
function fecharMenu() {
  menuLateral.classList.remove("menu-lateral-aberto");
  menuLateral.classList.add("menu-lateral-fechado");
  botaoMenu.innerHTML = "MENU ▼"; // seta pra baixo
}
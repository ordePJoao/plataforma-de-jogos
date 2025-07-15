/* MENU */

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




/* LOGIN */

const OpenButtons = document.querySelectorAll(".btn-login") ///Chamando os dois botoes da div btn-login

OpenButtons.forEach(button => { //foreEach para cada um (botao)
    button.addEventListener("click", () => { //adcionando evento ao botao
        const modalid = button.getAttribute("data-modal") //buscar atributo (data-modal) "la nos buttons"
        const modal = document.getElementById(modalid) //busca o modalid atribuido acima, pegando os dois com atributo data-modal
    
        modal.showModal() //showModal (Modal Bloqueante) | show(So o modal)
    }) 
})

const closeButtons = document.querySelectorAll(".close-modal")

closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modalid = button.getAttribute("data-modal")
        const modal = document.getElementById(modalid)

        modal.close() //fecha o medal
    })
})




/* JOGOS POR PREÇO (CARROSEL) */

const controlesBotoes = document.querySelectorAll(".control");
const items = document.querySelectorAll(".item");

let esteiraItems = 0;
let esteiraFinal = items.length;

controlesBotoes.forEach(control => {
  control.addEventListener("click", () => {
    const isReturn = control.classList.contains("btn-return");

    if(isReturn){
      esteiraItems -= 1;
    }

    else{
      esteiraItems += 1;
    }

    if(esteiraItems >= esteiraFinal){
      esteiraItems = 0;
    }

    if(esteiraItems < 0){
      esteiraItems = esteiraFinal - 1;
    }

    items[esteiraItems].scrollIntoView({  //Linkando esteiraItems corresponde a class "Item"
      inline: "start",
      behavior: "smooth",
      block: "nearest" // Isso evita a rolagem vertical
    });

  });

});
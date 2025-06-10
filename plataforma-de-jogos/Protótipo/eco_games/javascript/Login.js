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
function addCartAlert(item) {
    let data = products[item]
    let background = document.createElement("div")
    let messageItself = document.createElement("div")
    let text = document.createElement("span")
    let button = document.createElement("button")
    background.className = "AlertBg"
    messageItself.className = "producto"
    messageItself.id = "AlertMessageItself"
    button.innerText = "Ok"
    
    button.addEventListener("click", (element) => {
        document.body.removeChild(background)
    })

    messageItself.appendChild(text)
    messageItself.appendChild(button)
    background.appendChild(messageItself)
    document.body.appendChild(background)
}
import { products, toArab } from "./recursos.js"
import { addCart } from "./carrito.js"

let catalogue = document.getElementById("main")
let onCatalogue = []
let playingMusic = false;

function loadCatalogue() {
	products.forEach((product, i) => {
		if (!onCatalogue.includes(i)) {
			let container = document.createElement("article")
			container.className = "producto"
			let name = document.createElement("h2")
			name.textContent = product["nombre"]
			let image = document.createElement("img")
			image.src = product["img"]
			let button = document.createElement("button")
			button.textContent = "Adquirir"
			button.addEventListener("click", () => {addCart(i)})
			let price = document.createElement("h3")
			price.textContent = "دإ"+product["precio"]
			container.value = product["valor real"]
			container.id = i
			container.appendChild(name)
			container.appendChild(image)
			container.appendChild(price)
			container.appendChild(button)
			catalogue.appendChild(container)
			onCatalogue.push(i)
		}
	})
}

export function addCatalogue (name, priceNumber, img) {
	let artNumeral = toArab(priceNumber)
	console.log(artNumeral)
	products.push({
		"nombre": name,
		"img": img,
		"precio": artNumeral,
		"valor real": price
	})
	loadCatalogue()
}

document.getElementById("footer").addEventListener("click", () => {
	let themenoid = new Audio("https://vgmtreasurechest.com/soundtracks/club-penguin-original-soundtrack/eayrodluzi/29.%20Charlie%27s%20Here.mp3");
    if (!playingMusic)
        themenoid.play()
    playingMusic = true;
})

window.addEventListener("DOMContentLoaded", loadCatalogue)
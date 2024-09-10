import { toArab } from "./recursos.js"
import { addCart } from "./carrito.js"

let catalogue = document.getElementById("main")
let onCatalogue = []
let playingMusic = false;

export let products = null

async function loadCatalogue() {
	try {
		const response = await fetch("https://api.escuelajs.co/api/v1/products")
		products = await response.json()

		products.forEach((product, i) => {
			if (!onCatalogue.includes(i)) {
				let container = document.createElement("article")
				let name = document.createElement("h2")
				let image = document.createElement("img")
				let button = document.createElement("button")
				let price = document.createElement("h3")
				let cath = document.createElement("span")
				let desc = document.createElement("p")
	
				container.className = "producto"
				name.textContent = product["title"]
				image.src = product["images"][0].replaceAll('"', "").replaceAll("[", "").replaceAll("]", "")
				button.textContent = "Adquirir"
				button.addEventListener("click", () => {addCart(i)})
				price.textContent = "دإ"+toArab(product["price"])
				container.id = i
				cath.className = "category"
				desc.className = "desc"
				cath.textContent = product["category"]["name"]
				desc.textContent = product["description"]
				container.appendChild(name)
				container.appendChild(image)
				container.appendChild(price)
				container.appendChild(cath)
				container.appendChild(desc)
				container.appendChild(button)
				catalogue.appendChild(container)
				onCatalogue.push(i)
			}
		})
	} catch (error) {
		console.error(error)
		catalogue.style.fontSize = "75px"
		catalogue.innerHTML = "La API no respondió."
	}
}

export function addCatalogue (name, priceNumber, img) {
	products.push({
		"nombre": name,
		"img": img,
		"precio": price
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
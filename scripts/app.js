let catalogue = document.getElementById("main")
let onCatalogue = []

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
			let price = document.createElement("h3")
			price.textContent = "د.إ"+product["precio"]
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

function addCatalogue (name, priceNumber, img) {
	let artNumeral = ""
	let price = priceNumber.toString()
	for (let i = 0; i < price.length; i++) {
		switch (price[i]) {
			case "0": artNumeral += '٠';break;
			case "1": artNumeral += '١';break;
			case "2": artNumeral += '٢';break;
			case "3": artNumeral += '٣';break;
			case "4": artNumeral += '٤';break;
			case "5": artNumeral += '٥';break;
			case "6": artNumeral += '٦';break;
			case "7": artNumeral += '٧';break;
			case "8": artNumeral += '٨';break;
			case "9": artNumeral += '٩';break;
		}
	}
	console.log(artNumeral)
	products.push({
		"nombre": name,
		"img": img,
		"precio": artNumeral,
		"valor real": price
	})
	loadCatalogue()
}

loadCatalogue();

document.getElementById("footer").addEventListener("click", () => {
	let themenoid = new Audio("https://vgmtreasurechest.com/soundtracks/club-penguin-original-soundtrack/eayrodluzi/29.%20Charlie%27s%20Here.mp3");
    if (!playingMusic)
        themenoid.play()
    playingMusic = true;
})
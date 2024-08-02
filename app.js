let catalogue = document.getElementById("main")

function load_catalogue() {
	products.forEach((product, i) => {
		let container = document.createElement("article")
		container.className = "producto"
		let name = document.createElement("h2")
		name.textContent = product["nombre"]
		let image = document.createElement("img")
		image.src = product["img"]
		let button = document.createElement("button")
		button.textContent = "Adquirir"
		let price = document.createElement("h3")
		price.textContent = product["precio"]+"₪"
		container.value = product["precio real"]
		container.id = i
		container.appendChild(name)
		container.appendChild(image)
		container.appendChild(price)
		container.appendChild(button)
		catalogue.appendChild(container)
	})
}

load_catalogue();
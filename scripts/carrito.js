function addCart (item) {
	localStorage.setItem("carrito",item+","+localStorage.getItem("carrito"))
	addCartAlert(item)
}

function parseCart () {
	if (localStorage.getItem("carrito") == null)
		return "No hay nada en el carrito"
	let res = []
	localStorage.getItem("carrito").split(",").forEach((item, i) => {
		res.push(products[parseInt(item)])
	})
	return res
}

document.getElementById("carrito").addEventListener("click", () => {
	
})
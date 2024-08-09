import { products, toArab } from "./recursos.js"
import { addCartAlert } from "./alerts.js"

export function addCart (item) {
	localStorage.setItem("carrito",item+","+localStorage.getItem("carrito"))
	addCartAlert(item)
}

function parseCart () {
	if (localStorage.getItem("carrito") == null)
		return "No hay nada en el carrito"
	let res = []
	localStorage.getItem("carrito").split(",").forEach((item, i) => {
		if (products[parseInt(item)] != undefined)
			res.push(products[parseInt(item)])
	})
	return res
}

document.getElementById("carrito").addEventListener("click", () => {
	let cart = parseCart()
	if (Array.isArray(cart)) {
		let quantities = {}
		let totalPrice = 0
		cart.forEach((item) => {
			if (quantities.hasOwnProperty(item["nombre"]))
				quantities[item["nombre"]] += 1
			else
				quantities[item["nombre"]] = 1
			totalPrice += item["valor real"]
		})
		Object.keys(quantities).forEach((itemKey) => {
			console.log(itemKey+" x "+quantities[itemKey])
		})
		console.log("دإ"+toArab(totalPrice)+" ("+totalPrice+"de)")
	} else {
		console.log(cart)
	}
})
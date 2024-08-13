export let products = [
	{
		"nombre": "Le fishe au chocolat",
		"img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyGI6tXAD0m95OqhLt5arPaDph327ir2ePsw&s",
		"precio": 200
	}, {
		"nombre": "Delicia Inglesa",
		"img": "https://i.imgflip.com/75el6y.jpg",
		"precio": 355
	}, {
		"nombre": "キッド東京",
		"img": "https://qph.cf2.quoracdn.net/main-qimg-a455d6f1daa8e62350c0a35301609319-lq",
		"precio": 912
	}, {
		"nombre": "Gatorade",
		"img": "https://i.redd.it/yrmep4tk3rh91.jpg",
		"precio": 2024
	}, {
		"nombre": "Inicio del fin",
		"img": "https://thehorrorzine.com/Morbid/DisgustingFoodMuseum/fruit%20bat%20soup.jpg",
		"precio": 2020
	}, {
		"nombre": "Emberiza hortulana",
		"img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Emberiza_hortulana_2.jpg/226px-Emberiza_hortulana_2.jpg",
		"precio": 616
	}, {
		"nombre": "Headcrab",
		"img": "https://preview.redd.it/swoza015b7s41.png?width=640&crop=smart&auto=webp&s=ee6d00a6a5fedda2c4b8a9973cb202242a370031",
		"precio": 3
	}, {
		"nombre": "Chicken-fried watermelon",
		"img": "assets/images/watermelon.png",
		"precio": 1600
	}
]

export function toArab(priceNumber) {
	let res = ""
	let price = priceNumber.toString()
	for (let i = 0; i < price.length; i++) {
		switch (price[i]) {
			case "0": res += '٠';break;
			case "1": res += '١';break;
			case "2": res += '٢';break;
			case "3": res += '٣';break;
			case "4": res += '٤';break;
			case "5": res += '٥';break;
			case "6": res += '٦';break;
			case "7": res += '٧';break;
			case "8": res += '٨';break;
			case "9": res += '٩';break;
		}
	}
	return res
}
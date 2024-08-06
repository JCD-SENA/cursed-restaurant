let playingMusic = false;
let products = [
    {
        "nombre": "Le fishe au chocolat",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyGI6tXAD0m95OqhLt5arPaDph327ir2ePsw&s",
        "precio": "ר",
        "valor real": 200
    }, {
        "nombre": "Delicia Inglesa",
        "img": "https://i.imgflip.com/75el6y.jpg",
        "precio": "שןה",
        "valor real": 355
    }, {
        "nombre": "キッド東京",
        "img": "https://qph.cf2.quoracdn.net/main-qimg-a455d6f1daa8e62350c0a35301609319-lq",
        "precio": "ץיב",
        "valor real": 912
    }, {
        "nombre": "Gatorade",
        "img": "https://i.redd.it/yrmep4tk3rh91.jpg",
        "precio": "ב׳ךד",
        "valor real": 2024
    }, {
        "nombre": "Inicio del fin",
        "img": "https://thehorrorzine.com/Morbid/DisgustingFoodMuseum/fruit%20bat%20soup.jpg",
        "precio": "ב׳יט",
        "valor real": 2020
    }, {
        "nombre": "Emberiza hortulana",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Emberiza_hortulana_2.jpg/226px-Emberiza_hortulana_2.jpg",
        "precio": "םי״ו",
        "valor real": 616
    }, {
        "nombre": "Headcrab",
        "img": "https://static.wikia.nocookie.net/halflife7283/images/8/89/Heacrab_HL2_Model.jpg/revision/latest?cb=20131213222623&path-prefix=es",
        "precio": "ג",
        "valor real": 3
    }
]

function musica () {
    let themenoid = new Audio("https://vgmtreasurechest.com/soundtracks/club-penguin-original-soundtrack/eayrodluzi/29.%20Charlie%27s%20Here.mp3");
    if (!playingMusic)
        themenoid.play()
    playingMusic = true;
}
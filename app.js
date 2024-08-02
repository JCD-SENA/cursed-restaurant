let playingMusic = false;
let productos = {}

function musica () {
    let temazo = new Audio("https://vgmtreasurechest.com/soundtracks/club-penguin-original-soundtrack/eayrodluzi/29.%20Charlie%27s%20Here.mp3");
    if (!playingMusic)
        temazo.play()
    playingMusic = true;
}
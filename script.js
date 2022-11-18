function handlekeyPress (ev) {
    const player = document.querySelector ("#player")
    if (ev.code ==="Space") {
    player. setAttribute("cx", 100 * Math.random())
    player. setAttribute("cy", 100 * Math.random())
    } else if (ev.key === "r"){
        player.setAttribute("fill", "red")
    }else if (ev.key === "g"){
        player.setAttribute("fill", "green")
    }
}

function gameLoop(){
const player = document.querySelector("#player")
let posY = parseInt (player.getAttribute ("cy"))
player.setAttribute("cy", posY + 1)


    //Loop forever
    window.requestAnimationFrame(gameLoop);
}

gameLoop()

window.onkeydown = handlekeyPress


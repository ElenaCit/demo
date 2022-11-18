let dy = 0



function handlekeyPress (ev) {
    const player = document.querySelector ("#player")
    if (ev.code ==="Space") {
        dy = -1
    } else if (ev.key === "r"){
        player.setAttribute("fill", "red")
    }else if (ev.key === "g"){
        player.setAttribute("fill", "green")
    }
}

function gameLoop(){
    // Update game status
    dy = Math.min(dy + 0.05, 1)


    const player = document.querySelector("#player")
let posY = parseFloat (player.getAttribute ("cy"))
player.setAttribute("cy", posY + dy);


    //Loop forever
    window.requestAnimationFrame(gameLoop);
}

gameLoop()

window.onkeydown = handlekeyPress


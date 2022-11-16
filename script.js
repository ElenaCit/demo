function handlekeyPress (ev) {
    const player = document.querySelector ("#player")
    if (ev.code ==="Space") {
    player. setAttribute("cx", 100 * Math.random())
    player. setAttribute("cy", 100 * Math.random())
    } else if (ev.key === "r"){
        player.setAttribute("fill", "red")
    }
}


window.onkeydown = handlekeyPress


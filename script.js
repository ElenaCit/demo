function handlekeyPress (ev) {
    const player = document.querySelector ("#player")
    if (ev.code ==="Space") {
    player. setAttribute("cx", 100 * Math.random());
    player. setAttribute("cy", 100 * Math.random());
    spawnItem()
    } else if (ev.key === "r"){
        player.setAttribute("fill", "red")
    }else if (ev.key === "g"){
        player.setAttribute("fill", "green")
    }
}

function spawnItem() {
    const NS = "http://www.w3.org/2000/svg"
    const item = document.createElementNS(NS, "circle")
    item.setAttribute("cx", 100 * Math.random())
    item.setAttribute("cy", 20 * Math.random() + 80)
    item.setAttribute("r", 2)
    item.setAttribute("fill", "black")
    document.querySelector("svg").appendChild(item)
}


window.onkeydown = handlekeyPress


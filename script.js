let dy = 0
let dx = 0



function handlekeyPress (ev) {
    const player = document.querySelector ("#player");
    if (ev.code ==="Space") {
        dy = -1
    } else if (ev.key === "r"){
        player.setAttribute("fill", "red");
    }else if (ev.key === "g"){
        player.setAttribute("fill", "green");
    } else if (ev.code === "ArrowRight") {
        dx = 1
    } else if (ev.code === "ArrowLeft") {
        dx = -1
    }
}

function handlekeyRelease (ev) {
    if (ev.code === "ArrowRight"){
        dx = 0
    } else if (ev.code === "ArrowLeft"){
        dx =  0
    }

}

function gameLoop(){ 
    // Update game status 
    dy = Math.min(dy + 0.05, 1)



const player = document.querySelector("#player");
let posY = parseFloat (player.getAttribute ("cy"));
let r = parseInt(player.getAttribute("r"))
if (posY > 100 - r - dy) {
    dy = 0 
}

player.setAttribute("cy", posY + dy);

let posX = parseFloat (player.getAttribute ("cx"));
player.setAttribute("cx", posX + dx);


    //Loop forever
    window.requestAnimationFrame(gameLoop);
}

gameLoop()

window.onkeydown = handlekeyPress
window.onkeyup = handlekeyRelease


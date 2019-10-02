function cha(){
    let menu = document.getElementById("hb");
    if( menu.classList.contains("change") )
        menu.classList.remove("change");
    else
        menu.classList.add("change");
}

function btn(){
    document.getElementById("hb").onclick = cha;
}

window.addEventListener("load", btn, false);
const envoltura = document.querySelector(".envoltura");
const carta = document.querySelector(".cartaFull");
const sobre = document.querySelector(".sobre");

document.addEventListener("click",(e)=>{
    if (e.target.matches(".sobre") ||
        e.target.matches(".izquierda") ||
        e.target.matches(".derecha") || 
        e.target.matches(".corazon")) {
            
        envoltura.classList.toggle("abierto");
        sobre.classList.add("desabilitar"); 

        if (!carta.classList.contains("abierta")) {
            setTimeout(() => {
                carta.classList.add("mostarCarta");
                setTimeout(()=>{
                    carta.classList.remove("mostarCarta");
                    carta.classList.add("abierta");
                },500);
            },1000);
        }
    }

    if (!carta.contains(e.target) && !envoltura.contains(e.target)) {
        envoltura.classList.remove("abierto");
        if (carta.classList.contains("abierta")) {
            carta.classList.add("cerrar");
            setTimeout(() => {
                carta.classList.remove("cerrar");
                carta.classList.remove("abierta");
                sobre.classList.remove("desabilitar"); 
            }, 600);
        }
    }
});

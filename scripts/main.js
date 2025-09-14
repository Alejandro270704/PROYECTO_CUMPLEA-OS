const envoltura=document.querySelector(".envoltura");
const carta =document.querySelector(".cartaFull");
document.addEventListener("click",(e)=>{
    if (e.target.matches(".sobre")||
    e.target.matches(".izquierda")||e.target.matches(".derecha")|| 
    e.target.matches(".corazon")){
            envoltura.classList.toggle("abierto");

    }
    if (!carta.classList.contains("mostarCarta")) {
        setTimeout(() => {
            carta.classList.add("mostarCarta");
        }, 1000);
    }
});
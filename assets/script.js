
const dataEvento = new Date("2026-12-20 18:00:00").getTime();


const contador = setInterval(() => {

    const agora = Date.now();

    const diferenca = dataEvento - agora;


    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

 
    document.getElementById("dias").innerText = dias;
    document.getElementById("horas").innerText = horas;
    document.getElementById("minutos").innerText = minutos;
    document.getElementById("segundos").innerText = segundos;


    if (diferenca < 0) {
        clearInterval(contador);
        document.querySelector(".relogio").innerHTML = "Chegou o grande dia! 💍";
    }

}, 1000);
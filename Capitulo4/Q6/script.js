function jogo() {
    let saida = document.querySelector('section#saida')
    let horaIncial,horaFinal,minutoIncial,minutoFinal

    let min_D = null
    let hora_D = null
    
    horaIncial = Number(document.getElementById('horaInicial').value)
    horaFinal = Number(document.getElementById('horaFinal').value)
    minutoIncial = Number(document.getElementById('minutoInical').value)
    minutoFinal = Number(document.getElementById('horaFinal').value)

    if(minutoIncial > minutoFinal){
        minutoFinal = minutoFinal + 60
        horaFinal = horaFinal - 1
    }
    else if(horaIncial > horaFinal){
        horaFinal = horaFinal + 24
        min_D = minutoFinal - minutoIncial
        hora_D = horaFinal - horaIncial    
    }
    saida.innerHTML += `
            <p>O jogo durou , ${hora_D}, hora(s) e ${min_D}, minutos(s)</p>
        `
}
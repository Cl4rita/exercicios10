let resposta = document.getElementById('resposta')


function calcula(){
    // Resolvendo o problema com a equação
    let real = (589 + 1973 + 1470 + 2420 + 744) / 5
    console.log("Resposta:",real)

    // Saída dos dados para o usuário

    resposta.innerHTML = "Resultado = " +real.toFixed(2) + " g"
    resposta.style.fontSize = "24px"
    resposta.style.color = "white"
    resposta.style.fontFamily = "serif"
    // Resolvendo o problema com a equação
    let real2 = (0.589 + 1.973 + 1.47 + 2.42 + 0.744) / 5
    console.log("Resposta:",real2)

    // Saída dos dados para o usuário

    resposta2.innerHTML = "Resultado = " +real2.toFixed(2) + " kg"
    resposta2.style.fontSize = "24px"
    resposta2.style.color = "white"
    resposta2.style.fontFamily = "serif"
}
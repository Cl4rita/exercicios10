let resposta = document.getElementById('resposta')


function calcula(){
    // Resolvendo o problema com a equação
    let real = (7.5 + 6.3 + 8.1) / 3
    console.log("Resposta:",real)

    // Saída dos dados para o usuário

    resposta.innerHTML = "Resultado = " +real.toFixed(2)
    resposta.style.fontSize = "24px"
    resposta.style.color = "white"
    resposta.style.fontFamily = "serif"
}
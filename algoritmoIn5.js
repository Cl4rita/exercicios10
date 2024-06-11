let resposta = document.getElementById('resposta')


function calcula(){
    // Resolvendo o problema com a equação
    let real = ( 5 + 3 ) * 5 / 2 + 8 * 3
    console.log("Resposta:",real)

    // Saída dos dados para o usuário

    resposta.innerHTML = "Resultado = " +real.toFixed(0)
    resposta.style.fontSize = "24px"
    resposta.style.color = "white"
    resposta.style.fontFamily = "serif"
}
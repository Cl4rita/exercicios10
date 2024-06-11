let resposta = document.getElementById('resposta')


function calcula(){
    // Resolvendo o problema com a equação
    let real = ( 7 - 2 ) + 9 / ( 2 + 1 ) * 8
    console.log("Resposta:",real)

    // Saída dos dados para o usuário

    resposta.innerHTML = "Resultado = " +real
    resposta.style.fontSize = "24px"
    resposta.style.color = "white"
    resposta.style.fontFamily = "serif"
}
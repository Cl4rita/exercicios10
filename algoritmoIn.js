let resposta = document.getElementById('resposta')


function calcula(){
    // Resolvendo o problema com a equação
    let inteiro = 5 + 3 * 4 - 8 / 2
    console.log("Resposta:",inteiro)

    // Saída dos dados para o usuário

    resposta.innerHTML = "Resultado = " +inteiro
    resposta.style.fontSize = "24px"
    resposta.style.color = "white"
    resposta.style.fontFamily = "serif"
}
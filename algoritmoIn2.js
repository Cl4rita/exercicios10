let resposta = document.getElementById('resposta')


function calcula(){
    // Resolvendo o problema com a equação
    let inteiro = 9 - 4 * 9 / 3 + 6 / 2
    console.log("Resposta:",inteiro)

    // Saída dos dados para o usuário

    resposta.innerHTML = "Resultado = " +inteiro
    resposta.style.fontSize = "24px"
    resposta.style.color = "white"
    resposta.style.fontFamily = "serif"
}
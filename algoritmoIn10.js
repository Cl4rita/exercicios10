let resposta = document.getElementById('resposta')


function calcula(){
    // Resolvendo o problema com a equação
    let P = Number(document.getElementById('P').value)
    console.log("Resposta:",P)
    let M = Number(document.getElementById('M').value)
    console.log("Resposta:",M)
    let G = Number(document.getElementById('G').value)
    console.log("Resposta:",G)

    let conta = (P * 19) + (M * 22) + (G * 17)

    // Saída dos dados para o usuário

    resposta.innerHTML = "Resultado = " +conta+ " reais"
    resposta.style.fontSize = "24px"
    resposta.style.color = "white"
    resposta.style.fontFamily = "serif"
}
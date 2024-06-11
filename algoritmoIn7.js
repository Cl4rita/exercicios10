let resposta = document.getElementById('resposta')
let resposta2 = document.getElementById('resposta2')


function calcula(){
    // Resolvendo o problema com a equação
    let real = ((27/3.5) + (39/6.3)) / 2
    console.log("Resposta:",real)

    // Saída dos dados para o usuário

    resposta.innerHTML = "Resultado = " +real.toFixed(2) + " km"
    resposta.style.fontSize = "24px"
    resposta.style.color = "white"
    resposta.style.fontFamily = "serif"
}
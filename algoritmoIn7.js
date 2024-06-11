let resposta = document.getElementById('resposta')
let resposta2 = document.getElementById('resposta2')


function calcula(){
    // Resolvendo o problema com a equação
    let real = 27/3.5
    console.log("Resposta:",real)

    // Saída dos dados para o usuário

    resposta.innerHTML = "Resultado = " +real.toFixed(2) + " km"
    resposta.style.fontSize = "24px"
    resposta.style.color = "white"
    resposta.style.fontFamily = "serif"
    
    // Resolvendo o problema com a equação
    let real2 = 39/6.3
    console.log("Resposta:",real2)
    
    // Saída dos dados para o usuário
    
    resposta2.innerHTML = "Resultado = " +real2.toFixed(2) + " km"
    resposta2.style.fontSize = "24px"
    resposta2.style.color = "white"
    resposta2.style.fontFamily = "serif"
}
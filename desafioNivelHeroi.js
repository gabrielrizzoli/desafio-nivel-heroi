let vitorias = 147
let derrotas = 33
let saldoVitorias = (vitorias - derrotas)
let nivelRankeada = ""

if (saldoVitorias <= 10){
  nivelRankeada = "ferro"
}
else if (saldoVitorias <= 20){
  nivelRankeada = "bronze"
}
else if (saldoVitorias <= 50){
  nivelRankeada = "prata"
}
else if (saldoVitorias <= 80){
  nivelRankeada = "ouro"
}
else if (saldoVitorias <= 90){
  nivelRankeada = "diamante"
}
else if (saldoVitorias <= 100){
  nivelRankeada = "lendário"
}
else (saldoVitorias >= 101)
  nivelRankeada = "imortal"

  console.log ("O héroi tem de saldo " + saldoVitorias + " e está no nível de " + nivelRankeada)

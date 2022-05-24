let dataDoEvento = new Date("2022, 5, 30")
let dataDeHoje = new Date("2022, 5, 24")

if(dataDoEvento > dataDeHoje) 
{
console.log("Permitir Evento!");
}
else
{ console.log("Data Inválida")
}

let idadeDoParticipante = 20

if(idadeDoParticipante >= 18)
{
    console.log("Permitir Cadastro!")
}
else
{
    console.log("Cadastro Não Permitido")
}

let listaDeParticipantesEvento01 = ["Alexandre", "Augusto", "João", "Paula", "Joana", "Marcia", "Celia"]
let palestranteEvento01 = "Carlos"

let listaDeParticipantesEvento02 = ["Francisco", "José", "Renata", "Antonio"]
let palestranteEvento02 = "Pedro"

if(listaDeParticipantesEvento01.length <= 5)
{
    console.log("Permitir o Cadastro!")
}
else
{
    console.log("Cadastro Não Permitido. Limite Excedido!")
}

if(listaDeParticipantesEvento02.length <= 5)
{
    console.log("Permitir o Cadastro!")
}
else
{
    console.log("Cadastro Não Permitido. Limite Excedido!")
}

switch (listaDeParticipantesEvento01.length) {
    case 0:
        console.log("Evento Cancelado por Falta de Participantes")
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log(`Permitir cadastro para Evento com Palestrante ${palestranteEvento01}`)
        for(let nome of listaDeParticipantesEvento01){
            console.log(nome)}
        break  
    default:
        console.log("Cadastro Não Permitido. Limite Excedido!")
        break;
}

switch (listaDeParticipantesEvento02.length) {
    case 0:
        console.log("Evento Cancelado por Falta de Participantes")
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:    
        console.log(`Permitir cadastro para Evento com Palestrante ${palestranteEvento02}.`)
        for(let nome of listaDeParticipantesEvento02){
            console.log(nome)}
        break  
    default:
        console.log("Cadastro Não Permitido. Limite Excedido!")
        break;
}

function adicionar(){
const personagens = ['Steven','Ametista','Pérola','Peridote']
const usuario = documen.getElementyById('personagens').value


// adiciona um novo elemento no final 
personagens.push('Garnet')

// adiciona um novo elemento no inicio
personagens.unshift(novo personagens)

//exclui o ultimo
personagens.pop

//remove o primeiro elemento 
personagens.shift()

//atualizar um valor de array
personagens[2]= 'Garnet'

console.log('nome da personagem é: ${personagen[2]}')

console.log(personagens[0])
console.log(personagens[1])

personagens.forEach(function(pega personagem)){
    console.log('O nome do personagem é: {pegaPersonagem}')
}


}

function numero(){
    const  numero = [2,4,6,8]
    const numero1 = document.getElementyById('numero').value

    numero.forEach(function(pegaNumero){
    console.log(`O numero é: ${pegaNumero}`)
})

}

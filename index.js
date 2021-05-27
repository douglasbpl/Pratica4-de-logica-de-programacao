
// 1 - crie uma função que exiba uma mensagem no console

function msg(){
    console.log("Meu aniversário está chegando")

}
msg()

// 2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function nome(name){
    console.log(`Oi me chamo ${name}`)
}
nome("Douglas")

// 3 - crie uma função que receba seu nome, idade, e estilo musical preferido (parâmetros) e exiba no console

function eu(nome,idade,estiloMusicalPreferido ){
console.log(`Meu nome é ${nome}, tenho ${idade} anos de idade e gosto muito de músicas do estilo musical ${estiloMusicalPreferido}`)
}
eu("Douglas",26,"Pop")


// 4 - crie uma função que receba o seu filme favorito, musica favorita (parâmetros) e exiba no console

function euNovamente(filmeFavorito,musicaFavorita){
    console.log(`Adoro o filme "${filmeFavorito}" e a música "${musicaFavorita}"`)
}
euNovamente("As Branquelas" , "A Thousand Miles")

// 5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function triploX(x){
    return x*3
}

console.log(triploX(60))

const livros = require('./listaLivros');
const menorValor = require('./menorValor');

for (let atual = 0; atual < livros.length - 1; atual++) {
    let menor = menorValor(livros, atual);
    
    let livroAtual = livros[atual];
    console.log('Posição atual', atual)
    console.log('Livro atual', livros[atual])
    let livroMenorPreco = livros[menor];
    console.log('Livro menor preço', livros[menor])

    livros[atual] = livroMenorPreco;    
    livros[menor] = livroAtual;  
}

console.log(livros)

/**
     livros.forEach((livro, indice) => {
     let menor = menorValor(livros, indice)

    let livroAtual = livros[indice];
    let livroMenorPreco = livros[menor];

    livros[indice] = livroMenorPreco
    livros[menor] = livroAtual 
    })

    Se examinarmos o laço, vemos que o primeiro parâmetro da função callback, 
    livro, não está sendo utilizado; nesse caso, podemos usar a notação do JavaScript 
    para informar que o primeiro parâmetro não será utilizado no código, através do _:

    livros.forEach((_, indice) => {
    let menor = menorValor(livros, indice)

    let livroAtual = livros[indice];
    let livroMenorPreco = livros[menor];

    livros[indice] = livroMenorPreco
    livros[menor] = livroAtual 
    })

    console.log(livros)
 */

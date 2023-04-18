const livros  = require('./listaLivros');

function menorValor(arrProdutos, posicaoInicial) {
    let maisBarato = posicaoInicial;

    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
            maisBarato = atual;
        }
    }
    return maisBarato;
}

module.exports = menorValor;

/**
 * Criamos um algoritmo para encontrar o menor valor em uma lista (array). 
 * Mas a mesma lógica pode ser invertida para funcionar com o maior valor.
 * 
 * Dentro do for, basta invertermos a condição do if, para ao invés de 
 * verificar se o produto atual tem valor menor <, agora verifique se 
 * tem valor maior >
 */
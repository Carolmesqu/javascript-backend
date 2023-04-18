const livros = require('./listaLivros');
const troca = require('./troca');

function insertionSort(lista) {
    for (let atual = 0; atual < lista.length; atual++) {
        let analise = atual;
       // while outro tipo de loop, que significa enquanto, temos que encerrar dentro do bloco o porque senão fica um loop infinito
        while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
            let itemAnalise = lista[analise];           
            let itemAnterior = lista[analise - 1];

            lista[analise] = itemAnterior;    
            lista[analise - 1] = itemAnalise;  

            //quando a condição não for mais verdadeira ele vai parar o loop
            analise--
        }
    }
    console.log(lista);
}

insertionSort(livros);

    

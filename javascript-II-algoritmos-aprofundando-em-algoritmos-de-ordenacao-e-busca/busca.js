const listaLivros = require('./arrayOrdenado');

function busca(array, de, ate, valorBuscado) {
    console.log('de, ate', de, ate);
    const meio = Math.floor((de + ate) / 2);
    const atual = array[meio];

    if (de > ate) {
        return -1;
    }

    if (valorBuscado === atual.preco) {
        return meio;
    }

    if (valorBuscado < atual.preco) {
        return busca(array, de, meio - 1, valorBuscado);
    }

    if (valorBuscado > atual.preco) {
        return busca(array, meio + 1, ate, valorBuscado);
    }
}

console.log(busca(listaLivros, 0, listaLivros.length - 1, 60));

/**
 * Busca binaria, dividi a lista em dois e procura, vai fazendo essa divisão até encontrar o elemento.
 * 
 * Durante a aula, vimos que, se não colocamos a condição de > ate e tentarmos buscar um número inexistente
 *  maior do que qualquer um da lista, o resultado será um erro do tipo RangeError: Maximum call stack size exceeded.
 *
 * inexistente menor do que qualquer um da lista, e outro inexistente no meio, ou seja, entre os valores da lista.
 * Vamos falar um pouco mais sobre este erro em seguida. Mas agora, vamos testar mais dois casos: Um elemento 
 * 
 * Valor menor:
 * Vamos chamar a função passando 1 como valor buscado:
 * 
 * console.log(busca(listaLivros, 0, listaLivros.length - 1, 1));
 *
 * Executando o código, temos o seguinte retorno no terminal:
 * 
 * /<diretório>/aula-4/busca.js:11
 *   if (valorBuscado === atual.preco) {
 *                              ^
 * 
 * TypeError: Cannot read property 'preco' of undefined
 * 
 * Ué, não deveríamos ter recebido um erro do tipo rangeError? O que aconteceu de diferente?
 * 
 * Vamos conferir o que a função busca() está recebendo como parâmetro a cada chamada:
 * 
 * function busca(array, de, ate, valorBuscado) {
 *  console.log('de, ate', de, ate)
 *  //restante do código
 * }
 * 
 * E executar novamente:
 * 
 * de, ate 0 10
 * de, ate 0 4
 * de, ate 0 1
 * de, ate 0 -1
 * 
 * No caso de valores menores, o código do algoritmo chama a função busca() passando sempre o valor do 
 * parâmetro ate diminuindo um número:
 * 
 *  if (valorBuscado < atual.preco) {
 *    return busca(array, de, meio - 1, valorBuscado);
 *  }
 * 
 *  Quando o valor atinge -1, que não é um valor válido de índice de array, o resultado de atual.preco retornará undefined.
 * 
 * Valor inexistente no meio do array
 * Vamos chamar a função passando 36 como valor buscado. Não é menor do que todos nem maior do que todos, porém não existe 
 * nenhum objeto com esse valor no array:
 * 
 * console.log(busca(listaLivros, 0, listaLivros.length - 1, 36));
 * 
 * Executando o código, temos o seguinte retorno no terminal:
 * 
 * RangeError: Maximum call stack size exceeded
 * 
 * Dessa vez, voltamos a receber o rangeError. Observando o `console.log(‘de, ate’, de, ate), os valores finais retornados são:
 * 
 * de, ate 8 7
 * de, ate 8 7
 * de, ate 8 7
 * de, ate 8 7
 * 
 * Até atingir call stack size exceeded, da mesma forma que ocorreu quando passamos o valor de 60, maior do que o maior elemento do array.
 */
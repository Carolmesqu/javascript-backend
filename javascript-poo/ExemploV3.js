/**
 * Vamos fazer mais um exercício com setters.
 * 
 * Podemos supor que, na classe User, seja necessário separar as propriedades de nome e sobrenome 
 * dos usuários, pois a base de dados guarda cada uma dessas informações em campos separados. 
 * Porém, em todas as comunicações que levam o nome do usuário, nome e sobrenome devem aparecer juntos.
 * 
 * Uma forma de resolver isso seria através do setter de nome. Vamos alterar um pouco a classe User 
 * para receber, no construtor, #nome e #sobrenome:
 */

export default class User {
    #nome
    #sobrenome
    // restante das propriedades

//E alteramos também no construtor:

constructor (nome, sobrenome, email, nascimento, role, ativo = true) {
    this.#nome = nome
    this.#sobrenome = sobrenome
    // restante das propriedades
}

/**
 * A questão agora é que nome e sobrenome devem ser unidos no getter (para serem “mandados” para fora da classe 
 * como um único dado) e separados no setter, pois o método sempre receberá um nome completo e #nome e #sobrenome 
 * são propriedades diferentes que estão salvas no banco em campos separados.
 * 
 * Começando pelo setter:
 */

set nome(novoNome) {
    if (novoNome === '') {
      throw new Error('formato não válido')
    }
    let [nome, ...sobrenome] = novoNome.split(" ")
    sobrenome = sobrenome.join(' ')
    this.#nome = nome
    this.#sobrenome = sobrenome
  }

  /**
   * Aqui pegamos uma string única e separamos em nome e sobrenome, para que cada propriedade possa ser atualizada. 
   * Fizemos isso utilizando os métodos do JavaScript split() e join para manipular strings e arrays.
   * 
   * Atualizamos agora os getters:
   */

  get nome() {
    return this.#nome
  }
 
  get sobrenome() {
    return this.#sobrenome
  }
  
  get nome() {
    return `${this.#nome} ${this.#sobrenome}`
  }
}

//Testando no console:
const novoUser = new User('Juliana', 'Souza', 'j@j.com', '2021-01-01')
console.log(novoUser.nome) //'Juliana'
novoUser.nome = 'Juliana Silva Souza'
console.log(novoUser.nome) //'Juliana'
console.log(novoUser.sobrenome) //'Silva Souza'

//Por fim, podemos juntar as duas propriedades para retornar o nome completo:


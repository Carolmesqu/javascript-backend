/**
 * O new serve para criar instancias atraves de uma função construtura
 * 
 * Sempre que vamos criar classes no JS a função inicia com letra maiuscula 


function User(nome, email) {
    this.nome = nome
    this.email = email

    this.exibirInfos = function() {
        return `${this.nome}, ${this.email}`
    }
}

 Essa é a forma de criar objetos com JS usando um construtor
    const novoUser = new User('Juliana', 'j@j.com')
    console.log(novoUser.exibirInfos())

function Admin(role) {
    User.call(this, 'Juliana', 'j@j.com')
    this.role = role || 'estudante'
}


 * Nos passamos pra dentro da propriedade Admin as propriedades de User, criamos um objeto 
 * e passamos como parametro a propriedade prototype de User 

Admin.prototype = Object.create(User.prototype)
const novoUser = new Admin('admin')
console.log(novoUser.exibirInfos())
console.log(novoUser.role)

 */

//Objeto literal
const user = {
    init: function(nome, email) {
        this.nome = nome
        this.email = email
    },
    exibirInfos: function(nome) {
        return this.nome;
    }
}

const novoUser = Object.create(user)
novoUser.init('Juliana', 'j@j.com')
console.log(novoUser.exibirInfos())
// console.log(user.isPrototypeOf(novoUser))


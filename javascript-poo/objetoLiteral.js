const user = {
    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2021/01/01",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}
const admin = {
    nome: "Mariana",
    email: "m@m.com",
    nascimento: "2021/01/08",
    role: "admin",
    ativo: true,
   criarCurso() {
    console.log('curso criado')
   }
}

//Cadeia de protótipo, ela pode se estender e os objetos vão herdando informações de outros objetos.
Object.setPrototypeOf(admin, user)

admin.criarCurso()
admin.exibirInfos()

//user.exibirInfos()
// const exibir = user.exibirInfos
// exibir()

// const exibir = function() {
//     console.log(this.nome)
// }

// //o metodo bind é usado para prender a execução de uma função ou contexto especifico 
// const exibirNome = exibir.bind(user)

// exibirNome()
// exibir()
import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

// const novoUser = new User('Mariana', 'm@m.com', '2021-01-01')
// console.log(novoUser.exibirInfos())

// const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2021-01-01')
// console.log(novoAdmin.nome)
// novoAdmin.nome = ''
// console.log(novoAdmin.nome)

const novoDocente = new Docente('Guilherme', 'g@g.com', '01-01-2021')
console.log(novoDocente.exibirInfos())

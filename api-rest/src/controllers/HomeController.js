import Aluno from '../models/Aluno'

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Deeved',
      sobrenome: 'Hiuston',
      email: 'deeved@gmail.com',
      idade: 31,
      peso: 74.7,
      altura: 1.71,
    })
    res.json(novoAluno)
  }
}

export default new HomeController()

import User from '../models/User'

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body)
      res.json(novoUser)
    } catch (e) {
      console.log(e)
      res.status(400).json({
        errors: e.errors.map((err) => err.message),
      })
    }
  }

  // index
  async index(req, res) {
    try {
      const users = await User.findAll()
      return res.json(users)
    } catch (error) {
      return res.json(null)
    }
  }

  // show
  async show(req, res) {
    try {
      const { id } = req.params
      const user = await User.findByPk(id)
      return res.json(user)
    } catch (error) {
      return res.json(null)
    }
  }

  // upadate
  async update(req, res) {
    try {
      const { id } = req.params

      if (!id) {
        return res.status(400).json({
          errors: ['ID não enviado.'],
        })
      }
      const user = await User.findByPk(id)

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        })
      }

      const userUpdated = await user.update(req.body)
      return res.json(userUpdated)
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      })
    }
  }

  // delete
  async delete(req, res) {
    try {
      const { id } = req.params

      if (!id) {
        return res.status(400).json({
          errors: ['ID não enviado.'],
        })
      }
      const user = await User.findByPk(id)

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        })
      }

      await user.destroy()
      return res.json(user)
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      })
    }
  }
}

export default new UserController()

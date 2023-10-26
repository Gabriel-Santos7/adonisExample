import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async create({ request, response }: HttpContextContract) {
    const { username, name } = request.only(['username', 'name'])
    const user = await User.create({ username, name })

    return user
  }

  public async index() {
    const users = await User.all()

    return users
  }
}

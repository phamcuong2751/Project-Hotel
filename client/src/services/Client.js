import BaseRoute from './BaseRoute'
import { getToken } from './LocalStorage'

class Client extends BaseRoute {
  async login (username, password) {
    console.log('adsadsadsa')
    console.log(username, password)
    return await this.post('users/login', {
      username,
      password,
    })
  }

  async register (email, password, username, type) {
    return await this.post('register', {
      email,
      password,
      username,
      type,
      avatar: '',
      description: '',
    })
  }

  async getUser (user_id) {
    return await this.get('user-info?user_id=' + user_id)
  }

  async changeInfo (user_id, name, address, description, avatar) {
    return await this.put('user-info/edit', {
      user_id,
      description,
      avatar,
      name,
      address,
    }, {
      headers: {
        'Authorization': `Token ${getToken()}`,
      },
    })
  }

  async getStoreFollow (user_id) {
    return await this.get('get-user-follow-list', {
      user_id,
    })
  }
}

export default Client

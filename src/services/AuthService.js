import axios from './RequestObject';

const USER = 'api/user';
const AUTH = 'api/auth'

class AuthService {
  /**
   * Gets necessary information for application receipt
   */
  static registerUser(user) {
    return axios.post(USER, user)
  }
  static loginUser(user) {
    return axios.get(AUTH, {
      params: user
    }).then(response => {
      return {
        ...response.data,
        name: user.username,
        auth: response.headers.authorization
      }
    })
    // .catch(err => err);
  }

}

export default AuthService;
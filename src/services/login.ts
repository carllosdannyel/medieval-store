import { IUserLogin } from '../interfaces/login';
import { IResolves } from '../interfaces/resolves';
import LoginModel from '../models/login';
import { generateToken } from '../utils/jwt';

export default class LoginService {
  constructor(private loginModel = new LoginModel()) {}

  public async login(user: IUserLogin): Promise<IResolves> {
    const userExist = await this.loginModel.login(user);

    if (!userExist) {
      return { type: 'UNAUTHORIZED', message: 'Username or password invalid' };
    }
    const { password, ...userWithoutPassword } = userExist;

    const token = generateToken(userWithoutPassword);

    return { type: null, message: { token } };
  }
}

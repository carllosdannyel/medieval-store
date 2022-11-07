import { IUserLogin } from '../interfaces/login';
import { IResolves } from '../interfaces/resolves';
import { IUser } from '../interfaces/user';
import LoginModel from '../models/login';
import { generateToken } from '../utils/jwt';

export default class LoginService {
  constructor(private loginModel = new LoginModel()) {}

  public async findByLogin(user: IUserLogin): Promise<IResolves> {
    const userExist = await this.loginModel.findByLogin(user);

    if (!userExist || userExist.password !== user.password) {
      return { type: 'UNAUTHORIZED', message: 'Username or password invalid' };
    }
    const { password, ...userWithoutPassword } = userExist as IUser;

    const token = generateToken(userWithoutPassword);

    return { type: null, message: { token } };
  }
}

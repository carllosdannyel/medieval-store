import { IResolves } from '../interfaces/resolves';
import { IUser } from '../interfaces/user';
import UserModel from '../models/user';
import { generateToken } from '../utils/jwt';

export default class UserService {
  constructor(private userModel = new UserModel()) {}

  public async create(user: IUser): Promise<IResolves> {
    const newUser = await this.userModel.create(user);
    const { password, ...userWithoutPassword } = newUser as IUser;
    const token = generateToken(userWithoutPassword);
    return { type: null, message: { token } };
  }
}

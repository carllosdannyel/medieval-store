import { IResolves } from '../interfaces/resolves';
import { IUser } from '../interfaces/user';
import UserModel from '../models/user';
import { generateToken } from '../utils/jwt';

export default class UserService {
  constructor(private userModel = new UserModel()) {}

  public async create(user: IUser): Promise<IResolves> {
    const { password, ...userWithoutPassword } = await this.userModel.create(user);
    
    return { type: null, message: { token: generateToken(userWithoutPassword) } };
  }
}

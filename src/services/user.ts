import { IToken } from '../interfaces/token';
import { IUser } from '../interfaces/user';
import UserModel from '../models/user';
import { generateToken } from '../utils/jwt';

export default class UserService {
  constructor(private userModel = new UserModel()) {}

  public async create(user: IUser): Promise<IToken> {
    const newUser = await this.userModel.create(user);
    const payload = {
      id: newUser.id,
      username: newUser.username,
      classe: newUser.classe,
      level: newUser.level,
    };
    const token = generateToken(payload);
    return { token };
  }
}

import { RowDataPacket } from 'mysql2/promise';
import { IUserLogin } from '../interfaces/login';
import { IUser } from '../interfaces/user';
import mysql from './connection';

export default class LoginModel {
  constructor(private connection = mysql) { }

  public async findByLogin(user: IUserLogin): Promise<IUser> {
    const { username, password } = user;
    const [[result]] = await this.connection.execute<(
    IUser & RowDataPacket)[]>(
      'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?',
      [username, password],
      );

    return result;
  }
}
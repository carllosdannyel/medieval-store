import { ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces/user';
import mysql from './connection';

export default class UserModel {
  constructor(private connection = mysql) { }

  public async create(user: IUser): Promise<IUser> {
    const { username, classe, level, password } = user;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    return { id: insertId, ...user };
  }
}
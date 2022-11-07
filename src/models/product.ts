import { ResultSetHeader } from 'mysql2';
import { IProduct, IProductID } from '../interfaces/product';
import mysql from './connection';

export default class ProductModel {
  constructor(private connection = mysql) {}

  public async create(product: IProduct): Promise<IProductID> {
    const { name, amount } = product;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    return { id: insertId, ...product };
  }
}

import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IProduct } from '../interfaces/product';
import mysql from './connection';

export default class ProductModel {
  constructor(private connection = mysql) {}

  public async create(product: IProduct): Promise<IProduct> {
    const { name, amount } = product;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    return { id: insertId, ...product };
  }

  public async findAll(): Promise<IProduct[]> {
    const [result] = await this.connection.execute<
    IProduct[] & RowDataPacket[]
    >('SELECT * FROM Trybesmith.Products');
    return result;
  }
}

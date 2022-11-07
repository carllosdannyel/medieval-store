import { RowDataPacket } from 'mysql2/promise';
import { IOrder } from '../interfaces/order';
import mysql from './connection';

export default class OrderModel {
  constructor(private connection = mysql) { }

  public async findAll(): Promise<IOrder[]> {
    const [result] = await this.connection.execute<IOrder[] & RowDataPacket[]>(
      `SELECT orders.id, orders.userId, JSON_ARRAYAGG(products.id) AS productsIds
      FROM Trybesmith.Orders as orders
      INNER JOIN Trybesmith.Products as products
      ON orders.id = products.orderId
      GROUP BY orders.id, orders.userId`,
    );
    return result;
  }
}
import { IOrder } from '../interfaces/order';
import OrderModel from '../models/order';

export default class OrderService {
  constructor(private orderModel = new OrderModel()) {}

  public async findAll(): Promise<IOrder[]> {
    const allOrders = await this.orderModel.findAll();
    return allOrders;
  }
}
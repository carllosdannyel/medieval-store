import { IResolves } from '../interfaces/resolves';
import OrderModel from '../models/order';

export default class OrderService {
  constructor(private orderModel = new OrderModel()) {}

  public async findAll(): Promise<IResolves> {
    const allOrders = await this.orderModel.findAll();
    return { type: null, message: allOrders };
  }
}
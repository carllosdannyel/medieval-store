import { Request, Response } from 'express';
import OrderService from '../services/order';

export default class OrderController {
  constructor(private orderService = new OrderService()) {}

  public async findAll(_req: Request, res: Response): Promise<void> {
    const allOrders = await this.orderService.findAll();
    res.status(200).json(allOrders);
  }
}
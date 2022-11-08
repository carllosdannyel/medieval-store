import { Request, Response } from 'express';
import OrderService from '../services/order';
import Exception from '../utils/exception';
import mapError from '../utils/mapError';

export default class OrderController {
  constructor(private orderService = new OrderService()) {}

  public async findAll(_req: Request, res: Response) {
    const { type, message } = await this.orderService.findAll() as unknown as Exception;
    if (type) return res.status(mapError(type)).json({ message });
    res.status(200).json(message);
  }

  public async create(req: Request, res: Response) {
    const { type, message } = await this.orderService.create(req.body) as unknown as Exception;
    if (type) return res.status(mapError(type)).json({ message });
    res.status(201).json(message);
  }
}
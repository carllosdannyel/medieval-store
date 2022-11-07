import { Request, Response } from 'express';
import ProductService from '../services/product';
import Exception from '../utils/exception';
import mapError from '../utils/mapError';

export default class ProductController {
  constructor(private productService = new ProductService()) {}

  public async create(req: Request, res: Response) {
    const { type, message } = await this.productService.create(req.body) as unknown as Exception;
    if (type) return res.status(mapError(type)).json({ message });
    res.status(201).json(message);
  }

  public async findAll(_req: Request, res: Response) {
    const { type, message } = await this.productService.findAll() as unknown as Exception;
    if (type) return res.status(mapError(type)).json({ message });
    res.status(200).json(message);
  }
}

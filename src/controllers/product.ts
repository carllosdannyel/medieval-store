import { Request, Response } from 'express';
import ProductService from '../services/product';

export default class ProductController {
  constructor(private productService = new ProductService()) {}

  public async create(req: Request, res: Response): Promise<void> {
    const newProduct = await this.productService.create(req.body);
    res.status(201).json(newProduct);
  }

  public async findAll(_req: Request, res: Response): Promise<void> {
    const products = await this.productService.findAll();
    res.status(200).json(products);
  }
}

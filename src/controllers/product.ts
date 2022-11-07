import { Request, Response } from 'express';
import UserService from '../services/product';

export default class ProductController {
  constructor(private userService = new UserService()) {}

  public async create(req: Request, res: Response): Promise<void> {
    const newProduct = await this.userService.create(req.body);
    res.status(201).json(newProduct);
  }
}

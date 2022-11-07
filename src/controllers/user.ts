import { Request, Response } from 'express';
import UserService from '../services/user';

export default class UserController {
  constructor(private userService = new UserService()) {}

  public async create(req: Request, res: Response): Promise<void> {
    const token = await this.userService.create(req.body);
    res.status(201).json(token);
  }
}
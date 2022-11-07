import { Request, Response } from 'express';
import UserService from '../services/user';
import Exception from '../utils/exception';
import mapError from '../utils/mapError';

export default class UserController {
  constructor(private userService = new UserService()) {}

  public async create(req: Request, res: Response) {
    const { type, message } = await this.userService.create(req.body) as unknown as Exception;
    if (type) return res.status(mapError(type)).json({ message });
    res.status(201).json(message);
  }
}
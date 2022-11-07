import { Request, Response } from 'express';
import LoginService from '../services/login';
import Exception from '../utils/exception';
import mapError from '../utils/mapError';

export default class LoginController {
  constructor(private loginService = new LoginService()) {}

  public async findByLogin(req: Request, res: Response) {
    const { type, message } = await this.loginService.findByLogin(req.body) as unknown as Exception;
    if (type) return res.status(mapError(type)).json({ message });
    res.status(200).json(message);
  }
}

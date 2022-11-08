import { IResolves } from '../interfaces/resolves';
import { IUser } from '../interfaces/user';
import OrderModel from '../models/order';
import ProductModel from '../models/product';

export default class OrderService {
  private orderModel = new OrderModel();

  private productModel = new ProductModel();

  public async findAll(): Promise<IResolves> {
    const allOrders = await this.orderModel.findAll();
    return { type: null, message: allOrders };
  }

  public async create({ productsIds, user }: { productsIds: number[]; user: IUser }) {
    const orderId = await this.orderModel.createOrder(user);
    
    await Promise.all(productsIds.map(
      (productId) => this.productModel.insertOrderId(productId, orderId),
    ));
    
    return { type: null, message: { userId: user.id, productsIds } };
  }
}
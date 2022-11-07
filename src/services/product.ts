import { IProduct } from '../interfaces/product';
import { IResolves } from '../interfaces/resolves';
import ProductModel from '../models/product';

export default class ProductService {
  constructor(private productModel = new ProductModel()) {}

  public async create(product: IProduct): Promise<IResolves> {
    const newProduct = await this.productModel.create(product);
    return { type: null, message: newProduct };
  }

  public async findAll(): Promise<IResolves> {
    const products = await this.productModel.findAll();
    return { type: null, message: products };
  }
}

import { IProduct, IProductID } from '../interfaces/product';
import ProductModel from '../models/product';

export default class ProductService {
  constructor(private productModel = new ProductModel()) {}

  public async create(product: IProduct): Promise<IProductID> {
    const newProduct = await this.productModel.create(product);
    return newProduct;
  }
}

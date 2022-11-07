import { IProduct } from '../interfaces/product';
import ProductModel from '../models/product';

export default class ProductService {
  constructor(private productModel = new ProductModel()) {}

  public async create(product: IProduct): Promise<IProduct> {
    const newProduct = await this.productModel.create(product);
    return newProduct;
  }

  public async findAll(): Promise<IProduct[]> {
    const products = await this.productModel.findAll();
    return products;
  }
}

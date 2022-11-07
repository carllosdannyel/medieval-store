export interface IProduct {
  name: string;
  amount: string;
}

export interface IProductID extends IProduct {
  id: number;
}

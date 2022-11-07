export interface IProduct {
  name: string;
  amount: string;
}

export interface IProductID extends IProduct {
  id: number;
}

export interface IProductALL extends IProductID {
  orderId: number | null;
}

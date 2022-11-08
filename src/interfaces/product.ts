export interface IProduct {
  id?: number;
  name: string;
  amount: string;
  orderId?: number | null;
}

export interface IProductsIds {
  map(arg0: (productId: any) => any): any;
  productsIds: number[]
}
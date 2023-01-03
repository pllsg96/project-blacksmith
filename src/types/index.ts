export type TProduct = {
  id?: number,
  name: string,
  amount: string,
  orderId?: number,
};

export type TUser = {
  id?: number,
  username: string,
  vocation: string,
  level: number,
  password?:string,
};

export type TOrder = {
  id?: number,
  userId: number,
  productsIds: number[],
};
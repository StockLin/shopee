export interface IProduct {
  id: number | string,
  imageUrls: string[],
  description: string,
  price: number,
  sales?: number | null, // 已售出
  discount: number, //折扣
  rating: number
}
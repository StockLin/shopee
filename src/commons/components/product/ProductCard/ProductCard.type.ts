export interface IProduct {
  imageUrls?: string[],
  description: string,
  price: number,
  sales?: number | null // 
  discount: number //折扣
  rating: number
}
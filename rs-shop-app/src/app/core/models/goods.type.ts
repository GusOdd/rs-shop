export interface IGoods {
  mainCategoryName: string;
  mainCategoryID: string;
  subCategoryName: string;
  subCategoryID: string;
  id: string;
  name: string;
  imageUrls: string[];
  rating: number;
  availableAmount: number;
  price: number;
  description: string;
  isInCart: boolean;
  isFavorite: boolean;
}

import { ICatalogState } from '../models/catalog-state.type';

export const initialCatalogState: ICatalogState = {
  categories: [
    {
      id: '0',
      name: 'NoMainCategoryName',
      subCategories: [
        {
          id: '0',
          name: 'NoSubCategoryName',
        },
      ],
    },
  ],
  goods: [
    {
      mainCategoryName: 'NoMainCategoryName',
      mainCategoryID: '0',
      subCategoryName: 'NoSubCategoryName',
      subCategoryID: '0',
      id: '0',
      name: 'NoName',
      imageUrls: [''],
      rating: 0,
      availableAmount: 0,
      price: 0,
      description: 'NoDescription',
      isInCart: false,
      isFavorite: false,
    },
  ],
};

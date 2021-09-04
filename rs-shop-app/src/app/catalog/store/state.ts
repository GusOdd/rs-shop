import { ICatalogState } from '../models/catalog-state.type';

export const initialCatalogState: ICatalogState = {
  categories: [
    {
      id: '0',
      name: 'NoName',
      subCategories: [{ id: '0', name: 'NoName' }],
    },
  ],
};

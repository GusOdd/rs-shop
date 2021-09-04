import { initialCatalogState } from '../catalog/store/state';
import { IAppState } from '../models/app-state.type';

export const initialAppState: IAppState = { catalogState: initialCatalogState };
